import React, { useEffect, useState } from 'react'
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux'
import { setImage, setGetImage } from '../redux/actions.js'
import { any } from 'prop-types'



export const UserProfileScreen =  ({ navigation, route }) => {


  const { userId, image, getImage } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getProfileImage()
  // }, [])

  console.log('in userprofile', userId);
  let getUserImage;
  
  useEffect(() => {
    getDatabaseImage()
  }, [])

  // useEffect(() => {
  //   getProfileImage()
  // }, [image])

  // Image picker function 
  const pickImage = async () => {

    // check if user has permission to access camera roll
    const permissionStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionStatus || Platform.OS !== 'android') {
      Alert.alert(
        'Upload Profile Image',
        'Choose an option',
        [
          { text: 'Camera', onPress: () => openCamera() },
          { text: 'Gallery', onPress: () => openGallery() },
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
        ]
      ) 
    }

    // open camera
    const openCamera = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      console.log(result)
      
      if (!result.cancelled) {
        dispatch(setImage(result.uri))
        console.log(result.uri)
        uploadImage()
        // getProfileImage()
      }
    }

    // open gallery
    const openGallery = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      console.log(result)

      if (!result.cancelled) {
        dispatch(setImage(result.uri))
        console.log(result.uri)
        uploadImage()
        // getProfileImage()
      } 
    }
  }

  // upload image to database
  const uploadImage = async() => {
    const formData = new FormData()
    formData.append('profile_img', {
      uri: image,
      type: 'image/jpeg'||'image/png'||'image/jpg'||'image/gif',
      name: 'image.jpg'||'image.png'||'image.gif'||'image.jpeg'
    })
    console.log('formDataParts in my append',formData._parts)
  
    await API
      .post(`/protected/user/updateProfile_img/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log('in image formdata psot:',res.data)
        dispatch(setImage(res.data.data.profile_img))
        Alert.alert(
          'Success', 
          'Profile image uploaded successfully',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed image uploaded') }
          ]
        )
      })
      .catch(err => {
        console.log(err)
        Alert.alert( 
          'Error', 'Server error', 
          [
            { text: 'OK', onPress: () => console.log('OK Pressed but server error') }
          ]
        )
      })
  }
  
   // get image from database
  //  const getProfileImage = () => {
  //   API
  //     .get(`/general/user/profile_img/${userId}`) 
  //     .then(res => {
  //       // dispatch(setGetImage(res.data.data.profile_img))
  //       console.log('Get:', res)
  //       dispatch(setImage(res.data.data.profile_img))
  //       console.log('in getProfileImage:', res.data.data.profile_img)
  //     })
  //     .catch(e => {
  //       console.log(e)
  //     })
  // }

  const getDatabaseImage = async () => {
    console.log("inGetDataBaseImage",userId);
    await API
      .get(`/general/user/profile_img/${userId}`) 
      .then(res => {
        console.log(res.data.data.profile_image)
        // dispatch(setGetImage(res.data.data.profile_img))
        console.log('Get my response:', res)
        console.log('in getDatabaseImage res:', res.data.data.profile_img)
        dispatch(setImage(res.data.data.profile_img))
        console.log('in setImage:', image);
        // getUserImage = (res.data.data.profile_img)
        // console.log('in setImage:', getUserImage);
      })
      .catch(e => {
        console.log(e)
      })
  }

  // // dispatch(setGetImage(getUserImage))
  // dispatch(setImage(getUserImage))
  // console.log('in redux setImage:', image);

  return (
    <ScrollView>
    <View style = { styles.container }>
      <View  style = { styles.imgContainer }>
        <TouchableOpacity style = { styles.btn } onPress = { pickImage } >
          { getImage ?
            <Image 
              // source = {{ uri: `https://quiet-river-74601.herokuapp.com/Images/${getImage}` }}  
              // source = {{ uri: `http:///Images/${getImage}` }}  
              source = {{ uri: `http://192.168.1.25/Images/${image}` }}  
              style = { styles.profileImg } /> :
            <MaterialCommunityIcons 
              name = 'camera-plus' 
              size = { 120 } 
              color = '#A7C7E7' /> 
          } 
        </TouchableOpacity>
      </View>
      <View style = { styles.textContainer }>  

 {/* my code */}
      {/* <Image source = {{ uri: 'http://localhost/Images/1662798783752Bean.png' }} style = {{width:'20%',height:'20%'}}/>
      <Image source = {{ uri: `http://localhost/${image}`}} style = {{width:'20%',height:'20%'}}/>
          <TouchableOpacity onPress = {() => navigation.navigate('Account')}>  */}

{/* //Mia Code */}
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
    </ScrollView>
  )
}

// import React, { useState } from 'react'
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity
// } from 'react-native'
// import API from '../config/api.js'
// import * as ImagePicker from 'expo-image-picker'
// import styles from '../styles/userProfile.styles'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// export const UserProfileScreen = ({ navigation, route }) => {
//   const [image, setImage] = useState(null)

//   const pickImage = async () => {

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri)
//       console.log(result.uri)
//     }

//     const formData = new FormData();
//     formData.append('profile_img', {
//       // name: new Date() + '_profile_img',
//       uri: image,
//       // type: 'image/jpg',
//       // type: file,
//     })

//     // // get user id
//     // const userId = route.params.userId
//     // console.log(userId)
//     const userId = 1

//     //post image to server
//     API.post('/protected/user/updateProfile_img/' + userId, formData, {
//       // API.post('/protected/user/updateProfile_img/1', formData, {
//       headers: {
//         // Accept: 'application/json',
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//       .then(function (response) {
//         console.log(response);
//         // setImage(response.data.data.profile_img)
//         // console.log(response.data.data.profile_img)
//       })
//       .catch((e) => (console.log(e)))


//   //   // get image from server
//   //   API.get('/general/user/profile_img/' + userId)
//   //     .then(function (response) {
//   //       //console.log(response.data.data);
//   //       setImage(response.data.data.profile_img)
//   //     })
//   //     .catch((e) => (console.log(e)))
//   }

//   return (

//     <View style={styles.container}>
//       <View style={styles.imgContainer}
//       // style = {{flex:1, alignItems:'center', justifyContent:'center'}}
//       >
//         <TouchableOpacity style={styles.btn} onPress={pickImage} >
//           <MaterialCommunityIcons
//             style={styles.img}
//             name="camera-plus" size={120}
//             color="#A7C7E7" />
//           {image && <Image source={{ uri: image }} style={styles.profileImg} />}
//         </TouchableOpacity>
//       </View>
//       <View style={styles.textContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('Account')}>
//           <View style={styles.arrow}>
//             <View style={styles.icon}>
//               <MaterialCommunityIcons name="account-circle-outline" size={30} color="#A7C7E7" />
//               <Text style={styles.text}>Account</Text>
//             </View>
//             <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('My Activity')}>
//           <View style={styles.arrow}>
//             <View style={styles.icon}>
//               <MaterialCommunityIcons name="bookmark-outline" size={30} color="#A7C7E7" />
//               <Text style={styles.text}>Current Bookings</Text>
//             </View>
//             <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//         //</View>onPress = {() => navigation.navigate('My Activity')}
//         >
//           <View style={styles.arrow}>
//             <View style={styles.icon}>
//               <MaterialCommunityIcons name="email-outline" size={30} color="#A7C7E7" />
//               <Text style={styles.text}>Contact Us</Text>
//             </View>
//             <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//         //</View>onPress = {() => navigation.navigate('My Activity')}
//         >
//           <View style={styles.arrow}>
//             <View style={styles.icon}>
//               <MaterialCommunityIcons name="cog-outline" size={30} color="#A7C7E7" />
//               <Text style={styles.text}>Settings</Text>
//             </View>
//             <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//           <View style={styles.arrow}>
//             <View style={styles.icon}>
//               <MaterialCommunityIcons name="exit-to-app" size={30} color="#A7C7E7" />
//               <Text style={styles.text}>Log out</Text>
//             </View>
//             <MaterialCommunityIcons name="chevron-right" size={29} color="#D9D9D9" />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }
