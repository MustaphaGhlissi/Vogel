/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {BackHandler, Alert, View, Image, AsyncStorage, StatusBar} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

import I18n from './translations/i18n';
import Router from './config/Router';
import SplashLoader from './components/SplashScreen';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const resizeMode = 'contain';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadedScreen: false,
      configs: {
        mode: 'modal',
        navigationOptions: {
          headerStyle: { backgroundColor: '#FFF' },
          headerTintColor: '#BE181F',
          gesturesEnabled: true,
          gesturesDirection: 'inverted',
          headerTitle: (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                  <Image
                      source={require('./assets/img/logo.jpg')}
                      style={{ resizeMode, height: 39, alignSelf: 'center' }}
                  />
              </View>
          )
        },
        initialRouteName: 'Language'
      }
    }
  }

  componentDidMount() {
    SplashLoader.loadScreen(
      () => {
        this.setState({loadedScreen: true});
      }
    );
    this._isSetLanguage();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);     
  }

  _isSetLanguage = async() => {
      await AsyncStorage.getItem("@app:lang").then((lang) => {

        if(lang !== null)
        {
          I18n.locale = lang;
          this.setState({
              configs: {
                mode: 'modal',
                navigationOptions: {
                  headerStyle: { backgroundColor: '#FFF' },
                  headerTintColor: '#BE181F',
                  gesturesEnabled: true,
                  gesturesDirection: 'inverted',
                  headerTitle: (
                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                          <Image
                              source={require('./assets/img/logo.jpg')}
                              style={{ resizeMode, height: 39, alignSelf: 'center' }}
                          />
                      </View>
                  )
                },
                initialRouteName: 'Home'
              }
          })
        }
      });
  }

  handleBackButton() {
    Alert.alert(
      `${I18n.t('quitTitle')}`,
      `${I18n.t('quitMessage')}`,
      [
        {text: `${I18n.t('no')}`, onDismiss: () => { }, style: 'cancel'},
        {text: `${I18n.t('yes')}`, onPress: () => 
          { 
            BackHandler.exitApp();
          } 
        },
      ],
      { cancelable: false }
    );
    return true;
  }

  render() {
    const StackPicto = StackNavigator(Router, this.state.configs);
    return (
      <View style={{flex: 1}}>
      {
        !this.state.loadedScreen?
        (
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
              <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
              <Image 
                source= {
                    require('./assets/img/logo.jpg')
                }
                style={{resizeMode, width: 160}}
              />
          </View>
        ):
        (<StackPicto />)
      }
     </View>
    );
  }
}

