import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
    SafeAreaView,
  } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import React from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
// import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'
import { fetchMatches } from '../store/actions/matchAction'

export default function CreateMatch({navigation}){
    let token = ''
    const gettoken = async () => {
        try {
            const access_token = await AsyncStorage.getItem('@access_token')
            if(access_token !== null) {
                // console.log(access_token);
                token = access_token
                return
            }
        } catch(e) {
          // error reading value
        }
    }
    gettoken()
    // console.log(token);
    const [error, setError]= useState('')
    const [action, setAction]= useState('Check Field Recommendation')
    const [fieldRequirement, setFieldRequirement]= useState();
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [matchName, setMatchName]= React.useState('')
    const [capacity, setCapacity]= React.useState(1)
    // const [duration, setDuration]= React.useState('')
    const [duration, setDuration]= useState()
    const [desc, setDesc]= React.useState('')
    const [selectedLocation, setSelectedLocation] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [matchdate, setMatchDate] = useState(new Date());
    const [dateDisplay, setDateDisplay] = useState(matchdate.toDateString());
    const [isDisplayDate, setShow] = useState(false)
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || matchdate;
        setMatchDate(currentDate);
        setShow(false)
        setDateDisplay(currentDate.toDateString())
     };
    const dispatch = useDispatch()
    // const [selectedDate, setSelectedDate] = useState();
    // const [selectedMonth, setSelectedMonth] = useState();
    // const [selectedYear, setSelectedYear] = useState();
    
    function changeButton(){
        // console.log(fieldRequirement);
        if(fieldRequirement==1){
            setAction('Check Field Recommendation')
        } else {
           setAction('Create New Match')
        }
    }
    
    function buttonClick(e){
        e.preventDefault()
        console.log('bbb');
        if(!matchName || !duration|| !desc || !selectedLocation || !selectedCategory){
            setError('Please Fill all the require inputs')
            return
        } else if (action == 'Check Field Recommendation'){
            let name= matchName
            let location = selectedLocation
            let date = matchdate
            let CategoryId = selectedCategory
            let cap = capacity
            let dur = duration
            let description = desc
            console.log('masuk');
            setError('')
            setCapacity(1)
            setDesc('')
            setDuration('Set Duration')
            setSelectedLocation('Select Location')
            setSelectedCategory('Select Category')
            setMatchDate(new Date())
            setMatchName('')
            navigation.navigate('SelectField', {name, location, date, CategoryId, capacity: cap, duration: dur, type:1, description})
        } else {
            // console.log(token, 'ini token');
            return fetch('https://m2m-api.herokuapp.com/matches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access_token': token
            },
            body: JSON.stringify({
                name: matchName, 
                location: selectedLocation,
                date: matchdate,
                CategoryId: selectedCategory,
                capacity, 
                duration,
                type:0,
                description: desc  })
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
                setError('')
                setCapacity(1)
                setDesc('')
                setDuration('Set Duration')
                setSelectedLocation('Select Location')
                setSelectedCategory('Select Category')
                setMatchDate(new Date())
                setMatchName('')
                dispatch(fetchMatches())
                navigation.navigate('Home')
            })
            .catch((err)=>{
                console.log('gee');
                console.log(err, 'ini errornya');
                setError(err.message)
                // console.log('geee');
            })           
        }
    }
    
    // if(toggleCheckBox){
    //     setAction('Submit')
    // }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.container}>
                <View style={styles.inputForm}>
                    <Text style={styles.errWarn}>{error}</Text>

                    <TextInput style={styles.input}placeholder="SET THE MATCH NAME" 
                    value={matchName}
                    onChangeText={setMatchName}  />
                    <View style={styles.inputPicker}>
                    <Picker
                        selectedValue={selectedLocation}
                        
                        onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
                    >
                        <Picker.Item style={{color:'#a3a3a3'}}label="Select Location" value="0" />
                        <Picker.Item label="Jakarta Pusat" value="Jakarta Pusat" />
                        <Picker.Item label="Jakarta Selatan" value="Jakarta Selatan" />
                        <Picker.Item label="Jakarta Utara" value="Jakarta Utara" />
                        <Picker.Item label="Jakarta Timur" value="Jakarta Timur" />
                        <Picker.Item label="Jakarta Barat" value="Jakarta Barat" />
                    </Picker>
                    </View>
                    <View style={styles.inputPicker}>
                    <Picker
                        selectedValue={selectedCategory}
                        
                        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
                    >
                        <Picker.Item style={{color:'#a3a3a3'}}label="Select Category" value="0" />
                        <Picker.Item label="Futsal" value="1" />
                        <Picker.Item label="Basketball" value="2" />
                        <Picker.Item label="Tennis" value="3" />
                        <Picker.Item label="Badminton" value="4" />
                        <Picker.Item label="Martial Arts" value="5" />
                        <Picker.Item label="Jogging" value="6" />
                        <Picker.Item label="Volleyball" value="7" />
                        
                    </Picker>
                    </View>
                    <TouchableOpacity><Text style={styles.input} onPress={()=>setShow(true)}>{dateDisplay}</Text></TouchableOpacity>
                    {isDisplayDate &&(<DateTimePicker testID="dateTimePicker" value={matchdate} is24Hour={true} display="default" onChange={changeSelectedDate} />)}
                    
                    
                    <TextInput style={styles.input}placeholder="SET CAPACITY" 
                    value={capacity}
                    onChangeText={setCapacity} keyboardType="numeric" />

                    {/* <TextInput style={styles.input}placeholder="SET MATCH DURATION" 
                    value={duration}
                    onChangeText={setDuration}  /> */}

                    <View style={styles.inputPicker}>
                    <Picker
                        selectedValue={duration}
                        
                        onValueChange={(itemValue, itemIndex) => setDuration(itemValue)}
                    >
                        <Picker.Item style={{color:'#a3a3a3'}}label="Set Duration" value="0" />
                        <Picker.Item label="30 Minutes" value="30 Minutes" />
                        <Picker.Item label="60 Minutes" value="60 Minutes" />
                        <Picker.Item label="90 Minutes" value="90 Minutes" />
                        <Picker.Item label="120 Minutes" value="120 Minutes" />
                        <Picker.Item label="More than 120 Minutes" value="More than 120 Minutes" />
                        
                    </Picker>
                    </View>

                    <TextInput style={styles.input}placeholder="DESCRIBE MORE" 
                    value={desc}
                    onChangeText={setDesc}  />
                    <View style={styles.inputPicker}>
                    <Picker
                        selectedValue={fieldRequirement}
                        
                        onValueChange={(itemValue, itemIndex) => {
                            setFieldRequirement(itemValue)
                            changeButton()
                        }}
                    >
                        <Picker.Item label="I need Field Recomendation" value="0" />
                        <Picker.Item label="I don't need Field Recomendation" value="1" />
                        
                    </Picker>
                    </View>
                    <View style={styles.primaryButton}>
                        <TouchableOpacity onPress={buttonClick}>
                            <Text style={styles.primaryText}>{action}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                </View>
            </ScrollView>
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
        paddingBottom:30,
        paddingHorizontal: 50,
        flex: 5,
        backgroundColor: '#FD841F',
    },
    input: {
        height: 50,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        backgroundColor: '#FFF',
        borderRadius:10
    },
    inputPicker: {
        height: 50,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#FFF',
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
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: "bold",
        textAlign:'center'
    },
    primaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: "bold",
        backgroundColor: '#E14D2A',
        width: 300,
        height: 50,
        borderRadius:10,
        marginTop:30,
    },
    logo: {
        height: 200,
        width: 110,
        resizeMode:'stretch'
    },

})