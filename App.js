import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Compte from './pages/Heart';
import {Ionicons,FontAwesome,SimpleLineIcons} from 'react-native-vector-icons';
import Search from './pages/Search';
import { darkThemeColor, lightThemeColor } from './src/util';
import Shop from './pages/Shop';
import Heart from './pages/Heart';
import LoginStack from './pages/Stack/LoginStack';
const Tab = createBottomTabNavigator()
export default function App() {
  const scheme = useColorScheme();


  const theme = scheme == 'dark'?darkThemeColor:lightThemeColor;

  return (
    <NavigationContainer theme={theme} >
      <LoginStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
