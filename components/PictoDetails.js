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

import { Card, ListItem, Button, Avatar, Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import AIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';

import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

import I18n from '../translations/i18n';

import PICTOS_FR from '../modal/pictos.js';

const resizeMode = 'cover';
const resizeMode2 = 'contain';

export default class PictoDetails extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     const { params } = navigation.state;
    //     return {
    //         title: params.title || I18n.t(['pictos', 'title' + params.idPicto])
    //     }
    // };

    constructor(props) {
        super(props);
        this.state = {
            idPicto: props.navigation.state.params.idPicto
        }
    }

    _navigate = (routeName, params = null) => {
        this.props.navigation.navigate(routeName, params);
    }

    buildView() {
        return (
            <Swiper 
            index = {this.state.idPicto}
            ref='swiper'
            loop= {false}
            style={styles.wrapper} 
            showsButtons={true} 
            showsPagination={false} 
            nextButton={
                <Text style={styles.showButtons}>›</Text>
            }
            prevButton={
                <Text style={styles.showButtons}>‹</Text>
            }
            >   
                 {PICTOS_FR.map((picto, index)=>{
                return(
                    <ScrollView style={styles.container} key={index}>
                        <View style={styles.content}>
                            <View style={styles.logo}>
                                <Avatar
                                    avatarStyle={{width: '100%', height: 250}}
                                    containerStyle={{width: '100%', height: 250}}
                                    imageProps={{resizeMode: resizeMode}}
                                    xlarge
                                    source={picto.image}
                                    activeOpacity={0.7}
                                />
                            </View>
                            <View style={styles.body}>
                                <Text style={styles.title}>
                                    {I18n.t(['pictos','title'+index])}
                                </Text>

                                {
                                    picto.description.map((description, index2)=> {
                                        return (
                                            <Text style={styles.description} key={index2}>
                                                {
                                                    I18n.t(['pictos', 'description'+index,'d'+index2])
                                                }
                                            </Text>
                                        )
                                    })

                                }

                                <View style={styles.actions}>
                                    <View>
                                    <View style={styles.action}>
                                            <Icon
                                                name='plus-circle'
                                                type='material-community'
                                                size={24}
                                                color='#FFFFFF'
                                                iconStyle={styles.itemIcon}
                                            />
                                            <Text style={styles.titleAction}>
                                                {
                                                    I18n.t('actionsToAvoid')
                                                }
                                            </Text>
                                    </View>
                                    <View style={styles.details}>
                                        {
                                                picto.actions.toAvoid.map((action, indexAction)=>{
                                                    return(
                                                        <View style={[styles.action, styles.actionDetails]} key={index}>
                                                            <Icon
                                                                name='minus-circle'
                                                                type='material-community'
                                                                size={24}
                                                                color='#BE181F'
                                                                iconStyle={styles.itemIcon}
                                                            />
                                                            <Text style={[styles.titleAction, styles.textDetailsAction]}>
                                                                {
                                                                    I18n.t(['pictos', 'actions'+index, 'toAvoid'+index,'a'+indexAction])
                                                                }
                                                            </Text>
                                                        </View>
                                                    )
                                                })

                                            }
                                        </View>
                                    </View>
                                    <View>
                                    <View style={styles.action}>
                                            <Icon
                                                name='plus-circle'
                                                type='material-community'
                                                size={24}
                                                color='#FFFFFF'
                                                iconStyle={styles.itemIcon}
                                            />
                                            <Text style={styles.titleAction}>
                                                {
                                                    I18n.t('actionsCrucial')
                                                }
                                            </Text>
                                    </View>
                                    <View style={styles.details}>
                                        {
                                            picto.actions.toAvoidPrice.map((action, indexAction)=>{
                                                return(
                                                    <View style={[styles.action, styles.actionDetails]} key={index}>
                                                        <Icon
                                                            name='minus-circle'
                                                            type='material-community'
                                                            size={24}
                                                            color='#BE181F'
                                                            iconStyle={styles.itemIcon}
                                                        />
                                                        <Text style={[styles.titleAction, styles.textDetailsAction]}>
                                                            {
                                                                I18n.t(['pictos', 'actions'+index, 'toAvoidPrice'+index,'a'+indexAction])
                                                            }
                                                        </Text>
                                                    </View>
                                                )
                                            })

                                        }
                                    </View>
                                    
                                    </View>
                                </View>
                            </View>
                            {this.paginate(index)}
                        </View>

                        <View style={styles.btnOptions}>
                            <TouchableOpacity
                                style={styles.btnContact}
                                underlayColor='rgba(255, 255, 255, 0.7)'
                                onPress={() =>
                                    this._navigate('Contact')
                                }>
                                    <Text style={styles.textContact}>
                                        {I18n.t('contactUs')}
                                    </Text>
                                    <Icon
                                        name='email'
                                        size={24}
                                        color='#FFF'
                                        type='material-community'
                                        iconStyle={{ margin: 10 }}
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btnSummary}
                                underlayColor='rgba(255, 255, 255, 0.7)'
                                onPress={() =>
                                    this._navigate('Home')
                                }>
                                <Text style={styles.textContact}>
                                    {I18n.t('summary')}
                                </Text>
                                <Icon
                                    name='format-list-bulleted'
                                    size={24}
                                    color='#FFF'
                                    type='material-community'
                                    iconStyle={{ margin: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )
                })}
            </Swiper>
        )
    }


    paginate = (index) => {
        if (index === 0) {
            return (
                <View style={styles.showOthers}>
                    <Card containerStyle={styles.colPicto} wrapperStyle={{ flex: 1 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.avatar}>
                                <TouchableOpacity  
                                    onPress={() => {
                                        this.scrollTo(1, index);
                                    }}>
                                        <Image
                                            source={PICTOS_FR[(index + 1)].icon}
                                            style={styles.imgAvatar}
                                            
                                        />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity  
                                 onPress={() => {
                                    this.scrollTo(1, index);
                                }}>
                            <Text style={styles.titleOthers}>
                                {I18n.t(['pictos','title'+(index+1)])}
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsView}>
                            <TouchableOpacity
                                style={styles.btnDetails}
                                underlayColor='rgba(255, 255, 255, 0.7)'
                                onPress={() => {
                                    this.scrollTo(1, index);
                                }}>
                                <Icon
                                    name='arrow-right'
                                    size={32}
                                    color='#BE181F'
                                    type='material-community'
                                    iconStyle={{ margin: 5 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Card> 
                </View>
            )
        }
        else if (index >= 1 && index <= 8) {
            return (
                <View style={styles.showOthers}>
                    <Card containerStyle={[styles.colPicto, {marginRight: 7.5}]} wrapperStyle={{ flex: 1 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                           
                             <View style={styles.avatar}>
                                <TouchableOpacity  
                                 onPress={() => {
                                    this.scrollTo(-1, index);
                                }}>
                                    <Image
                                        source={PICTOS_FR[(index - 1)].icon}
                                        style={styles.imgAvatar}
                                        
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity  
                                 onPress={() => {
                                    this.scrollTo(-1, index);
                                }}>
                            <Text style={styles.titleOthers}>
                                {I18n.t(['pictos','title'+(index - 1)])}
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsView}>
                            <TouchableOpacity
                                style={styles.btnDetails}
                                underlayColor='rgba(255, 255, 255, 0.7)'
                                onPress={() => {
                                    this.scrollTo(-1, index);
                                }}>
                                <Icon
                                    name='arrow-left'
                                    size={32}
                                    color='#BE181F'
                                    type='material-community'
                                    iconStyle={{ margin: 5 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Card> 
                    <Card containerStyle={[styles.colPicto, {marginLeft: 7.5}]} wrapperStyle={{ flex: 1 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                           
                            <View style={styles.avatar}>
                            <TouchableOpacity  
                                onPress={() => {
                                    this.scrollTo(1, index);
                                }}>
                                <Image
                                    source={PICTOS_FR[(index + 1)].icon}
                                    style={styles.imgAvatar}
                                    
                                />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity  
                                onPress={() => {
                                    this.scrollTo(1, index);
                                }}>
                            <Text style={styles.titleOthers}>
                                {I18n.t(['pictos','title'+(index+1)])}
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsView}>
                            <TouchableOpacity
                                style={styles.btnDetails}
                                underlayColor='rgba(255, 255, 255, 0.7)'
                                onPress={() => {
                                    this.scrollTo(1, index);
                                }}>
                                <Icon
                                    name='arrow-right'
                                    size={32}
                                    color='#BE181F'
                                    type='material-community'
                                    iconStyle={{ margin: 5 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Card> 
                </View>
            )
        }
        else {
            return (
                <View style={styles.showOthers}>
                    <Card containerStyle={styles.colPicto} wrapperStyle={{ flex: 1 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            
                            <View style={styles.avatar}>
                                <TouchableOpacity  
                                onPress={() => {
                                    this.scrollTo(-1, index);
                                }}>
                                    <Image
                                        source={PICTOS_FR[(index - 1)].icon}
                                        style={styles.imgAvatar}
                                        
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity  
                                onPress={() => {
                                    this.scrollTo(-1, index);
                                }}>
                                <Text style={styles.titleOthers}>
                                    {I18n.t(['pictos','title'+(index - 1)])}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsView}>
                            <TouchableOpacity
                                style={styles.btnDetails}
                                underlayColor='rgba(255, 255, 255, 0.7)'
                                onPress={() => {
                                    this.scrollTo(-1, index);
                                }}>
                                <Icon
                                    name='arrow-left'
                                    size={32}
                                    color='#BE181F'
                                    type='material-community'
                                    iconStyle={{ margin: 5 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Card> 
                </View>
            )
        }
    }

    scrollTo = (step, idPicto) => {
        this.refs.swiper.scrollBy(step);
    }

    render() {
       
        return (
            <View style={styles.viewContainer}>
                <StatusBar backgroundColor='#BE181F' barStyle='light-content' />

                {this.buildView()}

                
            </View>
        );

    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    container: {
        flexGrow: 1
    },
    isLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BE181F'
    },
    headerTitle: {
        color: '#fff',
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontWeight: 'bold',
        fontSize: 16
    },
    content: {
        paddingBottom: 20,
    },
    body: {
        padding: 10,
        marginBottom: 30
    },
    title: {
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 22,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#BE181F'
    },
    titleOthers: {
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        lineHeight: 30,
        fontSize: 16,
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        marginBottom: 25
    },
    action: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#BE181F',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        borderRadius: 20
    },
    titleAction: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
    },
    actionDetails: {
        backgroundColor: 'transparent'
    },
    textDetailsAction: {
        color: '#000',
        fontSize: 13,
    },
    details: {
        marginBottom: 20,
        paddingTop: 10,
    },
    showButtons: {
        color: '#BE181F',
        fontSize: 24,
        fontWeight: 'bold'
    },
    showOthers: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    colPicto: {
        flex: 1,
    },
    actionButtonIcon: {
        fontSize: 24,
        height: 24,
        color: 'white',
    },
    btnOptions: {
        flex: 1,
        flexDirection: 'row',
        borderTopColor: '#BE181F',
        borderTopWidth: 2
    },
    btnContact: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BE181F',
        borderRightColor: 'white',
        borderRightWidth: 1
    },
    btnSummary: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BE181F',
        borderLeftColor: 'white',
        borderLeftWidth: 1
    },
    textContact: {
        color: '#FFF',
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 17
    },
    divider: {
        backgroundColor: '#FFF',
        width: 1
    },
    btnDetails: {
        backgroundColor: '#EEE',
        padding: 0,
        borderRadius: 5,
        width: '100%'
    },
    detailsView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: '#EEE', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 110, 
        width: 110, 
        borderRadius: 110
    },
    imgAvatar: {
        resizeMode: resizeMode2,
        width: 70, 
        height: 70
    },
});