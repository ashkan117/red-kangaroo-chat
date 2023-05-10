import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Chat from "./Chat"


export default function App() {
  const [userId, setUser] = useState(0);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title='Me'
            onPress={(_e) => setUser(0)}
          />
          <Button title='Other'
            onPress={(_e) => setUser(1)}
          />
        </View>
        <Chat userId={userId} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'yellow',
    justifyContent: 'space-around'
  },
  container: {
    display: 'flex',
    backgroundColor: 'green',
    height: '100%'

  },
  chat: {
    width: '100%',
    backgroundColor: 'red'
  },
});
