import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    // padding: 0,
    // height: height,
  },
  img: {
    height: height,
    width: width,
    // resizeMode: 'fill',
    // top: height * 0.1,
    // flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    top: height * 0.03,
  },
  toggle: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width,
    height: height,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
})