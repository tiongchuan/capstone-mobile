import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
    //justifyContent: 'space-evenly'
  },
  img: {
    height: height / 2.6,
    width: width / 1.2,

    resizeMode: 'cover',

    marginTop: 30,
    borderRadius: 200
  },
  texts: {
    margin: 30,

  },
  text: {
    margin: 5,
    fontSize: 16
  },
  btn: {
    height: height * 0.06,
    width: width * 0.35,
    backgroundColor: '#9D2427',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnText: {
    color: 'white',
  },

})