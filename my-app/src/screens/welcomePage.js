import React, { useState, useEffect } from 'react'
import { 
  View, 
  Text, 
  FlatList, 
  ScrollView,
  TouchableOpacity
 } from 'react-native'
import API from '../config/api.js'
import styles from '../styles/welcomePage.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const WelcomeScreen = ({ navigation, route }) => {

  const [tutors, setTutors] = useState([])
  const [filterTutor, setFilterTutor] = useState([])

  useEffect(() => {
    listTutors()
  }, [])

  function listTutors() {
    API.get('/general/tutors')
      .then(function (response) {
        // console.log(response.data.data);
        setTutors(response.data.data);
        setFilterTutor(response.data.data);
        // (setIsLoading(false))
      })
      .catch((e) => (console.log(e)))
  }

  return (
    <View style = { styles.container }>
      <View style = { styles.headerContainer } >
        <View style = { styles.imgContainer }>
          <MaterialCommunityIcons name="account-circle" size = { 80 } color = "#FFFFFF" />
          <View style= { styles.usernameContainer }>            
            <Text style = { styles.userName } >{ route.params.email }</Text> 
          </View>         
        </View>
        <Text style = { styles.headerText }>Book a Tutor</Text>
        <Text style = { styles.headerText }>Anytime, Anywhere</Text>
      </View>
      <ScrollView style = { styles.subjects} horizontal = { true } >
        <View style = { styles.subject }>
          <MaterialCommunityIcons name="alphabetical" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>English</Text>
        </View>
        <View style = { styles.subject }>
        <MaterialCommunityIcons name="calculator-variant-outline" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>Math</Text>
        </View>
        <View style = { styles.subject }>
          <MaterialCommunityIcons name="atom" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>Science</Text>
        </View>
        <View style = { styles.subject }>
        <MaterialCommunityIcons name="camera-timer" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>History</Text>
        </View>
        <View style = { styles.subject }>
          <MaterialCommunityIcons name="ideogram-cjk-variant" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>Chinese</Text>
        </View>
        <View style = { styles.subject }>
          <MaterialCommunityIcons name="creation" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>Art</Text>
        </View>
        <View style = { styles.subject }>
          <MaterialCommunityIcons name="earth" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>Geography</Text>
        </View>
        <View style = { styles.subject }>
          <MaterialCommunityIcons name="flask" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>Chemistry</Text>
        </View>
        <View style = { styles.subject }>
          <MaterialCommunityIcons name="mine" size={50} color="#A7C7E7" />
          <Text style = { styles.text}>Biology</Text>
        </View>
      </ScrollView>
      <FlatList 
          style = { styles.listings }
          showsVerticalScrollIndicator = {false}
          data={filterTutor}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listing}
              onPress={() => navigation.navigate('Tutor profile', { item })}
            >
              <View style = { styles.iconAndText }>
                <MaterialCommunityIcons name = "account-circle" size = { 50 } color = "#A7C7E7" />
                <View style = { styles.texts }>
                  <Text style = { styles.text1 }>{ item.name }</Text>
                  <Text style = { styles.text2 }>Experience: { item.experience } yrs</Text>
                </View>
              </View>
              <Text style = { styles.price }>${ item.hourlyRate }</Text>
            </TouchableOpacity>
          )}
          //ListEmptyComponent={myListEmpty}
        />
    </View>
  )
}