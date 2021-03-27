import React, {useEffect, useLayoutEffect, useState} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {get_account_details, set_account_details} from '../storage'
import {useUpdateDetect} from '../State'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/dist/Feather'
import {RouteProp} from '@react-navigation/core'
import {RootStackParamList} from '../types'
import {StackNavigationProp} from '@react-navigation/stack'
import {TextInput} from 'react-native-paper'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'address'>;

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>


type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp
};
let onS
const Checkout = ({navigation}: Props) => {
  const [, setShippingInfoUpdated] = useUpdateDetect('shippingInfoUpdated')
  const [form, setForm] = useState({
    address1: '',
    address2: '',
    city: '',
    lastName: '',
    firstName: '',
    mobileNumber: '',
  })
  onS = onSubmit
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => onS().then(() => navigation.goBack())}>
            <View style={{paddingLeft: 13, paddingRight: 13}}>
              <Feather name={'check'} size={30} color={'black'}/>
            </View>
          </TouchableOpacity>
        )
      },

    })
  }, [navigation])

  useEffect(() => {
    get_account_details().then(async value => {
      if (value) {
        let ob = {
          address1: value.address1,
          address2: value.address2,
          city: value.city,
          lastName: value.lastName,
          firstName: value.firstName,
          mobileNumber: value.mobileNumber,
        }
        setForm(ob)
      }
    })
  }, [])

  async function onSubmit() {
    let accDet = await get_account_details()

    await set_account_details({
      address1: form.address1,
      address2: form.address2,
      city: form.city,
      firstName: form.firstName,
      email: accDet ? accDet.email ? accDet.email : null : null,
      lastName: form.lastName,
      mobileNumber: form.mobileNumber,
    })
    setShippingInfoUpdated(true)
    // console.log(form)
  }

  return (
    <>
      <View style={{marginTop: 20}}></View>
      <ScrollView style={{flex: 1}}>

      <View style={styles.wrapper}>
        <Text style={styles.titleText}>First Name</Text>
          <TextInput
            onChangeText={text => setForm({...form, firstName: text})}
            style={[styles.input, ]}
            textContentType={'name'}
            value={form.firstName}
          />
        </View>

        <View style={styles.wrapper}>
        <Text style={styles.titleText}>Last Name</Text>
          <TextInput
            onChangeText={text => setForm({...form, lastName: text})}
            style={[styles.input,]}
            textContentType={'name'}
            value={form.lastName}
          />
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.titleText}>Address Line 1 </Text>
          <TextInput
            onChangeText={text => setForm({...form, address1: text})}
            style={styles.input}
            dataDetectorTypes={'address'}
            textContentType={'streetAddressLine1'}
            value={form.address1}
          />
        </View>

        <View style={styles.wrapper}>
        <Text style={styles.titleText}>Address Line 2</Text>
          <TextInput
            onChangeText={text => setForm({...form, address2: text})}
            style={styles.input}
            textContentType={'addressCity'}
            value={form.address2}
          />
        </View>

        <View style={styles.wrapper}>
        <Text style={styles.titleText}>City</Text>
          <TextInput
            onChangeText={text => setForm({...form, city: text})}
            style={[styles.input]}
            textContentType={'addressCity'}
            value={form.city}
          />
        </View>



        <View style={styles.wrapper}>
        <Text style={styles.titleText}>Phone Number</Text>
          <TextInput
            onChangeText={text => setForm({...form, mobileNumber: text})}
            style={[styles.input, ]}
            textContentType={'telephoneNumber'}
            value={form.mobileNumber}
            keyboardType={'phone-pad'}
          />
        </View>

      </ScrollView>

    </>
  )
}
export default Checkout


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
