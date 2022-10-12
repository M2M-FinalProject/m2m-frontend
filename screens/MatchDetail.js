import { Button, Text } from "@rneui/base"
import { View, Image, ActivityIndicatorm, Alert } from "react-native"
import axios from 'axios'
import { useFocusEffect } from "@react-navigation/native"
import { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';



export default function MatchDetail({ route, navigation }) {
    // const navigation = useNavigation();
    const [detailData, setDetailData] = useState({})
    const [userId, setUserId] = useState('')
    const [accToken, setAccToken] = useState('')
    const [accName, setAccName] = useState('')
    const [loading, setLoading] = useState(false);

    async function fetchDetail() {
        try {
            setLoading(true);
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios.get('https://m2m-api.herokuapp.com/matches/' + route.params.id,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            setDetailData(data)
        } catch (error) {
            let errorMessage = error.response.data.message ?? 'Error making network request, please check your internet connection'
            showAlert(errorMessage)
        }finally {
            setLoading(false);
        }
    }

    async function getLocalStorage() {
        try {
            const id = await AsyncStorage.getItem('@id')
            const access_token = await AsyncStorage.getItem('@access_token')
            const name = await AsyncStorage.getItem('@name')
            setUserId(id)
            setAccToken(access_token)
            setAccName(name)
        } catch (error) {
            console.log(error);
        }
    }

    async function joinMatch() {
        try {
            setLoading(true);
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios.post(`https://m2m-api.herokuapp.com/matches/${detailData.id}/join`, null,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            fetchDetail()
        } catch (error) {
            let errorMessage = error.response.data.message ?? 'Error making network request, please check your internet connection'
            showAlert(errorMessage)
        }finally{
            setLoading(false);
        }
    }

    async function leaveMatch() {
        try {
            setLoading(true);
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios.delete(`https://m2m-api.herokuapp.com/matches/${detailData.id}/leave`,
                {
                    headers: {
                        access_token: access_token
                    }
                })
            fetchDetail()
            navigation.goBack()
        } catch (error) {
            let errorMessage = error.response.data.message ?? 'Error making network request, please check your internet connection'
            showAlert(errorMessage)
        } finally{
            setLoading(false);
        }
    }


    useFocusEffect(
        useCallback(() => {
            fetchDetail()
            getLocalStorage()
        }, [])
    )

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

    function toRequest() {
        navigation.navigate('MatchRequest', {
            id: detailData.id
        })
    }

    if (!detailData.Category) {
        return (
            <ActivityIndicator size='large' color='#ADD6FF' />
        )
    }

    let button
    let showchat
    let leaveMatchButton
    let user = detailData.MatchDetails.find(el => el.UserId == userId)

    if (detailData.UserId == userId) {
        button = (
            <Button
                onPress={() => toRequest()}
                title={'See join requests'}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )

        showchat = (
            <Button
                title={'Show Chat'}
                onPress={() => navigation.navigate('ChatComponent', {
                    id: detailData.id,
                    userId: userId,
                    name: accName
                })}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )
    } else if (!user) {
        button = (
            <Button
                onPress={() => joinMatch()}
                title={'Request to join match'}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )
    } else if (user.status == 1) {
        button = (
            <Button
                disabled='true'
                type="clear"
                title={'Already Joined'}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )

        showchat = (
            <Button
                title={'Show Chat'}
                onPress={() => navigation.navigate('ChatComponent', {
                    id: detailData.id,
                    userId: userId,
                    name: accName
                })}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )

        leaveMatchButton = (
            <Button
                title={'Leave Match'}
                color='error'
                onPress={() => leaveMatch()}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )
    } else if (user.status == 0) {
        button = (
            <Button
                disabled='true'
                title={'Pending for approval...'}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )
    } else if (user.status == 2) {
        button = (
            <Button
                disabled='true'
                type="clear"
                title={'You are rejected by the match master'}
                buttonStyle={{
                    borderRadius: 25
                }}
            >
            </Button>
        )
    }


    return (
        <View
            style={{
                marginTop: 40,
                flex: 1
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
                  <ActivityIndicator size="large" color="#000000" style={{left: 0, top:0, right: 0, bottom: 0, justifyContent:"center", alignItems: "center", position: "absolute", zIndex: 10}}/>
              </View>
            }
            <View
                style={{
                    flex: 4,
                    elevation: 3,
                    backgroundColor: "#FFF",
                    marginLeft: 20,
                    marginTop: 20,
                    borderRadius: 15,
                    marginBottom: 10,
                    width: '90%',
                    flexDirection: "column"
                }}
            >
                <Image
                    source={{ uri: detailData.Category.image }}
                    style={{
                        width: '100%',
                        height: '30%',
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }}
                />
                <View style={{
                    width: '100%',
                    paddingTop: 10,
                    paddingHorizontal: 10
                }}>
                    <View style={{
                        backgroundColor: "#FD841F",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15,
                        marginBottom: 30
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#FFF",
                            alignSelf: 'center'
                        }}>{detailData.Category.name}</Text>
                    </View>
                    <Text style={{
                        fontWeight: "bold",
                        color: "#FD841F",
                    }}>{detailData.name}
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                    }}>{detailData.description}
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                    }}>{detailData.date}
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                    }}>{detailData.location}
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                    }}>{detailData.currentCapacity} out of {detailData.capacity} person joined
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                    }}>Match created by{detailData.UserId}
                    </Text>
                    <Text>
                        {null}
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                    }}>{detailData.Field?.name}
                    </Text>
                    <Text style={{
                        fontWeight: "bold",
                    }}>{detailData.Field?.location}
                    </Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}
                >
                    {button}

                </View>
                <View
                    style={{
                        width: '100%',
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}
                >

                    {showchat}


                </View>
                <View
                    style={{
                        width: '100%',
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}
                >

                    {leaveMatchButton}


                </View>
            </View>
        </View>
    )
}  