import { TextInput, View,Text } from "react-native"
import { useTheme } from "@react-navigation/native"
const MessageInput = () => {
    const theme = useTheme()
  return (
    <View style={{flexDirection:"row",backgroundColor:theme.colors.primary,padding:5,alignItems:"center",marginVertical:15,borderRadius:8}}>
        <View style={{alignItems:"center",justifyContent:"center",backgroundColor:theme.colors.white,borderRadius:35,width:28,height:28,marginVertical:7,marginHorizontal:8}}>
            <Text style={{color:theme.colors.primary,fontSize:20,fontWeight:"600"}}>+</Text>
        </View>
        <View style={{flex:10}}>
          

            <TextInput  placeholder="Votre message" placeholderTextColor={theme.colors.white}   style={{color:theme.colors.white,fontSize:20}} />
   
        </View>
        

    </View>
  )
}

export default MessageInput