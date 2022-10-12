import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/Home';
import MyMatch from './screens/MyMatch';
import Participation from './screens/Participation';
import CreateMatch from './screens/CreateMatch';
import SelectField from './screens/SelectField';
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
    <Tab.Navigator >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='MyMatch' component={MyMatch} />
      <Tab.Screen name='Participation' component={Participation} />
      <Tab.Screen name='CreateMatch' component={CreateMatch} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
          <Stack.Screen name="SelectField" component={SelectField} />
          <Stack.Screen name='MatchDetail' component={MatchDetail} />
          <Stack.Screen name='MatchRequest' component={MatchRequest} />
          <Stack.Screen name='ChatComponent' component={ChatComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}