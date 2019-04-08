import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import YouTube from 'react-native-youtube';
import Global from '../../Globals';
import PlayIcon from '../../src/images/icons/play.png';

export default class Detail extends Component {

  constructor(props){
    super(props);
    this.state = {
      movie: [],
      fullscreen: false
    }
  }

  playVideo(){
    this.setState({
      fullscreen: true
    })
    console.log("Pressed");
  }

  componentDidMount(){
    const { navigation } = this.props;
    const movieId = navigation.getParam('movieId', 6);
    console.log(movieId);
    fetch("http://"+Global.API+"/server/getphimtheoid.php", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idphim: movieId,
                id_phim: 6
            }),

        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
              movie: responseJson
            })
            
        })
        .catch((error)=>(console.log(error)));
  }

  render() {
    return (
        this.state.movie.map(item=>(
          <View style={styles.container} key={item.id_phim}>
            <ScrollView contentContainerStyle={{paddingVertical: 20}}>
            <View>
            
              <YouTube
                  videoId={item.trailer_phim}   // The YouTube video ID
                  play={this.state.fullscreen}
                  controls={1}
                  fullscreen={this.state.fullscreen}
                  apiKey = "AIzaSyCL6075y1oyVdXaqIVKBIIs7vnQ5ILtVF8"
                  onReady={e => this.setState({ isReady: true })}
                  onChangeState={e => this.setState({ status: e.state })}
                  onChangeQuality={e => this.setState({ quality: e.quality })}
                  onError={e => this.setState({ error: e.error })}
                  style={{ alignSelf: 'stretch', height: 200, position: 'relative', top:-20}}
                  />
                  
            
            <TouchableOpacity style={styles.playButton} onPress={()=>this.playVideo()}>
                <Image source={PlayIcon} style={{width: 50, height: 50}} />
                
            </TouchableOpacity>
            </View>
            
            <View style={{paddingLeft: 15}}>
              <Text style={{fontSize: 18, fontWeight: "bold", color: '#C2C1C5'}}>{item.ten_phim}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={{flexDirection: 'row'}}>
              <Image style={{  margin: 20, width: 140, height: 200}} source={{uri: "http://"+Global.API+"/server/uploads/poster/"+item.hinh_phim}}/>
              <View style={styles.txtContainer}>
                <Text style={styles.txtFont2}><Text style={styles.txtFont3}>Thời lượng:</Text> {item.thoiluong_phim} phút</Text>
                <Text style={styles.txtFont2}><Text style={styles.txtFont3}>Đạo diễn:</Text> James Wang</Text>
                <Text style={styles.txtFont2}><Text style={styles.txtFont3}>Ngôn ngữ:</Text> Tiếng Anh</Text>
                <Text style={styles.txtFont2}><Text style={styles.txtFont3}>Khởi chiếu:</Text> 20/6/2019</Text>
              </View>
            </View>
            <View style={styles.line}></View>
            <View>
              <Text style={{ color: '#F66280', fontSize: 18, fontWeight: 'bold', margin: 20,}}>MÔ TẢ PHIM</Text>
              <Text style={{color: '#C2C1C5', margin: 20,}}>
                {item.mota}
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.boxButton} onPress={()=>this.props.navigation.navigate('ChooseTime',{
              'movieId': item.id_phim,
              'movieName': item.ten_phim,
              'movieBanner': item.banner_phim,
              
            }
          )}>
              <Text style={{color: '#C2C1C5', fontWeight: 'bold',fontSize: 18}}>ĐẶT VÉ</Text>
          </TouchableOpacity>
          
        </View>
        ))
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d27',
    flexDirection: 'column',
  },
  playButton:{
    position: 'relative',
    top: -150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50,
  },
  boxButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F66280',
  },
  txtFont2: {
    color: '#C2C1C5',
    fontSize: 15,
    fontWeight: 'bold'
  },
  txtFont3: {
    color: '#F66280',
    fontSize: 15,
    fontWeight: 'bold',
  },
  txtContainer: {
    flexDirection: 'column',
    marginTop: 15,
    height: Dimensions.get("window").height/4,
    justifyContent: 'space-around'
  },
  line: {
    borderColor: '#2E2E38',
    borderTopWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    margin: 10
  }
});