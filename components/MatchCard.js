import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";

export default function MatchCard({ match, navigation }) {
    function goToDetail() {
        navigation.navigate('MatchDetail', {
            id: match.id,
            navigation: navigation
        })
    }
    return (
        <TouchableOpacity
            onPress={() => goToDetail()}
            style={{
                height: 200,
                elevation: 3,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: '90%',
                flexDirection: "row"
            }}
        >
            <Image
                source={{ uri: match.Category.image }}
                style={{
                    width: '35%',
                    height: '100%',
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                }}
            />
            <View style={{
                width: '65%',
                paddingTop: 10,
                paddingHorizontal: 10
            }}>
                <View style={{
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
                    }}>{match.Category.name}</Text>
                </View>
                <Text style={{
                    fontWeight: "bold",
                    color: "#FD841F",
                }}>{match.name}
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{match.date}
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{match.location}
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{match.currentCapacity} out of {match.capacity} person joined
                </Text>
            </View>
        </TouchableOpacity>
    )
}