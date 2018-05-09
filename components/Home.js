import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar
} from 'react-native';


import { Card, Avatar, Icon } from 'react-native-elements';
import AIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-action-button';
import I18n from '../translations/i18n';
import PICTOS_FR from '../modal/pictos.js';


const resizeMode = 'contain';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictoPart1: [],
            pictoPart2: []
        }
    }

    _navigate = (routeName, params) => {
        this.props.navigation.navigate(routeName, params);
    }

    componentWillMount() {
        this.extractPictos();
    }

    extractPictos() {
        let part1 = [], part2 = [];
        PICTOS_FR.forEach(function (picto, index) {
            if (index % 2 === 0) {
                part1.push(picto);
            }
            else {
                part2.push(picto);
            }
        });
        this.setState({
            part1: part1,
            part2: part2
        });
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <StatusBar backgroundColor='#BE181F' barStyle='light-content' />
                <ScrollView style={styles.container}>
                    <View style={styles.content}>
                        {
                            this.state.part1.map((picto, index) => {
                                return (
                                    <View style={styles.rowPicto} key={index}>
                                        <Card containerStyle={[styles.colPicto, {marginRight: 7.5}]} wrapperStyle={{ flex: 1 }}>
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={styles.avatar}>
                                                    <TouchableOpacity onPress={() => {
                                                        this._navigate('PictoDetails', { idPicto: index * 2 })
                                                    }}>
                                                        <Image
                                                            source={picto.icon}
                                                            style={styles.imgAvatar}

                                                        />
                                                    </ TouchableOpacity>
                                                </View>
                                                <TouchableOpacity onPress={() => {
                                                    this._navigate('PictoDetails', { idPicto: index * 2 })
                                                }}>
                                                    <Text style={styles.title}>
                                                        {I18n.t(['pictos', 'title' + index * 2])}
                                                    </Text>
                                                </ TouchableOpacity>
                                            </View>
                                            <View style={styles.detailsView}>
                                                <TouchableOpacity
                                                    style={styles.btnDetails}
                                                    underlayColor='rgba(255, 255, 255, 0.7)'
                                                    onPress={() => {
                                                        this._navigate('PictoDetails', { idPicto: index * 2 })
                                                    }}>
                                                    <Icon
                                                        name='eye'
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
                                                            this._navigate('PictoDetails', { idPicto: ((index * 2) + 1) })
                                                        }}>
                                                        <Image
                                                            source={this.state.part2[index].icon}
                                                            style={styles.imgAvatar}

                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        this._navigate('PictoDetails', { idPicto: ((index * 2) + 1) })
                                                    }}>
                                                    <Text style={styles.title}>
                                                        {I18n.t(['pictos', 'title' + ((index * 2) + 1)])}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.detailsView}>
                                                <TouchableOpacity
                                                    style={styles.btnDetails}
                                                    underlayColor='rgba(255, 255, 255, 0.7)'
                                                    onPress={() => {
                                                        this._navigate('PictoDetails', { idPicto: ((index * 2) + 1) })
                                                    }}>
                                                    <Icon
                                                        name='eye'
                                                        size={32}
                                                        color='#BE181F'
                                                        type='material-community'
                                                        iconStyle={{ margin: 5 }}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </Card>
                                    </View>
                                );
                            })
                        }
                    </View>
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
                            color='#FFFFFF'
                            type='material-community'
                            iconStyle={{ margin: 10 }}
                        />
                    </TouchableOpacity>
                </ScrollView>
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
    headerTitle: {
        color: '#fff',
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontWeight: 'bold',
        fontSize: 16
    },
    content: {
        paddingBottom: 60
    },
    rowPicto: {
        flex: 1,
        flexDirection: 'row',
    },
    colPicto: {
        flex: 1,
        width: '50%',
    },
    title: {
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    actionButtonIcon: {
        fontSize: 24,
        height: 24,
        color: 'white'
    },
    btnDetails: {
        backgroundColor: '#EEE',
        padding: 0,
        borderRadius: 5,
        width: '100%'
    },
    btnContact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BE181F',
    },
    textContact: {
        color: '#FFF',
        fontFamily: 'Myriad Pro,Helvetica,Arial,sans-serif',
        fontSize: 17
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
        borderRadius: 110,
        padding: 10
    },
    imgAvatar: {
        resizeMode,
        width: 70,
        height: 70
    },
});





