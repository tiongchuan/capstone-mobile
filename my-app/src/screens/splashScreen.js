import React from 'react';
import { 
  View, Image, TouchableOpacity
} from 'react-native';
import styles from '../styles/splashScreen.styles.js';
import companyLogo from '../assets/splashScreen.png';


export const StartingScreen = ({ navigation }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Image style = { styles.img } source = { companyLogo } />
        </TouchableOpacity>
      </View>
   )}
