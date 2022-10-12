import { View, Text, ActivityIndicator, Alert } from 'react-native'
import { FlatList } from 'react-native'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import { useEffect, useState, useCallback } from 'react'
import MatchCard from '../components/MatchCard'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyMatch({ navigation }) {
    const [matchData, setMatchData] = useState([])
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

    async function fetchMatchData() {
        try {
            setLoading(true);
            const id = await AsyncStorage.getItem('@id')
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios.get('https://m2m-api.herokuapp.com/matches?userId=' + id,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            setMatchData(data)
        } catch (error) {
            let errorMessage = error.response.data.message ?? 'Error making netwirk request, please check your internet connection'
            showAlert(errorMessage)
        } finally {
            setLoading(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchMatchData()
        }, [])
    )

    const emptyList = () => {
        return (
            <View
                style={{
                    marginTop: 70,
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
                >You have not created any match yet.</Text>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <MatchCard match={item} navigation={navigation} />
        )
    }

    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
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
            <View style={{
                backgroundColor: "#FD841F",
                height: "20%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <View style={{ width: "60%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            marginTop: 40
                        }}>All your created match here</Text>
                    </View>
                </View>
            </View>

            <FlatList
                style={{ height: 400 }}
                contentContainerStyle={{ justifyContent: 'center' }}
                ListEmptyComponent={emptyList}
                data={matchData} renderItem={renderItem} keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}
