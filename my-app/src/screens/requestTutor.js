import React, { useState } from 'react'
import {
  View,
  Text,
  Keyboard,
  TextInput,
  ScrollView, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import dayjs from 'dayjs';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/requestTutor.styles.js';
import SelectDropdown from 'react-native-select-dropdown';
import { CustomButton } from '../components/CustomButton.js';
import API from '../config/api.js';
import { useSelector, useDispatch } from 'react-redux';

export const RequestTutorScreen = ({ navigation, route }) => {

  const [dayPress, setDayPress] = useState ()
  const [manageTimeSlot, setManageTimeSlot] = useState()
  const [comments, setComments] = useState()

  // get userId
  const { userId } = useSelector(state => state.userReducer)

  // const userId = route.params.userId
  console.log(userId);
  const tutorId = route.params.tutorId
  console.log(tutorId);
  const subjectId = route.params.subjectId
  console.log(subjectId);

  const handleAppointment = async() => {
    await API
      .put ('/protected/enrollment/add', {
        userId: userId,
        tutorId: tutorId,
        subjectId: subjectId,
        enrollmentDate: dayPress, 
        comments: comments,
        latestScore: 50,
        bookingTime: manageTimeSlot,
      })
      .then (res => {
        navigation.navigate( 
          'My Activity', 
          { 
            userId: route.params.userId 
          }
        )
        console.log(res.message);
      })
      .catch (e => {
        console.log(e);
      })
  }

  const onDayPress = ( day ) => {
    const dateString = dayjs( day.dateString ).format( 'YYYY-MM-DD' )
    setDayPress( dateString )
    console.log( dateString )
  }

  const date = dayPress? dayPress.toString () : ''
  
  const timeSlot = [
    '10:00 - 12:00',
    '13:00 - 15:00',
    '16:00 - 18:00',
    '19:00 - 21:00'
  ]

  const onSelectTimeSlot = ( selectedTimeSlot ) => {
      setManageTimeSlot( selectedTimeSlot )
      console.log( selectedTimeSlot )
  }

  const time = manageTimeSlot? manageTimeSlot : ''

  const onComments = ( text ) => {
    setComments( text )
    console.log( text )
  }

  // const pressConfirm = () => {
  //   alert( `Class on ${date} ${time}` )
  //   console.log(`
  //     userId: ${route.params.userId}
  //     tutoId: ${route.params.tutorId}
  //     subjectId: ${route.params.subjectId}
  //   `)
  //   console.log(date, time)
  //   navigation.navigate( 'My Activity' )
  // }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style = { styles.container }
        behavior= { Platform.OS === "ios" ? "padding" : "height" }>
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss }>
          <View style = { styles.innerContainer }>
            <View style = { styles.calendarContainer}>
              <Calendar
                style = { styles.calendar }
                onDayPress= { onDayPress }
                enableSwipeMonths = { true }
                theme = {{
                  textSectionTitleColor: 'gray',
                  calendarBackground: '#A7C7E7',
                  selectedDayBackgroundColor: 'white',
                  selectedDayTextColor: 'black',
                  selectedDotColor: 'black',
                  //todayTextColor: 'blue',
                  dayTextColor: '#000000',
                  textDisabledColor: 'gray',
                  dotColor: 'white',
                  textDayFontSize: 12,
                  monthTextColor: '#000000',
                  textMonthFontWeight: 'bold',
                  textDayHeaderColor: 'black',
                  arrowColor: '#000000',
                  'stylesheet.calendar.header': {
                    week: {
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-evenly'
                    }
                  }
                }} 
              />
            </View>
            <View style = { styles.textsContainer }>
              
                <View style = { styles.date }>
                  <Text style = { styles.text }>Selected Date</Text>
                  <Text style = { styles.text }>{ date }</Text>
                </View>
                <View style = { styles.dropBox }>
                  <Text style = { styles.text }>Time</Text>
                  <SelectDropdown
                    defaultButtonText = 'select time'
                    dropdownStyle = { styles.dropdownStyle }
                    buttonStyle = { styles.dropdownButtonStyle }
                    buttonTextStyle = { styles. dropdownButtonTextStyle }
                    rowTextStyle = {{ fontSize: 12 }}
                    data = { timeSlot }
                    onSelect = { onSelectTimeSlot }
                    buttonTextAfterSelection = {( selectedTimeSlot, index ) => {
                      return selectedTimeSlot
                    }}
                    rowTextForSelection = {( item, index ) => {
                      return item
                    }}
                  />
                </View>
                <View style = { styles.hourlyRate }>
                  <Text style = { styles.text }>Total Price</Text>
                  <Text style = { styles.text }>S${( route.params.hourlyRate ) * 2 }</Text>
                </View>
              
            </View>
            <View style = { styles.inputContainer }>
              <TextInput
              style = { styles.input }
              placeholder = "Additional Request..."
              multiline = { true }
              numberOfLines = { 5 }
              onChangeText = { onComments }/>
            </View>
            <View style = { styles.btnContainer }>
              <CustomButton 
                onPress = { handleAppointment }
                text = "Confirm"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}