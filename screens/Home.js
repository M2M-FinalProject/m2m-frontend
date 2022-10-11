import { ActivityIndicator, View, Text, TextInput, ScrollView, FlatList } from 'react-native'
import { Chip } from '@rneui/themed'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMatches } from '../store/actions/matchAction'
import { useEffect, useState} from 'react'
import MatchCard from '../components/MatchCard'
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
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

    const renderItem = ({ item }) => {
        return (
            <MatchCard match={item} navigation={navigation} />
        )
    }

    return (
        <View style={{
            backgroundColor: "#FFF",
            flex: 1,
            marginTop: 0
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
                            fontWeight: "bold",
                            marginTop: 45,
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

            <View >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        width: "90%",
                        marginHorizontal: 20,
                        flexDirection: 'row'
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
            </View>


            <FlatList
                style={{ height: 400 }}
                contentContainerStyle={{ justifyContent: 'center' }}
                data={matches} renderItem={renderItem} keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}
