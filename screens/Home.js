import { View, Text, StyleSheet, Image, ImageBackground, TextInput, ScrollView, Pressable } from 'react-native'
import { Chip } from '@rneui/base'

export default function Home() {
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


            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>
                {/* <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61"
                    }}>Recommended</Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "#FD841F",
                        width: 130,
                        marginTop: -5
                    }}>

                    </View>

                </View> */}
                <View style={{ 
                    width: "100%"
                    }}>
                    <View style={{
                        backgroundColor: "#FD841F",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#FFF"
                        }}>More</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                style={{ height: 400, display: 'flex' }}
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
                                alignSelf:'center'
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
                                alignSelf:'center'
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
                                alignSelf:'center'
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

            </ScrollView>
        </View>
    )
}
