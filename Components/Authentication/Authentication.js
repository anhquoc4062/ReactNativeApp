
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';

export default class Authentication extends Component{

    render(){
        return(
            <View>
                <Text>Authentication Page</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Text>Go back to Home</Text>
                </TouchableOpacity>
            </View>
        )
            
    };
}
