
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import styles from '../styles/tutorsListing.styles'
import profileImg from '../assets/profileImg.jpg'
import API from '../config/api.js'

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
    item.name.toUpperCase().includes(query)||
    item.highestEducation.toUpperCase().includes(query)||
    (String(item.hourlyRate)).toUpperCase().match(String(query))||
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
      {isLoading ? <View style={styles.spinner}><ActivityIndicator size='large' color='#9D2427' /></View> :

        <FlatList
          showsVerticalScrollIndicator={false}
          data={find(tutors)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listing}
              onPress={() => navigation.navigate('Tutor profile', { item })}
            >
              <Image style={styles.img} source={profileImg} />
              <View style={styles.text0}>
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>Experience: {item.experience} yrs</Text>
                <Text style={styles.text2}>Qualification: {item.highestEducation}</Text>
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




// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   SafeAreaView,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native'
// import styles from '../styles/tutorsListing.styles'
// import profileImg from '../assets/profileImg.jpg'
// import API from '../config/api.js'

// export const TutorsListingScreen = ({ navigation }) => {

//   const [isLoading, setIsLoading] = useState(true);
//   const [tutors, setTutors] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filterTutor, setFilterTutor] = useState([])

//   useEffect(() => {
//     listTutors()
//   }, [])

//   function listTutors() {
//     API.get('/general/tutors')
//       .then(function (response) {
//         // console.log(response.data.data);
//         setTutors(response.data.data);
//         setFilterTutor(response.data.data);
//         (setIsLoading(false))
//       })
//       .catch((e) => (console.log(e)))
//   }


//   const searchFilter = (text) => {
//     if (text) {
//       const newData = tutors.filter((item) => {
//         const tutorUpper = item.name ? item.name.toUpperCase() : "".toUpperCase();
//         const textUpper = text.toUpperCase();
//         return tutorUpper.indexOf(textUpper) > -1;
//       })
//       setFilterTutor(newData)
//       setSearch(text);
//     } else {
//       setFilterTutor(tutors);
//       setSearch(text)
//     }
//   }

//   const myListEmpty = () => {
//     return (
//       <View style={{ alignItems: "center" }}>
//         <Text style={styles.empty}>No data found</Text>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.listings}>
//       <TextInput
//         style={styles.search}
//         value={search}
//         placeholder='Search'
//         underlineColorAndroid="transparent"
//         onChangeText={(text) => searchFilter(text)}
//       />
//       {isLoading ? <View style={styles.spinner}><ActivityIndicator size='large' color='#9D2427' /></View> :

//         <FlatList
//           showsVerticalScrollIndicator = {false}
//           data={filterTutor}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.listing}
//               onPress={() => navigation.navigate('Tutor profile', { item })}>
//               <Image style={styles.img} source={profileImg} />
//               <View style={styles.text0}>
//                 <Text style={styles.text1}>{item.name}</Text>
//                 <Text style={styles.text2}>Highest Education: {item.highestEducation}</Text>
//               </View>
//               <Text style={styles.price}>${item.hourlyRate}</Text>
//             </TouchableOpacity>
//           )}
//           ListEmptyComponent={myListEmpty}
//         />
//       }
//     </SafeAreaView>
//   )
// }


