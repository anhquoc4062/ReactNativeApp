import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TouchableWithoutFeedback,  } from 'react-native-gesture-handler';
import Global from '../../../Globals';


const { width, height } = Dimensions.get("window");

export default class Body extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    updateParentState(total){
        this.props.updateParentState(total);
    }

    render(){
        const {navigation} = this.props;
        const {
            wrapper
        } = styles;
        return(
            <View style={wrapper}>
               
            </View>
        )
            
    };
}

const styles = StyleSheet.create({
    wrapper: {
        
    }
});