import React, { useState } from 'react'
import { 
  View, 
  Text, 
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native'
import API from '../config/api.js'
import * as ImagePicker from 'expo-image-picker'
import styles from '../styles/userProfile.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux'
import { setImage } from '../redux/actions.js'

export const UserProfileScreen = ({ navigation, route }) => {
  // const [image, setImage] = useState(null)

  const { userId, image } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  console.log(userId)

  const pickImage = async () => {

    // check if user has permission to access camera roll
    // const permissionStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
    //   if (permissionStatus || Platform.OS !== 'android') {
    //     Alert.alert(
    //       'Upload Profile Image',
    //       'Choose an option',
    //       [
    //         { text: 'Camera', onPress: () => openCamera() },
    //         { text: 'Gallery', onPress: () => openGallery() },
    //         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
    //       ]
    //     ) 
    //   }

    // open camera
    // const openCamera = async () => {
    //   await ImagePicker.launchCameraAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   }).then(res => {
    //     if (!res.cancelled) {
    //       dispatch(setImage(res.uri))
    //       console.log('Selected',res.uri)
    //       imageUpload(image)
    //     }
    //   })
    // }

    //const openGallery = async () => {
      // Check if user has permission to access camera roll
      // const permissionStatus = ImagePicker.requestMediaLibraryPermissionsAsync()
      // if (permissionStatus === 'granted') {
        // Open gallery
          await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        }).then (res => {
          if (!res.cancelled) {
            dispatch(setImage(res.uri))
            console.log(res.uri)
            //imageUpload(image)
          }
        })
   //}

    // const imageUpload = async () => {

    //   const formData = new FormData();
    //   formData.append('file',  {
    //     uri: image,
    //     type: 'image/jpeg'||'image/png'||'image/jpg'||'image/gif',
    //     name: 'image.jpg'||'image.png'||'image.gif'||'image.jpeg',
    //   })
    //   console.log('formData: ', formData._parts)
    //   console.log('image ', image)

      //POST request to upload image to database 
      // await API 
      //   .post(`/protected/user/updateProfile_img/${userId}`, formData, {
      //     body: formData,
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'multipart/form-data'
      //     },
      //   }) 
      //   .then(res => {
      //     console.log(res)
      //     if ( res.data.status === 'success' ) {
      //       dispatch(setImage(res.data.profile_img))
      //       Alert.alert(
      //         'Success', 
      //         'Profile image uploaded successfully',
      //         [
      //           { text: 'OK', onPress: () => console.log('OK Pressed') }
      //         ]
      //       )
      //     }
      //   })
        // .catch(e => {
        //   if (e.response.status === 500) {
        //     Alert.alert( 'Error', 'Server error', [
        //       { text: 'OK', onPress: () => console.log('OK Pressed') }
        //     ])
        //   } else {
        //     Alert.alert( 'Error', 'Something went wrong', [
        //       { text: 'OK', onPress: () => console.log('OK Pressed') }
        //     ])
        //   }
        // })
      

      // GET request to get image from database  
    //   await API
    //     .get(`/general/user/profile_img/${userId}`) 
    //     .then(res => {
    //       dispatch(setImage(res.data.data))
    //       console.log('Get:',res.data.data)
    //     })
    //     .catch(e => {
    //       const message = JSON.stringify(e.response.data.message);
    //       alert(`${message}`);
    //     })
    // }
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
        <TouchableOpacity onPress = {() => navigation.navigate('Account', {userId: route.params.userId})}>
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
