import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView, TouchableWithoutFeedback,  } from 'react-native-gesture-handler';
import Global from '../../../Globals';


const { width, height } = Dimensions.get("window");

export default class Body extends Component{

    constructor(props){
        super(props);
        this.state = {
            comboData: [],
            total: 0,
            quantity: []
        }
    }
    incQuantity(price, index){
        var quaArr = this.state.quantity;
        quaArr[index] += 1;
        this.setState({
            total: this.state.total+ parseFloat(price),
            quantity: quaArr
        },
            ()=>this.updateParentState(this.state.total)
        )
    }
    descQuantity(price, index){
        var quaArr = this.state.quantity;
        if(quaArr[index]>0){
            quaArr[index] -= 1;
            this.setState({
            total: this.state.total - parseFloat(price),
            quantity: quaArr
            },
                ()=>this.updateParentState(this.state.total)
            )
        }
    }

    componentDidMount(){
        const { navigation } = this.props;
        const seatCosts = navigation.getParam('seatCosts', 0);
        this.setState({
            total: seatCosts
        })
        return fetch('http://'+Global.API+'/server/getcombo.php')
        .then((response) => response.json())
        .then((responseJson) => {
            
            var quaArr = []
            for(var i= 0;i<responseJson.length;i++){
                quaArr[i]=0;
            }
            this.setState({
                comboData: responseJson,
                quantity: quaArr
            })
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    updateParentState(total){
        this.props.updateParentState(total);
    }

    render(){
        const {navigation} = this.props;
        const {comboData} = this.state;
        const {listComboContainer, 
            comboImage, 
            comboItem, 
            comboName, 
            comboPrice, 
            comboDesc,
            comboInfoContainer,
            quantityContainer, 
            quantityView,
            button
        } = styles;
        return(
            <View style={styles.wrapper}>
                <View style={listComboContainer}>
                {comboData.map((item,index) => (
                    <View style={comboItem} key={item.id_combo}>
                        
                        <Image source={{uri: "http://"+Global.API+"/server/uploads/combo/"+item.hinh_combo}} style={comboImage}/>
                        <View style={comboInfoContainer}>
                            <Text style={comboName}>{item.ten_combo}</Text>
                            <Text style={comboPrice}>${item.gia_combo}</Text>
                            <Text style={comboDesc}>{item.mota_combo}</Text>
                            <View style={quantityContainer}>
                                <View style={quantityView}>
                                    <Text>{this.state.quantity[index]}</Text>
                                </View>
                                <TouchableOpacity style={button} onPress={()=>this.descQuantity(item.gia_combo, index)}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={button} onPress={()=>this.incQuantity(item.gia_combo, index)}>
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
                </View>
            </View>
        )
            
    };
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative'
    },
    listComboContainer: {
        justifyContent: 'center'
    },
    comboItem: {
        width: width,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#2E2E38',
        paddingVertical: 20,
    },
    comboImage: {
        height: 110,
        width: 110,
        justifyContent: 'center'
    },
    comboInfoContainer: {
        padding: 5,
        paddingHorizontal: 10,

        justifyContent: 'space-around'
    },
    comboName: {
       fontSize: 17,
       color: '#F66280',
       fontWeight: 'bold',
    },
    comboPrice : {
        fontSize: 15,
       color: '#C2C1C5',
       fontWeight: 'bold',
    },
    comboDesc: {
        fontSize: 13,
        color: '#767680',
        fontWeight: 'bold'
    },
    quantityContainer: {
        flexDirection: 'row',
        paddingTop: 5
    },
    quantityView: {
        backgroundColor: '#C2C1C5',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#C2C1C5',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 3
    }
});