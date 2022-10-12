import * as TalkRn from '@talkjs/expo';
import { View } from 'react-native';


export default function ChatComponent({ route }) {

  const me = {
    id: Number(route.params.userId),
    name: route.params.name
  }

  const conversationBuilder = TalkRn.getConversationBuilder('ChatRoom' + route.params.id);

  conversationBuilder.setParticipant(me);

  return (
    <>
      <View
        style={{
          marginTop: 35
        }}
      >

      </View>
      <TalkRn.Session appId='tA5XYaRg' me={me}>
        <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
      </TalkRn.Session>
    </>
  );
}