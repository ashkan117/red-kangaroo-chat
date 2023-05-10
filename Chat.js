import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = (props) => {
  const { userId, style } = props
  console.log('userId in props is')
  console.log(userId)
  console.log('style is ')
  console.log(style)
  const [messages, setMessages] = useState([]);
  const onSend = useCallback((userId, messages = []) => {
    if (messages.length > 0) {
      console.log(messages[messages.length - 1])
      messages[messages.length - 1].user = { _id: userId }
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(userId, messages)}
      user={{
        _id: 0
        // name: auth?.currentUser?.displayName,
        // avatar: auth?.currentUser?.photoURL
      }}
    />
  );
}

export default Chat;
