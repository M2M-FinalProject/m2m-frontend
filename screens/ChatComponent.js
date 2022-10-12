import * as TalkRn from '@talkjs/expo';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState, useRef } from 'react';

export default function ChatComponent({ route }) {
  // const other2 = {
  //   id: '123456789',
  //   name: 'Alice',
  //   email: 'alice@example.com',
  //   photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
  //   welcomeMessage: 'Hey there! How are you? :-)',
  //   role: 'default',
  // };

  // console.log(route.params.id, 'ini id chat');
  // console.log(route.params.userId, 'ini id chat user');

  const me = {
    id: Number(route.params.userId),
    name: toString(route.params.userId)
  }

  // const other = {
  //   id: '987654321',
  //   name: 'Sebastian',
  //   email: 'Sebastian@example.com',
  //   photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
  //   welcomeMessage: 'Hey, how can I help? https://google.com',
  //   role: 'default',
  // };

  const conversationBuilder = TalkRn.getConversationBuilder('ChatRoom' + route.params.id);

  conversationBuilder.setParticipant(me);
  // conversationBuilder.setParticipant(other);

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