# FirebaseAuthentication

<p> Firebase authentication with realtime database. I have used stackNavigation,DrawerNavigator,SwitchNavigator, custom loader name SmartLoader and CustomDialog with action to demonstrate that how to use them.
   </p>
   <h3> Create a Firebase account</h3>
   <p>
   First step will be to head over to Firebase and create a free account.After that, head over to Authentication and enable the Email/Password provider by clicking it and switching on the toggle.
   </p>
   <img src="https://user-images.githubusercontent.com/2509254/48685413-1efc8c00-ebdc-11e8-9219-f6cd39a23385.png" alt="FirebaseSignProviders" width="800" height="400">
  <p>
  Next step will be adding firebase to our project, I use yarn but you can use npm as well if you don’t have those.(i assume that you have already created the project using react-native init your_project_name)
  </p>
   <p>
   yarn add firebase
   </p>
   <p>
   Now we need to tell the firebase library: when you boot up, we need to connect to my firebase bucket of data, we do this by initializing the library with our WEB SETUP config and keys from our firebase console. (The button will be at the top right of your firebase console).

The config code should look something like this:
   </p>
<img src="https://user-images.githubusercontent.com/2509254/48685863-b9f66580-ebde-11e8-9b23-5ca87dd779c4.png" alt="FirbaseConfiq" width="800" height="400">

<p>
This is built for a web environment, so we’ll need to convert it to pure JS to work with RN and add it to a react-native app.js file.
</p>
<img src="https://user-images.githubusercontent.com/2509254/48685954-4d2f9b00-ebdf-11e8-8875-0fbc2744d090.png" alt="FirbaseConfiq" width="511" height="258">
<p>
add this import statement :

```
 import Firebase from "firebase"; 
 ```
 to your app.js 
</p>

   
   

   <h3>Login Screen</h3>
<img src="https://user-images.githubusercontent.com/2509254/48684126-46e8f100-ebd6-11e8-99aa-841d1b5b3093.png" alt="Login" width="400" height="800">

<h3>Registration Screen</h3>
<img src="https://user-images.githubusercontent.com/2509254/48686491-3d658600-ebe2-11e8-96f0-8880abeb5975.png" alt="Registration" width="400" height="800">

<h3>Drawer</h3>
<img src="https://user-images.githubusercontent.com/2509254/48686650-13f92a00-ebe3-11e8-8c72-a74930e1807d.png" alt="Drawer" width="400" height="800">
<h3>Drawer</h3>
<img src="https://user-images.githubusercontent.com/2509254/48686651-13f92a00-ebe3-11e8-800b-a08d29e1c4c5.png" alt="Drawer" width="400" height="800">

<h3>Custom Loader</h3>
<img src="https://user-images.githubusercontent.com/2509254/48686734-8b2ebe00-ebe3-11e8-9cf8-4dcf146b53bd.png" alt="Custom Loader" width="400" height="800">

<h3>User List Screen</h3>
<img src="https://user-images.githubusercontent.com/2509254/48686904-9b936880-ebe4-11e8-8046-32d8db69f352.png" alt="User List" width="400" height="800">
<h3>User Details Screen</h3>
<img src="https://user-images.githubusercontent.com/2509254/48686905-9b936880-ebe4-11e8-9ad2-f3dc81db3593.png" alt="User Details" width="400" height="800">

<p>
I will update more code explantation soon. 
</p>