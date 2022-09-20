import { SafeAreaView,View } from "react-native"
import Back from "../components/Back"
import ButtonSign from "../components/ButtonSign"
import Card from "../components/Card"
import Count from "../components/Count"
import DateInput from "../components/DateInput"
import KeyboardWrapper from "../components/Layouts/KeyboardWrapper"
import MessageInput from "../components/MessageInput"
import MessageSend from "../components/MessageSend"
import NameInput from "../components/NameInput"
import RadioInput from "../components/RadioInput"
import SendButton from "../components/SendButton"
import PhoneInput from 'react-native-phone-input'
import { useRef } from "react"


const Home = ({navigation}) => {
const first = useRef("phone")

  return (
    <SafeAreaView  style={{width:"100%",height:"100%"}}>
<KeyboardWrapper>
<View style={{flex:1,justifyContent:"center",alignItems:"center",overflow:"scroll"}}>
      <Card/>
      <Back/>
      <Back conversation={true}/>
      <MessageSend me={false} />
      <MessageSend me={true} />
      <ButtonSign />
      <Count />
      <RadioInput />
      <View style={{flex:1,flexDirection:"row"}}>
        <View style={{flex:5,marginHorizontal:7}}>
            <MessageInput />

        </View>
        <View style={{flex:1}}>

         <SendButton />
        </View>
      </View>
    <DateInput />
    <View style={{flex:1,flexDirection:"row",marginHorizontal:20}}>
      <View style={{flex:1}}>
        <NameInput placeholder="Nom" left />

      </View>
      <View style={{flex:1}}>
        <NameInput placeholder="Prénom" />

      </View>

    </View>
    <PhoneInput ref={first} textProps={{
                    placeholder: 'Enter a phone number...'
                }} style={{flexDirection:"row",backgroundColor:"white",paddingVertical:15,paddingHorizontal:15,alignItems:"center",width:"100%"}} initialCountry='bj' flagStyle={{borderRadius:5}} textStyle={{fontSize:18}} offset={40} cancelText="Annuler" confirmText="OK!"/>
    </View>
</KeyboardWrapper>
    
  

    
    </SafeAreaView>
  )
}

export default Home