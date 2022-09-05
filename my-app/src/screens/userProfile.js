import React, { useState } from 'react'
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity
} from 'react-native'
import API from '../config/api.js'
import * as ImagePicker from 'expo-image-picker'
import styles from '../styles/userProfile.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const UserProfileScreen = ({ navigation, route }) => {
  const [image, setImage] = useState(null)
  const [user, setUser] = useState()

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri)
      console.log(result.uri)
    }
    
    const formData = new FormData();
      formData.append('profile_img', {
        uri: result.uri,
        type: 'image/jpeg || image/png || image/jpg || image/gif',
        name: 'image.jpg || image.png || image.gif || image.jpeg'
      })

    // get user id
    const userId = route.params.userId
    console.log(userId)

    //post image to server
    API.post('/protected/user/updateProfile_img/' + userId, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        //console.log(response.data.data);
        setImage(response.data.data.profile_img)
        console.log(response.data.data.profile_img)
      })
      .catch((e) => (console.log(e)))

    // get image from server
    API.get('/general/user/profile_img/' + userId)
      .then(function (response) {
        //console.log(response.data.data);
        setImage(response.data.data.profile_img)
      })
      .catch((e) => (console.log(e)))
  }

  return (

    <View style = { styles.container }>
      <View  style = { styles.imgContainer }>
        <TouchableOpacity style = { styles.btn } onPress = { pickImage } >
          <MaterialCommunityIcons 
            style = { styles.img } 
            name = "camera-plus" size = { 120 } 
            color = "#A7C7E7" />
            { image && <Image source = {{ uri: image }} style = { styles.profileImg }/>}
        </TouchableOpacity>
      </View>
      <View style = { styles.textContainer }>  
        <TouchableOpacity onPress = {() => navigation.navigate('Account')}>
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name = "account-circle-outline" size = { 30 } color = "#A7C7E7" />
              <Text style = { styles.text }>Account</Text>
            </View>
            <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
          </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress = {() => navigation.navigate('My Activity')}>
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name = "bookmark-outline" size = { 30 } color = "#A7C7E7" />
              <Text style = { styles.text }>Current Bookings</Text>
            </View>
            <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          //</View>onPress = {() => navigation.navigate('My Activity')}
        >
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name = "email-outline" size = { 30 } color = "#A7C7E7" />
              <Text style = { styles.text }>Contact Us</Text>
            </View>
            <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          //</View>onPress = {() => navigation.navigate('My Activity')}
        >
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name = "cog-outline" size = { 30 } color = "#A7C7E7" />
              <Text style = { styles.text }>Settings</Text>
            </View>
            <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
          <View style = { styles.arrow }>
            <View style = { styles.icon }>
              <MaterialCommunityIcons name = "exit-to-app" size = { 30 } color = "#A7C7E7" />
              <Text style = { styles.text }>Log out</Text>
            </View>
            <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
