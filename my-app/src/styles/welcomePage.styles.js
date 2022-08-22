import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  btn: {
    alignItems: 'flex-end',
    margin: 5
  },
  container1: {
    alignItems: 'center'
  },
  welcomeTexts: {
    marginTop: height * 0.01
  },
  p1:{
    fontSize: 50
  },
  p2:{
    fontSize: 35,
    fontStyle:'italic'
  },
  img: {
    height: height / 2.6,
    width: width / 1.2,
    resizeMode: 'cover',
    marginTop: 20,
    borderRadius: 200
  },
  texts: {
    margin: 30,
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold'
  }
})