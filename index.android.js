/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Navigator
} from 'react-native';

let MyApp = require('./src/myApp');

class MyManager extends React.Component{
  render() {
    return (
      <MyApp />
    );
  }
}

AppRegistry.registerComponent('MyManager', () => MyManager);
