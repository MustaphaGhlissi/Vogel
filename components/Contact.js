import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar
  } from 'react-native';
import { Card, ListItem, Buttonm, Avatar, Icon, Divider } from 'react-native-elements';
import I18n from '../translations/i18n';
import Communications from 'react-native-communications';

export default class Contact extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: I18n.t('contactUs'),
        }
      };
    constructor(props)
    {
        super(props);
        this.state={
            contact1:{
                phone: contact.items[0].phone,
                email: contact.items[0].email
            },
            contact2: {
                phone: contact.items[1].phone,
                email: contact.items[1].email
            }
        }
    }

    startCall = (phone) => {
        Communications.phonecall(phone, true);
    }

    sendEmail = (email) => {
        Communications.email([email], null, null, 'My Subject', 'My body text');
    }


    render() {
      return (
        <View style={styles.viewContainer}>
            <StatusBar backgroundColor='#BE181F' barStyle='light-content' />
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Card containerStyle={{padding: 0}} >
                        <View style={styles.description}>
                                <View style={styles.itemView}>
                                    <Icon
                                        name='check-circle'
                                        size={24}
                                        type='material-community'
                                        color='#BE181F'
                                        iconStyle={styles.itemIcon}
                                    />
                                    <Text style={styles.itemDescription}>
                                        {I18n.t(['contact', 'item0'])}
                                    </Text>
                                </View>
                                <View style={styles.itemView}>
                                    <Icon
                                        name='check-circle'
                                        size={24}
                                        type='material-community'
                                        color='#BE181F'
                                        iconStyle={styles.itemIcon}
                                    />
                                    <Text style={styles.itemDescription}>
                                        {I18n.t(['contact', 'item1'])}
                                    </Text>
                                </View>
                            <Text style={styles.contactDescription}>
                                {I18n.t(['contact', 'details'])}
                            </Text>
                        </View>
                    </Card>

                    {
                        contact.items.map((item, index)=>{
                            return (
                                <Card containerStyle={{padding: 0}} key={index}>
                                    <View style={styles.contactItem}>
                                        <View style={[styles.itemView, styles.itemGoal]}>
                                            <Icon
                                                name='check-circle'
                                                size={24}
                                                type='material-community'
                                                color='#BE181F'
                                                iconStyle={styles.itemIcon}
                                            />
                                            <Text style={styles.goal}>
                                                {index === 0?I18n.t('urgency'):I18n.t('question')}
                                            </Text>
                                        </View>
                                        <Divider style={styles.divider}/>
                                        <Text style={styles.caller}>
                                            {
                                                I18n.t('lContact') + item.title
                                            }
                                        </Text>
                                        <View style={styles.contactInfo}>
                                            <Text style={styles.infoItem}>{item.phone}</Text>
                                            <TouchableOpacity 
                                            style={styles.infoIconPhone}
                                            onPress = {() => {
                                                index===0?this.startCall(this.state.contact1.phone):this.startCall(this.state.contact2.phone)
                                            }}
                                            >
                                                <Icon
                                                    name='phone'
                                                    size={24}
                                                    type='material-community'
                                                    color='#FFFFFF'
                                                    iconStyle={styles.itemIcon}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.contactInfo}>
                                            <Text style={styles.infoItem}>{item.email}</Text>
                                            <TouchableOpacity 
                                            style={styles.infoIconEmail}
                                            onPress = {()=>{
                                                index===0?this.sendEmail(this.state.contact1.email):this.sendEmail(this.state.contact2.email)
                                            }}
                                            >
                                                <Icon
                                                    name='email'
                                                    size={24}
                                                    type='material-community'
                                                    color='#FFFFFF'
                                                    iconStyle={styles.itemIcon}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Card>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
      );
    }
  }


  const contact = {
      description: {
          item1: 'Les enquêtes de concurrence : droit français, Louis Vogel, Joseph Vogel, LawLex/Bruylant, 2017',
          item2: 'Les enquêtes de concurrence : droit européen, Louis Vogel, Joseph Vogel, LawLex/Bruylant, 2017',
          details:'Ces ouvrages ainsi que l’ensemble de nos publications, constamment tenues à jour, sont disponibles en librairie et sur le site law-lex.com. Ils existent en version papier et numérique. Les mises à jour et toutes les décisions citées sont accessibles gratuitement sur le site www.law-lex.com.'
      },
      items: [
        {
            phone: '01 53 67 76 20',
            email: 'jvogel@vogel-vogel.com',
            title: ' Me Joseph Vogel',
            goal: 'Intervention d’urgence de nos avocats'
        },
        {
            phone: '01 53 67 76 20',
            email: 'stephanie.boudin@vogel-vogel.com',
            title: ' Me Stéphanie Boudin',
            goal: 'Question relative aux 10 règles d’or'
        }
      ]
    
  }
  const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    container: {
      flexGrow: 1
    },
    content: {
        paddingBottom: 30
    },
    headerTitle: {
        color: '#fff', 
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif', 
        fontWeight: 'bold', 
        fontSize: 16
    },
    description: {
        padding: 10
    },
    contactDescription: {
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 16
    },
    itemView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemDescription: {
        flex: 1,
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        padding: 10,
        fontSize: 15,
        color: 'black'
    },
    contactItem: {
        padding: 10
    },
    contactInfo:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        marginBottom: 5,
        borderRadius: 5
    },
    infoItem: {
        flex: 1,
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        color: 'black',
        paddingLeft: 10,
        fontSize: 15
    },
    infoIconPhone: {
        backgroundColor: '#5CD29D',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    infoIconEmail: {
        backgroundColor: '#62A8EA',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    itemGoal:{
        paddingTop: 10,
        paddingBottom: 10
    },
    goal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        marginLeft: 10
    },
    divider: {
        backgroundColor: '#BE181F',
        marginBottom: 15
    },
    caller: {
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 16,
        marginBottom: 20
    }
  });


