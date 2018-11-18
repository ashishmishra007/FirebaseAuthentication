import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  AsyncStorage,
  ToastAndroid,
  ActivityIndicator,
  Alert,
  Modal
} from "react-native";
import { styles } from "../AppStyles/styles";
import SmartLoader, { loader } from "../AppStyles/loader";
// import Toast from 'react-native-simple-toast';
// import { addUser } from '../database/db';
// import { handleSignUp } from '../database/db';
// import Spinner from './Spinner';
import Firebase from "firebase";
import DialogManager, { ScaleAnimation } from 'react-native-dialog-component';
// import DialogManager, { ScaleAnimation, DialogContent } from 'react-native-dialog-component';
import Dialog, { DialogButton, DialogContent } from 'react-native-popup-dialog';
import { ConfirmDialog } from 'react-native-simple-dialogs';
export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: "Sign Up",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
      dateofbirth: "",
      nameErr: "",
      gender: "",
      type: "",
      social_id: "",
      social_img: "",
      isLoading: false
    };
  }
  // takePicture() {
  //   this.camera.capture()
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  // }
  //   renderButtonOrSpinner() {
  //     if (this.state.isLoading) {
  //         return <Spinner />;
  //     }
  //    // return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
  // }
  render() {
    //If loading
    if (this.state.isLoading) {
      return <SmartLoader />;
    }

    return (
      <ScrollView>
        {/* <OfflineNotice/> */}
        <View style={styles.container}>
          <Text style={styles.textLogo}>RegisterScreen</Text>

          <TextInput
            style={styles.textInputStyle}
            multiline={false}
            maxLength={40}
            alignSelf="stretch"
            blurOnSubmit={false}
            ref="1"
            returnKeyType="next"
            placeholder="First Name"
            onSubmitEditing={() => {
              this.Lastname.focus();
            }}
            onChangeText={text => this.setState({ firstname: text })}
          />

          <TextInput
            style={styles.textInputStyle}
            ref={input => {
              this.Lastname = input;
            }}
            multiline={false}
            maxLength={40}
            returnKeyType="next"
            placeholder="Last Name"
            alignSelf="stretch"
            onSubmitEditing={() => {
              this.email.focus();
            }}
            onChangeText={text => this.setState({ lastname: text })}
          />

          <TextInput
            style={styles.textInputStyle}
            ref={input => {
              this.email = input;
            }}
            returnKeyType="next"
            placeholder="Email"
            textInputStyle="email"
            multiline={false}
            onSubmitEditing={() => {
              this.password.focus();
            }}
            maxLength={40}
            alignSelf="stretch"
            onChangeText={text => this.setState({ email: text })}
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="Password"
            secureTextEntry={true}
            ref={input => {
              this.password = input;
            }}
            onSubmitEditing={() => {
              this.confirmpassword.focus();
            }}
            returnKeyType="next"
            alignSelf="stretch"
            multiline={false}
            maxLength={40}
            onChangeText={text => this.setState({ password: text })}
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="Confirm Password"
            textInputStyle="password"
            secureTextEntry={true}
            returnKeyType="done"
            ref={input => {
              this.confirmpassword = input;
            }}
            multiline={false}
            maxLength={40}
            alignSelf="stretch"
            onChangeText={text => this.setState({ confirmpassword: text })}
          />

          <Text onPress={this._validateSignUp} style={styles.loginButtonstyle}>
            Create Account
          </Text>

          <Text style={styles.textLogin} onPress={this._navigateToRegister}>
            Log in
          </Text>
          <ConfirmDialog
                    title="Terms and Conditions"
                    message="I agree to and accept that we will collect, make automatic decisions about, analyze and catalog information about Internet electronic addresses which have connected with the device I have used,for the purpose of determining my Internet activities (the user profile).

                    "
                    onTouchOutside={ () => this.showAggrementDialog(false) }
                    visible={ this.state.showConfirm }
                    negativeButton={
                        {
                            title: "Disagree",
                            onPress:()=>{ this.optionNo,this.showAggrementDialog(false)},
                            // disabled: true,
                            titleStyle: {
                                color: "blue",
                                colorDisabled: "aqua",
                            },
                            style: {
                                backgroundColor: "transparent",
                                backgroundColorDisabled: "transparent",
                            },
                        }
                    }
                    positiveButton={
                        {
                            title: "Agree",
                            // onPress: this.optionYes,
                            onPress: () =>{this.optionYes,this.showAggrementDialog(false),this.handleSignUp()},
                                                 }
                    }
                />
        </View>
      </ScrollView>
    );
  }

  _validateEmailAddress = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      //  this.setState({ email: text })
      return false;
    } else {
      return true;
      // this.setState({ email: text })
      console.log("Email is Correct");
    }
  };

  _navigateToRegister = () => {
    this.props.navigation.navigate("SignIn");
  };
  _validateSignUp = () => {
    if (this.state.firstname.trim() === "") {
      ToastAndroid.show("Firstname required.", ToastAndroid.SHORT);
    } else if (this.state.lastname.trim() === "") {
      ToastAndroid.show("Lastname required.", ToastAndroid.SHORT);
    } else if (this.state.email.trim() === "") {
      ToastAndroid.show("Email required.", ToastAndroid.SHORT);
    } else if (!this._validateEmailAddress(this.state.email.trim())) {
      ToastAndroid.show(
        "Please, Enter valid email address.",
        ToastAndroid.SHORT
      );
    } else if (this.state.password.trim() === "") {
      ToastAndroid.show("Password required.", ToastAndroid.SHORT);
    }
    // else if (!this._validatePassword(this.state.password.trim())) {
    //   ToastAndroid.show('Your password must be at least 6 characters.', ToastAndroid.SHORT);
    // }
    else if (this.state.confirmpassword.trim() === "") {
      ToastAndroid.show("Confirm Password required.", ToastAndroid.SHORT);
    }
    //  else if (this.state.dateofbirth.trim() === "") {
    //   ToastAndroid.show('Birth date required.', ToastAndroid.SHORT);
    // }
    else {
      // ToastAndroid.show('Registering, Please wait...', ToastAndroid.SHORT);
      //   this._callApiForRegistration();

      // this.handleSignUp(
      //   this.state.firstname,
      //   this.state.lastname,
      //   this.state.email,
      //   this.state.password
      // );
      

      // this.showAggrementDialog();
      this.showAggrementDialog(true)
    }
  };
  showAggrementDialog = (show) => {
    this.setState({ showConfirm: show });
}

  // showAggrementDialog = () => {
  //   <ConfirmDialog
  //     title="Confirm Dialog"
  //     message="Are you sure about that?"
  //     visible={this.state.dialogVisible}
  //     onTouchOutside={() => this.setState({ dialogVisible: false })}
  //     positiveButton={{
  //       title: "YES",
  //       onPress: () => alert("Yes touched!")
  //     }}
  //     negativeButton={{
  //       title: "NO",
  //       onPress: () => alert("No touched!")
  //     }}
  //   />
  // }
  addUser = () => {
    Firebase.database()
      .ref("Users/")
      .push({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      }).then((data) => {
        //success callback
        // console.log('data ', data)
        // ToastAndroid.show("Data Saved Successfully", ToastAndroid.LONG);

        this.setState({
          isLoading: false,
        })
        Firebase.auth().signOut();
        this.props.navigation.navigate('Auth')
        // this.props.navigation.navigate('SignIn')
        
      })
      //.catch(error => ToastAndroid.show("" + error, ToastAndroid.SHORT));
      .catch(error => {
        this.setState({
          isLoading: false
        })
        // ToastAndroid.show("" + error, ToastAndroid.SHORT);
        switch (error.code) {
          case 'auth/wrong-password':
            Alert.alert(
              'invalid Password ')
            break;

          case 'auth/invalid-email':
            Alert.alert(
              'invalid Email address')
            break;
          case 'auth/weak-password':

            Alert.alert(
              'Weak Password : Please enter at least 6 digits')
            break;

          default:
            Alert.alert(
              'Error occured' + error.code)
            break;
          // handle other codes ...
        }

      }


      );
  };
  handleSignUp = () => {
    this.setState({
      isLoading: true
    });
    // setTimeout(() => {
    Firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{ToastAndroid.show("Registration successfull", ToastAndroid.LONG),this.addUser()})
      // .then(ToastAndroid.show("Registration successfull", ToastAndroid.LONG))
      // .then(() => this.props.navigation.navigate("SignIn"))
      .catch(error => {
        this.setState({
          isLoading: false
        }),
          ToastAndroid.show("" + error, ToastAndroid.SHORT);
      });
    // }, 1500);
  };
}
