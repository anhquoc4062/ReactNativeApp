
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';

export default class Shop extends Component{

    openMenu(){
        const { open } = this.props;
        open();
    }

    render(){
        return(
            <View>
                <Text>Shop Page</Text>
                <TouchableOpacity onPress={this.openMenu.bind(this)}>
                    <Text>Open Menu</Text>
                </TouchableOpacity>
            </View>
        )
            
    };
}
