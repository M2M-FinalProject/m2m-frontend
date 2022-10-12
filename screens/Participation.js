import { View, Text, ActivityIndicator } from 'react-native'
import { ButtonGroup } from '@rneui/themed'
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import MatchCard from '../components/MatchCard'
import { FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Participation({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [userId, setUserId] = useState('')
    const [accToken, setAccToken] = useState('')
    const [loading, setLoading] = useState(false);

    const [matchData, setMatchData] = useState([])

    const showAlert = (message) =>
        Alert.alert(
            "Error",
            message,
            [
                {
                    text: "OK", onPress: () => {}
                }
            ]
        );

    async function fetchMatchApproved() {
        try {
            setLoading(true);
            const access_token = await AsyncStorage.getItem('@access_token')
            const id = await AsyncStorage.getItem('@id')
            const { data } = await axios.get(`https://m2m-api.herokuapp.com/matches?userId=${id}&status=1`,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            setMatchData(data)
        } catch (error) {
            let errorMessage = error.response.data.message ?? 'Error making network request, please check your internet connection'
            showAlert(errorMessage)
        }finally {
            setLoading(false);
        }
    }

    async function fetchMatchPending() {
        try {
            setLoading(true);
            const access_token = await AsyncStorage.getItem('@access_token')
            const id = await AsyncStorage.getItem('@id')
            const { data } = await axios.get(`https://m2m-api.herokuapp.com/matches?userId=${id}&status=0`,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            setMatchData(data)
        } catch (error) {
            let errorMessage = error.response.data.message ?? 'Error making network request, please check your internet connection'
            showAlert(errorMessage)
        }finally {
            setLoading(false)
        }
    }

    useFocusEffect(
        useCallback(() => {
            if (selectedIndex == 0) {
            fetchMatchApproved()
        } else {
            fetchMatchPending()
        }
        }, [selectedIndex])
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
                >{selectedIndex == 0 ? 'There is no approved request' : 'There is no pending request'}</Text>
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
                  <ActivityIndicator size="large" color="#000000" style={{left: 0, top:0, right: 0, bottom: 0, justifyContent:"center", alignItems: "center", position: "absolute", zIndex: 10}}/>
              </View>
            }
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
                    <View style={{
                        width: "100%"
                    }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            marginTop: 40
                        }}>All your joined match here
                        </Text>
                    </View>
                </View>
            </View>

            <ButtonGroup
                buttons={['Approved', 'Pending']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                selectedButtonStyle={{
                    backgroundColor: "#FD841F"
                }}
                containerStyle={{
                    borderRadius: 20,
                    marginBottom: 0,
                    marginTop: -50
                }}
            />

            <FlatList
                style={{ height: 400 }}
                contentContainerStyle={{ justifyContent: 'center' }}
                ListEmptyComponent={emptyList}
                data={matchData} renderItem={renderItem} keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}
