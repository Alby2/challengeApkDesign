import { useTheme } from '@react-navigation/native'
import react from 'react';
import { View,Text,TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ButtonSign = ({navigation}) => {
    const theme = useTheme();
  return (
    <TouchableOpacity style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate("HomeStack")}>
        <View style={{paddingVertical:15,width:"80%",backgroundColor:theme.colors.primary,borderRadius:10,alignItems:"center"}} >
            <Text style={{color:theme.colors.white,fontSize:20}}> S'inscrire</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonSign