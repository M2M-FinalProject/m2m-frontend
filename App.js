import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/Home';
import MyMatch from './screens/MyMatch';
import Participation from './screens/Participation';
import MatchRequest from './screens/MatchRequest';
import MatchDetail from './screens/MatchDetail';
import { Provider } from 'react-redux'
import store from './store';
import ChatComponent from './screens/ChatComponent';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './screens/LandingPage'
import RegisterPage from './screens/RegisterPage'
import LoginPage from './screens/LoginPage'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, headerStyle: { backgroundColor: '#FAF9FA' } }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='MyMatch' component={MyMatch} />
      <Tab.Screen name='Participation' component={Participation} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            <Tab.Screen name='MatchDetail' component={MatchDetail} />
            <Tab.Screen name='MatchRequest' component={MatchRequest} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Tab.Screen name='ChatComponent' component={ChatComponent} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}