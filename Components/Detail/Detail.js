import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Detail extends Component{

    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('movieId', -1);
        return(
            <View style={styles.wrapper}>
                <Text>Detail Component of {itemId}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ChooseTime',
                {
                    movieId: itemId
                })}>
                    <Text>Go to ChooseTime Component</Text>
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
        backgroundColor: 'green',
    }

});