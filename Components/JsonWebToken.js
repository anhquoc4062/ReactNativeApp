import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class MainComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            result: "Not login",
            token: "..."
        }
    }

    login(){
        fetch('http://192.168.1.94:81/server/taoToken.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                USERNAME: this.state.username,
                PASSWORD: this.state.password,
            }),

        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            if(responseJson.token != "ERROR"){
                this.setState({
                    result: "Login success",
                    token: responseJson.token
                })
            }
            else{
                this.setState({
                    result: "Login failed",
                    token: responseJson.token
                })
            }
            
        })
        .catch((error)=>(console.log(error)));
    }
    
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#34495e', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    Json Webtoken tutorial
                </Text>
                <Text style={styles.box}>Username</Text>
                <TextInput style={styles.input} onChangeText={(username) => this.setState({username})} value={this.state.username}>

                </TextInput>
                <Text style={styles.box}>Password</Text>
                <TextInput style={styles.input} onChangeText={(password) => this.setState({password})} value={this.state.password}>

                </TextInput>
                <TouchableOpacity style={styles.button} onPress={this.login.bind(this)}>
                    <Text style={styles.box}>Login</Text>
                </TouchableOpacity>
                <Text style={{color: '#c0392b'}}>{this.state.result}</Text>

                <Text style={{color: '#27ae60'}}>{this.state.token}</Text>
            </View>
        )
            
    };
}

const styles = StyleSheet.create({
    box:{
        color: 'white'
    },
    input:{
        backgroundColor: 'white',
        width: 200
    },
    button:{
        width: 200,
        backgroundColor: '#9b59b6',
        alignItems: 'center',
        padding: 20,
        margin: 20
    }

});