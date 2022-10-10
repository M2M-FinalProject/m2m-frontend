import { Text, View, Image } from "react-native";

// export default function MatchCard({ name, location, category, date, capacity, currentCapacity }) {
export default function MatchCard({ match }) {
    return (
        <View
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
                source={{ uri: 'https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju' }}
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
                    }}>{ match.categoryId }</Text>
                </View>
                <Text style={{
                    fontWeight: "bold",
                    color: "#FD841F",
                }}>{ match.name }
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{ match.date }
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{ match.location }
                </Text>
                <Text style={{
                    fontWeight: "bold",
                }}>{match.currentCapacity} out of {match.capacity} person joined
                </Text>
            </View>
        </View>
    )
}