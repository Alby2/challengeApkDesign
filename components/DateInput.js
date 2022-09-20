import React,{ useState } from "react";
import {  View,TextInput } from "react-native";
import{useTheme} from '@react-navigation/native'
import { Feather } from "react-native-vector-icons";

const DateInput = ()=> {
    const theme = useTheme()
return(
    <View style={{flexDirection:"row",backgroundColor:theme.colors.gray,paddingVertical:10,paddingHorizontal:15,borderRadius:8,alignItems:"center",width:"100%"}}>
        <View style={{flex:9}}>
            <TextInput placeholder="Date de naissance" placeholderTextColor={theme.colors.border}  style={{fontSize:20,color:theme.colors.black}} />
        </View>
        <View style={{flex:1}}>
            <Feather name="calendar" size={29} color={theme.colors.border} />
        </View>
      
    </View>
)
    
}

export default DateInput