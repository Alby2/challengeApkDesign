import {View,Text, TouchableOpacity} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";

const RadioInput = ()=>{
    const [sexe,setSexe] = useState(true);
    const theme = useTheme();
    return(
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",padding:10,width:"100%"}}>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",height:20,alignItems:"center"}} onPress={(e)=>{setSexe(true)}}>
                <View style={{height:18,width:18,borderRadius:9,borderColor:sexe?theme.colors.primary:theme.colors.border,borderWidth:2,backgroundColor:sexe?theme.colors.primary:theme.colors.white,marginRight:8}}>
                </View> 
                <Text style={{color:sexe?theme.colors.primary:theme.colors.black,fontSize:18}}>Femme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",height:20,alignItems:"center"}} onPress={(e)=>{setSexe(false)}}>
                <View style={{height:18,width:18,borderRadius:9,borderColor:!sexe?theme.colors.primary:theme.colors.border,borderWidth:2,backgroundColor:!sexe?theme.colors.primary:theme.colors.white,marginRight:8}}>
                </View> 
                <Text style={{color:!sexe?theme.colors.primary:theme.colors.black,fontSize:18}}>Homme</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RadioInput;