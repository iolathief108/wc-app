import {
  ActivityIndicator,
  Dimensions, Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {gql, useMutation, useQuery} from '@apollo/client'
import HTMLView from 'react-native-htmlview'
import FastImage from 'react-native-fast-image'
import {SliderBox} from 'react-native-image-slider-box'
import {check_wishlist, get_wishlist, get_woo_session_from_storage, remove_whishlist, set_wishlist} from '../storage'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Colors from '../styles/Colors'
import Loading from './Loading'
import {useUpdateDetect} from '../State'

const query = gql`
	query MyQuery($dbId: ID!) {
		product(id: $dbId, idType: DATABASE_ID) {
			... on SimpleProduct {
				stockQuantity
				shortDescription
				description
				galleryImages {
					nodes {
						sourceUrl(size: GALLERY_MASONRY)
					}
				}
			}
		}
	}`

const addToCartQuery = gql`
	mutation MyMutation ($pId: Int!){
		addToCart(input: {productId: $pId, quantity: 1, clientMutationId: "1234"}) {
			cart {
				contents {
					itemCount
				}
			}
		}
	}`

const cart = gql`
	query Cart{
		cart{
			contents{
				nodes{
					product{
						databaseId
					}
					quantity
				}
			}
		}
	}`

type cartDataType = {
  cart: {
    contents: {
      nodes: {
        quantity: number
        product: {
          databaseId: number
        }
      }[]
    }
  }
}

const {height, width} = Dimensions.get('window')

/* Sub Components */
const descStyles = StyleSheet.create({
  p: {
    marginBottom: 2,
    marginTop: 3,
  },
})

function DescriptionComp({description}: {description: string}) {
  return <View style={{
    paddingLeft: 10,
    paddingRight: 10,
  }}>
    {
      description !== '' ?
        <>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Description</Text>
          <HTMLView
            value={description}
            style={{marginTop: 15}}
            stylesheet={descStyles}
          />
        </> :
        null
    }
  </View>
}


function ShortDescriptionComp({sDescription}: {sDescription: string}) {
  return <View style={{
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: -20,
  }}>
    {/*<Text style={{fontSize: 20}}>Short Description</Text>*/}
    <HTMLView
      value={sDescription}
      addLineBreaks={false}
      stylesheet={descStyles}
    />
  </View>
}

function PriceComp({name, price, priceDelete}) {
  return <View style={{
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
  }}>
    {/* Title */}
    <Text style={{
      fontSize: 20,
      fontFamily: 'Roboto-Regular'
      }} numberOfLines={4}>{name?name.replace(/&amp;/g, '&'):null}</Text>

    {/* Price */}
    <View style={{flexDirection: 'column', marginTop: 13, marginBottom: 10, marginLeft: 4}}>
      <Text style={{fontSize: 21, marginBottom: 4, color: Colors.title1}}>{price}</Text>
      {
        priceDelete ?
          <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: Colors.textLight1}}
                numberOfLines={1}>{priceDelete}</Text> :
          null
      }
    </View>
  </View>
}

function GalleryComp({images, loading}: {images: string[], loading: boolean}) {
  if (images.length === 0)
    return <View style={{height: (height / 2.1), flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>No Images!</Text>
    </View>
  return (
    <View>
      {
        loading ?
          <ActivityIndicator
            style={{
              position: 'absolute',
              marginTop: 10,
              marginLeft: 10,
              zIndex: 2,
            }}
            color={'#000'} animating={true}/> :
          null
      }
      <SliderBox
        images={images}
        sliderBoxHeight={height / 2.1}
        ImageComponent={FastImage}
        resizeMethod={'resize'}
        resizeMode={'contain'}
        disableOnPress
      />
    </View>
  )
}

function StockComp({availableStock}: {availableStock: number}) {
  return (
    <View style={{
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 12,
    }}>
      {
        availableStock > 6 ?
          <Text>In Stock</Text> :
          <Text>Only {availableStock} Available</Text>
      }
    </View>
  )
}

function ContactComp({whatsappText}) {
  return (
    <View style={{
      marginTop: 5,
      borderLeftWidth: 5,
      borderColor: '#315c88',
      marginLeft: 8,
      paddingLeft: 17,
      marginBottom: 23,
    }}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
        marginBottom: 5,
      }}>Contact Us</Text>


      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'Roboto-Regular'}}>Whatsapp: </Text>
        <TouchableOpacity onPress={
          () => Linking.openURL(`whatsapp://send?text=${whatsappText}&phone=94771363314`)
        }><Text style={{
          color: '#406cb5',
          fontFamily: 'Roboto-Regular',
        }}>077 136 3314</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'Roboto-Regular'}}>Whatsapp: </Text>
        <TouchableOpacity onPress={
          () => Linking.openURL(`whatsapp://send?text=${whatsappText}&phone=94778018837`)
        }><Text style={{
          color: '#3165a6',
          fontFamily: 'Roboto-Regular',
        }}>077 801 8837</Text></TouchableOpacity>
      </View>

      {/* icons */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
        maxWidth: '70%',
        paddingLeft: 5,
        paddingRight: 8,
        marginTop: 20,
        marginBottom: 8,
      }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/shoptown.lk/')}><View><Ionicons
          size={20} name={'ios-logo-facebook'}/></View></TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.instagram.com/shoptown.lk/')}><View><Ionicons
          size={20} name={'logo-instagram'}/></View></TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('whatsapp://send?text=Hi&phone=94771363314')}><View><Ionicons
          size={20} name={'ios-logo-whatsapp'}/></View></TouchableOpacity>
      </View>
    </View>
  )
}

export default function({route}) {

  const [wishedState, setWishedState] = useState(false)
  const [reducedStock, setReducedStock] = useState(0)
  const [addToCart, result] = useMutation(addToCartQuery)
  const [addToCartBtnLoading, setAddToCartBtnLoading] = useState(false)
  const [, setWishlistUpdated] = useUpdateDetect('wishlistUpdated')

  const {loading, error, data}: any = useQuery(query, {
    variables: {
      dbId: route.params.dbId,
    },
    fetchPolicy: 'cache-and-network',
  })
  const {loading: cartLoding, error: cartError, data: cartData, refetch: refetchCart} =
    useQuery<cartDataType>(cart, {
      fetchPolicy: 'cache-and-network',
    })


  useEffect(() => {
    check_wishlist(route.params.dbId).then(wished => setWishedState(wished))
  }, [])

// get all image as Text including main image
  function getImages(): string[] {
    if (data)
      return [route.params.mainImage, ...data.product.galleryImages.nodes.map((item, index) => item.sourceUrl)]
    if (route.params.mainImage)
      return [route.params.mainImage]
    return []
  }

// shows available stock to purchase
  function getStockQty(): number | null {
    if (cartLoding || loading)
      return null

    let isExist = cartData?.cart.contents.nodes.find(item => item.product.databaseId === route.params.dbId)

    let in_cart = 0
    if (isExist)
      in_cart = isExist.quantity
    if (data) return data.product.stockQuantity - in_cart
    return null
  }

// run addtocart mutation then run refetchcart to refresh the cart item count
  function addToCartHandler() {
    (
      async () => {
        setAddToCartBtnLoading(true)
        setReducedStock(reducedStock + 1)
        try {
          const session = await get_woo_session_from_storage()

          if (session !== null) {
            addToCart({
              variables: {
                pId: route.params.dbId,
              },
              context: {
                headers: {
                  'woocommerce-session': `Session ${session}`,
                },
              },
            }).then(() => {
              setAddToCartBtnLoading(true)
              refetchCart().then(() => {
                setAddToCartBtnLoading(false)
              })
            })
          } else {
            setAddToCartBtnLoading(false)
          }
        } catch (e) {
          setAddToCartBtnLoading(false)
        }
      }
    )()
  }

  function getDescription() {
    return data ? data.product.description ? data.product.description : '' : ''
  }

  function getShortDescription() {
    return data ? data.product.shortDescription ? data.product.shortDescription
        .replace(/<a href=\"https:\/\/shoptown.lk\/shop\/.+\" class=\"exp-read-more exp-read-more-underlined\">Read More<\/a>/g, '')
        .replace('\n', '')
        .replace(/(<\/.+>)(\s+)(<)/g, '$1$3')
        .replace(/(\r\n|\n|\r)/gm, '<br>')
      : '' : ''
  }

  if (loading || cartLoding) return <Loading/>

  if (error || cartError)
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: Colors.dark1,
      }}>Error! {error.message}</Text>
    </View>

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        {/* Image Box - static */}
        <GalleryComp images={getImages()} loading={!!loading}/>

        {/* name price - static */}
        <PriceComp
          name={route.params.name}
          price={route.params.salePrice ? route.params.salePrice : route.params.regularPrice}
          priceDelete={route.params.salePrice ? route.params.regularPrice : null}/>

        {/* Stock - Dynamic */}
        <StockComp availableStock={getStockQty()}/>

        {/* Short Description - static */}
        <ShortDescriptionComp sDescription={getShortDescription()}/>

        {/* Contact */}
        <ContactComp whatsappText={route.params.name + ' | ' + route.params.dbId + ''}/>

        {/* Description - static */}
        <DescriptionComp description={getDescription()}/>

      </ScrollView>

      {/* WISHLIST AND ADD_TO_CART - action, Dynamic */}
      {
        cartLoding || loading ?
          <View style={{
            backgroundColor: '#E8F1F8cc',
            minWidth: 120,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <ActivityIndicator color={'#000'} style={{marginRight: 10}} animating={true}></ActivityIndicator>
            <Text>Loading...</Text>
          </View> :
          <View style={{flexDirection: 'row'}}>
            {
              wishedState ?
                <TouchableNativeFeedback onPress={() => {
                  remove_whishlist(route.params.dbId).then(value => value && setWishedState(false))
                  setWishlistUpdated(true)
                }}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingTop: 13.5,
                    paddingBottom: 13.5,
                    backgroundColor: '#F8065211', //before #E8F1F8
                    paddingLeft: 20,
                    alignItems: 'center',
                  }}>
                    <Ionicons name="ios-heart-sharp" color={'#342'} size={25} style={{marginRight: 10}}/>
                    <Text>Wishlist</Text>
                  </View>
                </TouchableNativeFeedback>
                :
                <TouchableNativeFeedback onPress={() => {
                  set_wishlist(route.params.dbId).then(value => value && setWishedState(true))
                  setWishlistUpdated(true)
                }}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingTop: 13.5,
                    paddingBottom: 13.5,
                    backgroundColor: '#F80652',
                    paddingLeft: 20,
                    alignItems: 'center',
                  }}>
                    <Ionicons name="ios-heart-outline" color={'#342'} size={25} style={{marginRight: 10}}/>
                    <Text>Wishlist</Text>
                  </View>
                </TouchableNativeFeedback>

            }
            {
              ((getStockQty() !== null) && (getStockQty() !== 0)) ?
                <TouchableNativeFeedback disabled={addToCartBtnLoading} onPress={addToCartHandler}>
                  <View
                    style={{
                      // flex: 2/3,
                      backgroundColor: '#1ADBB8',
                      minWidth: width/2,
                      paddingTop: 13.5,
                      paddingBottom: 13.5,
                      paddingLeft: 20,
                      paddingRight: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {
                      addToCartBtnLoading ?
                        <ActivityIndicator color={'#000'} style={{marginRight: 10}} size={25}/> :
                        <Ionicons name="ios-cart" color={'#000'} size={25} style={{marginRight: 10}}/>
                    }
                    {/*<Ionicons name="ios-cart" color={'#000'} size={25} style={{marginRight: 10}}/>*/}
                    <Text>Add to Cart</Text>
                  </View>
                </TouchableNativeFeedback>
                :
                <View style={{
                  // flex: 2/3,
                  backgroundColor: '#E8F1F8cc',
                  minWidth: width/2,
                  paddingTop: 13.5,
                  paddingBottom: 13.5,
                  paddingLeft: 20,
                  paddingRight: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <MaterialCommunityIcons name="cart-off" color={'#342'} size={25} style={{marginRight: 10}}/>
                  <Text>Out of Stock</Text>
                </View>
            }
          </View>
      }

    </>
  )

}


// function prevDefEx(props) {
//
//   let dbId = props.route.params.params.dbId
//   let name = props.route.params.params.name
//   let regularPrice = props.route.params.params.regularPrice
//   let salePrice = props.route.params.params.salePrice
//   let mainImageUrl = props.route.params.params.mainImage
//   let wished = props.route.params.params.wished
//
//   const [wishedState, setWishedState] = useState(wished)
//   const [reducedStock, setReducedStock] = useState(0)
//
//   const {loading, error, data, fetchMore}: any = useQuery(query, {
//     variables: {
//       dbid: dbId,
//     },
//   })
//
//   const {loading: cartLoding, error: cartError, data: cartData, refetch: refetchCart} =
//     useQuery<cartDataType>(cart, {
//       fetchPolicy: 'network-only',
//     })
//
//   const [addToCart, result] = useMutation(addToCartQuery)
//
//   // get all image as Text including main image
//   function getImages() {
//     if (data) {
//       return [<Text key={0}>{mainImageUrl}</Text>, ...data.product.galleryImages.nodes.map((item, index) => <Text
//         key={index + 1}>{item.sourceUrl}</Text>)]
//     } else return <Text>not</Text>
//   }
//
//   // shows available stock to purchase
//   function getStockQty(): number | null {
//     if (cartLoding)
//       return null
//
//     let isExist = cartData?.cart.contents.nodes.find(item => item.product.databaseId === dbId)
//
//     let in_cart = 0
//     if (isExist)
//       in_cart = isExist.quantity
//     if (data) return data.product.stockQuantity - in_cart
//     return null
//
//   }
//
//   // run addtocart mutation then run refetchcart to refresh the cart item count
//   function addToCartHandler() {
//     (
//       async () => {
//         setReducedStock(reducedStock + 1)
//         try {
//           const session = await get_woo_session_from_storage()
//
//           if (session !== null) {
//             addToCart({
//               variables: {
//                 pId: dbId,
//               },
//               context: {
//                 headers: {
//                   'woocommerce-session': `Session ${session}`,
//                 },
//               },
//             }).then(() => {
//               refetchCart().then(() => {
//               })
//             })
//           }
//         } catch (e) {
//         }
//
//       }
//     )()
//   }
//
//   return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text>product!</Text>
//     <Text>name : {dbId}</Text>
//     <Text>name : {name}</Text>
//     <Text>regular : {regularPrice}</Text>
//     <Text>sale : {salePrice}</Text>
//     <Text>Stock {getStockQty()}</Text>
//     <Text>Wished {wishedState ? 'YES' : 'NO'}</Text>
//
//     <Button onPress={() => {
//       set_wishlist(dbId).then(value => value && setWishedState(true))
//     }
//     } title={'add to wishlist'}/>
//
//     <Button
//       title={'Add t Cart'}
//       onPress={addToCartHandler}
//       disabled={getStockQty() === null || getStockQty() === 0}
//     />
//     {getImages()}
//   </View>
// }
