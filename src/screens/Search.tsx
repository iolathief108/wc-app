import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {gql, useQuery} from '@apollo/client'
import {productsDataTypes, productsVarTypes, RootBottomTabParamList, RootStackParamList} from '../types'
import {get_wishlist} from '../storage'
import FastImage from 'react-native-fast-image'
import Colors from '../styles/Colors'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import Loading from './Loading'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {formatPrice} from '../global'


type ProfileScreenRouteProp = RouteProp<RootBottomTabParamList, 'search_tab'>;

type ProfileScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<RootBottomTabParamList, 'search_tab'>,
  StackNavigationProp<RootStackParamList>
  >

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp
};


const { width} = Dimensions.get('window')
const itemWidth: number = (width - 24) / 2
const query = gql`
	query MyQuery($search: String!, $after: String!, $first: Int!, $CategoryId: Int) {
		products(where: {search: $search, orderby: {order: ASC, field: DATE}, categoryId: $CategoryId}, after: $after, first: $first) {
			nodes {
				name
				databaseId
				image {
					sourceUrl(size: MEDIUM)
				}
				... on SimpleProduct {
					regularPrice(format: FORMATTED)
					salePrice(format: FORMATTED)
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
`

// const originalImageQuery = gql`
// 	query MyQuery {
// 		product(id: 16935, idType: DATABASE_ID) {
// 			image {
// 				sourceUrl(size: LARGE)
// 			}
// 			... on SimpleProduct {
// 				galleryImages {
// 					nodes {
// 						sourceUrl(size: LARGE)
// 					}
// 				}
// 			}
// 		}
// 	}
// `



export default function({navigation, route}: Props) {
  const [searchInputState, setSearchInputState] = useState('')
  const [searchQueryState, setSearchQueryState] = useState('')
  const [wishlistState, setWishlistState] = useState<number[]>([])
  const [loadMore, setLoadMore] = useState<boolean>(false)
  const [endReached, setEndReached] = useState<boolean>(false)
  const [categoryMode, setCategoryMode] = useState<boolean>(false)

  let variables = route.params ? route.params.queryVariables : {
    search: searchQueryState,
    after: '',
    first: 15,
    CategoryId: null,
  }

  const {loading, error, data, fetchMore, refetch} = useQuery<productsDataTypes, productsVarTypes>(query, {
    variables,
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    get_wishlist().then(value => setWishlistState(value))
  }, [])

  useEffect(()=>{
    if (route.params){
      if (!route.params.queryVariables.CategoryId){
          setSearchInputState(route.params.queryVariables.search)
          setSearchQueryState(route.params.queryVariables.search)
          setCategoryMode(false)
      }else{
        setCategoryMode(true)
        route.params.queryVariables.CategoryName ?
          setSearchInputState(':'+route.params.queryVariables.CategoryName) :
          setSearchInputState(':')
      }
    }
  }, [navigation, route])

  const productClick = (dbId: number, name, mainImage, regularPrice, salePrice = null, wished) => {


    navigation.navigate('product', {
      dbId,
      name,
      mainImage,
      regularPrice,
      salePrice,
      wished,
    })
  }

  const handleLoadMore = () => {
    if (data?.products.pageInfo.hasNextPage) {
      if (loadMore) return
      setEndReached(false)
      setLoadMore(true)
      variables.after = data?.products.pageInfo.endCursor ? data?.products.pageInfo.endCursor : ''
      variables.first = 15
      fetchMore({variables}).then(() => {
        setLoadMore(false)
      })
    } else {
      setEndReached(true)
    }
  }

  const Item = ({item}) => {
    return (
      <TouchableNativeFeedback onPress={() =>
        productClick(item.databaseId, item.name, item.image.sourceUrl, item.regularPrice, item.salePrice, item.wished)
      }>
        <View style={{
          flex: 1,
          backgroundColor: '#fff',
          marginLeft: 6,//a
          marginBottom: 8,
          minWidth: itemWidth,
          maxWidth: itemWidth,
          // borderRadius: 4,
          paddingBottom: 6,
          overflow: 'hidden',
        }}>
          <FastImage
            style={{
              flex: 1,
              flexDirection: 'row',
              minHeight: 150,
              maxHeight: itemWidth + 0.1,
            }}
            resizeMode='contain'
            source={{uri: item.image.sourceUrl}}/>

          <View style={{paddingLeft: 8, paddingRight: 8}}>
            <Text
              style={{
                marginTop: 3,
                fontSize: 13,
                fontFamily: 'Roboto-Regular',
                color: Colors.title1
              }}
              numberOfLines={2}
            >{item.name}</Text>

            <View style={{
              marginTop: 4,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>

              {/* Price */}
              <Text style={{
                marginRight: 8,
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                color: Colors.title1
              }}>{item.salePrice ? item.salePrice : item.regularPrice}</Text>

              {/* Price Delete */}
              {
                item.salePrice ?
                  <Text style={{
                    color: Colors.textLight1,
                    fontSize: 11,
                    textDecorationLine: 'line-through',
                  }}>{item.regularPrice}</Text> :
                  null
              }

            </View>

          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setEndReached(false)
    refetch().then(() => {
      setRefreshing(false)
    })
    setRefreshing(true)
  }, [])

  const renderFooter = () => {
    if (endReached) return <Text style={{marginBottom: 20, textAlign: 'center'}}>You have reached end!</Text>
    if (!loadMore) return null
    return (
      <ActivityIndicator
        size="large" color={Colors.dark2} animating={true} style={{marginBottom: 20}}
      />
    )
  }

  if (loading) return (
    <Loading/>
  )

  if (error)
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: Colors.dark1,
      }}>Error! {error.message}</Text>
    </View>

  return (
    <>
      <View style={styles.textInputContainer}>
        <TextInput
          // style={styles.textInput}
          style={{
            backgroundColor: '#e7e7e7',
            paddingBottom: 3,
            paddingTop: 3,
            paddingLeft: 10,
            color: Colors.title1,
            paddingRight: 3,
            // borderRadius: 10,
            flex: 1,
            marginRight: 10,
            fontFamily: 'Roboto-Regular',
          }}
          onChangeText={text => setSearchInputState(text)}
          onSubmitEditing={async () => {
            //start

            if (!categoryMode) { //if search mode

              setEndReached(false)
              if (searchInputState !== searchQueryState){
                setSearchQueryState(searchInputState)
                await refetch({
                  search: searchInputState,
                  after: '',
                  first: 15,
                  CategoryId: null,
                })
              }

            }
            //end
          }}
          value={searchInputState}
        />
        <TouchableOpacity onPress={async () => {
          //start
          setEndReached(false)

            if (categoryMode){
              setCategoryMode(false)
              setSearchInputState('')
              setSearchQueryState('')
              await refetch({
                search: '',
                after: '',
                first: 15,
                CategoryId: null,
              })

            }else {
              if (searchInputState !== searchQueryState){
                setSearchQueryState(searchInputState)
                await refetch({
                  search: searchInputState,
                  after: '',
                  first: 15,
                  CategoryId: null,
                })
              }
            }
          //end
        }}>
          <Text style={{
              fontFamily: 'Roboto-Light',
              color: Colors.text1,
              fontSize: 16,
            }}>
              {
                categoryMode? 'Clear':'Search'
              }
            </Text>
          {/* <Text>Search</Text> */}
        </TouchableOpacity>
      </View>

      {
        data.products.nodes.length === 0 ?
          <View style={{flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '20%'}}>
            <Ionicons name={'ios-search-sharp'} size={120}/>
            <Text style={{fontFamily: 'Roboto-Bold', marginTop: 18, fontSize: 25, marginBottom: 10}}>No result
              fount</Text>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center'}}>Sorry, there are no result
              for your search term.</Text>
          </View> :
          <FlatList
            data={data? data.products.nodes.map(value => {
              let newValue = {...value}
              newValue.regularPrice = formatPrice(value.regularPrice)
              newValue.salePrice = formatPrice(value.salePrice)
              newValue['wished'] = false
              for (let i = 0; i < wishlistState.length; i++) {
                if (wishlistState[i] === value.databaseId) {
                  newValue['wished'] = true
                  break
                }
              }
              return newValue
            }) : []}
            style={{
              paddingLeft: 3,//c
              paddingRight: 9,//b
              marginBottom: 0,
              paddingTop: 7,
              zIndex: 2,
            }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            renderItem={Item}
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
            onEndReachedThreshold={0.4}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
          />
      }


    </>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 50,
  },
  container: {
    backgroundColor: '#eee',
  },
  textInput: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    // zIndex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
