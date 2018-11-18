
import React, { Component } from 'react';
import {Text, View, Image, TextInput, AsyncStorage, ScrollView,ActivityIndicator,ToastAndroid } from 'react-native';
import { styles } from '../AppStyles/styles';
// import Toast from 'react-native-simple-toast';
// import { handleLogin } from '../database/db';
import SmartLoader, { loader } from "../AppStyles/loader";
import Firebase from 'firebase';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nameErr: '',
      isLoading: false,
    };
  }
  render() {

    //If loading
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   );
    // }
     //If loading
     if (this.state.isLoading) {
      return <SmartLoader />;
    }
    return (
      <View style={styles.container}>
      
        <ScrollView>
        
          {/* <Image style={{
            marginLeft: 134,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center', width: 100, height: 100
          }} source={require('../image/_old.png')}></Image> */}

          <Text style={styles.textLogo}>Login</Text>

          <TextInput style={styles.textInputStyle}
            alignSelf='stretch'
            multiline={false}
            maxLength={40}
            ref="1"
            returnKeyType="next"
            placeholder='Email'
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            blurOnSubmit={false}
            onChangeText={(text) => this.setState({ username: text })}>

          </TextInput>

          <TextInput style={styles.textInputStyle}
            ref={(input) => { this.secondTextInput = input; }}
            placeholder='Password'
            multiline={false}
            maxLength={40}
            blurOnSubmit={true}
            returnKeyType="done"
            secureTextEntry={true}
            alignSelf='stretch'
            onChangeText={(text) => this.setState({ password: text })}></TextInput>

          <Text onPress={this._checkTextInputIsEmptyOrNot} style={styles.loginButtonstyle}>Log in</Text>



          {/* <Button style={styles.loginButtonstyle} title='Login' onPress={this._checkTextInputIsEmptyOrNot}></Button> */}

          {!!this.state.nameError && (
            <Text style={{ color: "#f00", margin: 15 }}>{this.state.nameError}</Text>
          )}

          <Text style={styles.textRegisterButton} onPress={this._navigateToRegister}>New User ? Register here..</Text>



        </ScrollView>
      </View>
    );
  }

 
  _checkTextInputIsEmptyOrNot = () => {

    if (this.state.username.trim() === "") {
      ToastAndroid.show('Email required.', ToastAndroid.SHORT);
      this.setState(() => ({ nameError: "Email required." }));
    } else if (this.state.password.trim() === "") {
      ToastAndroid.show('Password required.', ToastAndroid.SHORT);
      this.setState(() => ({ nameError: "Password required." }));
    } else {
      this.setState(() => ({ nameError: null }));
      // this._callApiForLogin();
      // ToastAndroid.show('handleLogin', ToastAndroid.SHORT);
     this.handleLogin(this.state.username,this.state.password);
    }
  }
  _navigateToRegister = () => {
    this.props.navigation.navigate('Register', { myKey: 'value' });
  }
  handleLogin = (email,password) => {
    // const { email, pasword } = this.state
    this.setState({
      isLoading: true
    });
    Firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    //   .then(async()=> await AsyncStorage.setItem('userToken', 'abc'))
    //   .then(() => prop.navigation.navigate('App'))
      .then(async(data)=>{
        //success callback
        // console.log('data ' , data)
       
        // await AsyncStorage.setItem('userToken', 'abc')
        this.setState({
          isLoading:false,
        })
        this.props.navigation.navigate('App')
       
        
        
    })
    .catch(error => {
      this.setState({
        isLoading: false
      }),
        ToastAndroid.show("" + error, ToastAndroid.SHORT);
    });
    //   .catch(error => this.setState({ errorMessage: error.message }))
  }
}
