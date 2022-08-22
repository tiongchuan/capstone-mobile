import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import profileImg from '../assets/profileImg.jpg'
import styles from '../styles/tutorProfile.styles'

export const TutorProfileScreen = ({ navigation, route }) => {

  return (
    <View style = { styles.container }>
      <Image style = { styles.img } source = { profileImg } />
      <View style = { styles.texts }>
        <Text style = { styles.text }>Name: {route.params.item.name}</Text>
        <Text style = { styles.text }>Experience: {route.params.item.experience} years</Text>
        <Text style = { styles.text }>Hourly Rate: ${route.params.item.hourlyRate}</Text>
        <Text style = { styles.text }>Highest Education: {route.params.item.highestEducation}</Text>
        <Text style = { styles.text }>Age: 20 </Text>
        <Text style = { styles.text }>E-mail: will@gamil.com </Text>
        <Text style = { styles.text }>Mobile number: 94582165 </Text>
      </View>
      
      <TouchableOpacity 
        style = { styles.btn }
        onPress = {() => navigation.navigate( 'Request Tutor', {hourlyrate: route.params.item.hourlyRate} )}
      >
        <Text style = { styles.btnText }>Request</Text>
      </TouchableOpacity>
    </View>
  )
}
