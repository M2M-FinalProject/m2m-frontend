import { TouchableOpacity, Text, View, Image } from "react-native";

// export default function MatchCard({ name, location, category, date, capacity, currentCapacity }) {
export default function FieldCard({ field }) {
    const price = field.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return (
        <View
            style={{
                height: 400,
                elevation: 3,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: '90%',
            }}
        >
            <Image
                source={{ uri: field.image }}
                style={{
                    width: '100%',
                    height: '40%',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            />
            <View style={{
                paddingTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 30,
            }}>
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
                <Text style={{
                    fontWeight: "bold",
                    color: "#FD841F",
                }}>{ field.name }
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{ field.phoneNumber }
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{ field.location }
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>Price: Rp. {price}
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>Open: {field.openHour}
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>Close: {field.closeHour}
                </Text>
                <View style={{
                    width: 200,
                    backgroundColor: "#FD841F",
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 15,
                    marginBottom: 20,
                    marginTop: 20,
                    marginLeft: 65
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "#FFF",
                        alignSelf: 'center'
                    }}> Select Field </Text>
                </View>
            </View>
        </View>
    )
}