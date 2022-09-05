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

export const RequestTutorScreen = ({ navigation, route }) => {

  const [dayPress, setDayPress] = useState ()
  const [manageTimeSlot, setManageTimeSlot] = useState()

  const handleAppointment = async() => {
    await API
      .put ('/protected/enrollment/add', {
        enrollmentDate: bookingDate, 
        bookingTime: bookingTime,
        //tutor: tutor
      })
      .then (res => {
        navigation.navigate( 'My Activity', {
          date:date, 
          time:time, 
          tutor: route.params.tutor,
          //itemLists: itemLists
        })
          console.log(res.message);
      })
  }

  const onDayPress = ( day ) => {
    const dateString = dayjs( day.dateString ).format( 'DD/MM/YYYY' )
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
    const timeSlot = selectedTimeSlot
      setManageTimeSlot( timeSlot )
      console.log( selectedTimeSlot )
    }
  const time = manageTimeSlot? manageTimeSlot : ''
  const pressConfirm = () => {
    alert( `Class on ${date} ${time}` )
    // setPopulate(prev => {
    //   return {any:[...prev.any, ...prev.onDayPress]}
    // })
    console.log(`
      ${route.params.name}
      ${route.params.experience}
      ${route.params.hourlyRate}
      ${route.params.highestEducation}
    `)
    console.log(date, time)
    navigation.navigate( 'My Activity' )
  }
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
              onChangeText = {( text ) => { text }}/>
            </View>
            <View style = { styles.btnContainer }>
              <CustomButton 
                onPress = { pressConfirm }
                text = "Confirm"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}