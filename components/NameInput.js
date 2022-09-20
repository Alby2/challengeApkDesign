import React from 'react'
import { TextInput, View } from 'react-native'
import {useTheme} from '@react-navigation/native'
const NameInput = ({placeholder,left}) => {
    const theme = useTheme()
  return (
    <View style={{flexDirection:"row",backgroundColor:theme.colors.gray,paddingVertical:15,paddingHorizontal:15,alignItems:"center",width:"100%",borderBottomLeftRadius: left?8:0,borderTopLeftRadius: left?8:0,borderTopRightRadius:left?0:8,borderBottomRightRadius:left?0:8,borderRightWidth:left?2:0,borderRightColor:left?theme.colors.border:"",borderWidth:0}}>
        <View style={{flex:9}}>
            <TextInput placeholder={placeholder} placeholderTextColor={theme.colors.border}  style={{fontSize:18,color:theme.colors.black}} />
        </View>
        
      
    </View>
  )
}

export default NameInput