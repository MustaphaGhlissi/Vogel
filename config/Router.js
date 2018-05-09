import React, { Component } from 'react';

import {
  View,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  StatusBar
} from 'react-native';


import LanguageScreen from '../components/Language';
import HomeScreen from '../components/Home';
import PictoDetailsScreen from '../components/PictoDetails';
import ContactScreen from '../components/Contact';
import {
  StackNavigator
} from 'react-navigation';


const Router = {
  Language: {
    screen: LanguageScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Vogel',
      headerLeft: null,
      headerRight: null
    })
  },
  PictoDetails: {
    screen: PictoDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      headerRight: <View />,
    })
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => ({
      headerRight: <View />,
    })
  }
 };


export default Router;