import { 
  View, 
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import API from '../config/api.js';
import styles from '../styles/login.styles.js';
import loginPic from '../assets/LoginImage.png';
import { useSelector, useDispatch } from 'react-redux'
import { CustomButton } from '../components/CustomButton.js';
import { CustomTextInput } from '../components/CustomTextInput.js';
import { CustomFlatButton } from '../components/CustomFlatButton.js';
import { setEmail, setPassword, setUserId, setUsername } from '../redux/actions.js';

export const LoginScreen = ({ navigation }) => {

  const { email, password } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  const handleLogin = async () => {
   
      await API
      .post ( '/login', {
        email: email,
        password: password
      })
      .then ( res => {
        console.log(res.data)
        dispatch ( setUsername(res.data.data.username))
        dispatch ( setUserId(res.data.data.id))

        if ( res.data.status == "200" ) {
          navigation.navigate( 'Tabs', { screen: 'Welcome'})
        }
      })
      .catch (e => {
        // Check if email or password is empty
        if ( e.response.status == "500" ) {
          const message = JSON.stringify ( e.response.data.message );
          alert ( `${message}` );
        }

        // Check if email exist in database
        if (e.response.status == "401") {
          const message = JSON.stringify( e.response.data.message );
          alert ( `${message}` );
        }
      })
  };

  const handleForgetPassword = () => {
    alert ( "A reset password email had been sent to you" )
  }

  const handleNewUser = () => {
    navigation.navigate ( 'Sign Up' )
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView  
        style = { styles.container } 
        behavior= { Platform.OS === "ios" ? "padding" : null }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            <Image style = { styles.img } source = { loginPic }/>
            <View style = { styles.inputContainer }>
              <CustomTextInput
                placeholder='Email'
                onChangeText = { text => dispatch ( setEmail ( text ) ) }
                value = { email }
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={true}
              />
              <CustomTextInput 
                placeholder = 'Password'
                onChangeText = { text => dispatch ( setPassword ( text ))}
                value = { password }
                secureTextEntry = { true }
              />
              <CustomFlatButton 
                onPress = { handleForgetPassword }
                text = "Forget password?"
              />
              <CustomFlatButton 
                onPress = { handleNewUser }
                text = "New user?"
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