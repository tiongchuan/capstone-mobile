import { 
  View, 
  Text, 
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView, 
  TouchableWithoutFeedback,
  } from 'react-native';
import API from '../config/api.js';
import React, { useState } from 'react';
import { Switch } from 'react-native-switch';
import styles from '../styles/signUp.styles.js';
import signUpPic from '../assets/signUpPic.png';
import { CustomButton } from '../components/CustomButton.js';
import { CustomTextInput } from '../components/CustomTextInput.js';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setUserId, setUsername } from '../redux/actions.js';

export const SignUpScreen = ({ navigation }) => {
  
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const { userId, username, email, password } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  let role
  if (isEnabled){
    role = 'student'
  } else {
    role = 'tutor'
  }
  
  let insertStudentId

  const handleSignUp = async() => {
    if (password === confirmPassword){
      await API.post('/register', {
        username: username,
        email: email,
        password: password,
        role: role
      })
      .then((response) => {
        console.log(response.data)
        insertStudentId = response.data.data.id
        dispatch(setUserId(insertStudentId))
        API.put('/protected/student/add', {
          userId: insertStudentId,
          schoolId: 1,
          name: username,
          parent: "OTC",
          remarks: "weak in maths"
        }) 
        .catch((error) => {
          console.log(error)
        })
        navigation.navigate('Onboarding')
      })
    } else {
      alert('Password does not match')
    }
  }
 
  return(
    <ScrollView>
      <KeyboardAvoidingView 
        style = { styles.container } 
        behavior= { Platform.OS === "ios" ? "padding" : null }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            <Image style = { styles.img } source = { signUpPic }/>
            <View style = { styles.inputContainer }>
              <CustomTextInput 
                placeholder = 'Username'
                value = { username }
                onChangeText = {( value ) => dispatch(setUsername(value)) }
              />
              <CustomTextInput 
                placeholder = 'Email' 
                value = { email }
                // onChangeText = { setEmail }
                onChangeText = {( value ) => dispatch(setEmail(value)) }
               />
              <CustomTextInput
                placeholder = 'Enter password' 
                value = { password }
                // onChangeText = { setPassword } 
                onChangeText = {( value ) => dispatch(setPassword(value)) }
                
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
                  activeTextStyle = {{ color: '#686e73', fontSize: 15 }}
                  inactiveTextStyle = {{ color: '#686e73', fontSize: 15 }}                 
                  backgroundActive = { '#d2e8fa' }
                  backgroundInactive = { '#d2e8fa' }
                  circleActiveColor = { '#c0d4ed' }
                  circleInActiveColor = { '#c0d4ed' }
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