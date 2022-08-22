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
    height: height / 3,
    width: width * 0.85,
    resizeMode: 'contain',
    top: height * 0.05,
  },
  inputContainer: {
    alignItems: 'center',
    top: height * 0.03,
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    height: height * 0.06,
    width: width * 0.75,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderColor: 'rgba(219, 219, 219, 0.2)',
  },
  toggle: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginRight: 25,
    color: 'gray',
  }, 
  btn: {
    height: height * 0.06,
    width: width * 0.35,
    backgroundColor: '#9D2427',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: height * 0.00,
  },
  btnText: {
    color: 'white',
  },
})