import { SafeAreaView, Text, View,StatusBar } from 'react-native'
import Back from '../components/Back'
import KeyboardWrapper from '../components/Layouts/KeyboardWrapper'
import MessageInput from '../components/MessageInput'
import MessageSend from '../components/MessageSend'
import SendButton from '../components/SendButton'

const Conversation = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="default"
        showHideTransition="none"
        hidden="false" />
        <Back conversation={true} />
        <KeyboardWrapper>
            <View style={{flex:1,paddingVertical:8}}>
                <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:"600"}}> 28 Mars 2022</Text>
                </View>
                <View>
                    <MessageSend me message="Quel est votre soucis ?" heure="13:20"/>
                    <MessageSend message="J'ai besoin d'un prodiut" heure="13:22" />
                    <MessageSend me  message="Quel produit?" heure="13:29"/>
                    <MessageSend message="Une mini brosse à dent" heure="13:31" />
                </View>
            </View>
        </KeyboardWrapper>
        
        <View style={{flexDirection:"row"}}>
        <View style={{flex:5,marginHorizontal:7}}>
            <MessageInput />

        </View>
        <View style={{flex:1}}>

         <SendButton />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Conversation