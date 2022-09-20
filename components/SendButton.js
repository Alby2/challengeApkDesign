import { useTheme } from "@react-navigation/native"
import { TouchableOpacity, View } from "react-native"
import {FontAwesome} from 'react-native-vector-icons';

const SendButton = () => {
    const theme = useTheme()
  return (
    <TouchableOpacity style={{marginVertical:15}}>
        <View style={{width:60,height:50,backgroundColor:theme.colors.primary,borderRadius:7,justifyContent:"center",alignItems:"center"}}>
            <FontAwesome name="send" size={15} color={theme.colors.white} />
        </View>
    </TouchableOpacity>
  )
}

export default SendButton