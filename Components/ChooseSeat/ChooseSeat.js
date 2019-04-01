import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image} from 'react-native';
import Header from './Header';
import { ScrollView } from 'react-native-gesture-handler';
import Body from './Body/Body';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ChooseSeat extends Component{

    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('movieId', -1);
        return(
            <View style={styles.wrapper}>
                <ScrollView>
                    <Header navigation= {navigation}/>
                    <Body navigation= {navigation}/>
                </ScrollView>
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>THANH TOÁN - 0$</Text>
                    </TouchableOpacity>
            </View>
            
            
        )
            
    };
}

const imageWidth = width;
const imageHeight = (imageWidth/ 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1D1D27',

    },
    button: {
        height: 55,
        backgroundColor: '#F66280',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#C2C1C5'
    }

});