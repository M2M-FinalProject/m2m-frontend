import { ActivityIndicator, View, Text, StyleSheet, Image, ImageBackground, TextInput, ScrollView, Pressable, FlatList } from 'react-native'
import { Chip } from '@rneui/themed'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMatches } from '../store/actions/matchAction'
import { useEffect } from 'react'
import MatchCard from '../components/MatchCard'

export default function Home() {
    const dispatch = useDispatch()

    const { matches, error } = useSelector(state => {
        return state.matchReducer
    })

    useEffect(() => {
        dispatch(fetchMatches())
    }, [dispatch])

    if (!matches) {
        return (
            <ActivityIndicator size='large' color='#ADD6FF' />
        )
    }

    if (error) {
        return (
            <Text>
                {JSON.stringify(error)}
            </Text>
        )
    }

    const renderItem = ({item}) => {
        return (
            <MatchCard match={item} />
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
                    width: "100%"
                }}>
                    <View style={{ width: "60%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold"
                        }}>Welcome to Match 2 Match</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    marginTop: -45
                }}
            >
                <View style={{
                    backgroundColor: "#FFF",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    borderRadius: 15,
                    marginTop: 25,
                    flexDirection: "row",
                    alignItems: "center",
                    elevation: 2,
                }}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#FD841F"
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            width: 260
                        }}
                    />
                </View>
            </View>

            <ScrollView
                horizontal
                style={{
                    width: "90%",
                    marginHorizontal: 20,
                    flexDirection: 'row',
                    // marginBottom: -100,
                    height: 50
                }}
                contentContainerStyle={{ height: 40 }}
            >
                <Chip
                    color={'#FD841F'}
                    title={'Football'}
                    containerStyle={{
                        marginRight: 10,
                    }}
                />
                <Chip
                    color={'#FD841F'}
                    title={'Basketball'}
                    containerStyle={{
                        marginRight: 10
                    }}
                />
                <Chip
                    color={'#FD841F'}
                    title={'Tennis'}
                    containerStyle={{
                        marginRight: 10
                    }}
                />
                <Chip
                    color={'#FD841F'}
                    title={'Jogging'}
                    containerStyle={{
                        marginRight: 10
                    }}
                />
                <Chip
                    color={'#FD841F'}
                    title={'Futsal'}
                    containerStyle={{
                        marginRight: 10
                    }}
                />
                <Chip
                    color={'#FD841F'}
                    title={'Swimming'}
                    containerStyle={{
                        marginRight: 10
                    }}
                />
            </ScrollView>


            {/* <ScrollView
                style={{ height: 400, display: 'flex', marginTop: -100 }}
                contentContainerStyle={{ justifyContent: 'center' }}
            >

                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 200,
                        elevation: 3,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: '90%',
                        flexDirection: "row"
                    }}
                >
                    <Image
                        source={{ uri: 'https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju' }}
                        style={{
                            width: '35%',
                            height: '100%',
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                        }}
                    />
                    <View style={{
                        width: '65%',
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
                            }}>Football</Text>
                        </View>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#FD841F",
                        }}>09/10/2022 01:00 PM
                        </Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>Jakarta Utara
                        </Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>9 out of 15 person joined
                        </Text>
                    </View>
                </View>
                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 200,
                        elevation: 3,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: '90%',
                        flexDirection: "row"
                    }}
                >
                    <Image
                        source={{ uri: 'https://i.pinimg.com/originals/ee/b4/c2/eeb4c283836bab1b3aebb183551b5219.jpg' }}
                        style={{
                            width: '35%',
                            height: '100%',
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                        }}
                    />
                    <View style={{
                        width: '65%',
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
                            }}>Tennis</Text>
                        </View>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#FD841F",
                        }}>09/10/2022 01:00 PM
                        </Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>Jakarta Utara
                        </Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>9 out of 15 person joined
                        </Text>
                    </View>
                </View>
                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 200,
                        elevation: 3,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: '90%',
                        flexDirection: "row"
                    }}
                >
                    <Image
                        source={{ uri: 'https://img.freepik.com/premium-photo/teen-boy-coaching-his-girlfriend-playing-basketball-street-basketball-game_116407-3516.jpg?w=2000' }}
                        style={{
                            width: '35%',
                            height: '100%',
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                        }}
                    />
                    <View style={{
                        width: '65%',
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
                            }}>Basketball</Text>
                        </View>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#FD841F",
                        }}>09/10/2022 01:00 PM
                        </Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>Jakarta Utara
                        </Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>9 out of 15 person joined
                        </Text>
                    </View>
                </View>

            </ScrollView> */}

            <FlatList
                style={{ height: 400, display: 'flex', marginTop: -100 }}
                contentContainerStyle={{ justifyContent: 'center' }}
                data={matches} renderItem={renderItem} keyExtractor={(item,idx) => idx}
            >
                

            </FlatList>
        </View>
    )
}
