import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image} from 'react-native';
// import icMenu from '../../src/images/icons/ic_menu.png';
// import icSearch from '../../src/images/icons/ic_search.png';

const icMenu = require('../../src/images/icons/ic_menu.png');
const icSearch = require('../../src/images/icons/ic_search.png');


const { wHeight } = Dimensions.get("window");

export default class Header extends Component{

    render(){
        return(
            <View style={styles.wrapper}>

                <View style={styles.iconWrapper}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image style={styles.iconStyle} source={icMenu}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconStyle} source={icSearch}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
            
    };
}

const styles = StyleSheet.create({
    wrapper: {
        height : 45,
        backgroundColor: 'transparent',
        padding: 20,
        justifyContent: 'space-around',
        zIndex: 5
    },
    iconWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconStyle: {
        width: 25,
        height: 25
    }

});