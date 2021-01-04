import React from 'react'
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native'

const windowWidth = Dimensions.get('window').width
import {HomeSingleCategory} from '../types'

type CategoryItemCompProp = {
  category: HomeSingleCategory
  navigation: any
}
const CategoryItemComp = (props: CategoryItemCompProp) => {

  // let Icon
  // switch (props.category.iconFamily) {
  //     case 'AntDesign':
  //         Icon = AntDesign
  //         break
  //     case 'Entypo':
  //         Icon = Entypo
  //         break
  //     case 'Ionicon':
  //         Icon = Ionicon
  //         break
  //     default:
  //         Icon = null
  // }

  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate('search_tab', {
        queryVariables: {
          search: '',
          after: '',
          first: 18,
          CategoryId: props.category.id,
          CategoryName: props.category.name,
        },
      })
    }
    }>
      <View style={{
        width: windowWidth / 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
      }}>
        <View style={{
          borderRadius: 6,
          // backgroundColor: Colors.text1,
          overflow: 'hidden',
        }}>
          {
            props.category.image ?
              <Image
                style={{width: 60, height: 60, borderRadius: 6}}
                source={{
                  uri: props.category.image,
                }}
              />
              : null
          }
        </View>
        <Text style={{
          fontFamily: 'Roboto-Regular',
          fontSize: 12,
          marginTop: 3,
          color: '#000a',
        }}>{props.category.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

type HomeCategoriesProps = {
  homeCategories: HomeSingleCategory[]
  navigation: any
}
const HomeCategories = (props: HomeCategoriesProps) => {
  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
      {
        props.homeCategories ?
          props.homeCategories.map((category, index) => (
            <CategoryItemComp key={index} category={category} navigation={props.navigation}/>
          )) : null
      }
    </View>
  )
}

export default HomeCategories
