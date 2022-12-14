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
import styles from '../styles/login.styles.js';
import loginPic from '../assets/loginPic.jpg';
import API from '../config/api.js';
import { CustomTextInput } from '../components/CustomTextInput.js';
import { CustomButton } from '../components/CustomButton.js';
import { CustomFlatButton } from '../components/CustomFlatButton.js';

export const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {

      await API
        .post ('/login', {
          email: email, 
          password: password,
        })
        .then (res => {

          if (res.data.status == "200") {
            navigation.navigate('Tabs', {screen:'Welcome', params:{email:email}});
            // console.log(res.message);
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
  };

  const handleForgetPassword = () => {
    alert("A reset password email had been sent to you")
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
                onChangeText = { setEmail }
              />
              <CustomTextInput 
                placeholder = 'password'
                value = { password }
                onChangeText = { setPassword }
                secureTextEntry
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