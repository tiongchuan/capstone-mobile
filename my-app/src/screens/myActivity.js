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
import styles from '../styles/myActivity.styles';
import API from '../config/api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';;

export const MyActivityScreen = ({ navigation, route }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");

  // get userId
  const { userId } = useSelector(state => state.userReducer)
  // const userId = route.params.userId
  console.log('ID:', userId)

  useEffect(() => {
    listBookings()
  }, [])

  function listBookings() {

    API.get(`/general/viewEnrollment/${userId}`)
      .then(function (response) {
        console.log(response.data.data);
        setBookings(response.data.data);
        (setIsLoading(false))
      })
      .catch((e) => (console.log(e)))
  }

  const find = (bookings) => {
    return bookings.filter((item) =>
      item.tutor.toUpperCase().includes(query.toUpperCase()) ||
      item.subject.toUpperCase().includes(query.toUpperCase()) ||
      (String(item.enrollmentDate)).toUpperCase().match(String(query)) ||
      (String(item.bookingTime)).toUpperCase().match(String(query))
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
          placeholder='Search for my bookings...'
          underlineColorAndroid="transparent"
          onChangeText={(text) => {
            setQuery(text)
            find(bookings)
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
          data={find(bookings)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listing}
              onPress={() => navigation.navigate('myActivity', { item })}>
                
              <MaterialCommunityIcons name="account-circle" size={60} color="#A7C7E7" />

              <View style={styles.text0}>
                <Text style={styles.text1}>Date:&nbsp;
                  <Highlight style={styles.text1} fullText={item.enrollmentDate}></Highlight>
                </Text>
                <Text style={styles.text2}>Time:&nbsp;
                  <Highlight style={styles.text2} fullText={item.bookingTime}></Highlight>
                </Text>
                <Text style={styles.text2}>Tutor:&nbsp;
                  <Highlight style={styles.text2} fullText={item.tutor} ></Highlight>
                </Text>
              </View>
              <Text style={styles.price}>
                <Highlight style={styles.price} fullText={item.subject}></Highlight>
              </Text>

            </TouchableOpacity>
          )}
          ListEmptyComponent={myListEmpty}
        />
      }
    </SafeAreaView>
  )
}
