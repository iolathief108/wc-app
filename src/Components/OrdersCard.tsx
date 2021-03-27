import {Alert, Linking, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native'
import React from 'react'
import {IResObject} from '../api/orders'
import Colors from '../styles/Colors'
import {phoneNumber1} from '../config'

export default function({order_cart_data}: {order_cart_data: IResObject}) {

    const orderCardClick = () => {
        Alert.alert(
          'Under Development',
          'This function is under development. Click the WhatsApp button below to find out more about your order.',
          [
              {
                  text: 'Whatsapp',
                  onPress: () => Linking.openURL(`whatsapp://send?text=My order No ${order_cart_data.order_id}&phone=${phoneNumber1}`),
              },
          ],
          {cancelable: true},
        )
    }

    return (
      <TouchableNativeFeedback onPress={orderCardClick}>
          <View style={styles.container}>
              <Text>Order {order_cart_data.order_id}</Text>
              <Text>Placed on {order_cart_data.date_created}</Text>

              <Text>Payment: {order_cart_data.payment_method_title}</Text>

              <View style={styles.bottom}>
                  <Text style={styles.bottomText}>{order_cart_data.num_items_sold} Items, Total: Rs. <Text
                    style={styles.net_total}>{order_cart_data.net_total}</Text></Text>
              </View>
          </View>
      </TouchableNativeFeedback>
    )
}


const styles = StyleSheet.create({
    bottom: {},
    bottomText: {
        textAlign: 'right',
    },
    container: {
        backgroundColor: '#fff',
        marginBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 10,
        paddingBottom: 10,
    },
    net_total: {
        color: Colors.dark1,
        fontWeight: 'bold',
    },
})
