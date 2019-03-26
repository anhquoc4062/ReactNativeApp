// eslint-disable-next-line react/require-extension
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';


export default class SideMenu extends Component{
    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };

    render(){
        return(
            <Drawer

                ref={(ref)=> this._drawer=ref}
                openDrawerOffset={0.3}
                tapToClose={true}
                content={
                    <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
                }
            >
                <View style={{flex: 1, backgroundColor: 'red', padding: 50}}>
                    <TouchableOpacity onPress={this.openControlPanel}>
                        <Text>Open</Text>
                    </TouchableOpacity>
                </View>
            </Drawer>
        )
            
    };
}