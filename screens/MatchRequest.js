import { Text, View, FlatList, ActivityIndicator, Alert } from 'react-native'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MatchRequest({ route }) {
    const [requestData, setRequestData] = useState([])
    const [loading, setLoading] = useState(false);

    const showAlert = (message) =>
        Alert.alert(
            "Error",
            message,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {}
                }
            ]
        );

    async function fetchMatchRequest() {
        try {
            setLoading(true);
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios.get(`https://m2m-api.herokuapp.com/matches/${route.params.id}/participants`,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            setRequestData(data)
        } catch (error) {
            let errorMessage = error.response.data.message ?? 'Error making netwirk request, please check your internet connection'
            showAlert(errorMessage)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMatchRequest()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <UserCard request={item} fetchMatchRequest={fetchMatchRequest} />
        )
    }

    const emptyList = () => {
        return (
            <View
                style={{
                    marginTop: 150,
                    alignSelf: 'center',
                    marginHorizontal: 20
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#FD841F",
                    }}
                >There is no join request at the moment.</Text>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                marginTop: 40
            }}
        >
            {loading &&
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        position: "absolute",
                        zIndex: 9,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                    }}>
                    <ActivityIndicator size="large" color="#000000" style={{ left: 0, top: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", position: "absolute", zIndex: 10 }} />
                </View>}
            <FlatList
                contentContainerStyle={{ justifyContent: 'center' }}
                ListEmptyComponent={emptyList}
                data={requestData} renderItem={renderItem} keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}