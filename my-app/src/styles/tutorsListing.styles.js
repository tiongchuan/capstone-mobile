import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  listings: {
    marginBottom: height * 0.15
  },
  searchContainer: {
    alignItems: 'center'
  },
  search: {
    backgroundColor: '#FFFFFF',
    height: 40,
    width: width * 0.88,
    borderRadius: 20,
    padding: 10,
    borderColor:'#D9D9D9',
    borderWidth: 1,
    margin: 10,
    marginTop: height * 0.05
  },
  listing: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    marginHorizontal: width * 0.02
  },
  text0:{
    flex:2,
    paddingHorizontal: width * 0.05
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5
  },
  text2: {
    fontSize: 12
  },
  price: {
    fontSize: 20,
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
  // spinner: {
  //   height: '100%',
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
})