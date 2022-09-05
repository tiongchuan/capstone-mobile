import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native'
import API from '../config/api.js';
import styles from '../styles/tutorProfile.styles.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const ProfileAccountScreen = ({ navigation, route }) => {
  return (
    <View style = { styles.container }>
      <View style = { styles.imgContainer }>
        <MaterialCommunityIcons 
          size = {210} 
          name = "account-circle" 
          color = "#A7C7E7" 
          style = { styles.img } 
        />
      </View>
      <View style = { styles.texts }>
        <View style = { styles.text1 }>
          <Text style = { styles.text }>Name</Text>
          <Text style = { styles.text }>Mia Kim</Text>
        </View>
        <View style = { styles.text1}>
          <Text style = { styles.text }>Parent</Text>
          <Text style = { styles.text }>Steven Kim</Text>
        </View>
        <View style = { styles.text1}>
          <Text style = { styles.text }>Testimony</Text>
          <Text style = { styles.text }>Good</Text>
        </View>
        <TouchableOpacity 
          onPress = {() => navigation.navigate( 'My profile' )}>
          <View style = { styles.text1 }>
            <Text style = { styles.text }>Back</Text>
            <MaterialCommunityIcons 
              size = {29} 
              name = "chevron-right" 
              color = "#D9D9D9" 
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
