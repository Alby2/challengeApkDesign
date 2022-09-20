import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'


const Header = ({route,navigation}) => {
  return (
    <View>
        <Image source={}/>
      <Text></Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        paddingVertical:10, 
    },
    image:{
        height:10
    }
})

export default Header
