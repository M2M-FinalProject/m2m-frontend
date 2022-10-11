import { Text,View, FlatList } from 'react-native'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MatchRequest({ route }) {
    const [requestData, setRequestData] = useState([])

    async function fetchMatchRequest() {
        try {
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios.get(`https://m2m-api.herokuapp.com/matches/${route.params.id}/participants`,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            setRequestData(data)
        } catch (error) {
            console.log(error);
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

    if(requestData.length === 0){
        return(
            <View
            style={{
                marginTop: 40
            }}
        >
            <Text>There is no request for your match</Text>
        </View>
        )
    }

    return (
        <View
            style={{
                marginTop: 40
            }}
        >
            <FlatList
                contentContainerStyle={{ justifyContent: 'center' }}
                data={requestData} renderItem={renderItem} keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}