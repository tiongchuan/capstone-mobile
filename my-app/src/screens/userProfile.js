import React from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native'
import styles from '../styles/userProfile.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const UserProfileScreen = ({ navigation, route }) => {
  return (

    <View style = { styles.container }>
      <View style = { styles.imgContainer }>
        <MaterialCommunityIcons 
          style = { styles.img } 
          name="camera-plus" size={120} 
          color="#A7C7E7" />
      </View>
      <View style = { styles.textContainer }>  
        <TouchableOpacity 
          onPress = {() => navigation.navigate('Account')}>
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name="account-circle-outline" size={30} color="#A7C7E7" />
              <Text style={styles.text}>Account</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
          </View>
        </TouchableOpacity> 
        <TouchableOpacity 
          onPress = {() => navigation.navigate('My Activity')}>
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name="bookmark-outline" size={30} color="#A7C7E7" />
              <Text style={styles.text}>Current Bookings</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          //</View>onPress = {() => navigation.navigate('My Activity')}
        >
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name="email-outline" size={30} color="#A7C7E7" />
              <Text style={styles.text}>Contact Us</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          //</View>onPress = {() => navigation.navigate('My Activity')}
        >
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name="cog-outline" size={30} color="#A7C7E7" />
              <Text style={styles.text}>Settings</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress = {() => navigation.navigate('Home')}>
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name="exit-to-app" size={30} color="#A7C7E7" />
              <Text style={styles.text}>Log out</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
