
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
import { useSelector, useDispatch } from 'react-redux'
import { setUserId } from '../redux/actions.js';

export const TutorsListingScreen = ({ navigation, route }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [tutors, setTutors] = useState([]);
  const [query, setQuery] = useState("")

  const { userId } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  console.log(userId);

  useEffect(() => {
    listTutors()
  }, [])

  function listTutors() {

    API.get('/general/viewTutor')
      .then(function (response) {
        // console.log(response.data.data);
        setTutors(response.data.data);
        (setIsLoading(false))
      })
      .catch((e) => (console.log(e)))
  }

  const find = (tutors) => {
    return tutors.filter((item) =>
      item.tutorName.toUpperCase().includes(query.toUpperCase()) ||
      item.subject.toUpperCase().includes(query.toUpperCase()) ||
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

  function Highlight({ fullText }) {
    const parts = fullText.toString().split(new RegExp(`(${query})`, 'gim'));
    // console.log(parts);
    return (
      <Text>{parts.map((part, i) => (
        part.toLowerCase() === query.toLowerCase()) ?
        <Text key={i} style={{ backgroundColor: '#A7C7E7' }}>{part}</Text> :
        part)}
      </Text>
    );
  }


  return (
    <SafeAreaView style={styles.listings}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          // value={search}
          placeholder='Search for Name, Subject, Hourly Rate...'
          underlineColorAndroid="transparent"
          onChangeText={(text) => {
            setQuery(text)
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
              onPress={() => navigation.navigate('Tutor profile', { userId: route.params.userId, item })}>
              <MaterialCommunityIcons name="account-circle" size={60} color="#A7C7E7" />

              <View style={styles.text0}>
                <Highlight style={styles.text1}
                  fullText={item.tutorName}></Highlight>
                <Text style={styles.text2}>Subject:&nbsp;
                  <Highlight style={styles.text2}
                    fullText={item.subject} ></Highlight></Text>
                <Text style={styles.text2}>Experience:&nbsp;
                  <Highlight style={styles.text2}
                    fullText={item.experience} ></Highlight> yrs</Text>
              </View>
              <Text style={styles.price}>$
                <Highlight style={styles.price}
                  fullText={item.hourlyRate}></Highlight></Text>

            </TouchableOpacity>
          )}
          ListEmptyComponent={myListEmpty}
        />
      }
    </SafeAreaView>
  )
}
