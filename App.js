// In App.js in a new project

import React, {Component} from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { fromLeft } from 'react-navigation-transitions';
//import Button from 'react-native-button';

import Home from './Components/Home/Home.js';
import Authentication from './Components/Authentication/Authentication.js';
import Menu from './Components/Home/Menu';


const App = createStackNavigator(
  {
    Home: Home,
    Authentication: Authentication,
    Menu: Menu
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => fromLeft(),
  }
  );


export default createAppContainer(App);