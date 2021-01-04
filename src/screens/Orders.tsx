import {
  ActivityIndicator,
  Alert,
  Image, Linking,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { delete_order_id_from_storage, get_order_ids_from_storage, OrderOnStorageType } from '../storage'
import { getClient } from '../apollo'
import { GetProductDetail1Document, GetProductDetail1Query, GetProductDetail1QueryVariables } from '../generated/graphql'
import { get_product_detail, set_product_detail } from '../Cache'
import Colors from '../styles/Colors'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import {SpringScrollView} from 'react-native-spring-scrollview-quickedit'


const OrderCardProduct = ({ title, price, qty, databaseId }) => {

  const [imageUri, setImageUri] = useState(null)
  const [imageNetworkLoading, setImageNetworkLoading] = useState(false)

  async function reload() {
    setImageNetworkLoading(true)

    let result = await getClient().query<GetProductDetail1Query, GetProductDetail1QueryVariables>({
      query: GetProductDetail1Document,
      variables: {
        id: databaseId + '',
      },
    })
    setImageUri("image" in result.data.product ? result.data.product.image.sourceUrl : null)
    setImageNetworkLoading(false)
    await set_product_detail({
      dbId: databaseId,
      name: "name" in result.data.product ? result.data.product.name : null,
      regularPrice: "regularPrice" in result.data.product ? result.data.product.regularPrice : null,
      salePrice: "salePrice" in result.data.product ? result.data.product.salePrice : null,
      mainImageUri: "image" in result.data.product ? result.data.product.image.sourceUrl ? result.data.product.image.sourceUrl : null : null,
    })

  }

  useEffect(() => {
    get_product_detail(databaseId).then(async value => {
      if (value !== null) {
        let reload1 = false

        if (value.mainImageUri)
          setImageUri(value.mainImageUri)
        else reload1 = true

        if (reload1)
          await reload()

      } else {
        await reload()
      }
    })
  }, [databaseId])

  const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    imageContainer: {
      height: 70,
      width: 70,
      borderRadius: 3,
      overflow: 'hidden',
    },
    image: {
      height: '100%',
      width: '100%',
      position: 'absolute',

    },
    // content container childrens
    contentCotainer: {
      marginLeft: 14,
      flex: 1,
    },
    title: {},
  })

  return (
    <View style={style.container}>

      {/* image container */}
      <View style={style.imageContainer}>
        {
          imageUri ?
            <Image
              source={{ uri: imageUri }}
              resizeMode={'contain'}
              style={style.image}
            /> :
            <View style={[style.image, { backgroundColor: '#555' }]}>
              {
                imageNetworkLoading ?
                  <ActivityIndicator color={'#000'} animating={true} /> :
                  null
              }
            </View>
        }
      </View>

      {/* content container */}
      <View style={style.contentCotainer}>
        {/* title */}
        <Text numberOfLines={2} style={{
          fontSize: 13,
          marginTop: -2,
          fontFamily: 'Roboto-Regular',
        }}>{title}</Text>

        {/* price */}
        <Text style={{
          marginTop: 1,
          fontSize: 13,
          fontFamily: 'Roboto-Medium',
        }}>{price}</Text>

        {/* qty */}
        <Text style={{
          marginTop: 2,
          fontSize: 12.7,
          color: '#00000099',
          fontFamily: 'Roboto-Regular',
        }}>x {qty}</Text>
      </View>

    </View>
  )
}

/*
* Order Card
* */
type OrderCardProp = {
  orderNumber: number
  orderDate: string
  total: string
  deleteItem: () => void
  orderItems: {
    price: string,
    qty: number,
    title: string,
    databaseId: number
  }[]
}
const OrderCard = ({ orderNumber, orderDate, total, orderItems, deleteItem }: OrderCardProp) => {

  const styles = {
    container: {
      backgroundColor: '#fff',
      paddingTop: 10,
      paddingBottom: 14,
      paddingLeft: 12,
      paddingRight: 13,
      borderRadius: 3,
      marginBottom: 8,
    },
  }

  /*
  * total product count
  * */
  const getTotalItemCount = () => {
    let itemCount = 0
    for (let i = 0; i < orderItems.length; i++) {
      itemCount += orderItems[i].qty
    }
    return itemCount
  }

  const orderCardClick = () => {
    Alert.alert(
      'Under Development',
      'This function is under development. Click the WhatsApp button below to find out more about your order.',
      [
        // { text: 'Cancel', style: 'cancel' },
        {
          text: 'Whatsapp', onPress: () => Linking.openURL(`whatsapp://send?text=My order No ${orderNumber}&phone=94771363314`),
        },
        {
          text: 'Delete', onPress: () => {
            Alert.alert('Delete Order', 'This will permanently delete this order from your storage. ' +
              'This does not mean cancellation or return. You can still inquire about your order via WhatsApp.',
              [
                // { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Confirm', style: 'destructive', onPress: deleteItem,
                },
              ],
              {cancelable: true}
            )
          }, style: 'destructive',
        },
      ],
      { cancelable: true },
    )
  }

  return (
    <TouchableNativeFeedback onPress={orderCardClick}>
      <View style={styles.container}>
        {/* top */}
        <View style={{ marginBottom: 6 }}>
          {/* order number*/}
          <Text style={{ fontSize: 14, fontWeight: '100' }}>Order {orderNumber}</Text>

          {/* order date */}
          <Text style={{
            fontSize: 12,
            color: '#00000099',
            fontWeight: '100',
            marginTop: -1.5,
          }}>Placed on {orderDate}</Text>
        </View>

        {/* order item  */}
        <View style={{
          marginTop: 8,
          marginLeft: 2,
        }}>
          {
            orderItems.map((value, index) => {
              return (
                <OrderCardProduct databaseId={value.databaseId} key={index} price={value.price} qty={value.qty}
                  title={value.title} />
              )
            })
          }
        </View>

        {/* item count and total */}
        <View style={{
          marginTop: -3,
          alignContent: 'flex-end',
        }}>
          <Text style={{ textAlign: 'right', fontFamily: 'Roboto-Regular' }}>{getTotalItemCount()} Items, Total: <Text
            style={{ fontFamily: 'Roboto-Bold', color: Colors.text1 }}>Rs {total}</Text></Text>
        </View>

      </View>
    </TouchableNativeFeedback>
  )
}


export default function ({ navigation }) {

  const styles = {
    container: {
      paddingTop: 15,
      paddingBottom: 8,
    },
  }

  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState<OrderOnStorageType[]>([])

  useEffect(() => {

    get_order_ids_from_storage().then(async value => {
      let newd: any = []
      for (let i = 0; i < value.length; i++) {
        let total = 0
        for (let e = 0; e < value[i].lineItems.length; e++)
          total += parseFloat(value[i].lineItems[e].subtotal)
        value[i].total = total + ''
        newd = [...newd, value[i]]
      }

      setOrders(newd)
      setLoading(false)
    })
  }, [])

  if (loading) return (
    <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '7%' }}>
      <View style={{ flexDirection: 'row' }}>
        <ActivityIndicator size={25} style={{ marginRight: 9 }} color={Colors.dark1} animating={true} />
        <Text style={{
          fontFamily: 'Roboto-Regular',
          fontSize: 20,
          color: Colors.dark1,
        }}>Loading...</Text>
      </View>
    </View>
  )

  const deleteItem = (id: number) => {
    let newOrders = []
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].order_id !== id) newOrders = [...newOrders, orders[i]]
    }
    setOrders(newOrders)
    delete_order_id_from_storage(id)
  }
    //{/*<View>*/}
  return (
      <SpringScrollView>
        <View style={styles.container}>
          {
            orders.length === 0 ?
              <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
                <FontAwesome name={'shopping-bag'} size={120} />
                <Text style={{ fontFamily: 'Roboto-Bold',marginTop: 18, fontSize: 25, marginBottom: 10 }}>No Orders</Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center' }}>You don't have any orders in your history</Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center' }}>Click <Text
                  style={{ color: '#009' }}
                  onPress={() => navigation.navigate('search_tab')}>here</Text> to continue
              shopping.</Text>
              </View> :
              null
          }
          {
            orders.map((value, index) =>
              <OrderCard
                key={index}
                orderNumber={value.order_id}
                orderDate={value.date}
                total={value.total}
                orderItems={value.lineItems.map(value1 => ({
                  price: value1.subtotal,
                  qty: value1.quantity,
                  title: value1.name,
                  databaseId: value1.databaseId,
                }))}
                deleteItem={() => deleteItem(value.order_id)}
              />,
            )
          }
        </View>
      </SpringScrollView>
  )
}
    // </View>
