import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import styles from '../styles/welcomePage.styles'
import boy from '../assets/Boy.jpg'

export const WelcomeScreen = ({ navigation, route }) => {

  return (
    <View style = { styles.container }>
      <View style={styles.btn}>
        <Button 
          title='Log out' onPress={()=>navigation.navigate('Home')} />
      </View>
      <View style={styles.container1} >
        <View style={styles.welcomeTexts}>
          <Text style={styles.p1}>Welcome </Text>
          <Text style={styles.p2}> { route.params.email } </Text>
        </View>
        <Image style = { styles.img } source = { boy } />

        <View style = { styles.texts }> 
    {/* <Text style = { styles.text }>Name: { route.params.name }</Text> */}
          <Text style = { styles.text }>Age: 20 </Text>
          <Text style = { styles.text }>E-mail: { route.params.email } </Text>
          <Text style = { styles.text }>Mobile number: 94582165 </Text>
        </View>
      </View>
    </View>
  )
}