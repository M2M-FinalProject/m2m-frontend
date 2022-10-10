import { View, Text, StyleSheet, Image, ImageBackground, TextInput, ScrollView, Pressable } from 'react-native'
import { ButtonGroup } from '@rneui/themed'
import { useState } from 'react';

export default function Home() {
    const [selectedIndex, setSelectedIndex] = useState(0);
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
                    <View style={{
                        width: "100%"
                    }}>
                        <Text style={{
                            marginTop: 20,
                            fontSize: 25,
                            color: "#FFF",
                            fontWeight: "bold"
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
                    borderRadius:20,
                    marginBottom: 0,
                    marginTop: -50
                }}
            />

            <ScrollView
                style={{ height: 400 }}
                contentContainerStyle={{ justifyContent: 'center'}}
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
                        <Text style={{
                            fontWeight: "bold",
                        }}>3 person want to join this match
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
                        <Text style={{
                            fontWeight: "bold",
                        }}>3 person want to join this match
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
                        <Text style={{
                            fontWeight: "bold",
                        }}>3 person want to join this match
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
