// In App.js in a new project

import React, {Component} from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { fromLeft } from 'react-navigation-transitions';
//import Button from 'react-native-button';

import Home from './Components/Home/Home.js';
import Login from './Components/Login/Login.js';
import Detail from './Components/Detail/Detail';
import ChooseTime from './Components/ChooseTime/ChooseTime';
import ChooseSeat from './Components/ChooseSeat/ChooseSeat';
import ChooseCombo from './Components/ChooseCombo/ChooseCombo';
import Checkout from './Components/Checkout/Checkout';


const App = createStackNavigator(
  {
    
    Home: Home,
    
    Login: Login,
    ChooseCombo: ChooseCombo,
    ChooseTime: ChooseTime,
    ChooseSeat: ChooseSeat,
    Checkout: Checkout,
    Detail: Detail,
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