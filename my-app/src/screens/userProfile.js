import React, { useEffect, useState } from 'react'
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
  const [singleFile, setSingleFile] = useState()

//mycode
  useEffect(()=>{
    getImage()
  },[])
  const userId = 2

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);
    setSingleFile(result)

    if (!result.cancelled) {
      // setImage(result.uri)
      console.log(result.uri)
      //morecode
    // }

  
    const formData = new FormData();
      formData.append('profile_img', {
        uri: result.uri,
        type: 'image/jpeg || image/png || image/jpg || image/gif',
        name: 'image.jpg || image.png || image.gif || image.jpeg',
        // file: singleFile
      })

    // get user id
    // const userId = route.params.userId
    console.log(formData);
    console.log(userId)

    //post image to server
    API.post('/protected/user/updateProfile_img/' + userId, formData, {
      // API.post('/protected/user/updateProfile_img/2', formData, {
      headers: {
        // Accept:'application/json',
        "Content-Type": "multipart/form-data; charset=utf-8"
      },
      // body: formData
    })
      .then(function (response) {
        //console.log(response.data.data);
        setImage(response.data.data.profile_img)
        // console.log(response.data.data.profile_img)
        console.log(response)
      })
      .catch((e) => (console.log(e)))

    // // get image from server
    // API.get('/general/user/profile_img/' + userId)
    //   .then(function (response) {
    //     //console.log(response.data.data);
    //     setImage(response.data.data.profile_img)
    //   })
    //   .catch((e) => (console.log(e)))
  }
}

  //mycode
  function getImage(){
    API.get('/general/user/profile_img/'+userId)
    .then(function (response) {
      // console.log(response.data.data);
      setImage(response.data.data)
      console.log(image);
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

      {/* <Image source = {{ uri: 'http://localhost/Images/1662798783752Bean.png' }} style = {{width:'20%',height:'20%'}}/> */}
      <Image source = {{ uri: `http://localhost/${image}`}} style = {{width:'20%',height:'20%'}}/>


        {/* <TouchableOpacity onPress = {() => navigation.navigate('Account')}>
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
        </TouchableOpacity> */}
      </View>
    </View>
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
