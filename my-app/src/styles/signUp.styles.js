import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

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
    height: height / 3.1,
    width: width * 0.77,
    resizeMode: 'contain',
    top: height * 0.09,
  },
  inputContainer: {
    alignItems: 'center',
    top: height * 0.15,
  },
  toggle: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    marginRight: 25,
    color: '#767c82',
  }, 
})