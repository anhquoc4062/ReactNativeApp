import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class TabBar extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedTab: "home"
        }
    }
    
    render(){
        return(
            <TabNavigator tabBarStyle={{height: 60}}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require("../images/home-unselected.png")} style={{width: 30, height: 30}}/>}
                    renderSelectedIcon={() => <Image source={require("../images/home-selected.png")} style={{width: 30, height: 30}}/>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View style={{flex: 1, backgroundColor: "yellow"}}></View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <View style={{flex: 1, backgroundColor: "red"}}></View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'setting'}
                    title="Setting"
                    onPress={() => this.setState({ selectedTab: 'setting' })}>
                    <View style={{flex: 1, backgroundColor: "blue"}}></View>
                </TabNavigator.Item>
            </TabNavigator>
        )
            
    };
}