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

    // function fieldSelect(e){

    // }

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
                    <Text style={styles.textStyle}>capacity: {capacity}</Text>
                    <Text style={styles.textStyle}>duration: {duration}</Text>
                    <Text style={styles.textStyle}>description: {description}</Text>
                </View>
            </View>
              <FlatList
                  style={{display: 'flex'}}
                  contentContainerStyle={{ justifyContent: 'center' }}
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
        fontSize: 25,
        color: '#FD841F',
        fontFamily: 'Roboto',
        fontWeight: "900"
    },
    prevInput:{
        backgroundColor: '#fff',
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 20,
        borderRadius: 10
    },
    textStyle: {
        color: '#FD841F'
    }
})