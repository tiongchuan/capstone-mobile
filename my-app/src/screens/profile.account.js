import React from 'react';
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity 
} from 'react-native'
import API from '../config/api.js';
import styles from '../styles/tutorProfile.styles.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux'
import { setImage } from '../redux/actions.js'

export const ProfileAccountScreen = ({ navigation }) => {

  const { userId, image, getImage } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  // GET user profile image from database
  // const getProfileImage = async() => {
  //   await API
  //     .get(`/general/user/profile_img/${userId}`)
  //     .then(res => {
  //       console.log(res.data.profile_img)
  //       dispatch(setImage(res.data))
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  console.log('Get:', getImage)

  return (
    <View style = { styles.container }>
      <View style = { styles.imgContainer }>
        { getImage ?  
          <Image 
            // source = {{ uri: `https://quiet-river-74601.herokuapp.com/Images/${getImage}` }} 
            source = {{ uri: `http://192.168.18.8:3000/Images/${getImage}` }} 
            style = { styles.img }/> : 
          <MaterialCommunityIcons 
            size = {210} 
            name = "account-circle" 
            color = "#A7C7E7" 
            style = { styles.img }  
          />
        }
        
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
