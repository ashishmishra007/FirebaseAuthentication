import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  flatview: {
    // justifyContent: 'left',
    paddingTop: 30,
    borderRadius: 2,
        flex:1,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textLogo: {
    color: "#100",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20
  },
  textInputStyle: {
    color: "#100",
    textAlign: "left",
    marginTop: 10,
    height: 45,
    padding: 10,
    margin: 18,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000"
  },
  loginButtonstyle: {
    textAlign: "center",
    height: 55,
    padding: 13,
    margin: 18,
    fontSize: 20,
    color: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#000",
    borderColor: "#000"
  },
  buttonStyle: {
    color: "#0000aa",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    padding: 10,
    height: 45,
    padding: 10,
    margin: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0000aa"
  },
  textRegister: {
    color: "#100",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30
  },
  textRegisterButton: {
    color: "#100",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
    textDecorationLine: 'underline'
  },
  

  textLogin: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20
  },
  icon: {
    width: 24,
    height: 24
  },
  // For Flat List Data
  MainContainer: {
    flex: 1,
    width:"100%",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center"
  },
  imageView: {
    width: "50%",
    height: 100,
    margin: 7,
    borderRadius: 7
  },
  textView: {
    // width: "50%",
    // textAlignVertical: "center",
    padding: 10,
    // color: "#000"
    flex:1,
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 150,
    width: 300
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  },
  offlineContainer: {
    backgroundColor: "#b52424",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 150,
    position: "absolute",
    top: 30
  },
  modalBackground: {
    backgroundColor: "#00FFFFFF",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorHolder: {
    backgroundColor: "#11FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  offlineText: { color: "#fff" }
});
