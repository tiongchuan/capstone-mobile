import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20
  },
  imgContainer: {
    alignItems: 'center'
  },
  img: {
    height: height * 0.23,
    width: width * 0.5,
    marginTop: height * 0.05,
    borderColor: 'gray',
    borderRadius: 200,
    resizeMode: 'contain'
  },
  texts: {
    paddingHorizontal: width * 0.03
  },
  text1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.05,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  btn: {
    alignItems: 'center',
    marginVertical: height * 0.08
  }
})