/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';

const App = () => {
  const url = 'https://bingoaliens.com';

  const onLoad = useCallback(() => {
    console.log('loaded');
    Alert.alert(
      'SMS Notifications',
      '"App" Would Like to Send You SMS Notifications',
      [
        {
          text: "Don't Allow",
          onPress: () => console.log('Dont allow Pressed'),
        },
        {
          text: 'Allow',
          onPress: () => console.log('Allow Pressed'),
        },
      ],
    );
  }, []);

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 2000);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <WebView source={{uri: url}} onLoad={onLoad} style={styles.webview} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
