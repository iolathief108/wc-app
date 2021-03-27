import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {Component, useCallback, useEffect, useState} from 'react'
import AntIcon from 'react-native-vector-icons/dist/MaterialIcons'
import Colors from '../styles/Colors'
import {useUpdateDetect} from '../State'
import Loading from './Loading'
import FastImage from 'react-native-fast-image'
import {
  cartItemOnStorageType,
  decrease_item_from_cart,
  get_cart_items,
  increase_item_from_cart,
  remove_item_from_cart,
  update_cart_items,
} from '../storage'

const styles = StyleSheet.create({
  cart_item_container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#a0a0a077',
  },
  alpha1: {
    flex: 1,
    marginRight: 10,
  },
  alpha2: {
    alignItems: 'center',
  },
})

function RemoveItemButton({databaseId, refetch}: {databaseId: number, refetch: Function}) {
  // const [removeFromCartMutation, {data, loading, error}] = useRemoveFromCartMutation()
  const [loading, setLoading] = useState(false)

  const removeItem = () => {
    // removeFromCartMutation({
    //   variables: {
    //     key: [databaseId],
    //   },
    // }).then(r => {
    //   refetch()
    // })
    setLoading(true)
    remove_item_from_cart(databaseId).then(value => {
      refetch()
      setLoading(false)
    })
  }

  return (
    <TouchableNativeFeedback onPress={removeItem}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <AntIcon style={{marginRight: 10}} name="remove-shopping-cart" color={'#faf7fb'} size={15}/>
        <Text style={{
          fontFamily: 'Roboto-Regular',
          fontSize: 12,
          color: '#fff',
        }}>{loading ? 'loading' : 'Remove Item'}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

type ChangeQuantityButtonProp = {
  databaseId: number
  qty: number
  totalQty: number
  refech: Function
}

function ChangeQuantityButton({databaseId, qty, totalQty, refech}: ChangeQuantityButtonProp) {
  const [qtyState, setStateQty] = useState<number>(qty)
  // let [updateCart, {data, loading}] = useUpdateCartMutation()
  const [loading, setLoading] = useState<boolean>(false)

  const onIncrease = async () => {
    if (qtyState < totalQty) {
      // await updateCart({
      //   variables: {
      //     items: [{
      //       key: databaseId,
      //       quantity: qtyState + 1,
      //     }],
      //   },
      // })
      setLoading(true)
      await increase_item_from_cart(databaseId)
      setStateQty(qtyState + 1)
      refech()
      setLoading(false)
    }
  }

  const onDecrease = async () => {
    if (qtyState !== 0) {
      // await updateCart({
      //   variables: {
      //     items: [{
      //       key: databaseId,
      //       quantity: qtyState - 1,
      //     }],
      //   },
      // })
      setLoading(true)
      await decrease_item_from_cart(databaseId)
      setStateQty(qtyState - 1)
      refech()
      setLoading(false)
    }
  }

  const Button = ({text, grayed, fontSize}: {text: string, grayed: boolean, fontSize?: number}) => {
    return (
      <View style={{
        // borderWidth: 2,
        // borderRadius: 30,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: grayed ? '#00000022' : '#000',
      }}>
        <Text style={{
          fontFamily: 'Roboto-Regular',
          fontSize: fontSize ? fontSize : 20,
          color: grayed ? '#00000022' : '#000',
        }}>{text}</Text>
      </View>
    )
  }

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      width: 100,
      marginTop: 15,
    }}>
      {
        qty > 1 && !loading ?
          <TouchableOpacity onPress={onDecrease}>
            <Button text='-' grayed={false} fontSize={26}/>
          </TouchableOpacity> : <Button text='-' grayed={true}/>
      }
      <View style={{
        backgroundColor: '#fdfdfd',
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 4,
        marginBottom: 4,
      }}>
        <Text style={{marginBottom: 0}}>{qty}</Text>
      </View>
      {
        totalQty > qtyState && !loading ?
          <TouchableOpacity onPress={onIncrease}>
            <Button text='+' grayed={false}/>
          </TouchableOpacity> :
          <Button text='+' grayed={true}/>
      }
    </View>
  )
}

type CartItemProp = {
  name: string
  image_uri: string
  subtotal: number
  databaseId: number
  qty: number
  refetch: Function
  totalQty: number
}
type CartItemState = {
  total: number
  qty: number
}

class CartItem extends Component<CartItemProp, CartItemState> {
  styles = StyleSheet.create({
    cart_item_container: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      // marginLeft: 10,
      // marginRight: 10,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 10,
      paddingBottom: 12,
      backgroundColor: Colors.white,
      // borderBottomWidth: 1,
      // borderBottomColor: '#a0a0a077',
    },
  })

  constructor(props) {
    super(props)
    this.state = {
      qty: this.props.qty,
      total: this.props.subtotal,
    }
  }

  render = () => (
    <View style={this.styles.cart_item_container}>
      {/* Left */}
      <View style={styles.alpha1}>

        {/* Top */}
        <View style={{flex: 1}}>

          {/* Title */}
          <Text
            numberOfLines={2}
            style={{
              fontFamily: 'Roboto-Medium',
              color: Colors.title1,
              fontSize: 14,
              marginTop: 5,
            }}>{this.props.name}</Text>

          {/* Price */}
          <Text style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 13,
            marginTop: 10,
            color: Colors.text1,
          }}>{this.props.subtotal}</Text>
        </View>

        {/* Bottom*/}
        <View style={{flexDirection: 'row'}}>
          <View style={{
            marginTop: 20,
            backgroundColor: '#cc0029',
            paddingTop: 7,
            paddingBottom: 8,
            paddingLeft: 12,
            paddingRight: 12,
            // width: 125,
            borderRadius: 2,
          }}>
            <RemoveItemButton databaseId={this.props.databaseId} refetch={this.props.refetch}/>
          </View>
        </View>
      </View>

      {/* riht */}
      <View style={styles.alpha2}>

        {/* Image */}
        <FastImage style={{flex: 1, height: 100, width: 100}} resizeMode='contain'
                   source={{uri: this.props.image_uri}}></FastImage>

        {/* Qty Chagne */}
        <ChangeQuantityButton
          databaseId={this.props.databaseId}
          qty={this.props.qty}
          refech={this.props.refetch}
          totalQty={this.props.totalQty}
        />
      </View>
    </View>
  )

}

export default function({navigation}) {

  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)

  type dataType = {
    total: number
    itemCount: number
    cartItems: cartItemOnStorageType[]
  }
  const [data, setData] = useState<dataType>({total: 0, itemCount: 0, cartItems: []})
  // const {loading, data, refetch, error} = useGetCartQuery({
  //   fetchPolicy: 'cache-and-network',
  // })


  const onRefresh = useCallback(() => {
    (async () => {
      setRefreshing(true)
      if (await update_cart_items()) {
        let cartItems = await get_cart_items()
        let itemCount = 0
        let total = 0
        cartItems.forEach(value => {
          itemCount += value.qty
          total += (value.qty * value.price)
        })
        setData({total, itemCount, cartItems})
      }
      setRefreshing(false)
    })()
  }, [])
  const [isCheckoutUpdated, setCheckoutUpdated] = useUpdateDetect('checkoutUpdated')

  useEffect(() => {
    (async () => {
      let cartItems = await get_cart_items()
      let itemCount = 0
      let total = 0
      cartItems.forEach(value => {
        itemCount += value.qty
        total += (value.qty * value.price)
      })
      setData({total, itemCount, cartItems})
    })()
  }, [])

  useEffect(() => {


    const unsubscribe = navigation.addListener('focus', () => {
      // when cart is focused
      if (isCheckoutUpdated) {
        setRefreshing(true)
        setCheckoutUpdated(false)
        update_cart_items().then(async is_updated => {
          setRefreshing(false)
          if (is_updated) {
            let new_data: dataType = {total: 0, itemCount: 0, cartItems: []}
            let cartItems = await get_cart_items()
            let itemCount = 0
            let total = 0
            cartItems.forEach(value => {
              itemCount += value.qty
              total += (value.qty * value.price)
            })
            setData({total, itemCount, cartItems})
          }
        })
      }
      // end focus
    })
    return unsubscribe
  }, [navigation, isCheckoutUpdated])
  /*
  *
  * */
  const refetch = async () => {

    let cartItems = await get_cart_items()
    let itemCount = 0
    let total = 0
    cartItems.forEach(value => {
      itemCount += value.qty
      total += (value.qty * value.price)
    })
    setData({total, itemCount, cartItems})
  }

// if (error)
//   return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text style={{
//       fontFamily: 'Roboto-Regular',
//       fontSize: 20,
//       color: Colors.dark1,
//     }}>Error! {error.message}</Text>
//   </View>

  return (
    <>
      <ScrollView
        style={{backgroundColor: '#f5f5f5'}}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      >
        <View style={{
          marginTop: 20,
        }}/>
        {
          data || !loading ?
            <Info navigation={navigation}/> : null
        }
        {
          data.cartItems.length === 0 || !data ?
            <View style={{flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '30%'}}>
              {
                !data || loading ?
                  <Loading/> :
                  //empty cart view
                  <>
                    <Text style={{fontFamily: 'Roboto-Bold', fontSize: 25, marginBottom: 10}}>Cart is empty</Text>
                    <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center'}}>Looks like you have
                      no items in your shopping cart.</Text>
                    <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center'}}>Click <Text
                      style={{color: '#009'}}
                      onPress={() => navigation.navigate('search_tab')}>here</Text> to continue
                      shopping.</Text>
                  </>
              }
            </View> :
            data.cartItems.map((item, index) =>
              <CartItem
                name={item.product_name}
                qty={item.qty}
                key={index}
                image_uri={item.image}
                databaseId={item.databaseId}
                subtotal={item.qty * item.price}
                refetch={refetch}
                totalQty={item.max_qty}
              />,
            )
        }
      </ScrollView>

      {/* price and total items */}
      {
        !!data || !loading ?
          <>
            <View style={{
              backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'flex-end',
              alignItems: 'center',
              paddingTop: 12.5,
              paddingBottom: 12.5,
              paddingRight: 8,
            }}>
              {/* total */}
              <Text style={{
                fontFamily: 'Roboto-Regular',
                marginRight: 15,
              }}>Total ({data.itemCount}):
                <Text style={{
                  fontFamily: 'Roboto-Bold',
                }}> {data.total}</Text>
              </Text>

              {/* checkout */}
              <TouchableNativeFeedback onPress={() => {
                if (data) {
                  if (data.cartItems.length > 0) navigation.navigate('checkout')
                  else {
                    ToastAndroid.show('You cannot checkout empty cart!', ToastAndroid.LONG)
                  }
                } else {
                  ToastAndroid.show('Whoops, something went wrong...', ToastAndroid.LONG)
                }
              }}>
                <View style={{
                  paddingBottom: 8,
                  paddingTop: 8,
                  paddingLeft: 19,
                  paddingRight: 19,
                  backgroundColor: '#5ab857',
                  borderRadius: 3,
                  // marginTop: 10,
                  // marginRight: 10
                }}>
                  <Text style={{color: '#000'}}>Checkout</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </> :
          null
      }
    </>
  )
}

function Info({navigation}) {

  const Style = StyleSheet.create({
    container: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
      paddingTop: 15,
      paddingBottom: 15,
    },
    text: {
      fontFamily: 'Roboto-Regular',
      color: Colors.text1,
    },
    link: {
      fontFamily: 'Roboto-Regular',
      color: Colors.link,
    },
  })

  return (
    <View style={Style.container}>
      <Text style={Style.text}>Available payment methods are COD, Bank Deposit. Please
        <Text onPress={() => navigation.navigate('contact')} style={Style.link}>
          {' '}contact us
        </Text>
        {' '}for payment and other information.
      </Text>
    </View>
  )
}
