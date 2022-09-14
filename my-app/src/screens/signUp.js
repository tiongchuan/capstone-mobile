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
  
  // const [username, setUsername] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
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

  const handleSignUp = async () => {

    await API
      .post('/register', {
        username: username,
        email: email,
        password: password,
        role: role
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data.id);
        insertStudentId = res.data.data.id
        console.log('setInsertStudentId:',insertStudentId);
      })
      .catch(e => {
        // Check if email or password is empty
        if (e.response.status == "500") {
          const message = JSON.stringify(e.response.data.message);
          alert(`${message}`);
         }
      })

    console.log('signup bw API:', userId);

    await API
      .put('/protected/student/add', {
        userId: insertStudentId,
        schoolId: 1,
        name: username,
        parent: "OTC",
        remarks: "weak in maths"
      })
      .then(res => {
        console.log(res.data);
        if (res.data.status == "200") {
          console.log("student added successfully");
        }
      })
      .catch(e => {
        console.log(e);
      });

    navigation.navigate('Onboarding');
    console.log("sign up successfully");
    dispatch(setUserId(insertStudentId))
    console.log("redux setUserId:",userId);
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
                // onChangeText = { setUsername } 
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