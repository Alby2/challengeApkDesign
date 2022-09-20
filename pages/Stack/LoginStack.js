import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useColorScheme } from "react-native";
import { darkThemeColor, lightThemeColor } from "../../src/util";
import Conversation from "../Conversation";
import Login from "../Login";
import HomeStack from "./HomeStack";


const Stack = createNativeStackNavigator();
const LoginStack = ()=>{
    const scheme = useColorScheme();


  const theme = scheme == 'dark'?darkThemeColor:lightThemeColor;
return(
<Stack.Navigator initialRouteName="Login" screenOptions={({route})=>({
        
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{position:'absolute',backgroundColor:"white",paddingVertical:2,width:'100%',height:70}
        
      })}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Conversation" component={Conversation} />
    </Stack.Navigator>)

}

export default LoginStack