import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import mainPic from '../assets/mainPic.png'
import styles from '../styles/mainPage.styles'

export const MainScreen = ({ navigation }) => {
  return (
    <View style = { styles.container }>
      <Image style = { styles.img } source = { mainPic } />
      <View style = { styles.btnContainer }>
        <TouchableOpacity 
          style = { styles.btn }
          onPress = {() => navigation.navigate( 'Login' )}>
          <Text style = { styles.btnText }>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = { styles.btn }
          onPress = {() => navigation.navigate( 'Sign Up' )}>
          <Text style = { styles.btnText }>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
