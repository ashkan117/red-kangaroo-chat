import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Chat from "./Chat"


export default function App() {
  const [userId, setUser] = useState(0);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title='Other'
            color="#ffdf06"
            onPress={(_e) => setUser(1)}
          />
          <Button title='Me'
            color="#09a552"
            onPress={(_e) => setUser(0)}
          />
        </View>
        <Chat userId={userId} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 28,
    flex: 1,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  container: {
    display: 'flex',
    height: '100%'
  },
  chat: {
    width: '100%',
  },
});
