import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

// export default function MatchCard({ name, location, category, date, capacity, currentCapacity }) {
export default function FieldCard({ field }) {
    const price = field.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: field.image }}
                style={styles.image}
            />
            <View style={styles.fieldInfo}>
                {/* <View style={{
                    backgroundColor: "#FD841F",
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 15,
                    marginBottom: 30
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "#FFF",
                        alignSelf: 'center'
                    }}>{ field.Category.name }</Text>
                </View> */}
                <Text style={styles.primaryText}>{ field.name }
                </Text>
                <Text style={styles.basicText}>{ field.phoneNumber }
                </Text>

                <Text style={styles.basicText}>Open: {field.openHour} || Close: {field.closeHour}
                </Text> 

            </View>   
            <View style={styles.fieldInfo}>
                <Text style={styles.basicText}>{ field.location }
                </Text>
            </View>
            <View>
                
            </View>
            <View style={styles.banner}>
                <Text style={styles.bannerText}> Rp. {price} </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 370,
        elevation: 3,
        backgroundColor: "#FFF",
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: '90%',
    },
    image:{
        width: '100%',
        height: '40%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    fieldInfo:{
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    primaryText:{
        fontWeight: "bold",
        color: "#FD841F",
        fontSize:20
    },
    basicText:{
        color:'#7e7e7e'
    },
    banner:{
        width: 150,
        backgroundColor: "#FD841F",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 65
    },
    bannerText:{
        fontWeight: "bold",
        fontSize: 15,
        color: "#FFF",
        alignSelf: 'center'
    }
})