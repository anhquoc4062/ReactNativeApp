import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Button} from 'react-native';

export default class MainComponent extends Component{

    
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    All Component
                </Text>
                <TouchableOpacity style ={{backgroundColor: '#8e44ad', padding: 20, margin: 10}} onPress={()=>this.props.navigation.navigate('TabBar')}>
                    <Text style={{color: 'white'}}>TabBar</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{backgroundColor: '#8e44ad', padding: 20, margin: 10}} onPress={()=>this.props.navigation.navigate('JsonWebToken')}>
                    <Text style={{color: 'white'}}>JsonWebtoken</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{backgroundColor: '#8e44ad', padding: 20, margin: 10}} onPress={()=>this.props.navigation.navigate('SideMenu')}>
                    <Text style={{color: 'white'}}>SideMenu</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{backgroundColor: '#8e44ad', padding: 20, margin: 10}} onPress={()=>this.props.navigation.navigate('AsyncStorage')}>
                    <Text style={{color: 'white'}}>AsyncStorage</Text>
                </TouchableOpacity>
            </View>
        )
            
    };
}

const styles = StyleSheet.create({
});