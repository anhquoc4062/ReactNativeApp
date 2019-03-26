// In App.js in a new project

import React, {Component} from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
//import Button from 'react-native-button';

import MainComponent from './Components/MainComponent.js';
import TabBar from './Components/TabBar';
import SideMenu from './Components/SideMenu';
import JsonWebToken from './Components/JsonWebToken';
import AsyncStorage from './Components/AsyncStorage';


const App = createStackNavigator(
  {
    Home: MainComponent,
    SideMenu: SideMenu,
    TabBar: TabBar,
    JsonWebToken: JsonWebToken,
    AsyncStorage: AsyncStorage
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: "Home",
  }
  );


export default createAppContainer(App);