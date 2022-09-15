import React, { useEffect, useState } from "react"
import { 
  View, 
  Text, 
  Image,
  FlatList, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator
} from 'react-native'
import API from '../config/api.js'
import { setGetImage } from '../redux/actions.js'
import styles from '../styles/welcomePage.styles'
import { useSelector, useDispatch } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StarReview = ({ rate }) => {
  let starComponents = [];
  let fullStar = Math.floor( rate );
  let noStar = Math.floor( 5 - rate );
  let halfStar = 5 - fullStar - noStar;

  for ( let i = 0; i < fullStar; i++ ) {
    starComponents.push(
      <MaterialCommunityIcons color = "#5d779c" name = "star" key = { `full-${i}` } size = {20} />
    )
  }
  for ( let i = 0; i < halfStar; i++ ) {
    let decimal = rate - fullStar;
    if ( decimal < 0.25 ) {
      starComponents.push( <MaterialCommunityIcons color = "#5d779c" name = "star-outline" key = { `decimal-${i}` } size = { 20 } />)
    } else if ( decimal > 0.25 && decimal < 0.75 ) {
      starComponents.push( <MaterialCommunityIcons  color = "#5d779c"name = "star-half-full" key = { `decimal-${ i }` } size = { 20 } />)
    } else {
      starComponents.push(<MaterialCommunityIcons color= "#5d779c" name="star" key={`decimal-${i}`} size={20} />)
    }
  }
  for (let i = 0; i < noStar; i++) {
    starComponents.push(
      <MaterialCommunityIcons color= "#5d779c" name="star-outline" key={`empty-${i}`} size={20} />
    )
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {starComponents}
    </View>
  )
}

export const WelcomeScreen = ({ navigation, route }) => {

  const [ tutors, setTutors ] = useState([ ])
  const [ query, setQuery ] = useState( "" )
  const [ isLoading, setIsLoading ] = useState(true);

  const { username, userId, getImage } = useSelector( state => state.userReducer )
  const dispatch = useDispatch()

  useEffect(() => {
    getProfileImage()
    listTutors()
  }, [])
  
  // get profile image
  const getProfileImage = async () => {
    await API
      .get( `/general/user/profile_img/${userId}` ) 
      .then( res => {
        dispatch ( setGetImage ( res.data.data.profile_img ))
        console.log ( 'GET:', res.data.data.profile_img )
      })
      .catch( err => {
        console.log( err )
      }
    )
  }

  function listTutors() {

    API.get('/general/viewTutor')
      .then(function (response) {
        setTutors(response.data.data);
        (setIsLoading(false))
      })
      .catch((e) => (console.log(e)))
  }

  const find = (tutors) => {
    return tutors.filter((item) =>
      String(item.subject).includes(query)
    )
  }

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.empty}>No Tutor available</Text>
      </View>
    );
  };

  return (

    <View style = { styles.container }>
      <View style = { styles.headerContainer } >
        <View style = { styles.imgContainer }>
          { getImage ? 
            <Image 
              // source = {{ uri: `https://quiet-river-74601.herokuapp.com/Images/${getImage}` }} 
              source = {{ uri: `http://192.168.18.8:3000/Images/${getImage}` }} 
              style = { styles.profileImg } /> : 
            <MaterialCommunityIcons name="account-circle" size = { 80 } color = "#FFFFFF" />}
          <View style= { styles.usernameContainer }>            
            <Text 
              style = { styles.userName } > { username } </Text> 
          </View>         
        </View>
        <Text style={styles.headerText}>Book a Tutor</Text>
        <Text style={styles.headerText}>Anytime, Anywhere</Text>
      </View>
      <View style = {{ flex: 1 }}>
        <ScrollView style={styles.subjects} horizontal={true} >
          <View style={styles.subject}>
            <MaterialCommunityIcons name="clipboard-text-outline" size={50} color={(query === '') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('') }}
            />
            <Text style={styles.text}>Popular</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="alphabetical" size={50} color={(query === 'English') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('English') }} />
            <Text style={styles.text}>English</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="calculator-variant-outline" size={50} color={(query === 'Maths') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('Maths') }} />
            <Text style={styles.text}>Math</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="atom" size={50} color={(query === 'Science') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('Science') }} />
            <Text style={styles.text}>Science</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="camera-timer" size={50} color={(query === 'History') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('History') }} />
            <Text style={styles.text}>History</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="ideogram-cjk-variant" size={50} color={(query === 'Chinese') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('Chinese') }} />
            <Text style={styles.text}>Chinese</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="creation" size={50} color={(query === 'Art') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('Art') }} />
            <Text style={styles.text}>Art</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="earth" size={50} color={(query === 'Geography') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('Geography') }} />
            <Text style={styles.text}>Geography</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="flask" size={50} color={(query === 'Chemistry') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('Chemistry') }} />
            <Text style={styles.text}>Chemistry</Text>
          </View>
          <View style={styles.subject}>
            <MaterialCommunityIcons name="mine" size={50} color={(query === 'Biology') ? "#5d779c" : "#A7C7E7"}
              onPress={() => { setQuery('Biology') }} />
            <Text style={styles.text}>Biology</Text>
          </View>
        </ScrollView>
      </View>
      <View style = {{ flex: 3 }}>
        {isLoading ?
          <View
            style={styles.spinner}>
            <ActivityIndicator
              size='large'
              color='#A7C7E7'
            />
          </View> :
          <FlatList
            style={styles.listings}
            showsVerticalScrollIndicator={false}
            data={find(tutors).sort((a,b)=>b.rating - a.rating)}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listing}
                onPress={() => navigation.navigate(
                  'Tutor profile', 
                  { 
                    userId: route.params.userId, 
                    item 
                  }
                )}
              >
                <View style={styles.iconAndText}>
                  <MaterialCommunityIcons name="account-circle" size={50} color="#A7C7E7" />
                  <View style={styles.texts}>
                    <Text style={styles.text1}>{item.tutorName}</Text>
                    <Text style={styles.text2}>${item.hourlyRate}/hr</Text>
                  </View>
                </View>
                {/* <Text style={styles.price}>{item.rating}/5</Text> */}
                <StarReview rate={item.rating} />
              </TouchableOpacity>
            )}
            ListEmptyComponent={myListEmpty}
          />
        }
      </View>
    </View >
  )
}
