
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import CheckSignIn from '../CheckSignIn';
import saveToken from '../../src/api/saveToken';
import getToken from '../../src/api/getToken';
import checkLogin from '../../src/api/checkLogin';
import Global from '../../Globals';

const HomeIcon = "http://"+Global.API+"/server/uploads/icon/home.png";
const ProfileIcon = "http://"+Global.API+"/server/uploads/icon/profile.png";
const EditIcon = "http://"+Global.API+"/server/uploads/icon/edit.png";
const GiftIcon = "http://"+Global.API+"/server/uploads/icon/gift.png";
const InfoIcon = "http://"+Global.API+"/server/uploads/icon/info.png";
const SpecialIcon = "http://"+Global.API+"/server/uploads/icon/star.png";
const PhotoIcon = "http://"+Global.API+"/server/uploads/icon/photo.png";

export default class Shop extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            profileName: 'Chưa đăng nhập'
        }
        CheckSignIn.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(username){
        this.setState({
            isLoggedIn: true,
            profileName: username
        })
    }

    onClickLogOut(){
        this.setState({
            isLoggedIn: false,
            profileName: 'Chưa đăng nhập'
        })
        saveToken('');
    }

    goToProfile(){
        getToken()
        .then(token => checkLogin(token))
        .then(res => {
            console.log(res);
            if(res.token != 'ERROR'){
                this.props.navigation.navigate('Profile',{
                    idAccount: res.id,
                    username: res.username,
                    email: res.email,
                    avatar: res.avatar
                });
            }
            else{
                this.props.navigation.navigate('Login');
            }
        })
        .catch(error => console.log('error at home', error));
    }

    render(){
        
        const logintJSX = (
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={styles.textButton}>Đăng nhập</Text>
            </TouchableOpacity>
        );
        const logoutJSX = (
            <TouchableOpacity style={styles.button} onPress={()=>this.onClickLogOut()}>
                <Text style={styles.textButton}>Đăng xuất</Text>
            </TouchableOpacity>
        );
        const mainJSX = this.state.isLoggedIn ? logoutJSX: logintJSX;
        return(
            <View style={styles.wrapper}>
                <Image source={{uri: ProfileIcon}} style={styles.icon}/>
                <Text style={styles.profileName}>{this.state.profileName}</Text>
                <View>
                    {mainJSX}
                    <View style={styles.iconWrapper}>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={{uri: HomeIcon}} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Trang chủ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.goToProfile()}>
                            <View style={styles.iconContainer}>
                                <Image source={{uri: EditIcon}} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Thành viên</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={{uri: InfoIcon}} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Rạp TLE</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={{uri: SpecialIcon}} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Đặc biệt</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={{uri: GiftIcon}} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Ưu đãi</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={{uri: PhotoIcon}} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Gallery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
            
    };
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1e272e',
        flex: 1,
        borderRightColor: '#2E2E38',
        borderWidth: 2,
        alignItems: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 20
    },
    profileName: {
        marginBottom: 50,
        fontSize: 16,
        marginTop: 10,
        color: '#F66280',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'transparent',
        paddingHorizontal: 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C2C1C5',
        borderTopWidth: 1,
        borderBottomWidth: 1,

    },
    textButton: {
        color: '#fff',
        fontSize: 18,
    },
    iconWrapper: {
        marginTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }, 
    iconContainer: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
});
