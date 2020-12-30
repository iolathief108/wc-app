import React, {useCallback, useEffect, useRef, useState} from 'react'
import {RefreshControl, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import SLIcon from 'react-native-vector-icons/dist/SimpleLineIcons'
import {get_account_details, get_wishlist} from '../storage'
import Colors from '../styles/Colors'
import Fontawesome5Icon from 'react-native-vector-icons/dist/FontAwesome5'
import FontawesomeIcon from 'react-native-vector-icons/dist/FontAwesome'
import MaterialComIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons'
import {SpringScrollView} from 'react-native-spring-scrollview-quickedit'
import { CommonLottieHeader } from 'react-native-spring-scrollview-quickedit/Customize'
import { useUpdateDetect } from '../State'

const styles = StyleSheet.create({
  link_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  link_text_container: {
    flex: 1,
    marginLeft: 20,
  },
  link_text_title: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.text1
  },
  link_text_content: {
    fontFamily: 'Roboto-Regular',
    color: Colors.textLight1
  },
})

const iconColor = Colors.text1
const iconArrowColor = Colors.text1

const App = ({navigation}) => {
  const [name, setName] = useState<string>('Undefined')
  const [isShippingInfoUpdated, setShippingInfoUpdated] = useUpdateDetect('shippingInfoUpdated')
  useEffect(() => {
    get_account_details().then(value => {
      if (value && value.firstName)
        setName(value.firstName + ' ' + value.lastName)
      else setName('Undefined')
    })
  }, )
  // const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    // setRefreshing(true)
    get_account_details().then(value => {
      if (value && value.firstName) {
        if (value.lastName)
          setName(value.firstName + ' ' + value.lastName)
        else
          setName(value.firstName)
      }
    })
  }, [isShippingInfoUpdated])
  // let _scrollView = useRef()

  return (
    <SpringScrollView
      style={{backgroundColor: Colors.white}}
    >
      <View style={{
        alignItems: 'center',
        marginBottom: 13
      }}>
        <Ionicons name="person-circle-outline" color={Colors.text1} size={150}/>
        <Text style={{
          fontSize: 30,
          marginBottom: 20,
          marginTop: -10,
          fontFamily: 'Roboto-Medium',
          color: Colors.text1
        }}>{name}</Text>
      </View>


      <TouchableNativeFeedback onPress={() => navigation.navigate('wishlist')}>
        <View style={styles.link_container}>
          <Ionicons name="ios-heart-outline" color={iconColor} size={40}/>
          <View style={styles.link_text_container}>
            <Text style={styles.link_text_title}>My Wishlist</Text>
            <Text style={styles.link_text_content}>Your wishlist items</Text>
          </View>
          <SLIcon name="arrow-right" color={iconArrowColor} size={23}/>
        </View>
      </TouchableNativeFeedback>


      <TouchableNativeFeedback onPress={() => navigation.navigate('orders')}>
        <View style={styles.link_container}>
          <Ionicons name="ios-search-outline" color={iconColor} size={40}/>
          <View style={styles.link_text_container}>
            <Text style={styles.link_text_title}>My Orders</Text>
            <Text style={styles.link_text_content}>Trace order and View Details</Text>
          </View>
          <SLIcon name="arrow-right" color={iconArrowColor} size={23}/>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {
        navigation.navigate('cart')
      }}>
        <View style={styles.link_container}>
          <Ionicons name="cart-outline" color={iconColor} size={40}/>
          <View style={styles.link_text_container}>
            <Text style={styles.link_text_title}>Cart</Text>
            <Text style={styles.link_text_content}>Place Your Orders from Here</Text>
          </View>
          <SLIcon name="arrow-right" color={iconArrowColor} size={23}/>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {
        navigation.navigate('address')
      }}>
        <View style={styles.link_container}>
          <FontawesomeIcon name="address-card-o" color={iconColor} size={34}/>
          <View style={styles.link_text_container}>
            <Text style={styles.link_text_title}>Your Address</Text>
            <Text style={styles.link_text_content}>Change Your Delivery Address</Text>
          </View>
          <SLIcon name="arrow-right" color={iconArrowColor} size={23}/>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {
        navigation.navigate('email')
      }}>
        <View style={styles.link_container}>
          <Ionicons name="mail-outline" color={iconColor} size={40}/>
          <View style={styles.link_text_container}>
            <Text style={styles.link_text_title}>Email</Text>
            <Text style={styles.link_text_content}>Your Email Address</Text>
          </View>
          <SLIcon name="arrow-right" color={iconArrowColor} size={23}/>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {
        navigation.navigate('contact')
      }}>
        <View style={styles.link_container}>
          <Ionicons name="ios-chatbox-ellipses-outline" color={iconColor} size={40}/>
          <View style={styles.link_text_container}>
            <Text style={styles.link_text_title}>Contact Us</Text>
            <Text style={styles.link_text_content}>Contact us for furthur enquire</Text>
          </View>
          <SLIcon name="arrow-right" color={iconArrowColor} size={23}/>
        </View>
      </TouchableNativeFeedback>

      {/* <TouchableNativeFeedback onPress={() => {
        navigation.navigate('about')
      }}>
        <View style={[styles.link_container]}>
          <MaterialIcon name="people-outline" color={iconColor} size={40}/>
          <View style={styles.link_text_container}>
            <Text style={styles.link_text_title}>About Us</Text>
            <Text style={styles.link_text_content}>About our business</Text>
          </View>
          <SLIcon name="arrow-right" color={iconArrowColor} size={23}/>
        </View>
      </TouchableNativeFeedback> */}

      <View style={{marginBottom: 10}}></View>
    </SpringScrollView>
  )
}
export default App
