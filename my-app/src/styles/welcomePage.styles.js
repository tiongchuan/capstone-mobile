import { size } from "lodash";
import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  headerContainer: {
    paddingTop: height * 0.06,
    backgroundColor: '#A7C7E7',
    padding: 20,
    width: width
  },
  imgContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  profileImg: {
    height: height * 0.10,
    width: width * 0.17,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  // img: {
  //   height: height * 0.07,
  //   width: width * 0.16,
  //   resizeMode: 'contain',
  //   borderRadius: 200,
  // },
  usernameContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 3
  },
  text: {
    fontSize: 14,
    margin: 3
  },
  subjects: {
    padding: 10,
    height: height * 0.24
  },
  subject: {
    margin: 15,
    alignItems: 'center' 
  },
  listing: {
    width: width * 0.88,
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  texts: {
    marginHorizontal: width * 0.02
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3
  },
  text2: {
    fontSize: 12
  },
  price: {
    fontWeight: 'bold',
    fontSize: 17

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