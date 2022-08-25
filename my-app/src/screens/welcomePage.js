import React, { useEffect, useState } from "react"
import { View, Text, Image, Button, TextInput, FlatList, OptionItem, Icon } from 'react-native'
import styles from '../styles/welcomePage.styles'
import signUpPic from '../assets/signUpPic.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const WelcomeScreen = ({ navigation, route }) => {



  const [search, setSearch] = useState('');


  // const searchFilter = (text) => {
  //   if (text) {
  //     const newData = tutors.filter((item) => {
  //       const tutorUpper = item.name ? item.name.toUpperCase() : "".toUpperCase();
  //       const textUpper = text.toUpperCase();
  //       return tutorUpper.indexOf(textUpper) > -1;
  //     })
  //     setFilterTutor(newData)
  //     setSearch(text);
  //   } else {
  //     setFilterTutor(tutors);
  //     setSearch(text)
  //   }
  // }


  return (

    <View style={styles.container}>
      <TextInput
        style={styles.search}
        value={search}
        placeholder='Search for Tutor, Subject, Hourly Rate...'
        underlineColorAndroid="transparent"
      // onChangeText={(text) => searchFilter(text)}
      />
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={signUpPic} />
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icons}>

          {/* <OptionItem
        icon={signUpPic}
        lable="train"
        /> */}
          {/* <Icon name={home}/> */}
          <MaterialCommunityIcons name="alphabetical" color="#9D2427" size={100} title='English'
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          {/* <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="home" color="#9D2427" size={100}
            onPress={() => { console.log('helo') }} /> */}

        </View>
      </View>



      <View style={{ flex: 1 }}>

      </View>






    </View>


    // <View style = { styles.container }>
    //   <View style={styles.btn}>
    //     <Button 
    //       title='Log out' onPress={()=>navigation.navigate('Home')} />
    //   </View>
    //   <View style={styles.container1} >
    //     <View style={styles.welcomeTexts}>
    //       <Text style={styles.p1}>Welcome </Text>
    //       <Text style={styles.p2}> { route.params.email } </Text>
    //     </View>
    //     <Image style = { styles.img } source = { boy } />

    //     <View style = { styles.texts }> 
    // {/* <Text style = { styles.text }>Name: { route.params.name }</Text> */}
    //       <Text style = { styles.text }>Age: 20 </Text>
    //       <Text style = { styles.text }>E-mail: { route.params.email } </Text>
    //       <Text style = { styles.text }>Mobile number: 94582165 </Text>
    //     </View>
    //   </View>
    // </View>
  )
}