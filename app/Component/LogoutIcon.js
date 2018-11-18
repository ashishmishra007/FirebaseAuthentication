import React, { Component } from 'react';
import { View, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { styles } from '../AppStyles/styles';
import Firebase from "firebase";

export default class LogoutIcon extends Component {

  _signOutAsync_ = async () => {

    try {
      await AsyncStorage.clear();
    Firebase.auth().signOut();
    this.props.navigation.navigate('Auth');
    } catch (error) {
      console.log("error >");
      console.log(error);
    }

  };

  // onPress={this._signOutAsync_()
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {/* <TouchableOpacity  >
          <Image style={{
            tintColor: '#fff', width: 25, height: 25, marginRight: 5
          }} source={require('./image/ic_logout.png')}></Image>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            //    AsyncStorage.clear().then(()=>
            //    this.props.navigation.navigate('Auth')
            //  ).catch((err)=>{
            //      console.log("ERROR", err)
            //  })
           this. _signOutAsync_();

          }}>
          <Image style={{
            tintColor: '#fff', width: 25, height: 25, marginRight: 5
          }} source={require('../images/ic_logout.png')}>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }
 
}