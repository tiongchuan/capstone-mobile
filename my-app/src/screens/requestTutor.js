import React, { useState } from 'react'
import {
  View,
  Text,
  Keyboard,
  TextInput,
  ScrollView, 
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import dayjs from 'dayjs'
import { Calendar } from 'react-native-calendars'
import styles from '../styles/requestTutor.styles'
import SelectDropdown from 'react-native-select-dropdown'

export const RequestTutorScreen = ({ navigation, route }) => {

  const [dayPress, setDayPress] = useState ()
  const [manageTimeSlot, setManageTimeSlot] = useState()
  const onDayPress = ( day ) => {
    const dateString = dayjs( day.dateString ).format( 'DD/MM/YYYY' )
    setDayPress( dateString )
    console.log( dateString )
  }
  const date = dayPress? dayPress.toString () : ''
  const timeSlot = [
    '10:00 ~ 12:00',
    '13:00 ~ 15:00',
    '16:00 ~ 18:00',
    '19:00 ~ 21:00'
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
            <Calendar
              style = { styles.calendar }
              onDayPress= { onDayPress }
              enableSwipeMonths = { true }
              theme = {{
                calendarBackground: '#9D2427',
                selectedDayBackgroundColor: 'white',
                selectedDayTextColor: 'black',
                selectedDotColor: 'black',
                todayTextColor: 'pink',
                dayTextColor: '#FFFFFF',
                textDisabledColor: 'gray',
                dotColor: 'white',
                textDayFontSize: 12,
                monthTextColor: '#FFFFFF',
                textMonthFontWeight: 'bold',
                arrowColor: '#FFFFFF',
                'stylesheet.calendar.header': {
                  week: {
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                  }
                }
              }} />
            <View style = { styles.textsContainer }>
              <View style = { styles.texts }>
                <Text
                  style = { styles.text }>
                  Selected Date: { date }
                </Text>
                <View style = { styles.dropBox }>
                  <Text style = { styles.text }>Time:</Text>
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
                <Text style = { styles.text }>Total Price: {(route.params.hourlyrate)*2}</Text>
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
            {/* <View style = { styles.populate}>
              { populate.map ( item => (
                <Text >{ item.any }</Text>
              ))}
            </View> */}
            <View style = { styles.btnContainer }>
              <TouchableOpacity
                style = { styles.btn }
                onPress = { pressConfirm }>
                <Text style = { styles.btnText }>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}