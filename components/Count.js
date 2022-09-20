
import { useTheme } from '@react-navigation/native'
import { useState } from 'react'

import { Button, Text, TouchableOpacity, View } from 'react-native'

const Count = () => {
    const theme = useTheme()
    
    const [value, setValue] = useState(1)
  return (
    
        <View style={{flexDirection:"row",backgroundColor:theme.colors.primary,borderRadius:5,height:40,width:130,}}>
            <View style={{flex:1,margin:1,justifyContent:"center",alignItems:'center'}}>
                <Button onPress={(e)=>{
                    let val = value ==0 ? 0 :value -1
                    setValue(val) 
                }} title="-" color={theme.colors.white} style={{fontSize:16}}>
                    
                </Button>
            </View>
            <View style={{flex:1,margin:2,justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:theme.colors.white,fontSize:16}}>{value}</Text>
            </View>
            <View style={{flex:1,margin:2,justifyContent:"center",alignItems:'center'}}>
            <Button onPress={(e)=>{setValue(value+1)}} title="+" color={theme.colors.white} style={{fontSize:16}}>
                    
                </Button>
            </View>
        </View>
 
  )
}

export default Count