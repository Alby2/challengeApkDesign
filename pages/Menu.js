import React from 'react'
import { View,Text } from 'react-native'
import { Button } from 'react-native'


const Menu = ({navigation}) => {
  return (
    <View>
        <Text> Menu</Text>
        <Button title="Allez sur la page Compte" />
    </View>
  )
}

export default Menu