import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' );

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    padding: 0,
    height: height,
  },
  img: {
    height: height * 0.4,
    width: width * 0.85,
    resizeMode: 'contain',
    top: height * 0.06,
  },
  inputContainer: {
    alignItems: 'center',
    top: height * 0.02,
  },
})