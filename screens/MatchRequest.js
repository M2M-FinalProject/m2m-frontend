import {Text,TouchableOpacity, View,Image} from 'react-native'
import ParticipantCard from '../components/ParticipantCard'

export default function MatchRequest({img,title, bg}){
        return(
            <>
                <ParticipantCard/>
                <ParticipantCard/>
                <ParticipantCard/>
            </>
        )   
}