
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import API from '../config/api.js'
import styles from '../styles/tutorsListing.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const TutorsListingScreen = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [tutors, setTutors] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    listTutors()
  }, [])

  function listTutors() {
    API.get('/general/tutors')
      .then(function (response) {
        // console.log(response.data.data);
        setTutors(response.data.data);
        (setIsLoading(false))
      })
      .catch((e) => (console.log(e)))
  }

  const find = (tutors) => {
    return tutors.filter((item) =>
      item.name.toUpperCase().includes(query) ||
      item.highestEducation.toUpperCase().includes(query) ||
      (String(item.hourlyRate)).toUpperCase().match(String(query)) ||
      (String(item.experience)).toUpperCase().match(String(query))
    )
  }

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.empty}>No data found</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.listings}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          // value={search}
          placeholder='Search for Name, Experience, Qualification...'
          underlineColorAndroid="transparent"
          onChangeText={(text) => {
            setQuery(text.toUpperCase())
            find(tutors)
          }}
        />
      </View>

      {isLoading ?
        <View
          style={styles.spinner}>
          <ActivityIndicator
            size='large'
            color='#A7C7E7'
          />
        </View> :
        <FlatList
          showsVerticalScrollIndicator={false}
          data={find(tutors)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listing}
              onPress={() => navigation.navigate('Tutor profile', { item })}>
              <MaterialCommunityIcons name="account-circle" size={60} color="#A7C7E7" />
              <View style={styles.text0}>
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>Experience: {item.experience} yrs</Text>
              </View>
              <Text style={styles.price}>${item.hourlyRate}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={myListEmpty}
        />
      }
    </SafeAreaView>
  )
}
