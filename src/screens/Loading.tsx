import {ActivityIndicator, Text, View} from 'react-native'
import React from 'react'
import Colors from '../styles/Colors'


export default function() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/*<Text>Loading</Text>*/}
      <ActivityIndicator style={{
        marginTop: 65
      }} color={Colors.dark1} animating={true} size={50} />
    </View>
  )
}
