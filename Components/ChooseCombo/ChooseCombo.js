import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions, Image} from 'react-native';
import Header from '../ChooseCombo/Header';
import Body from './Body/Body';
import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ChooseCombo extends Component{
    constructor(props){
        super(props);
        this.state = {
            total: 0
        }
    }
    componentDidMount(){
        const { navigation } = this.props;
        const seatCosts = navigation.getParam('seatCosts', 0);
        this.setState({
            total: seatCosts
        })
    }
    updateState (total) {
        this.setState({
            total: total
        })
    }
    render(){
        const { navigation } = this.props;
        
        const {total} = this.state;
        return(
            <View style={styles.wrapper}>
                <ScrollView>
                    <Header navigation= {navigation}/>
                    <Body navigation= {navigation} updateParentState={this.updateState.bind(this)}/>
                    
                </ScrollView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>THANH TOÁN - ${total}</Text>
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