import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput  } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function LoginPage({navigation}){
    const [email, setEmail]= React.useState('')
    const [password, setPassword]= React.useState('')
    const [error, setError]= useState('')

    const storeData = async (token, id, name) => {
        try {
          await AsyncStorage.setItem('@access_token', token)
          await AsyncStorage.setItem('@id', id.toString())
          await AsyncStorage.setItem('@name', name)
        } catch (e) {
          // saving error
          console.log(e);
        }
    }
    function logingIn(e){
        e.preventDefault()
        // console.log(email, password);
        return fetch('https://m2m-api.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
        })
        .then((response)=>{
            if(!response){
                // console.log('hem');
                throw new Error("Internal Server Error")
            }
            return response.json()
        })
        .then((data)=>{
            console.log(data);
            if(data.message == "invalid email/password"){
                throw{
                    message: data.message
                }
            }
            storeData(data.access_token, data.id, data.name )
            navigation.navigate('HomeNavigator')
        })
        .catch((err)=>{
            console.log(err);
            setError(err.message)
        })
        
        
    }
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
            style="light" 
            backgroundColor="#FD841F" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>WELCOME </Text>
                    <Text style={styles.headerButSmaller}>BACK</Text> 
                </View>
                <View style={styles.inputForm}>
                    <Text style={styles.errWarn}>{error}</Text>
                    <TextInput style={styles.input}placeholder="EMAIL" value={email}
                    onChangeText={setEmail} placeholderTextColor="#E14D2A"/>
                    <TextInput style={styles.input}placeholder="PASSWORD" value={password}
                    onChangeText={setPassword} secureTextEntry={true} placeholderTextColor="#E14D2A"/>
                    
                    <View style={styles.primaryButton}>
                        <TouchableOpacity onPress={logingIn}>
                        <Text style={styles.primaryText}>LOGIN</Text></TouchableOpacity>
                    </View>

                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD841F',
        justifyContent: 'flex-start',
    },
    header: {
        flex: 1,
        backgroundColor: '#FD841F',
        padding: 50
    },
    inputForm: {

        paddingHorizontal: 50,
        flex: 5,
        backgroundColor: '#FD841F',
    },
    input: {
        height: 50,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#E14D2A',
        backgroundColor: '#F6FFC1'
    },


    headerText: {
        fontSize: 45,
        color: '#F6FFC1',
        fontFamily: 'Roboto',
        fontWeight: "900"
    },
    headerButSmaller: {
        fontSize: 22,
        color: '#F6FFC1',
        fontFamily: 'Roboto',
        fontWeight: "900"
    },
    primaryText: {
        fontSize: 25,
        color: '#F6FFC1',
        fontFamily: 'Roboto',
        fontWeight: "bold"
    },
    errWarn: {
        fontSize: 25,
        color:'#F6FFC1',
        fontFamily: 'Roboto',
        textAlign:'center'
    },
    primaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: "bold",
        backgroundColor: '#E14D2A',
        width: 200,
        height: 50,
        borderRadius:10,
        marginTop:30
    },
    logo: {
        height: 200,
        width: 110,
        resizeMode:'stretch'
    },

})