import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    paddingBottom: 15
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 40,
    paddingBottom: 20
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    paddingBottom: 15,
  },
  h3: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    paddingBottom: 15,
  },
  h5: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 40,
  },
  button: {
    width: width,
    height: height,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    width: width - 20,
    height: 40,
    backgroundColor: '#dbdbdb',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 60,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide4: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  }
})
