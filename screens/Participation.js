import { View, Text, StyleSheet, Image, ImageBackground, TextInput, ScrollView, Pressable } from 'react-native'
import { ButtonGroup } from '@rneui/themed'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react'
import MatchCard from '../components/MatchCard'
import { FlatList } from 'react-native';

export default function Participation({navigation}) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [matchData, setMatchData] = useState([])

    async function fetchMatchData(){
        try {
            const { data } = await axios.get('https://m2m-api.herokuapp.com/matches?userId=1',
                {
                    headers: {
                        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1NDE1MDk1fQ.X_S7m7KTRKq1jXUOKX2sWRyVBHMNm2RnzfMjSZdgR_g"
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
                buttons={['Pending', 'Approved']}
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

            <FlatList
                style={{ height: 400 }}
                contentContainerStyle={{ justifyContent: 'center'}}
                data={matchData.filter(el => el.status === selectedIndex)} renderItem={renderItem} keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}
