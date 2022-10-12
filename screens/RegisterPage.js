import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterPage({navigation}){
    // const [selectedGender, setSelectedGender] = useState();

    const [name, setName]= React.useState('')
    const [email, setEmail]= React.useState('')
    const [password, setPassword]= React.useState('')
    const [confirmPass, setConfirmation]= React.useState('')
    const [bio, setBio]= React.useState('')
    const [typeWrong, setTypeWrong]= useState('')
    // console.log(name, 'name');
    // console.log(email, 'email');
    // console.log(password, 'pass');
    // console.log(confirmPass, 'con');
    // console.log(bio, 'bio');
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
          // saving error
          console.log(e);
        }
    }
    function regisNewUser(e){
        e.preventDefault()
        if(password != confirmPass){
            console.log('iiii');
            setTypeWrong('Password did not match')
            return
        }
        // console.log(name, email, password, bio);
        return fetch('https://m2m-api.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password, bio})
        })
        .then((response)=>{
            if(!response){
                // console.log('hem');
                throw new Error("Internal Server Error")
            }
            // console.log(response);
            return response.json()
        })
        .then((data)=>{
            console.log(data);
            navigation.navigate('Login')
        })
        .catch((err)=>{
            console.log('gee');
            console.log(err, 'ini errornya');
            setTypeWrong(err.message)
            // console.log('geee');
        })
    }
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
            style="light" 
            backgroundColor="#FD841F" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>NICE, </Text>
                    <Text style={styles.headerButSmaller}>NOW SETUP UR PROFILE</Text> 
                </View>
                <ScrollView>
                <View style={styles.inputForm}>
                    <Text style={styles.errWarn}>{typeWrong}</Text>
                    <TextInput style={styles.input}placeholder="YOUR NAME" 
                    value={name}
                    onChangeText={setName}  />
                    <TextInput style={styles.input}placeholder="EMAIL" value={email}
                    onChangeText={setEmail} />
                    <TextInput style={styles.input}placeholder="PASSWORD" value={password}
                    onChangeText={setPassword}  secureTextEntry={true} />
                    <TextInput style={styles.input}placeholder="CONFIRM PASSWORD"
                    value={confirmPass}
                    onChangeText={setConfirmation} secureTextEntry={true} />
                    <TextInput style={styles.input} value={bio}
                    onChangeText={setBio} placeholder="DESCRIBE YOUR SPORT ABILITY" />
                    
                    <View style={styles.primaryButton}>
                        <TouchableOpacity onPress={regisNewUser}>
                            <Text style={styles.primaryText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                </ScrollView>
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
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        color:"#E14D2A",
        borderRadius:10
    },
    errWarn: {
        fontSize: 25,
        color:'#F6FFC1',
        fontFamily: 'Roboto',
        textAlign:'center'
    },
    headerText: {
        fontSize: 45,
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: "900"
    },
    headerButSmaller: {
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: "900"
    },
    primaryText: {
        fontSize: 25,
        color: '#F6FFC1',
        fontFamily: 'Roboto',
        fontWeight: "bold"
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