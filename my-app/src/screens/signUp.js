import { 
  View, 
  Text, 
  Image,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView, 
  TouchableWithoutFeedback,
  } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-switch'
import signUpPic from '../assets/signUpPic.jpg'
import styles from '../styles/signUp.styles'
import API from '../config/api.js'

export const SignUpScreen = ({ navigation }) => {
  
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const handleSignUp =  async () => {

    await API
    .post ( '/register', {
      email: email, 
      password: password,
      //role: role,
    })
    .then ( res => {     
      if ( res.data.status == "200" ) {
        navigation.navigate('Tabs', {screen:'Welcome', params:{email:email}});
        console.log( res.data );
        console.log( "sign up successfully" );
      } 
    })
    .catch ( e => {
      // Check if email or password is empty
      if ( e.response.status == "500" ) {
        const message = JSON.stringify( e.response.data.message );
        alert( `${message}` );
        // console.log(e.response.status);
        // console.log(e.response.data);
      }
    });
  };

  return(
    <ScrollView>
      <KeyboardAvoidingView 
        style = { styles.container } 
        behavior= { Platform.OS === "ios" ? "padding" : "height" }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            <Image style = { styles.img } source = { signUpPic }/>
            <View style = { styles.inputContainer }>
              <TextInput 
                style = { styles.input } 
                placeholder = 'Username'
                value = { name }
                onChangeText = { setName } 
              />
              <TextInput 
                style = {styles.input} 
                placeholder = 'Email' 
                value = { email }
                onChangeText = { setEmail }
                />
              <TextInput 
                style = {styles.input} 
                placeholder = 'Enter password' 
                value = { password }
                onChangeText = { setPassword }
                />
              <TextInput 
                style = { styles.input } 
                placeholder = 'Confirm password' 
                value = { confirmPassword }
                onChangeText = { setConfirmPassword }
                />
              <View style = { styles.toggle }>
                <Text style = { styles.text }>I am a </Text>
                <Switch
                  value = { isEnabled }
                  onValueChange = { toggleSwitch }
                  disabled = { false }
                  barHeight = { 25 }
                  circleSize = { 35 }
                  switchLeftPx = { 2 }
                  switchRightPx = { 5 }
                  circleBorderWidth = { 0 }
                  switchBorderRadius = { 10 }
                  activeText = { 'User' }
                  inActiveText = { 'Tutor' }
                  backgroundActive = { 'gray' }
                  backgroundInactive = { 'gray' }
                  circleActiveColor = { '#D9D9D9' }
                  circleInActiveColor = { '#D9D9D9' }
                />
              </View>
              <TouchableOpacity
                style = { styles.btn } 
                onPress = { handleSignUp }>
                <Text style = { styles.btnText }>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>  
  )
}