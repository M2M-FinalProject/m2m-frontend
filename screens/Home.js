import { ActivityIndicator, View, Text, TextInput, ScrollView, FlatList, StyleSheet } from 'react-native'
import { Chip } from '@rneui/themed'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMatches } from '../store/actions/matchAction'
import { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const [chips, setChips] = useState([])
    const [text, setText] = useState('');
    const [category, setCategory] = useState('All');
    const [filterMatches, setFilterMatches] = useState([]);

    function changeCategory(categoryId) {
        setCategory(categoryId)
    }

    const { matches, error } = useSelector(state => {
        return state.matchReducer
    })

    async function fetchChips() {
        try {
            const access_token = await AsyncStorage.getItem('@access_token')
            const { data } = await axios.get(`https://m2m-api.herokuapp.com/categories`, {
                headers: access_token
            })
            setChips(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(fetchMatches())
        fetchChips()
    }, [])

    useEffect(()=>{
        if (category != 'All') {
            setFilterMatches(matches.filter(el => el.CategoryId == category))
        } else {
            setFilterMatches(matches)
        }
    }, [category])

    if (!matches, matches) {
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
                    <View style={{ width: "90%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            marginTop: 50,
                        }}>Welcome to M2M</Text>
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
                        placeholder="Search by Location"
                        placeholderTextColor="#FD841F"
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            width: 260
                        }}
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    />
                </View>
            </View>

            <View >
                {/* <ScrollView
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
                </ScrollView> */}

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        width: "90%",
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        marginBottom: 10
                    }}
                    contentContainerStyle={{ height: 40 }}
                >
                    <Chip
                        type={category == 'All' ? 'solid' : 'outline'}
                        color={'#FD841F'}
                        title='All'
                        onPress={() => changeCategory('All')}
                        buttonStyle={
                            [
                                { marginRight: 10 },
                                category != 'All' ? styles.border : ''
                            ]}
                        titleStyle={category != 'All' ? styles.text : '' }
                    />
                    {chips.map(element => {
                        return (
                            <Chip key={element.id}
                                onPress={() => changeCategory(element.id)}
                                type={element.id == category ? 'solid' : 'outline'}
                                color={'#FD841F'}
                                title={element.name}
                                buttonStyle={
                                    [
                                        { marginRight: 10 },
                                        element.id != category ? styles.border : ''
                                    ]}
                                titleStyle={element.id != category ? styles.text : '' }
                            />
                        )
                    })}
                </ScrollView>
            </View>


            <FlatList
                style={{ height: 400 }}
                contentContainerStyle={{ justifyContent: 'center' }}
                data={
                    filterMatches?.filter(el => el.location.toLowerCase().includes(text.toLowerCase()))
                }
                renderItem={renderItem}
                keyExtractor={(item, idx) => idx}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FD841F'
    },
    border: {
        borderColor: '#FD841F'
    }
});
