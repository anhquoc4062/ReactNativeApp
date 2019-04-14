import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image} from 'react-native';


import Swiper from 'react-native-swiper';

//import Slide1 from '../../../src/images/slides/hobbit-wide-banner_02.jpg';
//import Slide2 from '../../../src/images/slides/inception_movie_poster_banner_04.jpg';
//import Slide3 from '../../../src/images/slides/twilight-movie-wide.jpg';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Slide1 = require('../../../src/images/slides/hobbit-wide-banner_02.jpg');
const Slide2 = require('../../../src/images/slides/inception_movie_poster_banner_04.jpg');
const Slide3 = require('../../../src/images/slides/twilight-movie-wide.jpg');

export default class ViewSwiper extends Component{

    render(){
        return(
            <View style={styles.wrapper}>
                <Swiper activeDotColor='#ffffff' dotStyle={{borderColor:'white', borderWidth: 1 }}>
                    <Image source={Slide1} style={styles.banner}></Image>
                    <Image source={Slide2} style={styles.banner}></Image>   
                    <Image source={Slide3} style={styles.banner}></Image>
                </Swiper>
            </View>
            
        )
            
    };
}

const imageWidth = width;
const imageHeight = (imageWidth/ 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: 190
    },

    banner: {
        width: imageWidth,
        resizeMode: "contain",
        height: imageHeight,
    }
    

});