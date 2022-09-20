import { useTheme } from "@react-navigation/native"
import { View,Text } from "react-native"


const MessageSend = ({me,message,heure}) => {
    const theme = useTheme()
    console.log('me :>> ', me);
  return (
    <View style={{width:"100%",flexDirection:"column",alignItems:me?"flex-end":'flex-start',paddingHorizontal:10}}>
        <View style={{backgroundColor:me ?theme.colors.primary:theme.colors.grey,width:250,padding:18,borderStyle:"solid",borderRadius:15,borderBottomEndRadius:me?0:10,borderBottomStartRadius:me?10:0}}><Text style={{fontSize:15,fontWeight:"200",color:me?theme.colors.white:theme.colors.black}}>{message}</Text></View>
        <View style={{marginHorizontal:5,marginTop:5}}><Text style={{color:theme.colors.black}}>{heure}</Text></View>
    </View>
  )
}

export default MessageSend