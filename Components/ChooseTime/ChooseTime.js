import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image} from 'react-native';
import Header from '../ChooseSeat/Header';
import Body from './Body/Body';
import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ChooseTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTime : "",
            selectedDate: ""
        }
    }
    updateState (selectedDate, selectedTime) {
        this.setState({
            selectedTime : selectedTime,
            selectedDate: selectedDate
        });
    }
    render(){
        const { navigation } = this.props;
        const {selectedDate, selectedTime} = this.state;
        const movieId = navigation.getParam('movieId', -1);
        const movieName = navigation.getParam('movieName', '');
        return(
            <View style={styles.wrapper}>
                <ScrollView>
                    <Header navigation= {navigation}/>
                    <Body navigation= {navigation} updateParentState={this.updateState.bind(this)}/>
                    
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ChooseSeat',{
                    movieId: movieId,
                    movieName: movieName,
                    selectedTime: selectedTime,
                    selectedDate: selectedDate
                })}>
                        <Text style={styles.buttonText}>CHỌN GHẾ</Text>
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