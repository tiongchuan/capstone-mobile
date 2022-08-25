import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import mainPic from '../assets/mainPic.png';
import styles from '../styles/mainPage.styles.js';
import { CustomButton } from '../components/CustomButton.js';

export const MainScreen = ({ navigation }) => {
  return (
    <View style = { styles.container }>
      <Image style = { styles.img } source = { mainPic } />
      <View style = { styles.btnContainer }>
        <CustomButton
          onPress = {() => navigation.navigate( 'Login' )}
          text = "Login"
        />
         <CustomButton
          onPress = {() => navigation.navigate( 'Sign Up' )}
          text = "Sign Up"
        />
      </View>
    </View>
  )
}
