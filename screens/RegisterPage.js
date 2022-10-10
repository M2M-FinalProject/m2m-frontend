import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

export default function RegisterPage({navigation}){
    const [selectedGender, setSelectedGender] = useState();
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
                <View style={styles.inputForm}>
                    <TextInput style={styles.input}placeholder="YOUR NAME" placeholderTextColor="#E14D2A"/>
                    {/* <TextInput style={styles.input}placeholder="SELECT GENDER" placeholderTextColor="#E14D2A"/> */}
                    {/* <Picker
                        selectedValue={selectedGender}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
                    >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker> */}
                    <TextInput style={styles.input}placeholder="EMAIL" placeholderTextColor="#E14D2A"/>
                    <TextInput style={styles.input}placeholder="PASSWORD"  secureTextEntry={true} placeholderTextColor="#E14D2A"/>
                    <TextInput style={styles.input}placeholder="CONFIRM PASSWORD"
                     secureTextEntry={true} placeholderTextColor="#E14D2A"/>
                    <TextInput style={styles.input}placeholder="DESCRIBE YOUR SPORT ABILITY" placeholderTextColor="#E14D2A"/>
                    
                    <View style={styles.primaryButton}>
                        <Text style={styles.primaryText}>SIGN UP</Text>
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
        backgroundColor: '#F6FFC1',
        color:"#E14D2A"
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