import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const Chat = (props) => {
  const { userId } = props
  const [messages, setMessages] = useState([]);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: { backgroundColor: '#ffdf06', },
          right: { backgroundColor: '#09a552', },
        }}
      />);
  }


  const onSend = useCallback(async (userId, messages = []) => {
    if (messages && messages.length > 0) {
      // update the id based of the user
      messages[messages.length - 1].user = { _id: userId }
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(userId, messages)}
      renderBubble={renderBubble}
      alwaysShowSend={true}
      user={{
        _id: 0
      }}
    />
  );
}

export default Chat;
