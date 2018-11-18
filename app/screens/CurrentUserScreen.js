import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  ToastAndroid,
  Button,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  YellowBox,
} from 'react-native';
import Firebase from "firebase";
// import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import styles from '../styles/styles';
import HamburgerIcon from "../Component/HamburgerIcon";

export default class CurrentUserScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: "",
      email: "",
      firstname: "",
      lastname: ""
    };

    //To ignore warnigns YellowBox is used.
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated"
    ]);
  }
  static navigationOptions = {
    title: "Current User"
  };

  componentDidMount() {
    // this._readUserDataFromFirebaseConsole();
    this.readUserData();
  }

  readUserData() {

    const cUser = Firebase.auth().currentUser;
    this.setState({ isLoading: true });
    var ref = Firebase.database().ref("Users");
    var query = ref.orderByChild("email").equalTo(cUser.email);
    query.once("value", snapshot => {
      snapshot.forEach(child => {
        this.setState({
          firstname: child.val().firstname,
          lastname: child.val().lastname,
          email: child.val().email,
          isLoading: false
        });

        // console.log(child.key, child.val().bio);
      });

    });

  }


  render() {


    //If loading
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      // <View style={styles.container}>
      // <View style={styles.MainContainer}>
      <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}>
        {/* <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}

        <Text style={styles.textRegister}>{'First Name: ' + this.state.firstname}</Text>
        <Text style={styles.textRegister}>{'Last Name: ' + this.state.lastname}</Text>
        <Text style={styles.textRegister}>{'Email: ' + this.state.email}</Text>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    Firebase.auth().signOut();
    this.props.navigation.navigate('Auth');
  };
}