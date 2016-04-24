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

let SideMenuAndroid = require('./src/LeftMenuAndroid/LeftMenu');
let RPNavigator = require('./src/navigator/navigator');
let Home = require('./src/home/home');

var ROUTES = {
  home: Home
};

class MyManager extends React.Component{
  render() {
    var navigationView = (
      <SideMenuAndroid routes={{ ROUTES }}></SideMenuAndroid>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
            <RPNavigator/>
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('MyManager', () => MyManager);
