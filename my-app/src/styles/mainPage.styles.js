import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  img: {
    height: height * 0.31,
    width: width * 0.85,
    resizeMode: 'contain',
    top: height * 0.06,
    marginTop: height * 0.08
  },
  btnContainer: {
    marginTop: height * 0.1
  },
})