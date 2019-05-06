import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image, Alert} from 'react-native';
import Header from './Header';
import Body from './Body/Body';
import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ChooseSeat extends Component{
    constructor(props){
        super(props);
        this.state = {
            total : 0,
            selectedSeats: [],
        }
    }

    updateState(total, selectedSeats){
        this.setState({
            total: total,
            selectedSeats: selectedSeats
        })
    }

    goToCombo(){
        const { total, selectedSeats } = this.state;
        const { navigation } = this.props;
        const movieId = navigation.getParam('movieId', -1);
        const movieName = navigation.getParam('movieName', '');
        const moviePoster = navigation.getParam('moviePoster', '');
        const movieDuration = navigation.getParam('movieDuration', 0);
        const selectedTime = navigation.getParam('selectedTime', '');
        const selectedDate = navigation.getParam('selectedDate', '');

        if(selectedSeats.length == 0){
            Alert.alert(
                'Thông báo',
                'Bạn phải chọn ít nhất 1 ghế',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        }
        else{
            navigation.navigate('ChooseCombo',{
                movieId: movieId,
                movieName: movieName,
                moviePoster: moviePoster,
                movieDuration: movieDuration,
                selectedSeats: JSON.stringify(selectedSeats),
                seatCosts: total,
                selectedTime: selectedTime,
                selectedDate: selectedDate,
                
            })
        }

    }


    render(){
        const { navigation } = this.props;
        const { total, selectedSeats } = this.state;
        
        
        return(
            <View style={styles.wrapper}>
                <ScrollView>
                    <Header navigation= {navigation}/>
                    <Body navigation= {navigation} updateParentState = {this.updateState.bind(this)}/>
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={()=>this.goToCombo()}>
                        <Text style={styles.buttonText}>CHỌN COMBO - ${total}</Text>
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