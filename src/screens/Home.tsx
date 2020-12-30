import {StatusBar, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Colors from '../styles/Colors'
import {SpringScrollView} from 'react-native-spring-scrollview-quickedit'
import {CommonLottieHeader} from 'react-native-spring-scrollview-quickedit/Customize'
import HomeSlider from '../Components/HomeSlider'
import HomeProducts, {Product} from '../Components/HomeProducts'
import HomeCategories from '../Components/HomeCategories'
import home_ads from '../api/home_ads'
import {HomeSingleCategory} from '../types'
import Loading from './Loading'
import {getClient} from '../apollo'
import {GetHomeProductDocument, GetHomeProductQuery, GetHomeProductQueryVariables} from '../generated/graphql'
import {sleep} from '../global'


const Search = ({ navigation }) => {

  const [search, setSearch] = useState('')


  return (
    <View style={{
      paddingTop: 12,
      paddingLeft: 9,
      paddingRight: 8,
      paddingBottom: 13,
      marginBottom: 3,
    }}>
      <View style={{
        flexDirection: 'row',
        height: 40,
      }}>
        <TextInput
          style={{
            backgroundColor: '#e7e7e7',
            paddingBottom: 3,
            paddingTop: 3,
            paddingLeft: 10,
            paddingRight: 3,
            borderRadius: 10,
            flex: 1,
            marginRight: 10,
            fontFamily: 'Roboto-Regular',
          }}
          value={search}
          onChangeText={text => setSearch(text)}
          placeholder={'Search'}
        />
        <TouchableNativeFeedback onPress={() => {
          if (search !== '' || search)
            navigation.navigate('search_tab', {
              queryVariables: {
                search: search,
                after: '',
                first: 18,
                CategoryId: null,
              },
            })
          else navigation.navigate('search_tab')
        }}>
          <View style={{
            height: '100%',
            borderRadius: 6,
            paddingLeft: 13,
            paddingRight: 13,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'Roboto-Light',
              color: '#0008',
              fontSize: 16,
            }}>Search</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}


const Home = ({ navigation }) => {
  const [sliderAds, setSliderAds] = useState<string[]>([])
  const [error, setError] = useState(false)

  const [homeAdsLoading, setHomeAdsLoading] = useState<boolean>(true)
  const [homeProductsLoading, setHomeProductsLoading] = useState<boolean>(true)

  const [homeCategories, setHomeCategories] = useState<HomeSingleCategory[]>([])
  const [homeProducts, setHomeProducts] = useState<Product[]>([])

  const load = async () => {

    let done = 0
    let error = 0

    getClient().query<GetHomeProductQuery, GetHomeProductQueryVariables>({
      query: GetHomeProductDocument,
      variables: {
        first: 15,
      },
      fetchPolicy: 'no-cache',
    }).then(value => {
      setHomeProductsLoading(false)
      setHomeProducts(value.data.products.nodes.map(value => ({
        imageUri: value.image.sourceUrl,
        name: value.name,
        productId: value.databaseId,
        regularPrice: 'regularPrice' in value ? value.regularPrice : 'null',
        salePrice: 'salePrice' in value ? value.salePrice : null,
      })))
      done += 1

    })
      .catch(e => { error++ })


    home_ads().then(value => {
      if (value.ads)
        setSliderAds(value.ads)
      if (value.categories)
        setHomeCategories(value.categories)
      setHomeAdsLoading(false)
      done += 1
    }).catch(e => { error++ })

    let count = 0
    while (true) {
      count += 1
      if (error > 0) {
        setError(true)
        break
      }
      if ((done > 1) || (count > 5000)) {
        setError(false)
        break
      }
      await sleep(600)
    }

  }
  const onRefresh = useCallback(async () => {

    await load()
    // @ts-ignore
    _scrollView?.current?.endRefresh()
  }, [])


  useEffect(() => {

    load()
  }, [])

  let _scrollView = useRef()


  if (error)
    return (
      <SpringScrollView
        ref={_scrollView}
        onRefresh={() => onRefresh()}
        // @ts-ignore
        refreshHeader={CommonLottieHeader}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 20,
            color: Colors.dark1,
          }}>Something went wrong, try again</Text>
        </View>
      </SpringScrollView>
    )

  if (homeAdsLoading || homeProductsLoading)
    return <Loading />

  return (
    <SpringScrollView
      ref={_scrollView}
      onRefresh={() => onRefresh()}
      // @ts-ignore
      refreshHeader={CommonLottieHeader}
    >
      <View style={{
        marginBottom: 10,
        // backgroundColor: '#fff'
        }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#0000'} />

        {/* Search */}
        <Search navigation={navigation} />

        {/* Slider */}
        <HomeSlider images={sliderAds} />

        {/* Home Products Title */}
        <Text style={{
          fontFamily: 'Roboto-Medium',
          marginLeft: 5,
          fontSize: 25,
          marginBottom: 12,
          textAlign: 'center',
          color: '#000a',
        }}
        >
          Featured Collection
        </Text>

        {/* Home Products */}
        <HomeProducts navigation={navigation} products={homeProducts} />

        {/* Home Categories Title */}
        <Text style={{
          fontFamily: 'Roboto-Medium',
          marginLeft: 5,
          fontSize: 25,
          marginBottom: 12,
          marginTop: 25,
          textAlign: 'center',
          color: '#000a',
        }}>
          Top Categories
        </Text>

        {/* Home Categories */}
        <HomeCategories homeCategories={homeCategories} navigation={navigation} />

        {/* All category text */}
        <TouchableOpacity onPress={()=>navigation.navigate('categories_tab')}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'Roboto-Regular',
            marginTop: 15,
            marginBottom: 10,
            color: Colors.link
          }}>
            All Category
          </Text>
        </TouchableOpacity>
      </View>
    </SpringScrollView>
  )
}


export default Home
