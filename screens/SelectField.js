import { ActivityIndicator, StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput  } from 'react-native';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import FieldCard from '../components/FieldCard'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchFields, fetchMatches } from '../store/actions/matchAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SelectField({ navigation, route }){
    const {name, location, date, CategoryId, capacity, duration, type, description } = route.params
    let displayDate = date.toDateString()
    const dispatch = useDispatch()
    const { fields, error } = useSelector(state => {
        return state.fieldReducer
    })

    let token = ''
    const gettoken = async () => {
        try {
            const access_token = await AsyncStorage.getItem('@access_token')
            if(access_token !== null) {
                console.log(access_token, 'kkk');
                token = access_token
                return
            }
        } catch(e) {
          // error reading value
        }
    }

    console.log(token, 'awal');
    // console.log(name, location, date, CategoryId, capacity, duration, type, description, 'DARI FORM');
    useEffect(() => {
        dispatch(fetchFields(CategoryId))
    }, [dispatch])

    if (!fields) {
        console.log('!field');
        return (
            <ActivityIndicator size='large' color='#ADD6FF' />
        )
    }

    if (error) {
        console.log('errorrrrrrr', error);
        return (
            <Text>
                {JSON.stringify(error)}
            </Text>
        )
    }

    const emptyList = () => {
        return (
            <View
                style={{
                    marginTop: 150,
                    alignSelf: 'center',
                    marginHorizontal: 20
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#FFF",
                    }}
                >Sorry, there is no available field for this sport category yet</Text>
            </View>
        )
    }

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={async (e)=>{
                console.log(name, location,date,CategoryId,capacity, duration,type,description);
                e.preventDefault()
                // console.log(item.id, 'hei');
                await gettoken()
                console.log(token, 'fff');
                return fetch('https://m2m-api.herokuapp.com/matches', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'access_token': token
                    },
                    body: JSON.stringify({name, location,date,CategoryId,capacity, duration,type,description, FieldId: item.id
                    })
                    })
                    .then((response)=>{
                        if(!response){
                            console.log('hem');
                            throw new Error("Internal Server Error")
                        }
                        console.log(response, 'aaa');
                        return response.json()
                    })
                    .then((data)=>{
                        console.log(data);
                        dispatch(fetchMatches())
                        navigation.navigate('Home')
                    })
                    .catch((err)=>{
                        console.log('gee');
                        console.log(err, 'ini errornya');
                        setError(err.message)
                        // console.log('geee');
                    })
            }}>
                <FieldCard field={item} />
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <View >
                <View style={styles.prevInput}>
                    <Text style={styles.headerText}>PREVIOUS INPUT: </Text>
                    <Text style={styles.textStyle}>Match Name: {name}</Text>
                    <Text style={styles.textStyle}>Location: {location}</Text>
                    <Text style={styles.textStyle}>Date: {displayDate}</Text>
                    <Text style={styles.textStyle}>Capacity: {capacity}</Text>
                    <Text style={styles.textStyle}>Duration: {duration}</Text>
                    <Text style={styles.textStyle}>Description: {description}</Text>
                </View>
            </View>
            <FlatList
                style={{display: 'flex',borderTopWidth:1, borderColor:'#fff', marginHorizontal:15}}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                ListEmptyComponent={emptyList}
                data={fields} renderItem={renderItem} keyExtractor={(item,idx) => idx}
            >
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD841F',
        justifyContent: 'flex-start',
    },
    headerText: {
        fontSize: 20,
        color: '#FD841F',
        fontFamily: 'Roboto',
        fontWeight: "900",
        marginBottom:15
    },
    prevInput:{
        width:300,
        marginLeft:50,
        backgroundColor: '#fff',
        marginHorizontal: 40,
        marginVertical: 15,
        padding: 10,
        borderRadius: 10
        
    },
    textStyle: {
        color: 'grey'
    },
    boxSelect:{
        height:350,
        margin:10,
        width:10,
        backgroundColor:'#fff',
    }
})