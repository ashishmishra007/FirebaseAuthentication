import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import Firebase from "firebase";
import CurrentUserScreen from "./app/screens/CurrentUserScreen";
// import HomeScreen from "./app/screens/HomeScreenFirebase1";
import SignInScreen from "./app/screens/SignInScreen";
// import OtherScreen from "./app/screens/OtherScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthLoadingScreen from "./app/screens/AuthLoadingScreen";
import styles from "./app/styles/styles";
import HamburgerIcon from "./app/Component/HamburgerIcon";
import LogoutIcon from './app/Component/LogoutIcon';

import { YellowBox } from "react-native";
import UserListScreen from "./app/screens/UserListScreen";
import UserProfile from "./app/screens/UserProfile";
console.ignoredYellowBox = ['Warning:'];
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "Warning:",
  "Setting",
  "[2018"
]);

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated"
]);

// var config = {
//   apiKey: "AIzaSyAOeJ62y2fxgTKt5Dvu1erqhi3DRYd6EF8",
//   authDomain: "rnfirebasedb.firebaseapp.com",
//   databaseURL: "https://rnfirebasedb.firebaseio.com",
//   projectId: "rnfirebasedb",
//   storageBucket: "rnfirebasedb.appspot.com",
//   messagingSenderId: "769120087557",
// };
// Firebase.initializeApp(config);




// Initialize Firebase
var config = {
  apiKey: "AIzaSyArclN3RkTAWrVQRwBMipnqZTzcsBfmStU",
  authDomain: "fir-authentication-81656.firebaseapp.com",
  databaseURL: "https://fir-authentication-81656.firebaseio.com",
  projectId: "fir-authentication-81656",
  storageBucket: "fir-authentication-81656.appspot.com",
  messagingSenderId: "702955549462"
};
Firebase.initializeApp(config);


createDrawerNavigator;
const HomeStackNavigator = createStackNavigator(
  {
    UserList: UserListScreen,
    UserDetails: UserProfile
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
       headerRight: <LogoutIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTitleStyle: { justifyContent: 'space-between',
      textAlign: 'center' },
      headerTintColor: "#fff"
    })
  }
);
const CurrentUserStackNavigator = createStackNavigator(
  {
    CurrentUser: CurrentUserScreen,
    UserDetails: UserProfile
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerRight: <LogoutIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff"
    })
  }
);
const AppStack = createDrawerNavigator(
  // {
  //   CurrentUser: HomeScreen,
  //   UserList: HomeStackNavigator
  // },
  {
    CurrentUser: CurrentUserStackNavigator,
    UserList: HomeStackNavigator
  },
  {
    initialRouteName: "CurrentUser",
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerRight: <LogoutIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff"
    })
  }
);
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  Register: RegisterScreen
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
