import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image} from 'react-native';
//import icBack from '../../src/images/icons/ic_back.png';

const icBack = require('../../src/images/icons/ic_back.png');


const { width, height } = Dimensions.get("window");

export default class Header extends Component{

    render(){
        const {navigation} = this.props;
        return(
            <View style={styles.wrapper}>

                <View style={styles.iconWrapper}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image style={styles.iconStyle} source={icBack}></Image>
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