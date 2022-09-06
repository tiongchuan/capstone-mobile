import * as React from 'react'
import { Button, Dimensions, Image, ImageBackground,Text, StyleSheet, TouchableOpacity, View, onPress } from 'react-native';
import Swiper from 'react-native-swiper'
import image1 from './../assets/onBoarding1.png'
import image2 from './../assets/onBoarding2.png'
import image3 from '../assets/onBoarding3.png'
import styles from '../styles/onBoarding.styles'

const { height, width } = Dimensions.get('window')

export const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
        
      <Swiper style={styles.wrapper} 
        showsButtons={true}
        loop={false} 
        activeDot={ <View 
          style={{
            backgroundColor: '#A7C7E7',
            width: 24,
            height: 8,
            borderRadius: 4,
            margin: 1,
          }} />
        }
      >
        <View style={styles.slide1}>
          <ImageBackground 
            source={image1}
            resizeMode='cover'
            style={{ flex: 1, justifyContent: 'center', width: width}}
          >
          </ImageBackground>
        </View>
        <View style={styles.slide2}>
          <Image 
            source={image2}
            resizeMode='cover'
            style={{ flex: 1, justifyContent: 'center', width: width }}
          />
        </View>
        <View style={styles.slide3}>
       
            <ImageBackground 
              source={image3}
              resizeMode='cover'
              style={{ flex: 1, justifyContent: 'center', width: width }}
            >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            ></TouchableOpacity>
            </ImageBackground>
            </View>
            </Swiper>
        
      
    </View>
       
  )
}


export default Onboarding