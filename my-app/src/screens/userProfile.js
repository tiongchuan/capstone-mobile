import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import profileImg from '../assets/profileImg.jpg'
import styles from '../styles/userProfile.styles'

export const UserProfileScreen = ({ navigation, route }) => {

  return (
    <View style = { styles.container }>
      <Image style = { styles.img } source = { profileImg }/>
      <View style = { styles.texts }> 

        <Text style = { styles.text }>Name: { route.params.name }</Text>
        <Text style = { styles.text }>Age: 20 </Text>
        <Text style = { styles.text }>E-mail: { route.params.email } </Text>
        <Text style = { styles.text }>Mobile number: 94582165 </Text>
      </View>
      <TouchableOpacity
        style = { styles.btn } 
        onPress = {() => navigation.navigate( 'Home' )}
        >
        <Text style = { styles.btnText }>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}
