import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Header } from 'react-native-elements';

import FBScreen from "./screens/facebook";
import INSTAScreen from "./screens/insta";
export default class App extends React.Component {
  render() {
    return (
    <View  style={styles.container} >
    <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'SOCIAL MEDIA', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
      <AppContainer />
    </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: { screen: FBScreen },
  Insta: { screen: INSTAScreen },
});

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ff",
  },
});
