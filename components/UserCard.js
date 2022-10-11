import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Button, ButtonGroup } from '@rneui/themed'

export default function UserCard({ request }) {
    // PATCH /matches/:matchId/participants/:participantId

    return (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: '#FD841F',
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 10,
            }}
        >
            <Image
                source={{ uri: 'https://sportal.blic.rs/storage/images/2022/10/05/21:15:51_2022100521150407925_original_am-l.jpeg' }}
                style={{ width: 40, height: 70 }}
            />

            <View
                style={{
                    width: '60%',
                    flexDirection: "column",
                    justifyContent: 'space-evenly'
                }}>
                <Text style={{
                    color: "#fff",
                    fontSize: 20,
                    paddingHorizontal: 20,
                    width: 170
                }}>{request.User.name}</Text>
                <Text style={{
                    color: "#fff",
                    fontSize: 14,
                    paddingHorizontal: 20
                }}>
                    {request.User.bio}
                </Text>
            </View>
            <View
                style={{
                    height: 80,
                    width: '30%',
                    flexDirection:'column',
                    justifyContent:'space-between'
                }}
            >
                <Button
                    size='sm'
                    title='Accept'
                />
                <Button
                    size='sm'
                    title='Reject'
                    color={'#E14D2A'}
                />

            </View>
        </View>
    )
}
