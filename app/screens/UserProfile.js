import React, { Component } from 'react';
import { View, Text, AsyncStorage, YellowBox, ScrollView } from 'react-native';
import { styles } from '../AppStyles/styles';

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
      dateofbirth: '',
      nameErr: '',
      gender: '',
      type: '',
      social_id: '',
      social_img: '',
    }

    //To ignore warnigns YellowBox is used.
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }
  static navigationOptions = {
    title: "User Details"
  };
  // Render any loading content that you like here
  render() {

    const { navigation } = this.props;
    const item = navigation.getParam('itemDetails', 'default');

    return (

      // <View style={styles.MainContainer}>
      // <View>
      <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}>
        <Text style={styles.textRegister}>{'Firstname: ' + item.firstname}</Text>
        <Text style={styles.textRegister}>{'Lastname: ' + item.lastname}</Text>
        <Text style={styles.textRegister}>{'Email: ' + item.email}</Text>
        {/* <Text style={styles.textRegister}>{'Password: ' + item.password}</Text> */}

      </View>

    );
  }

}

