import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  Text,
  View
} from "react-native";
import styles from "../styles/styles";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Firebase from "firebase";
// import styles from './app/styles/styles';
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setState={
      islogin:false,
    }
    // Firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     this.setState={islogin:true}
    //     // User is signed in.
    //     // this._bootstrapAsync();
    //   } else {
    //     this.setState={islogin:false}
    //     // AsyncStorage.clear();
    //     // this._bootstrapAsync();
    //     // _navigateToRegister();
    //     // // No user is signed in.
    //     // this.props.navigation.navigate ('Auth');
    //   }
    // });
    // this.props.navigation.navigate ('Auth');

    // this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
   _bootstrapAsync = async () => {
    // Firebase.auth().onAuthStateChanged(function(user) {
    // if (user) {
    //   // User is signed in.

    // } else {
    //   // No user is signed in.
    //   await AsyncStorage.clear();
    // }
    //   if (!user) {
    //     // User is signed in.
    //     await AsyncStorage.clear();
    //   } else{
    //     const userToken = await AsyncStorage.getItem('userToken');

    // // This will switch to the App screen or Auth screen and this loading
    // // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    //   }
    // });
// if(islogin){
//   const userToken = await AsyncStorage.getItem("userToken");

//   // // This will switch to the App screen or Auth screen and this loading
//   // // screen will be unmounted and thrown away.
//   this.props.navigation.navigate(userToken ? "App" : "Auth");
// }else{
//   AsyncStorage.clear();
//   this.props.navigation.navigate(userToken ? "App" : "Auth");
// }
    const userToken = await AsyncStorage.getItem("userToken");

    // // // This will switch to the App screen or Auth screen and this loading
    // // // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };
 
 

  // }
  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      
      // ToastAndroid.show("Email required. "+user.firstname, ToastAndroid.SHORT);
      this.props.navigation.navigate(user ? "App" : "Auth")
    })
  }
  

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>Loading</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
