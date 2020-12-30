import React from 'react'
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {SpringScrollView} from 'react-native-spring-scrollview-quickedit'
import Ionicon from 'react-native-vector-icons/dist/Ionicons'
import Colors from '../styles/Colors'


const Mod = ({ionicon, title, children}) => (
  <View style={{
    flexDirection: 'row',
    marginBottom: 30,
  }}>
    <View style={{marginRight: 10, marginTop: 3}}>
      <Ionicon size={30} name={ionicon}/>
    </View>
    <View>
      <View style={{marginTop: 0}}>
        <Text style={{fontFamily: 'Roboto-Medium', fontSize: 18}}>{title}</Text>
      </View>
      <View style={{marginTop: 3}}>
        {children}
      </View>
    </View>
  </View>
)


export default () => {

  const styles = StyleSheet.create({
    mainContainer: {
      paddingRight: 10,
      paddingLeft: 10,
      marginTop: 10
    },
  })

  return (
    <SpringScrollView>
      <View style={styles.mainContainer}>
        {/* Top */}
        <View style={{marginBottom: 20, marginTop: 10}}>
          <Text style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 23,
          }}>any issue? feel free to Contact Us</Text>

          <Text style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 16,
            marginTop: 20,
          }}>
            <Text>You can email or call or whatsapp. we always reply as fast as we can. 🙂</Text>
          </Text>
        </View>

        {/* Modules */}

        <View style={{marginTop: 10, marginLeft: 5}}>
          <Mod
            ionicon={'ios-location-outline'}
            title={'Visit Us'}>
            <Text style={{fontFamily: 'Roboto-Regular'}}>No 91/16, Sri Wajiragnana Mawatha, Maradana, Colombo 10, Sri
              Lanka – 00100.</Text>
          </Mod>


          <Mod
            ionicon={'phone-portrait-outline'}
            title={'Call Us'}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:+94771363314`)}>
              <Text style={{fontFamily: 'Roboto-Regular', color: Colors.mid1}}>(+94) 77 136 3314</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:+94778018837`)}>
              <Text style={{fontFamily: 'Roboto-Regular', color: Colors.mid1}}>(+94) 77 801 8837</Text>
            </TouchableOpacity>
          </Mod>


          <Mod
            ionicon={'ios-mail-outline'}
            title={'Email Us'}>
            <TouchableOpacity onPress={() => Linking.openURL(`mailto:support@shoptown.lk`)}>
              <Text style={{fontFamily: 'Roboto-Regular', color: Colors.mid1}}>support@shoptown.lk</Text>
            </TouchableOpacity>
          </Mod>

          <Mod
            ionicon={'ios-logo-whatsapp'}
            title={'Whatsapp'}>
            <TouchableOpacity onPress={() => Linking.openURL(`whatsapp://send?text=Hi&phone=94771363314`)}>
              <Text style={{fontFamily: 'Roboto-Regular', color: Colors.mid1}}>(+94) 77 136 3314</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(`whatsapp://send?text=Hi&phone=94778018837`)}>
              <Text style={{fontFamily: 'Roboto-Regular', color: Colors.mid1}}>(+94) 77 801 8837</Text>
            </TouchableOpacity>
          </Mod>
        </View>

      </View>
    </SpringScrollView>
  )
}
