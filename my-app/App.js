import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StartingScreen } from './src/screens/splashScreen';
import { Onboarding } from './src/screens/onBoarding';
import { MainScreen } from './src/screens/mainPage';
import { SignUpScreen } from './src/screens/signUp';
import { LoginScreen } from './src/screens/login';
import { WelcomeScreen } from './src/screens/welcomePage';
import { TutorsListingScreen } from './src/screens/tutorsListing';
import { MyActivityScreen } from './src/screens/myActivity';
import { TutorProfileScreen } from './src/screens/tutorProfile';
import { RequestTutorScreen } from './src/screens/requestTutor';
import { UserProfileScreen } from './src/screens/userProfile'
import { ProfileAccountScreen } from './src/screens/profile.account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Tabs from './src/navigation/tabs';

function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name = "Welcome"
        component = {WelcomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarActiveBackgroundColor: "#D9D9D9",
            tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons name="home" color="#A7C7E7" size={size} />)
        }}
      />

      <Tab.Screen
        name="Tutors"
        component={TutorsListingScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveBackgroundColor: "#D9D9D9",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="magnify" color="#A7C7E7" size={size} />)
        }}
      />

      <Tab.Screen
        name="My Activity"
        component={MyActivityScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarActiveBackgroundColor: "#D9D9D9",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="bookmark" color="#A7C7E7" size={size} />)
        }}
      />
      
      <Tab.Screen
        name="My profile"
        component={UserProfileScreen}
        options={{
            tabBarLabel: 'Profile',
            tabBarActiveBackgroundColor: "#D9D9D9",
            tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons 
                  name="account" 
                  color="#A7C7E7" 
                  size={size} 
                />)
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name = 'Start Screen' component = { StartingScreen } />
        <Stack.Screen name= 'Onboarding' component = { Onboarding } />
        <Stack.Screen name = 'Home' component = { MainScreen } />
        <Stack.Screen name = 'Sign Up' component = { SignUpScreen } />
        <Stack.Screen name = 'Login' component = { LoginScreen } />
        <Stack.Screen name = 'Tabs' component = { Tabs } />
        <Stack.Screen name = 'Welcome' component = { WelcomeScreen } />
        <Stack.Screen name = 'My profile' component = { UserProfileScreen }/>
        {/* <Stack.Screen name = 'Tutors' component = { TutorsListingScreen }/> */}
        {/* <Stack.Screen name = 'My Activity' component = { MyActivityScreen }/> */}
        <Stack.Screen name = 'Tutor profile' component = { TutorProfileScreen } />
        <Stack.Screen name = 'Request Tutor' component = { RequestTutorScreen } />
        <Stack.Screen name = 'Account' component = { ProfileAccountScreen }/>
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}