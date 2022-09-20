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
const Tab = createBottomTabNavigator()
export default function App() {
  const scheme = useColorScheme();


  const theme = scheme == 'dark'?darkThemeColor:lightThemeColor;

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator initialRouteName='Home'  screenOptions={({route})=>({
        
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor:theme.colors.black ,
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{position:'absolute',backgroundColor:theme.colors.white,paddingVertical:2,width:'100%',height:70}
        
      })}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({focused,color,size})=>{
  
           return <Ionicons name="grid-outline" color={color} size={size} />
        }}}  />
        <Tab.Screen name="Search" component={Search} options={{tabBarIcon:({focused,color,size})=>{
           return <Ionicons name="search" color={color} size={size} />
        }}}  />
        <Tab.Screen name="Shop" component={Shop} options={{tabBarIcon:({focused,color,size})=>{
           return <FontAwesome name="shopping-basket" color={color} size={size} />
        }}} />
        <Tab.Screen name="Heart" component={Heart} options={{tabBarIcon:({focused,color,size})=>{
           return <Ionicons name="ios-heart-outline" color={color} size={size} />
        }}} />
        <Tab.Screen name="Menu" component={Compte} options={{tabBarIcon:({focused,color,size})=>{
           return <SimpleLineIcons name="menu" color={color} size={size} />
        }}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
