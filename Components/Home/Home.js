
import React, {Component} from 'react';
import Drawer from 'react-native-drawer';
import {TouchableOpacity, Text} from 'react-native';
import Shop from './Shop';
import Menu from './Menu';

export default class Main extends Component{

    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };
    render(){

        const {navigation} = this.props;
        return(
            <Drawer
                ref={(ref)=> this._drawer=ref}
                openDrawerOffset={0.3}
                tapToClose={true}
                content={
                    <Menu navigation={navigation}/>
                }
            >
                <Shop open={this.openControlPanel}/>
            </Drawer>
        )
            
    };
}
