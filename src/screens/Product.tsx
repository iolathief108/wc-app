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
import Swiper from 'react-native-swiper'

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

function PriceComp({name, price, priceDelete, wishlistState, onWishlistClick}) {

  return <View style={{
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
  }}>
    <View style={{
      flexDirection: 'row',
    }}>
      <Text style={{
        fontSize: 17,
        flex: 1,
        fontFamily: 'Roboto-Regular',
        color: Colors.title1,
      }} numberOfLines={4}>{name ? name.replace(/&amp;/g, '&') : null}</Text>
      <View style={{
        marginTop: 6,
      }}>
        <TouchableOpacity onPress={onWishlistClick}>
          {
            wishlistState ?
              <Ionicons name="ios-heart-sharp" color={Colors.dark2} size={28}
                        style={{}}/> :
              <Ionicons name="ios-heart-outline" color={Colors.dark2} size={28}
                        style={{}}/>
          }
        </TouchableOpacity>
      </View>
    </View>


    {/* Price */}
    <View style={{
      flexDirection: 'row',
      alignItems: 'flex-end',

      marginTop: 13,
      marginBottom: 10,
      marginLeft: 4,

    }}>
      <Text style={{fontSize: 21, marginBottom: 0, marginRight: 5, color: Colors.dark2}}>{price}</Text>
      {
        priceDelete ?
          <Text style={{fontSize: 14, textDecorationLine: 'line-through', marginBottom: 2, color: Colors.textLight1}}
                numberOfLines={1}>{priceDelete}</Text> :
          null
      }
    </View>
  </View>
}

function GalleryComp({images, loading}: {images: string[], loading: boolean}) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'visible',
    },

    wrapper: {
      overflow: 'visible',
    },

    slide: {
      flex: 1,
      justifyContent: 'center',
      overflow: 'visible',
      backgroundColor: '#fff',
    },

    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },

    image: {
      width,
      flex: 1,
    },
  })

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

      {/* Begin */}
      <View style={{
        height: 280,
        backgroundColor: '#fff',
        marginBottom: 15,
      }}>
        <View style={styles.container}>
          {images ?
            <Swiper
              style={styles.wrapper}
              height={280}
              showsPagination={true}
              loadMinimal={false}
              loadMinimalSize={3}
              loop={false}
              paginationStyle={{
                bottom: 3,
              }}
            >
              {
                images.map((image, index) => (
                  <View
                    key={index}
                    style={styles.slide}
                  >{
                    image ?
                      <FastImage
                        resizeMode="contain"
                        style={styles.image}
                        source={{uri: image}}
                      /> : null
                  }
                  </View>
                ))
              }

            </Swiper> : null
          }
        </View>
      </View>
      {/* End */}

      {/*<SliderBox*/}
      {/*  images={images}*/}
      {/*  sliderBoxHeight={height / 2.1}*/}
      {/*  ImageComponent={FastImage}*/}
      {/*  resizeMethod={'resize'}*/}
      {/*  resizeMode={'contain'}*/}
      {/*  disableOnPress*/}
      {/*/>*/}
    </View>
  )
}

function StockComp({availableStock}: {availableStock: number}) {
  return (
    <View style={{
      paddingLeft: 19,
      paddingRight: 15,
      marginTop: -3,
    }}>
      {
        availableStock > 6 ?
          <Text style={{
            color: Colors.textGreen,
            fontFamily: 'Roboto-Regular',
          }}>In Stock</Text> :
          availableStock === 0 ?
            <Text style={{
              color: Colors.textError,
              fontFamily: 'Roboto-Regular',
            }}>Out of Stock</Text> :
            <Text style={{
              color: Colors.textWarning,
              fontFamily: 'Roboto-Regular',
            }}>Only {availableStock} Available</Text>

      }
    </View>
  )
}

function ContactComp({whatsappText}) {
  return (
    <View style={{
      marginTop: 5,
      borderLeftWidth: 5,
      borderColor: Colors.dark2, // Previos #315c88
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
        <Text style={{fontFamily: 'Roboto-Regular'}}>Contact 1: </Text>
        <TouchableOpacity onPress={
          () => Linking.openURL(`whatsapp://send?text=${whatsappText}&phone=94771363314`)
        }><Text style={{
          color: '#406cb5',
          fontFamily: 'Roboto-Regular',
        }}>077 136 3314</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'Roboto-Regular'}}>Contact 2: </Text>
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
          onPress={() => Linking.openURL(`whatsapp://send?text=${whatsappText}&phone=94771363314`)}><View><Ionicons
          size={20} name={'ios-logo-whatsapp'}/></View></TouchableOpacity>
      </View>
    </View>
  )
}

function BuyNowButton({isOutOfStock, isLoading, isAddToCardLoading, buyNowHandler, addToCartHandler}) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'transparent',
      bottom: 20,
      width: '100%',
      position: 'absolute',
    },
    buyNowContainer: {
      backgroundColor: Colors.white,
      elevation: 4,
      // shadowOffset: {
      //   width: 5,
      //   height: 5,
      // },
      minWidth: width / 3 + 13,
      paddingTop: 11,
      paddingBottom: 11,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    buttonGrayed: {},
    buttonTextGrayed: {
      color: Colors.textLight1,
    },
    buttonText: {
      color: Colors.dark2,
      textAlign: 'center',
    },
    outOfStockContainer: {
      backgroundColor: Colors.light1,
      minWidth: width / 2,
      paddingTop: 11,
      paddingBottom: 11,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  if (isLoading)
    return (
      <View style={styles.outOfStockContainer}>
        <ActivityIndicator color={Colors.dark3} style={{marginRight: 10}} size={25}/>
        <Text style={{
          color: Colors.dark3,
        }}>Loading</Text>
      </View>
    )

  if (isOutOfStock)
    return (
      null
      // <View style={styles.outOfStockContainer}>
      //   <MaterialCommunityIcons name="cart-off" color={Colors.dark3} size={25} style={{marginRight: 10}}/>
      //   <Text style={{
      //     color: Colors.dark3,
      //   }}>Out of Stock</Text>
      // </View>
    )

  return (
    <View style={styles.container}>
      {/* Buy Now Button */}

      <View style={styles.buyNowContainer}>
        <TouchableOpacity disabled={isAddToCardLoading} onPress={buyNowHandler}>
          {
            // isAddToCardLoading ?
            //   <ActivityIndicator color={Colors.textLight1} style={{marginRight: 10}} size={25}/> : null
            // <Ionicons name="ios-cart" color={'#000'} size={25} style={{marginRight: 10}}/>
          }
          <Text style={
            isAddToCardLoading ? styles.buttonTextGrayed : styles.buttonText
          }>Buy now</Text>
        </TouchableOpacity>
      </View>

      {/* Add to Cart Button */}
      <View style={styles.buyNowContainer}>
        <TouchableOpacity disabled={isAddToCardLoading} onPress={addToCartHandler}>
          {
            // isAddToCardLoading ?
            //   <ActivityIndicator color={'#000'} style={{marginRight: 10}} size={25}/> : null
            // <Ionicons name="ios-cart" color={'#000'} size={25} style={{marginRight: 10}}/>
          }
          <Text style={
            isAddToCardLoading ? styles.buttonTextGrayed : styles.buttonText
          }>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function({route, navigation}) {

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
    navigation.setOptions({title: route.params.name ? route.params.name : 'product'})
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
  function addToCartHandler(buyNow = false) {
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
                if (buyNow)
                  navigation.navigate('cart')
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
      }}>Error! {error ? error.message : cartError ? cartError.message : null}</Text>
    </View>

  return (
    <>
      <ScrollView style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        {/* Image Box - static */}
        <GalleryComp images={getImages()} loading={!!loading}/>
        {/* name price - static */}
        <PriceComp
          name={route.params.name}
          price={route.params.salePrice ? route.params.salePrice : route.params.regularPrice}
          priceDelete={route.params.salePrice ? route.params.regularPrice : null}
          wishlistState={wishedState}
          onWishlistClick={() => {
            if (wishedState)
              remove_whishlist(route.params.dbId).then(value => value && setWishedState(false))
            else
              set_wishlist(route.params.dbId).then(value => value && setWishedState(true))
            setWishlistUpdated(true)
          }}
        />


        {/* Stock - Dynamic */}
        <StockComp availableStock={getStockQty()}/>

        {/* Short Description - static */}
        <ShortDescriptionComp sDescription={getShortDescription()}/>

        {/* Contact */}
        <ContactComp whatsappText={route.params.name + ' | ' + route.params.dbId + ''}/>

        {/* Description - static */}
        <DescriptionComp description={getDescription()}/>
        <View style={{
          marginBottom: 50,
        }}/>
      </ScrollView>

      {/* ADD_TO_CART BUY_NOW - action, Dynamic */}
      <BuyNowButton
        addToCartHandler={() => {
          addToCartHandler()
        }}
        buyNowHandler={() => {
          addToCartHandler(true)
        }}
        isAddToCardLoading={addToCartBtnLoading}
        isOutOfStock={!((getStockQty() !== null) && (getStockQty() !== 0))}
        isLoading={cartLoding || loading}
      />


      {
        true ? null :
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
              <ActivityIndicator color={'#000'} style={{marginRight: 10}} animating={true}/>
              <Text>Loading...</Text>
            </View> :
            <View style={{flexDirection: 'row'}}>
              {
                ((getStockQty() !== null) && (getStockQty() !== 0)) ?
                  <TouchableNativeFeedback disabled={addToCartBtnLoading} onPress={() => addToCartHandler()}>
                    <View style={{
                      backgroundColor: '#1ADBB8',
                      minWidth: width / 2,
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
                      <Text>Add to Cart</Text>
                    </View>
                  </TouchableNativeFeedback>
                  :
                  <View style={{
                    // flex: 2/3,
                    backgroundColor: '#E8F1F8cc',
                    minWidth: width / 2,
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
