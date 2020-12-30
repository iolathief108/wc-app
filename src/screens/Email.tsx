import React, {useEffect, useLayoutEffect, useState} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import { TextInput } from 'react-native-paper'
import {get_account_details, set_account_details} from '../storage'
import Feather from 'react-native-vector-icons/dist/Feather'
import { useUpdateDetect } from '../State'
import { validateEmail } from '../global'

let onS



const Email = ({navigation}) => {

  const [form, setForm] = useState({
    email: '',
  })
  const [, setShippingInfoUpdated] = useUpdateDetect('shippingInfoUpdated')
  const [emailError, setEmailError] = useState(false)
  onS = onSubmit
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => onS()}>
            <View style={{paddingLeft: 13, paddingRight: 13}}>
              <Feather name={'check'} size={30} color={'black'}/>
            </View>
          </TouchableOpacity>
        )
      },

    })
  }, [navigation])

  /* Initializing state form */
  useEffect(() => {
    get_account_details().then(async value => {
      if (value) {
        let newForm = {
          email: value.email,
        }
        setForm(newForm)
      }
    })
  }, [])

  /* submit action */
  async function onSubmit() {

    if (validateEmail(form.email)){
      
      let accDet = await get_account_details()
  
      await set_account_details({
        address1: accDet ? accDet.address1 ? accDet.address1 : null : null,
        address2: accDet ? accDet.address2 ? accDet.address2 : null : null,
        city: accDet ? accDet.city ? accDet.city : null : null,
        firstName: accDet ? accDet.firstName ? accDet.firstName : null : null,
        email: form.email,
        lastName: accDet ? accDet.lastName ? accDet.lastName : null : null,
        mobileNumber: accDet ? accDet.mobileNumber ? accDet.mobileNumber : null : null,
      })
      setShippingInfoUpdated(true)
      navigation.goBack()
    } else {
      setEmailError(true)
    }

  }

  /* UI */
  return (
    <>
      <View style={{marginTop: 20}}></View>
      <ScrollView style={{flex: 1}}>

        {/* Email */}
        <View style={styles.wrapper}>

          <Text style={styles.titleText}>Your Email</Text>
          
          <TextInput
            onChangeText={text => setForm({email: text})}
            style={styles.input}
            numberOfLines={3}
            error={emailError}
            onKeyPress={()=>{setEmailError(false)}}
            textContentType={'emailAddress'}
            value={form.email}
          />
        </View>

      </ScrollView>

      {/* Submit Button */}
      {/* <TouchableHighlight onPress={onSubmit}>
        <View style={{
          backgroundColor: '#008526',
          paddingTop: 7,
          paddingBottom: 7,
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 22,
            color: '#fff',
          }}>Submit</Text>
        </View>
      </TouchableHighlight> */}
    </>
  )
}
export default Email


const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
  text: {
    marginBottom: -100,
    paddingTop: 0,
  },
  input: {
    height: 50,
    color: '#990'
  },
  titleText: {
    marginBottom: 8,
    paddingTop: 0,
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    color: '#000a'
  }
})
