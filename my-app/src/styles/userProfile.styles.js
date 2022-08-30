import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get( 'window' )

module.exports = StyleSheet.create ({
  container: {
    flex: 1
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: height * 0.16,
    marginBottom: height * 0.08
  },
  textContainer: {
    height: height,
    width: width,
    padding: 20
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    marginTop: height * 0.03
  },
  text: {
    marginHorizontal: 10,
    fontSize: 18
  }
})