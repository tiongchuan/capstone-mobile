import * as React from 'react'
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper'
import image1 from './../assets/Onboarding1(1).png'
import text1 from './../assets/text1.png'
import image2 from './../assets/tutor.png'
import text2 from './../assets/text2.png'
import image3 from '../assets/student.png'
import text3 from './../assets/text3.png'
import styles from '../styles/onBoarding.styles'

export const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
        
      <Swiper style={styles.wrapper} 
        showsButtons={true}
        loop={false}
        activeDot={ <View 
          style={{
            backgroundColor: '#fff',
            width: 30,
            height: 8,
            borderRadius: 4,
            margin: 1,
          }} />
        } >
        <View style={styles.slide1}>
          <ImageBackground 
            source={image1}
            style={styles.img}
            resizeMode='cover' />
          <Image source={text1} style = { styles.text1 } />
        </View>
        <View style={styles.slide2}>
          <ImageBackground 
            source={image2}
            style={ styles.img }
            resizeMode='cover' />
          <Image source={text2} style = { styles.text2 } />
        </View>
        <View style={styles.slide3}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tabs', {screen:'Welcome'})}>
            <ImageBackground 
              source={image3}
              style={ styles.img }
              resizeMode='cover'>
            </ImageBackground>
            <Image style = { styles.text3 } source={text3} />
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>    
  )
}

export default Onboarding