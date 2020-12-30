import {RefreshControl, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {sleep} from '../global'
import {get_wishlist, remove_whishlist} from '../storage'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import MatIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import {asyncMap} from '@apollo/client/utilities'
import {getClient} from '../apollo'
import {
  AddToCartDocument,
  AddToCartMutation, AddToCartMutationVariables,
  GetCartQuantityDocument, GetCartQuantityQuery,
  GetCartQuantityQueryResult, GetProductDetail1Document, GetProductDetail1Query, GetProductDetail1QueryVariables,
  GetProductQuantityDocument, GetProductQuantityQuery,
  GetProductQuantityQueryResult,
  GetProductQuantityQueryVariables,
} from '../generated/graphql'
import {ActivityIndicator} from 'react-native-paper'
import {get_product_detail, set_product_detail} from '../Cache'
import {CommonLottieHeader} from 'react-native-spring-scrollview-quickedit/Customize'
import {SpringScrollView} from 'react-native-spring-scrollview-quickedit'
import Colors from '../styles/Colors'
import {useUpdateDetect} from '../State'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Loading from './Loading'


async function get_qty(dbId: number) {

  let cartDataLoaded = false, cartStock = 0
  getClient().query<GetCartQuantityQuery>({
    query: GetCartQuantityDocument,
  }).then(value => {
    for (let i = 0; i < value.data.cart.contents.nodes.length; i++) {
      if (value.data.cart.contents.nodes[i].product.databaseId === dbId) {
        cartStock = value.data.cart.contents.nodes[i].quantity
        break
      }
    }
    cartDataLoaded = true
  })

  let {data, error, loading} = await getClient().query<GetProductQuantityQuery, GetProductQuantityQueryVariables>({
    query: GetProductQuantityDocument,
    variables: {
      id: dbId + '',
    },
  })


  while (true) {
    if (cartDataLoaded) {
      break
    }
    await sleep(300)
  }

  return {
    // @ts-ignore
    totalQty: data.product.stockQuantity,
    inCart: cartStock,
  }
}

type wishlistItemProp = {
  productDbId: number,
  showStatus: (status_text: string) => Promise<void>,
  onDelete: () => void
}

const WishlistItem = ({productDbId, showStatus, onDelete}: wishlistItemProp) => {
  let [cartBtnLoading, setCartBtnLoading] = useState<boolean>(false)
  let [qtyData, setQtyData] = useState<{loaded: boolean, totalQty: number, inCart: number}>({
    loaded: false,
    totalQty: 0,
    inCart: 0,
  })
  type infoType = {
    name?: string
    price?: string
    imageUri?: string | null
    priceDelete?: string | null
  }
  let [info, setInfo] = useState<infoType>({})
  let [imageNetworkLoading, setImageNetworkLoading] = useState(false)

  async function reload() {
    setImageNetworkLoading(true)

    let result = await getClient().query<GetProductDetail1Query, GetProductDetail1QueryVariables>({
      query: GetProductDetail1Document,
      variables: {
        id: productDbId + '',
      },
    })
    setInfo({
      // @ts-ignore
      name: result.data.product.name,
      // @ts-ignore
      price: result.data.product.salePrice ? result.data.product.salePrice : result.data.product.regularPrice,
      // @ts-ignore
      priceDelete: result.data.product.salePrice ? result.data.product.regularPrice : null,
      // @ts-ignore
      imageUri: result.data.product.image.sourceUrl ? result.data.product.image.sourceUrl : null,
    })
    setImageNetworkLoading(false)
    set_product_detail({
      dbId: productDbId,
      // @ts-ignore
      name: result.data.product.name,
      // @ts-ignore
      regularPrice: result.data.product.regularPrice,
      // @ts-ignore
      salePrice: result.data.product.salePrice,
      // @ts-ignore
      mainImageUri: result.data.product.image.sourceUrl ? result.data.product.image.sourceUrl : null,
    })
  }

  useEffect(() => {
    // console.log('use ef')
    get_product_detail(productDbId).then(value => {
      if (value !== null) {
        let reload1 = false
        let info1: infoType = {}

        if (value.mainImageUri)
          info1.imageUri = value.mainImageUri
        else reload1 = true

        if (value.name)
          info1.name = value.name
        else reload1 = true

        if (value.regularPrice) {
          info1.price = value.salePrice ? value.salePrice : value.regularPrice
          info1.priceDelete = value.salePrice ? value.regularPrice : null
        } else reload1 = true

        setInfo(info1)
        if (reload1)
          reload()

      } else {
        reload()
      }
    })
  }, [productDbId])

  async function add_to_cart_click() {
    setCartBtnLoading(true)
    let {inCart, totalQty} = await get_qty(productDbId)
    setQtyData({
      loaded: true,
      totalQty,
      inCart,
    })

    if ((totalQty - inCart) > 0) {
      await getClient().mutate<AddToCartMutation, AddToCartMutationVariables>({
        mutation: AddToCartDocument,
        variables: {
          pdId: productDbId,
        },
      })
      showStatus('Added to card')
    } else showStatus('Out of stock')

    setCartBtnLoading(false)
  }

  return (
    <View style={{
      flexDirection: 'row',
      paddingLeft: 7,
      paddingRight: 7,
      // borderBottomWidth: 1,
      paddingBottom: 10,
      paddingTop: 10,
      // marginTop: 10,
      backgroundColor: Colors.white,
      marginBottom: 8,
    }}>

      {/* LEFT */}
      <View style={{borderRadius: 0, overflow: 'hidden', height: 110, width: 110}}>

        <View style={{
          position: 'absolute',
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          height: '100%',
          zIndex: qtyData.loaded && (qtyData.totalQty - qtyData.inCart) === 0 ? 20 : -20,
          width: '100%',
          backgroundColor: '#00000066',
        }}>
          <Text style={{color: '#fff'}}>Out of Stock</Text>
        </View>

        {/* Image */}
        {
          info.imageUri ?
            <FastImage
              source={{
                uri: info.imageUri,
              }}
              resizeMode={'cover'}
              style={{
                height: '100%',
                minWidth: '35%',
              }}
            /> :
            <View style={{
              height: '100%',
              minWidth: '35%',
              backgroundColor: '#555',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {
                imageNetworkLoading ?
                  <ActivityIndicator animating/> :
                  <Text>No Image</Text>
              }
            </View>
        }

      </View>

      {/* RIGHT */}
      <View style={{
        marginLeft: 15,
        flex: 1,
      }}>

        {/* name */}
        <View><Text numberOfLines={2} style={{fontFamily: 'Roboto-Regular'}}>
          {/*{info.name ? productDbId + ' ' + info.name : 'loading...'}*/}
          {info.name ? info.name : 'loading...'}
        </Text></View>

        {/* price */}
        <View style={{flexDirection: 'column', marginTop: 5, marginBottom: 10}}>
          <Text style={{
            fontSize: 17,fontFamily: 'Roboto-Regular'
          }}>{info.price ? info.price : 'loading...'}</Text>

          {
            info.priceDelete ?
              <Text style={{fontSize: 13, fontFamily: 'Roboto-Regular', textDecorationLine: 'line-through', color: '#aaaaaaff'}} numberOfLines={1}>
                {info.priceDelete}
              </Text> :
              null
          }
        </View>

        {/* delete and add to cart */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>

          {/* delete Icon */}
          <TouchableOpacity onPress={onDelete}>
            <View style={{
              width: 40,
              height: 31,
              // backgroundColor: '#666666',
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
              <MatIcon name="delete-empty" color={Colors.text1} size={22}/>
            </View>
          </TouchableOpacity>

          {/* add to cart icon */}
          {
            (qtyData.loaded && (qtyData.totalQty - qtyData.inCart) === 0) || cartBtnLoading ?
              <View style={{
                width: 45,
                height: 31,
                backgroundColor: '#66666669',
                borderRadius: 3,
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
                {
                  cartBtnLoading ?
                    <ActivityIndicator animating/> :
                    <Icon name="cart-plus" color={Colors.textLight1} size={22}/>
                }
              </View> :
              <TouchableOpacity onPress={add_to_cart_click}>
                <View style={{
                  width: 45,
                  height: 31,
                  // backgroundColor: '#666666',
                  borderRadius: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                  <Icon name="cart-plus" color={Colors.text1} size={22}/>
                </View>
              </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}

const NoWishlist = ({navigation}) => {
  return (
    <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
      <MaterialCommunityIcons name={'bookmark-check'} size={120} />
      <Text style={{ fontFamily: 'Roboto-Bold',marginTop: 18, fontSize: 25, marginBottom: 10 }}>Your wishlist is empty!</Text>
      <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center', marginBottom: 5 }}>seems like you don't have wishes here</Text>
      <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center' }}>Click <Text
        style={{ color: '#009' }}
        onPress={() => navigation.navigate('search_tab')}>here</Text> to Make a Wish!</Text>
    </View>
  )
}

const Status = ({text, active}) => {

  if (!active)
    return null

  return (
    <View style={{
      display: (text === '' || !active) ? 'none' : 'flex',
      position: 'absolute',
      bottom: 0,
      backgroundColor: Colors.dark1,
      width: '100%',
    }}>
      <Text style={{
        paddingTop: 8,
        paddingBottom: 8,
        fontFamily: 'Roboto-Medium',
        color: Colors.light1,
        textAlign: 'center',
        fontSize: 18,
      }}>{text}</Text>
    </View>
  )
}

export default function({navigation}) {
  const [wishlist, setWishlist] = useState<number[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [status, setStatus] = useState<{
    active: boolean,
    text: string
  }>({
    active: false,
    text: '',
  })

  const onRefresh = useCallback(() => {
    get_wishlist().then(whishlists => {
      setWishlist(whishlists)
      // @ts-ignore
      _scrollView?.current?.endRefresh()
      setLoading(false)
    })

  }, [])
  let _scrollView = useRef()

  const showStatus = async (status_text: string) => {
    setStatus({
      active: true,
      text: status_text,
    })
    await sleep(3000)
    setStatus({
      active: false,
      text: '',
    })
  }

  const onDelete = (dbId: number) => {
    setWishlist(wishlist.filter(value => value !== dbId))
    // remove_whishlist(dbId)
  }


  const [isWishlistUpdated, setWishlistUpdated] = useUpdateDetect('wishlistUpdated')

  useEffect(() => {
    // if (isWishlistUpdated) {
    onRefresh()
    setWishlistUpdated(false)
    // }
  }, [isWishlistUpdated])

  if (isWishlistUpdated) {

    get_wishlist().then(value => setWishlist(value))
  }


  return (
    <>

      <SpringScrollView
        ref={_scrollView}
        onRefresh={() => onRefresh()}
  // @ts-ignore
        refreshHeader={CommonLottieHeader}
      >
        <View style={{marginTop: 12}}></View>
        {
          wishlist.length > 0 ?
            wishlist.map((value, index) =>
              <WishlistItem
                key={index}
                productDbId={value}
                showStatus={showStatus}
                onDelete={() => onDelete(value)}
              />,
            )
          : loading ? null : <NoWishlist navigation={navigation} />
        }

      </SpringScrollView>

      <Status active={status.active} text={status.text}/>
    </>
  )

}


