import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {},
  img: {
    flex: 1,
    width: width,
    height: height
  },
  slide1: {
    flex: 1,
    alignItems: 'center'
  },
  text1: {
    position: 'absolute',
    marginHorizontal: width * 0.1,
    resizeMode: 'contain',
    top: height * 0.14
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
  },
  text2: {
    position: 'absolute',
    marginHorizontal: width * 0.1,
    resizeMode: 'contain',
    bottom: height * 0.15
  },
  slide3: {
    flex: 1,
    alignItems: 'center'
  },
  text3: {
    position: 'absolute',
    bottom : height * 0.09,
    marginHorizontal: width * 0.1,
  }
})
