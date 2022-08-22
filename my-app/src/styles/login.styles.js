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
    height: height * 0.4,
    width: width * 0.85,
    resizeMode: 'contain',
    top: height * 0.06,
  },
  inputContainer: {
    alignItems: 'center',
    top: height * 0.02,
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: height * 0.06,
    width: width * 0.75,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderColor: 'rgba(219, 219, 219, 0.2)',
  },
  text: {
    color: 'gray',
    fontSize: 12,
  },
  btn: {
    height: height * 0.06,
    width: width * 0.35,
    backgroundColor: '#9D2427',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.02,
  },
  btnText: {
    color: 'white',
  },
})