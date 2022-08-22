import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '##E4E3E3'
    //justifyContent: 'space-evenly'
    // paddingLeft: 30
  },
  search: {
    backgroundColor: '#FFFFFF',
    height: 40,
    width: width * 0.88,
    borderRadius: 20,
    padding: 10,
    borderColor:'#D9D9D9',
    borderWidth: 1,
    margin: 10
  },
  listings: {
    flex: 1,
    height: height,
    width: width,
    alignItems: 'center',
  },
  listing: {
    flex:1,
    //position: 'absolute',
    height: height * 0.14,
    width: width * 0.88,
    backgroundColor: '#9D2427',
    marginTop: 18,
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 8,
    //   height: 6,
    // },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17
  },
  text0:{
    flex:2,
    justifyContent:'center',
    paddingHorizontal:width / 20
  },
  text1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 12
  },
  img: {
    // flex:1,
    position: 'relative',
    height: 70,
    width: width / 6,
    borderRadius: 60
  },
  price: {
    fontSize: 23,
    color: '#FFFFFF',
    fontWeight: 'bold',
    margin: 8
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  footer: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 'bold'
  },
  empty: {
    fontSize: 30,
    textAlign: "center",
    height: 100,
    marginTop: 18,
    borderRadius: 20,
    padding: 25,
  },
  spinner: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

})