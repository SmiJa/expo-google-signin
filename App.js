import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from "expo-auth-session/providers/google"
import { StyleSheet, Text, View, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {


  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "931819812753-3oqkhfhmmeifcu5in3js00m0h7plnqaj.apps.googleusercontent.com",
    expoClientId: "931819812753-ca3g8djd51p1kkuh9uddv3eua9pfjgqt.apps.googleusercontent.com",
    androidClientId: "931819812753-ca3g8djd51p1kkuh9uddv3eua9pfjgqt.apps.googleusercontent.com",
    iosClientId: "931819812753-ca3g8djd51p1kkuh9uddv3eua9pfjgqt.apps.googleusercontent.com"
  });

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(
    () => {
      if(response?.type === 'success') {
        const { authentication, type } = response;
        setLoggedIn(type)
      }
    }, [response]
  );

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title={"Login"}
        onPress={() => {
          promptAsync();
        }}
      />
      <Text>
        {loggedIn === "success" ? "Logged In" : "Logged Out"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
