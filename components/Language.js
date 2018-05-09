import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    AsyncStorage,
    StatusBar,
    Image
  } from 'react-native';
  import {
    NavigationActions
  } from 'react-navigation';
import {CheckBox, Icon} from 'react-native-elements';

import I18n from '../translations/i18n';

export default class Language extends Component {
    constructor(props)
    {
        super(props);
    }

    componentWillMount()
    {
        if(I18n.locale.startsWith('en'))
        {
            this.setState({
                frChecked: false,
                enChecked: true
            });
        }
        else
        {
            this.setState({
                frChecked: true,
                enChecked: false
            });
        }
    }

    setChecked = (lang) => {
        if(lang === 'fr')
        {
            this.setState({
                frChecked: true,
                enChecked: false
            });
        }
        else
        {
            this.setState({
                frChecked: false,
                enChecked: true
            });
        }
        I18n.locale = lang;
    }   



    saveLanguage = async() => {
        try 
        {
            let lang = this.state.frChecked?'fr':'en';
            I18n.locale = lang;
            await AsyncStorage.setItem('@app:lang', lang);
        } 
        catch (error) 
        { 
        }
    }

    _navigate = (routeName) => {
        this.saveLanguage();
        
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: routeName }),
            ],
            key: null
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#BE181F' barStyle='light-content' />
                <View style={styles.viewContainer}>
                    <Text style= {styles.title}>
                        {I18n.t('chooseLang')}
                    </Text>

                    <View style= {styles.lang}>
                        
                        {
                            this.state.frChecked? 
                        (
                            <CheckBox
                                title={I18n.t('french')}
                                checked={this.state.frChecked}
                                checkedColor='#BE181F'
                                textStyle= {{color: '#BE181F'}}
                                containerStyle={styles.checkedChoice}
                            />
                        ):
                        (
                            <CheckBox
                                title={I18n.t('french')}
                                checked={this.state.frChecked}
                                onPress = {() => this.setChecked('fr')}
                                color = '#fff'
                                textStyle= {{color: '#ffffff'}}
                                containerStyle={styles.choice}
                            />
                        )

                        }
                        {
                            this.state.enChecked? 
                        (
                            <CheckBox
                                title={I18n.t('english')}
                                checked={this.state.enChecked}
                                checkedColor='#BE181F'
                                textStyle= {{color: '#BE181F'}}
                                containerStyle={styles.checkedChoice}
                            />
                        ):
                        (
                            <CheckBox
                                title={I18n.t('english')}
                                checked={this.state.enChecked}
                                onPress = {() => this.setChecked('en')}
                                color = '#fff'
                                textStyle= {{color: '#ffffff'}}
                                containerStyle={styles.choice}
                            />
                        )

                        }
                    </View>

                    <TouchableHighlight 
                    style={styles.btnNext}
                    underlayColor='rgba(255, 255, 255, 0.7)'
                    onPress = {() => {
                        this._navigate('Home')
                    }}
                    >
                        <View style= {styles.viewNext}>
                            <Text style={styles.textNext}>
                            {I18n.t('next')}
                            </Text>
                            <Icon
                                name='arrow-right-bold-hexagon-outline'
                                size={24}
                                type='material-community'
                                color='#FFFFFF'
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        flex: 1,
        backgroundColor: '#BE181F',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        color: '#fff',
        marginBottom: 20
    },
    lang: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 60
    },
    choice: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: 40, 
        padding: 5, 
        borderRadius: 100, 
        marginBottom: 10,
        backgroundColor: 'transparent'
    },
    checkedChoice: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: 40,
        padding: 5, 
        borderRadius: 100, 
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderColor: 'transparent'
    },
    btnNext: {
        padding: 10,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 100
    },
    viewNext: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNext: {
        color: '#fff',
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
    }
  });


