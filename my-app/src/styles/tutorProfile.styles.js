import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 20
    //justifyContent: 'space-evenly'
  },
  img: {
    height: height / 2.6,
    width: width / 1.2,
    marginTop: height * 0.05,
    borderColor: 'gray',
    borderRadius: 200
  },
  texts: {
    margin: height * 0.03
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 2
  },
  btn: {
    height: 43,
    width: 150,
    backgroundColor: '#9D2427',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
    marginTop: height * 0.01
  },
  btnText: {
    color: '#FFFFFF'
  }
})