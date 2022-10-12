import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LandingPage({navigation}){
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@access_token')
            if(value !== null) {
                return value
            }
        } catch(e) {
          // error reading value
        }
    }
    // if(getData()){
    //     navigation.navigate('HomeNavigator')
    // }
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
            style="light" 
            backgroundColor="#FD841F" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>MATCH </Text>
                    <Text style={styles.headerButSmaller}>TO</Text> 
                    <Text style={styles.headerText}>MATCH</Text>
                </View>
                <View style={styles.middleSection}>
                    <View style={styles.middleRight}>
                        <Text style={styles.primaryText}>START</Text>
                        <Text style={styles.primaryText}>YOUR</Text>
                        <Text style={styles.primaryText}>MATCH</Text>
                        <Text style={styles.primaryText}>NOW!</Text>
                    </View>
                    <View style={styles.middleLeft}>
                        <Image style={styles.logo} source={require('../assets/image.png')}/>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.secondaryButton}>
                        <TouchableOpacity onPress={()=>{
                                navigation.navigate('Register')
                            }}>
                            <Text style={styles.secondaryText}>SIGN UP</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.primaryButton}>
                    <TouchableOpacity onPress={()=>{
                                navigation.navigate('Login')
                            }}>
                        <Text style={styles.primaryText}>LOGIN</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tnc}>
                    <Text style={styles.smallText}>By signing up, you agree to our <Text style={{fontWeight: "900"}}>Terms</Text>. See how we use your data in our <Text style={{fontWeight: "900"}}>Privacy Policy</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD841F',
        justifyContent: 'center',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        padding: 50
    },
    middleSection: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingRight:40
    },
    middleRight: {
        paddingVertical: 40,
        justifyContent: 'space-around',
    },
    middleLeft: {
        justifyContent: 'center',
    },
    buttons: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },
    tnc: {
        flex: 2,
        justifyContent: 'flex-start',
        marginHorizontal: 80
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
    secondaryText: {
        fontSize: 25,
        color: '#E14D2A',
        fontFamily: 'Roboto',
        fontWeight: "bold"
    },
    smallText: {
        fontSize: 16,
        color: '#F6FFC1',
        fontFamily: 'Roboto',
        textAlign: 'center'
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
        borderRadius:10
    },
    secondaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: "bold",
        backgroundColor: '#F6FFC1',
        width: 300,
        height: 50,
        borderRadius:10
    },
    logo: {
        height: 200,
        width: 110,
        resizeMode:'stretch'
    },

})