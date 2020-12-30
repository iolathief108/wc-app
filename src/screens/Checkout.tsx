import {Alert, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useMutation} from '@apollo/client'
import {get_account_details, OrderOnStorageType, set_order_id_to_storage} from '../storage'
import {CheckoutDocument, CheckoutMutation, CheckoutMutationVariables, CountriesEnum} from '../generated/graphql'
import {validateEmail} from '../global'
import moment from 'moment'
import Colors from '../styles/Colors'
import {useUpdateDetect} from '../State'
import Loading from './Loading'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'

export default function({navigation}) {

  const [loading, setLoading] = useState(true)
  const [successStatus, setSuccessStatus] = useState<boolean>(false)
  const [completed, setCompleted] = useState<boolean>(false)
  const [checkFail, setCheckFail] = useState<[boolean, string]>([false, ''])
  const [, setCheckedOut] = useUpdateDetect('checkoutUpdated')
  const [orderResultData, setOrderResultData] = useState<OrderOnStorageType>(null)
  const [isShippingInfoUpdated, setShippingInfoUpdated] = useUpdateDetect('shippingInfoUpdated')
  const [orderData, setOrderData] = useState<CheckoutMutationVariables>(
    {
      input: {
        account: null,
        clientMutationId: Math.round(Math.random() * 100000000000) + '',
        paymentMethod: 'cod',
        isPaid: false,
        shipToDifferentAddress: false,
        transactionId: Math.round(Math.random() * 100000000000) + '',
        shippingMethod: [''],
        customerNote: '',
        metaData: [],
        shipping: {
          address1: '',
          address2: '',
          city: '',
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          company: '',
          country: CountriesEnum.Lk,
          overwrite: false,
          postcode: '00100',
          state: 'WESTERN',
        },
        billing: {
          firstName: '',
          lastName: '',
          address1: '',
          address2: '',
          city: '',
          country: CountriesEnum.Lk,
          overwrite: false,
          state: '',
          postcode: '00100',
          email: null,
          phone: null,
          company: null,
        },
      },
    },
  )

  const [checkout] = useMutation<CheckoutMutation, CheckoutMutationVariables>(CheckoutDocument, {
    variables: orderData,
  })

  useEffect(() => {
    get_account_details().then(async value => {
      if (value) {
        setOrderData({
          input: {
            ...orderData.input,
            shipping: {
              ...orderData.input.shipping,
              address1: value.address1,
              address2: value.address2,
              city: value.city,
              email: value.email,
              firstName: value.firstName,
              lastName: value.lastName,
              phone: value.mobileNumber,
            },
            billing: {
              ...orderData.input.billing,
              firstName: value.firstName,
              lastName: value.lastName,
              address1: value.address1,
              address2: value.address2,
              city: value.city,
              email: value.email,
              phone: value.mobileNumber,
            },
          },
        })
      }
      setLoading(false)
      setShippingInfoUpdated(false)
    })
  }, [isShippingInfoUpdated])

  const checkValid = async (): Promise<[boolean, string]> => {

    if (orderData.input.shipping.firstName === '' || orderData.input.shipping.firstName === null)
      return [false, 'first name should not be empty']

    // if (orderData.input.shipping.email === '' || orderData.input.shipping.email === null)
    //   return [false, 'email should not be empty']

    if (orderData.input.shipping.address1 === '' || orderData.input.shipping.address1 === null)
      return [false, 'address1 should not be empty']

    if (orderData.input.shipping.address2 === '' || orderData.input.shipping.address2 === null)
      return [false, 'address2 should not be empty']

    if (orderData.input.shipping.city === '' || orderData.input.shipping.city === null)
      return [false, 'city should not be empty']

    if (orderData.input.shipping.phone === '' || orderData.input.shipping.phone === null)
      return [false, 'mobile number should not be empty']

    if (orderData.input.shipping.address1.length < 2)
      return [false, 'address1 not valid']

    if (orderData.input.shipping.address2.length < 2)
      return [false, 'address2 not valid']

    // if empty true || if valid false
    // console.log(orderData.input.shipping.email)
    if (orderData.input.shipping.email !== '' && orderData.input.shipping.email !== null)
      if (!validateEmail(orderData.input.shipping.email))
        return [false, 'email is not valid']

    return [true, '']
  }

  const onCheckout = async () => {
    let [valid, text] = await checkValid()

    if (!valid) {

      Alert.alert(
        'Input not valid!',
        text,
        [
          {
            text: 'Cancel',
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Change', onPress: () => navigation.navigate('profile_tab')},
        ],
        {cancelable: false},
      )
      setCheckFail([true, text])
      return
    }

    setLoading(true)

    let value = await checkout()
    if (value.data?.checkout.result) {
      // successfull checkout
      setCheckedOut(true)
      let dd: OrderOnStorageType = {
        subtotal: value.data.checkout.order.subtotal,
        total: value.data.checkout.order.total,
        order_id: value.data.checkout.order.databaseId,
        date: moment()
          .utcOffset('+05:30')
          .format('DD MMM YYYY HH:mm:ss'),
        lineItems: value.data.checkout.order.lineItems.nodes.map(value1 => ({
          name: value1.product.name,
          subtotal: value1.subtotal,
          databaseId: value1.product.databaseId,
          quantity: value1.quantity,
        })),
      }
      setOrderResultData(dd)
      await set_order_id_to_storage(dd)
      setSuccessStatus(true)
    } else
      setSuccessStatus(false)
    setCompleted(true)
    setLoading(false)
  }


  if (loading)
    return <Loading/>

  if (completed)
    if (successStatus)
      return (
        <View style={{flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '-15%'}}>
          <FontAwesome5 name={'check'} color={Colors.mid2} size={120}/>
          <Text style={{fontFamily: 'Roboto-Medium', marginTop: 14, fontSize: 25, marginBottom: 10}}>Your Order Has Been
            Recieved</Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 17, textAlign: 'center'}}>Thank you for your
            purchase!</Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16, marginTop: 6, textAlign: 'center'}}>Your order #
            is: {orderResultData.order_id}</Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16, marginTop: 6, textAlign: 'center'}}>You will recieve
            a order confirmation email with detials of your order and a link to track its progress.</Text>
        </View>
      )
    else
      return (
        <View style={{flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '20%'}}>
          <Ionicons name={'warning'} color={'#000c'} size={120}/>
          <Text style={{fontFamily: 'Roboto-Bold', marginTop: 18, fontSize: 25, marginBottom: 10}}>Checkout
            Failed</Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center'}}>Please try again later or
            contact support!</Text>
        </View>
      )

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={{
          marginTop: 20,
        }}/>

        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}>

          {/* Address */}
          <View style={{borderBottomWidth: 1, borderBottomColor: '#bbb', paddingBottom: 20, marginBottom: 30}}>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}>
                <Text style={Styles.title}>Shipping Address</Text></View>
              <TouchableOpacity onPress={() => navigation.navigate('address')}>
                <View style={{minWidth: 50, paddingLeft: 15, paddingRight: 20}}>
                  <Text style={{fontSize: 16, color: '#279aff'}}>Edit</Text></View>
              </TouchableOpacity>
            </View>

            {
              !orderData.input.shipping.firstName &&
              !orderData.input.shipping.lastName &&
              !orderData.input.shipping.address1 &&
              !orderData.input.shipping.address2 &&
              !orderData.input.shipping.city ?
                <View style={{paddingTop: 10, paddingBottom: 20}}>
                  <TouchableOpacity onPress={() => navigation.navigate('address')}>
                    <Text style={{
                      marginBottom: 2,
                      fontFamily: 'Roboto-Regular',
                      fontSize: 18,
                      paddingLeft: 40,
                      color: Colors.link,
                    }}>
                      No data
                    </Text>
                  </TouchableOpacity>
                </View> :
                <View style={{paddingLeft: 5}}>
                  <Text style={{
                    marginBottom: 2,
                    paddingRight: 20,
                    color: '#555',
                  }}>
                    {orderData.input.shipping.firstName} {orderData.input.shipping.lastName}
                  </Text>
                  <Text style={{marginBottom: 2, paddingRight: 20, color: '#555'}}>
                    {orderData.input.shipping.address1}
                  </Text>
                  <Text
                    style={{marginBottom: 2, paddingRight: 20, color: '#555'}}>
                    {orderData.input.shipping.address2}
                  </Text>
                  <Text
                    style={{marginBottom: 2, paddingRight: 20, color: '#555'}}>{orderData.input.shipping.city}</Text>
                </View>
            }

          </View>

          {/* phone number */}
          <View style={{borderBottomWidth: 1, borderBottomColor: '#bbb', paddingBottom: 20, marginBottom: 30}}>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}>
                <Text style={Styles.title}>Phone Number</Text></View>
              {/* <TouchableOpacity onPress={() => navigation.navigate('address')}>
                <View style={{ minWidth: 50, paddingLeft: 15, paddingRight: 20 }}>
                  <Text style={{ fontSize: 16, color: '#279aff' }}>Edit</Text></View>
              </TouchableOpacity> */}
            </View>
            <View style={{paddingLeft: 5}}>
              <Text style={{marginBottom: 2, paddingRight: 20, color: '#555'}}>
                {
                  orderData.input.shipping.phone ?
                    orderData.input.shipping.phone :
                    <Text onPress={() => navigation.navigate('address')}>Your mobile number is required</Text>
                }
              </Text>
            </View>
          </View>

          {/* Email */}
          <View style={{borderBottomWidth: 0, paddingBottom: 20, marginBottom: 30}}>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}>
                <Text style={Styles.title}>Email</Text></View>
              {/* <TouchableOpacity onPress={() => navigation.navigate('address')}>
                <View style={{ minWidth: 50, paddingLeft: 15, paddingRight: 20 }}>
                  <Text style={{ fontSize: 16, color: '#279aff' }}>Edit</Text></View>
              </TouchableOpacity> */}
            </View>
            <View style={{paddingLeft: 5}}>
              <Text onPress={() => navigation.navigate('email')} style={{marginBottom: 2, paddingRight: 20, color: Colors.link}}>
                {
                  orderData.input.shipping.email ?
                    orderData.input.shipping.email :
                    'Email not yet set up'
                }
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* place your order button */}
      <TouchableNativeFeedback onPress={onCheckout}>
        <View style={{
          alignItems: 'center',
          backgroundColor: Colors.dark3,
          paddingTop: 10,
          paddingBottom: 10,
          // borderRadius: 10,
          // marginLeft: 20,
          // marginRight: 20,
        }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium', color: Colors.white}}>Place Your Order</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  )
}


const Styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#000c'
  }
})