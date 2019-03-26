
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';

export default class Shop extends Component{

    goToAuthentication(){
        const { navigation } = this.props.navigation;
        navigation.navigate('Detail');
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <Text>Menu Component</Text>
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Authentication')}>
                    <Text>Go to Authencation</Text>
                </TouchableOpacity>
            </View>
        )
            
    };
}
