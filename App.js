import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/Home';
import MyMatch from './screens/MyMatch';
import Participation from './screens/Participation';
import MatchRequest from './screens/MatchRequest';
import { Provider } from 'react-redux'
import store from './store';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './screens/LandingPage'
import RegisterPage from './screens/RegisterPage'
import LoginPage from './screens/LoginPage'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#FAF9FA' } }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Products' component={Products} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage}/>
        <Stack.Screen name="Register" component={RegisterPage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="HomeNavigator" component={HomeNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}