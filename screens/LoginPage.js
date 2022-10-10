import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput  } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function LoginPage({navigation}){

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
                    <TextInput style={styles.input}placeholder="EMAIL" placeholderTextColor="#E14D2A"/>
                    <TextInput style={styles.input}placeholder="PASSWORD" placeholderTextColor="#E14D2A"/>
                    
                    <View style={styles.primaryButton}>
                        <Text style={styles.primaryText}>LOGIN</Text>
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