import {Text, View} from 'react-native'
import React from 'react'
import {gql, useQuery} from '@apollo/client'
import {categoryDataTypes} from '../types'
import {TreeMenu} from 'react-native-tree-menu'
import Colors from '../styles/Colors'
import {SpringScrollView} from 'react-native-spring-scrollview-quickedit'
import Loading from './Loading'

let query = gql`
	query MyQuery($after: String!) {
		productCategories(after: $after, first: 100) {
			nodes {
				name
				databaseId
				parentDatabaseId
				count
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
`
export default ({navigation}) => {

  let {loading, error, data, fetchMore} = useQuery<categoryDataTypes, {after: string}>(query, {
    variables: {
      after: '',
    },
    fetchPolicy: 'cache-and-network'
  })

  if ((!loading || !error) && data?.productCategories.pageInfo.hasNextPage) {
    fetchMore({
      variables: {
        after: data?.productCategories.pageInfo.endCursor,
      },
    }).then(() => {
    })
  }

  type a1 = {
    name: string,
    databaseId: number,
    parentDatabaseId: number
    count: number | null
  }[]
  const generateData = (data: a1) => {

    if (!data)
      return {
        'openMenuItemIcon': '\u25C0',
        'closeMenuItemIcon': '\u25BC',
        'menu': [],
      }
    data = data.filter(value1 => !!value1.count)

    const getNode = ({id, name, sub = []}) => {
      return {
        'id': `${id}_${Math.random()}`,
        'icon': null,
        'name': name,
        'subItems': sub,
      }
    }

    const fill = (dataNode) => {
      let node = getNode({id: dataNode.databaseId, name: dataNode.name, sub: []})

      for (let i = 0; i < data.length; i++) {
        if (data[i].parentDatabaseId === dataNode.databaseId) {
          node.subItems.push(fill(data[i]))
        }
      }
      return node
    }

    const value = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].parentDatabaseId === null) {
        value.push(fill(data[i]))
      }
    }

    return {
      'openMenuItemIcon': '\u25C0',
      'closeMenuItemIcon': '\u25BC',
      'menu': value,
    }
  }

  let menuItemSettings = {
    closeOthersOnOpen: true,
    defaultIcon: '\u2022',
    itemOpenCloseIcon: 'right',
    itemTextStyle: {
      fontSize: 22,
      fontFamily: 'Roboto-Regular',
      color: Colors.text1,
      textAlign: 'left',
      marginLeft: 0,
    },
    itemStyle: {
      marginBottom: 13,
      marginTop: 0,
      marginLeft: 4,
      marginRight: 4,
      borderRadius: 1.5,
    },
    itemShowIcon: false,
    itemIconSize: 33,
    itemIconColor: Colors.dark1,
    itemOpenCloseIconColor: Colors.text1,
    iconStyle: {},
    itemSeparator: false,
    itemSeparatorColor: Colors.mid1,
    itemSeparatorMarginTop: 1,
    itemSeparatorMarginBottom: 1,
    itemSeparatorMarginLeft: 4,
    itemSeparatorMarginRight: 4,
    itemIndentValue: 22,
  }

  const onMenuItemClick = item => {
    navigation.navigate('search_tab', {
      queryVariables: {
        search: '',
        after: '',
        first: 18,
        CategoryId: parseInt(item.id.match(/\d+/g)[0]),
        CategoryName: item.name ? item.name : null
      },
    })
  }

  if (loading)
   return <Loading />

  if (error)
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: Colors.dark1,
      }}>Error! {error.message}</Text>
    </View>


  return (
    <SpringScrollView style={{
      flex: 1,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10
    }}>
      {
        !!data && data.productCategories && data.productCategories.nodes.length!==0?
          <TreeMenu
            menuData={generateData(data?.productCategories.nodes)}
            menuItemSettings={menuItemSettings}
            itemClickHandler={item => onMenuItemClick(item)}
          /> : <Loading/>
      }
    </SpringScrollView>
  )
}
