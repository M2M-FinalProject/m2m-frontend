import { Text, TouchableOpacity, View, Image } from 'react-native'
import { ButtonGroup } from '@rneui/themed'

export default function MatchCard() {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                backgroundColor: '#FD841F',
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 10
            }}
        >
            <Image
                source={{ uri: 'https://awsimages.detik.net.id/community/media/visual/2020/11/03/agatha-chelsea_43.png?w=700&q=90' }}
                style={{ width: 40, height: 40 }}
            />

            <View>
                <Text style={{
                    color: "#fff",
                    fontSize: 13,
                    paddingHorizontal: 20,
                    width: 170
                }}>Agatha Chelsea</Text>
                <Text style={{
                    color: "#fff",
                    fontSize: 12,
                    paddingHorizontal: 20
                }}>
                    Actress
                </Text>
            </View>
            
            

        </TouchableOpacity>
    )
}
