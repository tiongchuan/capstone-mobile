import React, { useEffect, useState } from "react"
import { View, Text, Image, Button, TextInput, FlatList, OptionItem, Icon, TouchableOpacity, SafeAreaView, ImageStore } from 'react-native'
import styles from '../styles/welcomePage.styles'
import signUpPic from '../assets/signUpPic.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const StarReview = ({ rate }) => {
  let starComponents = [];
  let fullStar = Math.floor(rate);
  let noStar = Math.floor(5 - rate);
  let halfStar = 5 - fullStar - noStar;
  // console.log(rate);

  for (let i = 0; i < fullStar; i++) {
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
      <MaterialCommunityIcons name="star" key={`full-${i}`} />
    )
  }

  // console.log(starComponents);

  for (let i = 0; i < halfStar; i++) {
    starComponents.push(
      // <Image
      //   key={`half-${i}`}
      //   source={icons.star-half-full}
      //   resizeMode="cover"
      //   style={{
      //     width: 20,
      //     height: 20
      //   }}
      // />
      <MaterialCommunityIcons name="star-half-full" key={`half-${i}`} />
    )
  }

  for (let i = 0; i < noStar; i++) {
    starComponents.push(
      // <Image
      //   key={`empty-${i}`}
      //   source={icons.star-outline}
      //   resizeMode="cover"
      //   style={{
      //     width: 20,
      //     height: 20
      //   }}
      // />
      <MaterialCommunityIcons name="star-outline" key={`empty-${i}`} />
    )
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {starComponents}
      <Text>{rate}</Text>
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


  // function renderData(item, index){

  //   let dataStyle={}
  //   if(index==0){
  //     dataStyle={marginLeft:30}
  //   }

  //   return(

  //     <TouchableOpacity
  //     style={{justifyContent:'center'}}
  //     onPress={()=>{console.log('pressed');}}
  //     >
  //      <Image
  //      source={signUpPic}
  //      style={{height:'20'}}
  //      /> 

  //      <Text style={styles.h1}>{item.name}</Text>

  //     </TouchableOpacity>
  //   )
  // }





return (

  <View style={styles.container}>


    <View style={styles.textContainer}>
      <Text style={styles.p1}>Welcome , </Text>
      <Text style={styles.p2}>Mia</Text>
    </View>

    {/* <TextInput
        style={styles.search}
        value={search}
        placeholder='Search for Tutor, Subject, Hourly Rate...'
        underlineColorAndroid="transparent"
      onChangeText={(text) => searchFilter(text)}
      /> */}


    <View style={styles.bannerContainer}>
      <Image style={styles.banner} source={signUpPic} />
    </View>

    <View style={styles.iconContainer}>
        <View style={styles.icons}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="alphabetical" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
            <Text style={{marginTop:0}}>home</Text>
            </View>
          <MaterialCommunityIcons name="atom" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="angle-acute" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="ideogram-cjk-variant" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
        </View>
        <View style={styles.icons}>
          <MaterialCommunityIcons name="angularjs" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="violin" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="sine-wave" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
          <MaterialCommunityIcons name="basketball" color="#9D2427" size={85}
            onPress={() => { console.log('helo') }} />
        </View>
      </View>

{/* 
    <View style={styles.icons}>
      <View style={styles.icon}>
        <IconItem
          icon ='atom'
          bgColor={['#46aeff', '#5884ff']}
          label='Science'
          onPress={() => { console.log('helo') }}
        />
      </View>
    </View> */}




    <View style={{ flex: 1 }}>
      <Text style={styles.h1}>Popular Tutors</Text>
      {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={search }
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => renderData(item, index)}
        /> */}


      <StarReview rate={3.5} />

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