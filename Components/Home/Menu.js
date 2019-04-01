
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import ProfileIcon from '../../src/images/icons/profile.png';
import HomeIcon from '../../src/images/icons/home.png';
import EditIcon from '../../src/images/icons/edit.png';
import GiftIcon from '../../src/images/icons/gift.png';
import InfoIcon from '../../src/images/icons/info.png';
import SpecialIcon from '../../src/images/icons/info.png';
import PhotoIcon from '../../src/images/icons/info.png';

export default class Shop extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            profileName: 'Chưa đăng nhập'
        }
    }

    render(){
        
        const logintJSX = (
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Authentication')}>
                <Text style={styles.textButton}>Đăng nhập</Text>
            </TouchableOpacity>
        );
        const logoutJSX = (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Đăng xuất</Text>
            </TouchableOpacity>
        );
        const mainJSX = this.state.isLoggedIn ? logoutJSX: logintJSX;
        return(
            <View style={styles.wrapper}>
                <Image source={ProfileIcon} style={styles.icon}/>
                <Text style={styles.profileName}>{this.state.profileName}</Text>
                <View>
                    {mainJSX}
                    <View style={styles.iconWrapper}>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={HomeIcon} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Trang chủ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={EditIcon} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Thành viên</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={InfoIcon} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Rạp TLE</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={SpecialIcon} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Đặc biệt</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={GiftIcon} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Ưu đãi</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.iconContainer}>
                                <Image source={PhotoIcon} style={{height: 30, width: 30}}/>
                                <Text style={{textAlign: 'center', fontSize: 13, fontWeight: 'bold', marginTop: 5, color: '#fff'}}>Gallery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
            
    };
}

/*<TouchableOpacity onPress={()=>this.props.navigation.navigate('Authentication')}>
                    <Text>Go to Authencation</Text>
                </TouchableOpacity>*/

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
