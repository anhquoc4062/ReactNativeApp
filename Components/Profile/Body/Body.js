import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image, ScrollView} from 'react-native';
import Global from '../../../Globals';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileIcon = "http://"+Global.API+"/server/uploads/icon/profile.png";
import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatarSource: null,
        }
        this.selectImage = this.selectImage.bind(this);
    }
    selectImage(){
      const options = {
        title: 'Select Avatar',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = { uri: response.uri };
  
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
          this.setState({
            avatarSource: source,
          });
        }
      });
           
    } 
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.profileContainer}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.selectImage.bind(this)}>
                    <Image source={this.state.avatarSource!=null ? this.state.avatarSource : {uri: ProfileIcon}} style={styles.icon}/>

                </TouchableOpacity>
            </View>
            <Text style={styles.username}>Anh Quốc</Text>
            <View style={{marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'#F66280'}}>Tổng chi tiêu</Text>
                <Text style={{fontSize: 30, fontWeight:'bold', color:'#C2C1C5'}}>$900</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#2E2E38'}}>
            <Text style={styles.headerText}>Thông tin tài khoản</Text>
        </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>anhquoc4062</Text>
          </View>
          <View style={styles.line}/>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>abc@gmail.com</Text>
          </View>
          <View style={styles.line}/>
          <View style={{backgroundColor: '#2E2E38'}}>
            <Text style={styles.headerText}>Tác vụ</Text>
        </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Thay đổi mật khẩu</Text>
          </View>
          <View style={styles.line}/>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Phim đã đặt</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBox: {
    flexDirection: 'row',
  },
  profileContainer: {
      height: 300, 
      flexDirection: 'column',
      alignItems: 'center',
    },    
  contentContainer: {
    paddingVertical: 20
  },
  username: {marginTop: 10, fontWeight: 'bold', color: '#C2C1C5', fontSize: 25},
  line: {
    borderTopColor:'#2E2E38', 
    borderTopWidth: 1
  },
  text: {
    fontSize: 15, 
    marginTop: 15, 
    marginLeft: 20, 
    marginBottom: 15,
    color: '#C2C1C5'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15, 
    marginLeft: 10, 
    marginBottom: 15,
    color: '#F66280'
  },
  icon: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginTop: 20
    },
});