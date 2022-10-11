import { View, Text } from 'react-native'
import { FlatList } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyMatch({ navigation }) {
    const [matchData, setMatchData] = useState([])
    const [userId, setUserId] = useState('')
    const [accToken, setaccToken] = useState('')

    async function fetchMatchData() {
        try {
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
            console.log(error);
        }
    }


    useEffect(() => {
        fetchMatchData()
    }, [])

    if (!matchData) {
        return (
            <ActivityIndicator size='large' color='#ADD6FF' />
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
                data={matchData} renderItem={renderItem} keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}
