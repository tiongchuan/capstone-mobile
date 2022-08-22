import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  containerStatus: {
    flex: 1,
    //alignItems: 'center',
    //backgroundColor: '#D9D9D9'
    //justifyContent: 'space-evenly'
    // paddingLeft: 30
    marginHorizontal: width / 12,
  },
  listings: {
    height: height,
    width: width / 1.2,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 8,
      height: 6,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17
  },
  listing: {
    //position: 'absolute',
    height: height * 0.11,
    backgroundColor: '#9D2427',
    marginTop: height * 0.02,
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  status: {
    fontSize: 18,
    color: '#FFFFFF',
    //fontStyle: 'italic',
    fontWeight: 'bold'
  },
  text1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  },
  text2: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  }
})