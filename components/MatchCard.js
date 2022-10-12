import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MatchCard({ match }) {
    const navigation = useNavigation();
    function goToDetail() {
        navigation.navigate('MatchDetail', {
            id: match.id,
        })
    }
    let matchDate
    function displayDate(){
        // console.log(match.date);
        matchDate = Date.parse(match.date)
        matchDate = new Date(matchDate).toDateString()
    }
    let memberTarget
    function memberNeeded(){
        memberTarget = match.capacity - match.currentCapacity
    }
    if(match){
        console.log(match);
        displayDate()
        memberNeeded()
    }
    return (
        <TouchableOpacity
            onPress={() => goToDetail()}
            style={styles.container}>
            <Image
                source={{ uri: match.Category.image }}
                style={styles.imageStyle}
            />
            <View style={styles.info}>
                <Text style={styles.primaryText}>{match.name}
                </Text>

                <View>
                    <View style={styles.rowsInfo}>
                        <FontAwesome name="calendar" size={20} color="#7e7e7e" />
                        <Text style={styles.basicText}>{matchDate}
                        </Text>
                    </View>
                    
                    <View style={styles.rowsInfo}>
                        <Entypo name="location-pin" size={24} color="#7e7e7e" />
                        <Text style={styles.basicText}>{match.location}
                        </Text>
                    </View>
                    
                    <View style={styles.rowsInfo}>
                        <Ionicons name="people-sharp" size={24} color="#7e7e7e" />
                        <Text style={styles.basicText}>{memberTarget} Available Spot(s)
                        </Text>
                    </View>
                </View>
                

                <View style={styles.bannerCategory}>
                    <Text style={styles.bannerText}>{match.Category.name}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        elevation: 3,
        backgroundColor: "#FFF",
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: '90%',
        flexDirection: "row"
    },
    imageStyle:{
        width: '35%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    info:{
        width: '65%',
        padding: 10,
        justifyContent: 'space-between'
    },
    bannerCategory:{
        width:130,
        backgroundColor: "#FD841F",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
    },
    bannerText:{
        fontWeight: "bold",
        fontSize: 15,
        color: "#FFF",
        alignSelf: 'center'
    },
    primaryText:{
        fontWeight: "bold",
        color: "#FD841F",
        fontSize:20
    },
    basicText:{
        // fontWeight: "bold",
        fontFamily: 'Roboto',
        color: '#7e7e7e',
        marginLeft:15
    },
    rowsInfo:{
        flexDirection:'row',
        marginVertical:2
    }
})