// import { db } from '../config/db';
import Firebase from 'firebase';
import {ToastAndroid,AsyncStorage } from 'react-native';


// var config = {
//       apiKey: "AIzaSyAOeJ62y2fxgTKt5Dvu1erqhi3DRYd6EF8",
//       authDomain: "rnfirebasedb.firebaseapp.com",
//       databaseURL: "https://rnfirebasedb.firebaseio.com",
//       projectId: "rnfirebasedb",
//       storageBucket: "rnfirebasedb.appspot.com",
//       messagingSenderId: "769120087557",
//     };
//     Firebase.initializeApp(config);

    export const addUser =  (fname,lname,email,pass,prop) => {
        Firebase.database().ref('Users/').push({
            fname: fname,
            lname: lname,
            email:email,
            pass: pass

        }).then(prop.setState({
            isLoading:false,
        }))//.then(ToastAndroid.show("Registration successfull", ToastAndroid.LONG))
        .then(prop.navigation.navigate('SignIn'))
        .catch(error => ToastAndroid.show(''+error, ToastAndroid.SHORT) );
    }
    export const handleSignUp = (fname,lname,email,password,prop) => {
        

        Firebase
          .auth()
          .createUserWithEmailAndPassword(email,password)
          .then(addUser(fname,lname,email,password,prop))
        //   .then(() => this.props.navigation.navigate('Main'))
          .catch(error => ToastAndroid.show(''+error, ToastAndroid.SHORT) );
    }
    export const handleLogin = (email,password,prop) => {
        // const { email, pasword } = this.state
        Firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        //   .then(async()=> await AsyncStorage.setItem('userToken', 'abc'))
        //   .then(() => prop.navigation.navigate('App'))
          .then(async(data)=>{
            //success callback
            // console.log('data ' , data)
            ToastAndroid.show('handleLogin1', ToastAndroid.SHORT);
            await AsyncStorage.setItem('userToken', 'abc')
            // await AsyncStorage.setItem('email', data.email)
            // await AsyncStorage.setItem('pass', data.password)
            // ToastAndroid.show("Data "+data.email,ToastAndroid.LONG);
            prop.navigation.navigate('App')
            // this.setState({
            //   isLoading:false,
            // })
            // this.props.navigation.navigate('SignIn')
            // this.props.navigation.navigate("LoginFirebase")
            
        })
          .catch(error => ToastAndroid.show(''+error, ToastAndroid.SHORT))
        //   .catch(error => this.setState({ errorMessage: error.message }))
      }
    
    // export default {
    //     async handleSignUp(fname,lname,email,password) {
    //       try {
    //           const result = await         
    //              Firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email,password)
    //         .then(addUser(fname,lname,email,password))
    //                 //   .then(() => this.props.navigation.navigate('Main'))
    //         .catch(error => ToastAndroid.show(''+error, ToastAndroid.SHORT));
    //         return result;
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     },
    //     async addUser(fname,lname,email,password) {
    //         try {
    //             Firebase.database().ref('Users/').push({
    //                 fname: fname,
    //                 lname: lname,
    //                 email:email,
    //                 pass: pass
        
    //             }).then(ToastAndroid.show("Registration successfull", ToastAndroid.LONG))//.then(this.props.navigation.navigate('SignIn'))
    //             .catch(error => ToastAndroid.show(''+error, ToastAndroid.SHORT) );
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }
    //   };

// export const addItem =  (item) => {
//     db.ref('items/').push({
//         name: item
//     });
// }