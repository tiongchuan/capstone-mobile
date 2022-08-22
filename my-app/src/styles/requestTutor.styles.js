import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
    //justifyContent: 'center',
  },
  innerContainer: {
    padding: 0,
    height: height,
    //alignItems: 'center'
  },
  calendar: {
    width: width / 1.2,
    marginTop: height * 0.04,
    height: 370,
    borderRadius: 20,
    //justifyContent: 'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  textsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  texts: {
    alignItems: 'flex-start'
  },
  dropBox: {
    flexDirection: 'row'
  },
  text: {
    fontWeight: 'bold',
    margin: 10
  },
  dropdownButtonStyle: {
    backgroundColor: '#9D2427',
    height: 30,
    width: 130,
    borderRadius: 20
  },
  dropdownButtonTextStyle: {
    color:'#F5F5F5',
    fontSize: 12
  },
  dropdownStyle: {
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    height: height / 13,
    width: width / 1.2,
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    borderRadius: 20,
    backgroundColor: '#E6E6E6',
    borderColor: '#D9D9D9'
  },
  btnContainer: {
    alignItems: 'center'
  },
  btn: {
    height: height * 0.05,
    width: width * 0.35,
    backgroundColor: '#9D2427',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.02
  },
  btnText: {
    color: 'white',
  },
  listing: {
    height: 100,
    backgroundColor: '#9D2427',
    marginTop: 18,
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text2: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
})