import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Button, ButtonGroup } from '@rneui/themed'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function UserCard({ request, fetchMatchRequest }) {

    async function acceptRequest() {
        try {
            const access_token = await AsyncStorage.getItem('@access_token')
            console.log(access_token);
            console.log(request.UserId);
            console.log(request.MatchId);
            const { data } = await axios({
                method: 'PATCH',
                url: `https://m2m-api.herokuapp.com/matches/${request.MatchId}/participants/${request.UserId}`,
                data: {
                    status: 1
                },
                headers: {
                    access_token: access_token
                }
            })
            fetchMatchRequest()
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    async function rejectRequest() {
        try {
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios({
                method: 'PATCH',
                url: `https://m2m-api.herokuapp.com/matches/${request.MatchId}/participants/${request.UserId}`,
                data: {
                    status: 2
                },
                headers: {
                    access_token: access_token
                }
            })
            fetchMatchRequest()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: '#FD841F',
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 10,
            }}
        >

            <View
                style={{
                    width: '60%',
                    flexDirection: "column",
                    justifyContent: 'space-evenly'
                }}>
                <Text style={{
                    color: "#fff",
                    fontSize: 20,
                    paddingHorizontal: 20,
                    width: 170
                }}>{request.User.name}</Text>
                <Text style={{
                    color: "#fff",
                    fontSize: 14,
                    paddingHorizontal: 20
                }}>
                    {request.User.bio}
                </Text>
            </View>
            <View
                style={{
                    height: 80,
                    width: '30%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Button
                    size='sm'
                    title='Accept'
                    onPress={() => acceptRequest()}
                />
                <Button
                    size='sm'
                    title='Reject'
                    color={'#E14D2A'}
                    onPress={() => rejectRequest()}

                />

            </View>
        </View>
    )
}
