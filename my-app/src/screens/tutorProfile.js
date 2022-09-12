import React from 'react';
import { View, Text } from 'react-native'
import styles from '../styles/tutorProfile.styles.js';
import { CustomButton } from '../components/CustomButton.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const TutorProfileScreen = ({ navigation, route }) => {

  return (
    <View style = { styles.container }>
      <View style = { styles.imgContainer }>
        <MaterialCommunityIcons 
          style = { styles.img } 
          name="account-circle" size={210} 
          color="#A7C7E7" />
      </View>      
      <View style = { styles.texts }>
        <View style = { styles.text1 }>
          <Text style = { styles.text }>Name</Text>
<<<<<<< HEAD

=======
>>>>>>> 217d9f3aef520dbd4545060029a740ced6e2521d
          <Text style = { styles.text }>{route.params.item.username}</Text>
        </View>
        <View style = { styles.text1 }>
          <Text style = { styles.text }>Subject</Text>
          <Text style = { styles.text }>{route.params.item.subject}</Text>
        </View>
        <View style = { styles.text1}>
          <Text style = { styles.text }>Experience</Text>
          <Text style = { styles.text }>{route.params.item.experience} years</Text>
        </View>
        <View style = { styles.text1}>
          <Text style = { styles.text }>Hourly Rate</Text>
          <Text style = { styles.text }>${route.params.item.hourlyRate}</Text>
        </View>
        <View style = { styles.text1 }>
          <Text style = { styles.text }>Highest Education</Text>
          <Text style = { styles.text }>{route.params.item.highestEducation}</Text>
        </View>
        <View style = { styles.text1 }>
          <Text style = { styles.text }>Testimony</Text>
          <Text style = { styles.text }>{route.params.item.testimony}</Text>
        </View>
      </View>
      <View style = { styles.btn }>
        <CustomButton 
          onPress = {() => 
            navigation.navigate( 
              'Request Tutor', 
              { 
                userId: route.params.userId,
                tutorId: route.params.item.tutorId,
                subjectId: route.params.item.subjectId,
                hourlyRate: route.params.item.hourlyRate,
              },
            )}
          text = "Request"
        />
      </View>
    </View>
  )
}
