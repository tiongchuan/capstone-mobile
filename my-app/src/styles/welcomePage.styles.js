import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  search: {
    backgroundColor: '#FFFFFF',
    height: 40,
    width: width * 0.88,
    borderRadius: 20,
    padding: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    margin: 10
  },
  bannerContainer: {
    flex: 1,
    paddingHorizontal: width * 0.1
  },
  banner: {
    resizeMode: 'cover',
    width: width * 0.8,
    height: height * 0.25,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  icons: {
    flexDirection: 'row',
    paddingHorizontal: 23,
  },
  icon: {

  },














  // container: {
  //   flex: 1,
  //   //alignItems: 'center',
  //   backgroundColor: '#FFFFFF'
  // },
  //   btn: {
  //   alignItems: 'flex-end',
  //   margin: 5
  // },
  // container1: {
  //   alignItems: 'center'
  // },
  // welcomeTexts: {
  //   marginTop: height * 0.01
  // },
  // p1:{
  //   fontSize: 50
  // },
  // p2:{
  //   fontSize: 35,
  //   fontStyle:'italic'
  // },
  // img: {
  //   height: height / 2.6,
  //   width: width / 1.2,
  //   resizeMode: 'cover',
  //   marginTop: 20,
  //   borderRadius: 200
  // },
  // texts: {
  //   margin: 30,
  // },
  // text: {
  //   margin: 5,
  //   fontSize: 16,
  //   fontWeight: 'bold'
  // }

})