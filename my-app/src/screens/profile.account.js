import API from '../config/api.js';
import { useSelector } from 'react-redux'
import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../styles/tutorProfile.styles.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const ProfileAccountScreen = () => {

  const [ student, setStudent ] = useState([ ])

  const { userId, getImage } = useSelector( state => state.userReducer )

  console.log( 'Get:', getImage  )
  console.log( userId )

  useEffect(() => {
    getStudentProfile ()
  }, [])

  // get student profile
  const getStudentProfile = async () => {
    await API
      .get(`/general/viewStudent/${userId}`) 
      .then(res => {
        console.log('Res:', res.data)
        setStudent(res.data.data[0]) 
      })
      .catch( err => {
        console.log( err )
      })
  }

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
          <Text style = { styles.text }>{ student.studentName }</Text>
        </View>
        <View style = { styles.text1}>
          <Text style = { styles.text }>Email</Text>
          <Text style = { styles.text }>{ student.email }</Text>
        </View>
        <View style = { styles.text1}>
          <Text style = { styles.text }>Parent</Text>
          <Text style = { styles.text }>{ student.parent }</Text>
        </View>
        <View style = { styles.text1}>
          <Text style = { styles.text }>Remarks</Text>
          <Text style = { styles.text }>{ student.remarks }</Text>
        </View>
      </View>
    </View>
  )
}
