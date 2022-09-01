
import React, { useEffect, useState } from "react"
import { ScrollView, View, Text, Image, Button, TextInput, FlatList, OptionItem, Icon, TouchableOpacity, SafeAreaView, ImageStore } from 'react-native'
import styles from '../styles/welcomePage.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import API from '../config/api.js'



const StarReview = ({ rate }) => {
  let starComponents = [];
  let fullStar = Math.floor(rate);
  let noStar = Math.floor(5 - rate);
  let halfStar = 5 - fullStar - noStar;
  // console.log(rate);

  for (let i = 0; i < fullStar; i++) {
    starComponents.push(
      <MaterialCommunityIcons name="star" key={`full-${i}`} size={20} />
    )
  }

  for (let i = 0; i < halfStar; i++) {
    let decimal = rate - fullStar;
    if (decimal < 0.25) {
      starComponents.push(<MaterialCommunityIcons name="star-outline" key={`decimal-${i}`} size={20} />)
    } else if (decimal > 0.25 && decimal < 0.75) {
      starComponents.push(<MaterialCommunityIcons name="star-half-full" key={`decimal-${i}`} size={20} />)
    } else {
      starComponents.push(<MaterialCommunityIcons name="star" key={`decimal-${i}`} size={20} />)
    }
  }

  for (let i = 0; i < noStar; i++) {
    starComponents.push(
      // <Image
      //   key={`full-${i}`}
      //   source={signUpPic}
      //   resizeMode='cover'
      //   style={{
      //     width: 20,
      //     height: 20
      //   }}
      // />
      <MaterialCommunityIcons name="star-outline" key={`empty-${i}`} size={20} />
    )
  }



  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* <Text>{rate}</Text> */}
      {starComponents}
    </View>
  )
}

// const IconItem = ({ icon, bgColor, label, onPress }) => {
//   return(
//     <MaterialCommunityIcons name = {icon}
//     styles={{flex:1,  alignItems:'center', justifyContent:'center'}}
//     onPress={onPress}
//     />

//   )
// }


export const WelcomeScreen = ({ navigation, route }) => {

  const [tutors, setTutors] = useState([])
  // const [filterTutor, setFilterTutor] = useState([])
  const [query, setQuery] = useState("")
  // const [category, setCategory] = useState("Popular")

  useEffect(() => {
    listTutors()
  }, [])

  function listTutors() {
    API.get('/general/tutors')
      .then(function (response) {
        // console.log(response.data.data);
        setTutors(response.data.data);
        // setFilterTutor(response.data.data);
        // (setIsLoading(false))
      })
      .catch((e) => (console.log(e)))
  }

  const find = (tutors) => {
    return tutors.filter((item) =>
      String(item.subjectId).includes(query)
    )
  }

  return (

    < View style={styles.container} >
      <View style={styles.headerContainer} >
        <View style={styles.imgContainer}>
          <MaterialCommunityIcons name="account-circle" size={80} color="#FFFFFF" />
          <View style={styles.usernameContainer}>
            <Text style={styles.userName} >{route.params.email}</Text>
          </View>
        </View>
        <Text style={styles.headerText}>Book a Tutor</Text>
        <Text style={styles.headerText}>Anytime, Anywhere</Text>
      </View>

      <ScrollView style={styles.subjects} horizontal={true} >
      <View style={styles.subject}>
          <MaterialCommunityIcons name="clipboard-text-outline" size={50} color= {(query==='')?"black":"#A7C7E7"}
            onPress={() => { setQuery('')}}
          />
          <Text style={styles.text}>Popular</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="alphabetical" size={50} color= {(query==='1')?"black":"#A7C7E7"}
            onPress={() => { setQuery('1') }}
          />
          <Text style={styles.text}>English</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="calculator-variant-outline" size={50} color= {(query==='2')?"black":"#A7C7E7"}
            onPress={() => { setQuery('2') }}
          />
          <Text style={styles.text}>Math</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="atom" size={50} color="#A7C7E7" />
          <Text style={styles.text}>Science</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="camera-timer" size={50} color="#A7C7E7" />
          <Text style={styles.text}>History</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="ideogram-cjk-variant" size={50} color="#A7C7E7" />
          <Text style={styles.text}>Chinese</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="creation" size={50} color="#A7C7E7" />
          <Text style={styles.text}>Art</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="earth" size={50} color="#A7C7E7" />
          <Text style={styles.text}>Geography</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="flask" size={50} color="#A7C7E7" />
          <Text style={styles.text}>Chemistry</Text>
        </View>
        <View style={styles.subject}>
          <MaterialCommunityIcons name="mine" size={50} color="#A7C7E7" />
          <Text style={styles.text}>Biology</Text>
        </View>

      </ScrollView>
      <FlatList
        style={styles.listings}
        showsVerticalScrollIndicator={false}
        data={find(tutors)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listing}
            onPress={() => navigation.navigate('Tutor profile', { item })}
          >
            <View style={styles.iconAndText}>
              <MaterialCommunityIcons name="account-circle" size={50} color="#A7C7E7" />
              <View style={styles.texts}>
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>${item.hourlyRate}/hr</Text>
              </View>
            </View>
            {/* <Text style={styles.price}>{item.rating}/5</Text> */}
            <StarReview rate={item.rating} />
          </TouchableOpacity>
        )}
      //ListEmptyComponent={myListEmpty}
      />
    </View >
  )
}
