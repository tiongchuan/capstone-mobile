import { 
  View, 
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import API from '../config/api.js';
import React, { useState, useEffect } from 'react';
import loginPic from '../assets/loginPic.jpg';
import styles from '../styles/login.styles.js';
import { CustomButton } from '../components/CustomButton.js';
import { CustomTextInput } from '../components/CustomTextInput.js';
import { CustomFlatButton } from '../components/CustomFlatButton.js';
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPassword, setUserId, setUsername } from '../redux/actions.js';

export const LoginScreen = ({ navigation }) => {

  const { email, password, username, userId } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  // const [ email, setEmail ] = useState( null );
  // const [ password, setPassword ] = useState( null );

  const handleLogin = async() => {
   
      await API
      .post ('/login', {
        email: email,
        password: password
      })
      .then (res => {

        console.log(res.data)
        dispatch(setUsername(res.data.data.username))
        dispatch(setUserId(res.data.data.id))
        console.log(username)
        console.log(userId)

        if (res.data.status == "200") {
          navigation.navigate( 'Tabs', { 
            screen: 'Welcome',
            // params:{ 
            // screen: 'My profile',
            // username: res.data.data.username, 
            // userId: res.data.data.id
            // }
          })
        }
      })
      .catch (e => {

        // Check if email or password is empty
        if (e.response.status == "500") {
          const message = JSON.stringify(e.response.data.message);
          alert(`${message}`);
        }

        // Check if email exist in database
        if (e.response.status == "401") {
          const message = JSON.stringify(e.response.data.message);
          alert(`${message}`);
        }
      });
    //}
    
  };

  const handleForgetPassword = () => {
    alert( "A reset password email had been sent to you" )
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView 
        style = { styles.container } 
        behavior= { Platform.OS === "ios" ? "padding" : "height" }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            <Image style = { styles.img } source = { loginPic }/>
            <View style = { styles.inputContainer }>
              <CustomTextInput
                placeholder = 'email' 
                 value = { email }
                //onChangeText = { setEmail }
                onChangeText = {( value ) => dispatch(setEmail(value)) }
              />
              <CustomTextInput 
                placeholder = 'password'
                value = { password }
                // onChangeText = { setPassword }
                onChangeText = {( value ) => dispatch(setPassword(value))}
              />
              <CustomFlatButton 
                onPress = { handleForgetPassword }
                text = "Forget password?"
              />
              <CustomButton 
                onPress = { handleLogin }
                text = "Login"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}