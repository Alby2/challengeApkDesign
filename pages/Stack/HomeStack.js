

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import {Ionicons,FontAwesome,SimpleLineIcons} from 'react-native-vector-icons';
import Home from '../Home';
import Search from '../Search';
import Shop from '../Shop';
import Heart from '../Heart';


const Tab = createBottomTabNavigator()
export default function HomeStack() {
const theme= useTheme();

  return (
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
        <Tab.Screen name="Search" component={Home} options={{tabBarIcon:({focused,color,size})=>{
           return <Ionicons name="search" color={color} size={size} />
        }}}  />
        <Tab.Screen name="Shop" component={Home} options={{tabBarIcon:({focused,color,size})=>{
           return <FontAwesome name="shopping-basket" color={color} size={size} />
        }}} />
        <Tab.Screen name="Heart" component={Home} options={{tabBarIcon:({focused,color,size})=>{
           return <Ionicons name="ios-heart-outline" color={color} size={size} />
        }}} />
        <Tab.Screen name="Menu" component={Home} options={{tabBarIcon:({focused,color,size})=>{
           return <SimpleLineIcons name="menu" color={color} size={size} />
        }}} />
      </Tab.Navigator>
  );
}


