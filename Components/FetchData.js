import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ListView, ActivityIndicator, Image, RefreshControl, Alert } from 'react-native';
import { tsConstructorType } from '@babel/types';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      page: 1,
      refreshing: false,
      isLoading: true
    }
  }

  loadMore(){
    this.setState({
      refreshing: true
    });
    return fetch('http://192.168.1.94:81/server/getphimtheotheloai.php?page='+(this.state.page+1))
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.length != 0){
          mang = mang.concat(responseJson)
          this.setState({
            refreshing: false,
            isLoading: false,
            dataSource: this.state.dataSource.concat(responseJson),
            page: this.state.page+1
          }, function(){});

        }
        else{
          Alert.alert(
            'THÔNG BÁO',
            'Đã hết dữ liệu',
            [
              {text: 'OK', onPress: ()=> console.log("OK pressed")}
            ]
          )
          this.setState({
            refreshing: false
          }, function(){});

        }
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing = {this.state.refreshing}
              onRefresh={this.loadMore.bind(this)}
            />
          }
          data={this.state.dataSource}
          renderItem={({item}) => 
            <View style={{padding: 20, borderColor:'black', borderBottomWidth: 2}}>
            <Image
              style={{width: 130, height: 200}}
              source={{uri: "http://192.168.1.94:81/server/uploads/poster/"+item.hinh_phim}}
            />
              <Text>{item.id_phim}.....{item.ten_phim}</Text>
            </View>
          }
        />
      </View>
    );
  }

  componentDidMount(){
    return fetch('http://192.168.1.94:81/server/getphimtheotheloai.php?page='+this.state.page)
      .then((response) => response.json())
      .then((responseJson) => {
        mang = responseJson
        this.setState({
          isLoading: false,
          dataSource: mang,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})