import React, { useEffect } from 'react'
import { 
  View, 
  Text, 
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import API from '../config/api.js'
import * as ImagePicker from 'expo-image-picker'
import styles from '../styles/userProfile.styles'
import { useSelector, useDispatch } from 'react-redux'
import { setImage, setGetImage } from '../redux/actions.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const UserProfileScreen =  ({ navigation, route }) => {

  const { userId, image, getImage } = useSelector ( state => state.userReducer )
  const dispatch = useDispatch()

  useEffect(() => {
    
    return () => {
      uploadImage ()
    }
  }, [ image ])

  // Image picker function 
  const pickImage = async () => {

    // check if user has permission to access camera roll
    const permissionStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if ( permissionStatus || Platform.OS !== 'android' ) {
      Alert.alert(
        'Upload Profile Image',
        'Choose an option',
        [
          { text: 'Camera', onPress: () => openCamera() },
          { text: 'Gallery', onPress: () => openGallery() },
          { text: 'Cancel', onPress: () => console.log( 'Cancel Pressed' ), style: 'cancel' }
        ]
      ) 
    }

    // open camera
    const openCamera = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [ 4, 3 ],
        quality: 1,
      })

      //console.log( result )
      
      if ( !result.cancelled ) {
        dispatch ( setImage ( result.uri ))
        //console.log(result.uri)
        uploadImage ()
      }
    }

    // open gallery
    const openGallery = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [ 4, 3 ],
        quality: 1,
      })

      //console.log(result)

      if ( !result.cancelled ) {
        dispatch ( setImage ( result.uri ))
        //console.log(result.uri)
        uploadImage ()
      } 
    }
  }

  // upload image to database
  const uploadImage = async () => {
    const formData = new FormData()
    formData.append( 'profile_img', {
      uri: image,
      type: 'image/png'||'image/jpeg'||'image/jpg'||'image/gif',
      name: 'image.jpg'||'image.png'||'image.gif'||'image.jpeg'
    })
    //console.log(formData._parts)
  
    await API
      .post ( `/protected/user/updateProfile_img/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then ( res => {
        //console.log(res.data)
        console.log ( 'POST:',  res.data.data.profile_img )
        dispatch ( setGetImage( res.data.data.profile_img   ))
      })
      .catch ( err => {
        console.log ( err )
      })
  
    // get image from database
    await API
      .get ( `/general/user/profile_img/${userId}` ) 
      .then ( res => {
        dispatch ( setGetImage ( res.data.data.profile_img ))
        console.log ( 'GET:', res.data.data.profile_img )
      })
      .catch( e => {
        console.log ( e )
    })
  }

  return (
    <ScrollView>
      <View style = { styles.container }>
        <View  style = { styles.imgContainer }>
          <TouchableOpacity style = { styles.btn } onPress = { pickImage } >
            { getImage ?
              <Image 
                // source = {{ uri: `https://quiet-river-74601.herokuapp.com/Images/${getImage}` }}  
                source = {{ uri: `http://192.168.18.8:3000/Images/${getImage}` }}  
                style = { styles.profileImg } /> :
              <MaterialCommunityIcons 
                name = 'camera-plus' 
                size = { 120 } 
                color = '#A7C7E7' /> }
          </TouchableOpacity> 
        </View>
        <View style = { styles.textContainer }>  
          <TouchableOpacity onPress = {() => navigation.navigate ( 'Account' )} >
            <View style = { styles.arrow }>
              <View style = { styles.icon }>
                <MaterialCommunityIcons name = "account-circle-outline" size = { 30 } color = "#A7C7E7" />
                <Text style = { styles.text }>Account</Text>
              </View>
              <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
            </View>
          </TouchableOpacity> 
          <TouchableOpacity onPress = {() => navigation.navigate ( 'My Activity' )}>
            <View style = { styles.arrow }> 
              <View style = { styles.icon }>
                <MaterialCommunityIcons name = "bookmark-outline" size = { 30 } color = "#A7C7E7" />
                <Text style = { styles.text }>Current Bookings</Text>
              </View>
              <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style = { styles.arrow }>
              <View style = { styles.icon }>
                <MaterialCommunityIcons name = "email-outline" size = { 30 } color = "#A7C7E7" />
                <Text style = { styles.text }>Contact Us</Text>
              </View>
              <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style = { styles.arrow }>
              <View style = { styles.icon }>
                <MaterialCommunityIcons name = "cog-outline" size = { 30 } color = "#A7C7E7" />
                <Text style = { styles.text }>Settings</Text>
              </View>
              <MaterialCommunityIcons name = "chevron-right" size = { 29 } color = "#D9D9D9" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate( 'Login' )}>
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
    </ScrollView>
  )
}
