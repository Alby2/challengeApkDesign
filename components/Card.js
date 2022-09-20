import { useTheme } from "@react-navigation/native"
import { useEffect } from "react";
import {  Image, Text, TouchableOpacity, View } from "react-native"


const Card = ({name,price,picture}) => {
    const theme = useTheme()
    let piv = require("../assets/poivron.png")
    if(name == 'Poivron'){
       piv =require("../assets/poivron.png")
    }else if(name == 'Gingembre'){
      piv = require("../assets/gingembre.png")
    }else if(name == 'Tomate'){
      piv = require("../assets/tomate.png")
    }
  return (
    <View style={{width:180,height:250,backgroundColor:theme.colors.white,borderRadius:20,flexDirection:"column",marginHorizontal:6}}>
      <View style={{flex:1,flexDirection:"col",alignItems:"flex-end",justifyContent:"flex-end",marginTop:10}}>
        <TouchableOpacity style={{justifyContent:"center"}}><Text style={{fontSize:22,color:theme.colors.primary,justifyContent:"center",width:30,height:30,marginHorizontal:15,borderStyle:"solid",borderWidth:1,borderColor:theme.colors.primary,textAlign:"center",borderRadius:15}}>+</Text></TouchableOpacity>
      </View>
    
      <View style={{flex:4,flexDirection:"col",alignItems:"center",justifyContent:"center"}}>
        <Image source={piv} style={{width:"90%",height:"100%"}} />
      </View>
      <View style={{flex:2,flexDirection:"column",paddingHorizontal:15}}>
        <Text style={{fontSize:18,fontWeight:"700",marginBottom:5,color:theme.colors.black}}>{price} FCFA</Text>
        <Text style={{fontSize:20,fontWeight:"400",marginBottom:5,color:theme.colors.black}}>{name}</Text>

      </View>

    </View>
  )
}

export default Card
