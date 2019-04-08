import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView, TouchableWithoutFeedback,  } from 'react-native-gesture-handler';
import Global from '../../../Globals';


const { width, height } = Dimensions.get("window");

export default class Body extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {

        } = styles;
        return(
            <View style={styles.wrapper}>
                
            </View>
        )
            
    };
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative'
    },
});