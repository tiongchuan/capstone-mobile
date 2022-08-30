import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1
  },
  innerContainer: {
    padding: 0,
    height: height
  },
  calendarContainer: {
    alignItems: 'center'
  },
  calendar: {
    width: width / 1.2,
    marginTop: height * 0.07,
    height: 370,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.48,
    shadowRadius: 16.00,
    elevation: 10
  },
  textsContainer: {
    marginHorizontal: width * 0.07
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1
  },
  dropBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1
  },
  hourlyRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1
  },
  text: {
    fontWeight: 'bold',
    margin: 10
  },
  dropdownButtonStyle: {
    backgroundColor: '#FFFFFF',
    height: 30,
    width: 130,
    borderRadius: 20,
    borderColor: '#A7C7E7',
    borderWidth: 1
  },
  dropdownButtonTextStyle: {
    color:'#000000',
    fontSize: 12
  },
  dropdownStyle: {
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    alignItems: 'center',
    marginVertical: height * 0.02
  },
  input: {
    height: height / 13,
    width: width / 1.2,
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    fontSize: 15,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF'
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