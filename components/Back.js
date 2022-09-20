import { useTheme } from "@react-navigation/native"
import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import {MaterialIcons} from 'react-native-vector-icons';
const Back = ({conversation}) => {
    const theme = useTheme()
  return (
    <View style={{width:"100%",backgroundColor:theme.colors.white,flexDirection:"row",padding: 5,height:70,alignItems:"center"}}>
        <TouchableOpacity style={{marginRight:3,marginLeft:10}}> 
            <MaterialIcons name="arrow-back-ios" size={25} color={theme.colors.primary} />
        </TouchableOpacity>
        {conversation && (<View style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={require("../assets/blog_4.png")} style={{width:50,height:50,borderRadius:30}}/>
        <View style={{flexDirection:"column",marginLeft:8}}>
            <Text style={{fontWeight:"700",marginBottom:2,color:theme.colors.black}}>John Doe</Text>
            <Text style={{color:theme.colors.black}}>Il y a 2min</Text>
        </View></View>)}
    </View>
  )
}

export default Back