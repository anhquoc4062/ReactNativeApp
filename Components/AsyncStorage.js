import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';

export default class SideMenu extends Component{

    save = async()=>{
        try{
            await AsyncStorage.setItem("@AAA:key", "GIÁ TRỊ ĐƯỢC LƯU");
            console.log("saved");
        }
        catch(e){
            console.log(e);
        }
    }

    get = async()=>{
        try{
            var v = await AsyncStorage.getItem("@AAA:key");
            console.log(v);
        }
        catch(e){
            console.log(e);
        }
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.button} onPress={this.save}>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.get}>
                    <Text style={styles.text}>Get</Text>
                </TouchableOpacity>
            </View>
        )
            
    };
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'yellow'
    },
    button:{
        padding: 20,
        marginBottom: 20,
        borderColor: 'yellow',
        borderWidth: 1,
        width: 200,
        alignItems: 'center',
    }
});