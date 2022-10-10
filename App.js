import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import Home from './screens/Home';
import MyMatch from './screens/MyMatch';
import Participation from './screens/Participation';
import MatchRequest from './screens/MatchRequest';
import { Provider } from 'react-redux'
import store from './store';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='MyMatch' component={MyMatch} />
          <Tab.Screen name='Participation' component={Participation} />
          <Tab.Screen name='MatchRequest' component={MatchRequest} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}