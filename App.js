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
import SearchMovie from './Components/SearchMovie/SearchMovie';
import Profile from './Components/Profile/Profile';


const App = createStackNavigator(
  {
    Profile: Profile,
    Home: Home,
    SearchMovie: SearchMovie,
    Checkout: Checkout,
    Login: Login,
    ChooseTime: ChooseTime,
    ChooseSeat: ChooseSeat,
    Detail: Detail,
    ChooseCombo: ChooseCombo,
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