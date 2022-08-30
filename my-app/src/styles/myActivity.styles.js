import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  listings: {
    margin: 20,
    marginTop: height * 0.07
  },
  listing: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 15
  },
  text2: {
    fontWeight: 'normal',
  }
})