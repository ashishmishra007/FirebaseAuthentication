import React, { Component } from "react";
import {
  FlatList,
  Alert,
  YellowBox,
  Text,
  Button,
  View,
  Image,
  AsyncStorage,
  ActivityIndicator,
  TouchableWithoutFeedback
} from "react-native";
import { styles } from "../AppStyles/styles";
import firebase from "firebase";

export default class UserListScreen extends React.Component {
  static navigationOptions = {
    title: "User List"
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: "",
      users: []
    };

    //To ignore warnigns YellowBox is used.
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated"
    ]);
  }

  _flatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000"
        }}
      />
    );
  };
  _snapshotToArray = snapshot => {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });
    return returnArr;
  };

  _readUserDataFromFirebaseConsole = () => {
    this.setState({ isLoading: true });

    firebase
      .database()
      .ref("Users/")
      .on("value", snapshot => {
        this.setState({
          users: this._snapshotToArray(snapshot),
          isLoading: false
        });
      });
  };

  componentDidMount() {
    this._readUserDataFromFirebaseConsole();
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
      // <View style={styles.MainContainer}>

      <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "flex-start",alignItems: 'stretch' }}>
        <FlatList
          data={this.state.users}
          ItemSeparatorComponent={this._flatListItemSeparator}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => this._navigateToUserDetails(item)}
            >
              {/* <View
                style={styles.FlatList}
              > */}
              <View style={{ flex: 1 }}>
                <Text style={styles.textView}>{'Email: ' +item.email}</Text>
                <Text style={styles.textView}>{'Firstname: ' +item.firstname}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  _navigateToUserDetails = item => {
    this.props.navigation.navigate("UserDetails", { itemDetails: item });
  };


}
