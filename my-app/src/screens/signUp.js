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
  } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-switch';
import signUpPic from '../assets/signUpPic.jpg';
import styles from '../styles/signUp.styles.js';
import API from '../config/api.js';
import { CustomTextInput } from '../components/CustomTextInput.js';
import { CustomButton } from '../components/CustomButton.js';

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
              <CustomTextInput 
                placeholder = 'Username'
                value = { name }
                onChangeText = { setName } 
              />
              <CustomTextInput 
                placeholder = 'Email' 
                value = { email }
                onChangeText = { setEmail }
               />
              <CustomTextInput
                placeholder = 'Enter password' 
                value = { password }
                onChangeText = { setPassword } 
              />
              <CustomTextInput
                placeholder = 'Confirm password' 
                value = { confirmPassword }
                onChangeText = { setConfirmPassword } 
              />
              <View style = { styles.toggle }>
                <Text style = { styles.toggleText }>I am a </Text>
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
              <CustomButton 
                onPress = { handleSignUp }
                text = "Sign Up"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>  
  )
}