import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Button, ButtonGroup } from '@rneui/themed'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function UserCard({ request, fetchMatchRequest }) {
    console.log(request);
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
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={styles.primaryText}>{request.User.name}</Text>
                <Text style={styles.secondaryText}>
                    {request.User.bio}
                </Text>
            </View>
            <View style={styles.action}>
                {/* <Button
                    size='sm'
                    title='Accept'
                    onPress={() => acceptRequest()}
                />
                <Button
                    size='sm'
                    title='Reject'
                    color={'#E14D2A'}
                    onPress={() => rejectRequest()}
                /> */}
                <TouchableOpacity onPress={() => acceptRequest()}>  
                    <Entypo name="check" size={50} color="#FD841F" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => rejectRequest()}>  
                    <Entypo name="cross" size={55} color="#E14D2A" />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#F6FFC1',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
        borderColor: '#FD841F',
        borderWidth:2
    },
    userInfo:{
        width: '65%',
        flexDirection: "column",
        justifyContent: 'space-evenly'
    },
    primaryText:{
        color: "#FD841F",
        fontSize: 25,
        paddingHorizontal: 20,
        width: 170,
        fontWeight:'bold'
    },
    secondaryText:{
        color: "#7e7e7e",
        fontSize: 14,
        paddingHorizontal: 20,
        // backgroundColor: '#E14D2A'
    },
    action:{
        height: 80,
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    }
})