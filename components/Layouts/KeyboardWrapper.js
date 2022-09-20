
import { KeyboardAvoidingView, ScrollView, TouchableNativeFeedback, View,Keyboard, TouchableWithoutFeedback, Platform, StatusBar } from 'react-native'

const KeyboardWrapper = ( {children,card}) => {
  return (
    <KeyboardAvoidingView style={{flex:1,marginBottom:70}} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <ScrollView >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
        {card}
    </KeyboardAvoidingView>
  )
}

export default KeyboardWrapper