import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens/mainPage'
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

function Tabs(props) {
  const params = props.route.params;
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator 
      initialRouteName = 'Welcome' 
      screenOptions = {({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Welcome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tutors') {
            iconName = focused ? 'account-group' : 'account-group-outline';
          } else if (route.name === 'My Activity') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'My profile') {
            iconName = focused ? 'account' : 'account-outline';
          }
          return <MaterialCommunityIcons name = { iconName } size = { size } color = { color } />;
        }
      })}>

      <Tab.Screen
        name = "Welcome"
        component = {WelcomeScreen}
        initialParams = {params}
      />

      <Tab.Screen
        name="Tutors"
        component={TutorsListingScreen}
        initialParams = {params}
      />

      <Tab.Screen
        name="My Activity"
        component={MyActivityScreen}
        initialParams = {params}
      />
      
      <Tab.Screen
        name="My profile"
        component={UserProfileScreen}
        initialParams = {params}
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

        <Stack.Screen name = 'Home' component = { MainScreen } />
        <Stack.Screen name = 'Sign Up' component = { SignUpScreen } />
        <Stack.Screen name = 'Login' component = { LoginScreen } />
        <Stack.Screen name = 'Tabs' component = { Tabs } />
        {/* <Stack.Screen name = 'Welcome' component = { WelcomeScreen } /> */}
        {/* <Stack.Screen name = 'My profile' component = { UserProfileScreen }/> */}
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