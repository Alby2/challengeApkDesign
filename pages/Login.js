import { useTheme } from '@react-navigation/native'
import React, { useRef } from 'react'
import { View,Text, SafeAreaView,TouchableOpacity } from 'react-native'
import { Button } from 'react-native'
import PhoneInput from 'react-native-phone-input'
import ButtonSign from '../components/ButtonSign'
import DateInput from '../components/DateInput'
import KeyboardWrapper from '../components/Layouts/KeyboardWrapper'
import NameInput from '../components/NameInput'
import RadioInput from '../components/RadioInput'
import SendButton from '../components/SendButton'


const Login = ({navigation}) => {
  const theme = useTheme();
  const first = useRef('phone');

  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme.colors.white,}}>
      <KeyboardWrapper>
        <View>
          <View style={{flex:1,marginTop:70,alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:25,color:theme.colors.primary}}>Veuillez-vous inscrire</Text></View>
          
          <View style={{marginTop:45,paddingHorizontal:20}}>
              <PhoneInput ref={first} textProps={{placeholder: 'Numéro de téléphone'}} style={{flexDirection:"row",backgroundColor:theme.colors.gray,paddingVertical:15,paddingHorizontal:15,alignItems:"center",width:"100%",borderRadius:10}} initialCountry='bj' flagStyle={{borderRadius:5}} textStyle={{fontSize:18}} offset={40} cancelText="Annuler" confirmText="OK!"/>

          </View>
          <View style={{flex:1,flexDirection:"row",marginHorizontal:20,marginTop:20}}>
            <View style={{flex:1}}>
              <NameInput placeholder="Nom" left />

            </View>
            <View style={{flex:1}}>
              <NameInput placeholder="Prénom" />
            </View>

          </View>
          <View style={{flex:1,flexDirection:"row",marginHorizontal:20,marginTop:25}}>
              <DateInput />
          </View>
          <View style={{marginTop:25}}>
            <RadioInput />
          </View>
          <View style={{marginTop:35}}>
            
            <TouchableOpacity style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate("HomeStack")}>
        <View style={{paddingVertical:15,width:"80%",backgroundColor:theme.colors.primary,borderRadius:10,alignItems:"center"}} >
            <Text style={{color:theme.colors.white,fontSize:20}}> S'inscrire</Text>
        </View>
    </TouchableOpacity>
          </View>
          <TouchableOpacity style={{color:theme.colors.black,flex:1,flexDirection:'row',justifyContent:"center",alignItems:"center",marginTop:15}} onPress={()=>navigation.navigate("Conversation")}>
            <Text style={{fontSize:18,fontWeight:"600"}}>Connectez-vous</Text>
          </TouchableOpacity>
        </View>
      </KeyboardWrapper>
    </SafeAreaView>
   
  )
}

export default Login