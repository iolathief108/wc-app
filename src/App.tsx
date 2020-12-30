import 'react-native-gesture-handler'
import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {ApolloProvider} from '@apollo/client'
import Home from './screens/Home'
import Orders from './screens/Orders'
import Search from './screens/Search'
import Wishlist from './screens/Wishlist'
import Category from './screens/Category'
import Profile from './screens/Profile'
import {createStackNavigator} from '@react-navigation/stack'
import Product from './screens/Product'
import Cart from './screens/Cart'
import Checkout from './screens/Checkout'
import {setup} from './apollo'
import Email from './screens/Email'
import Address from './screens/Address'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Loading from './screens/Loading'
import Contact from './screens/Contact'
import About from './screens/About'
import Colors from './styles/Colors'
import {RootBottomTabParamList, RootStackParamList} from './types'



const BottomTab = createMaterialBottomTabNavigator<RootBottomTabParamList>()
const Stack = createStackNavigator<RootStackParamList>()

const Htab = () => {
  return <BottomTab.Navigator>




    <BottomTab.Screen
      name={'home_tab'}
      options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarColor: Colors.dark2,
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26}/>
        ),
      }}
      component={Home}/>

    <BottomTab.Screen
      name={'search_tab'}
      options={{
        title: 'Search',
        tabBarLabel: 'Search',
        tabBarColor: Colors.dark2,
        tabBarIcon: ({color}) => (
          <Icon name="ios-search" color={color} size={26}/>
        ),
      }}
      component={Search}/>

    <BottomTab.Screen
      name={'categories_tab'}
      options={{
        title: 'Category',
        tabBarLabel: 'Category',
        tabBarColor: Colors.dark2,
        tabBarIcon: ({color}) => (
          <Icon name="list" color={color} size={26}/>
        ),
      }}
      component={Category}/>

    <BottomTab.Screen
      name={'profile_tab'}
      options={{
        title: 'Profile',
        tabBarLabel: 'Profile',
        tabBarColor: Colors.dark2,
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26}/>
        ),
      }}
      component={Profile}/>


  </BottomTab.Navigator>
}



const App = () => {
  const [client, setClient] = useState(undefined)

  useEffect(() => {
    setup().then(value => setClient(value))
  }, [])

  return (
    <NavigationContainer>
      {
        client ?
          <ApolloProvider client={client}>
            <Stack.Navigator mode={'modal'} headerMode={'float'}>

              <Stack.Screen name={'home'} options={{
                title: 'SHOPTOWN',
                headerTitleStyle: {alignSelf: 'center'},
                headerStyle: {
                  shadowOpacity: 0,
                },
                headerShown: false,
              }} children={Htab}/>
              <Stack.Screen options={{title: 'Cart'}} name={'cart'} component={Cart}/>
              <Stack.Screen options={{title: 'Orders'}} name={'orders'} component={Orders}/>
              <Stack.Screen options={{title: 'Email'}} name={'email'} component={Email}/>
              <Stack.Screen options={{title: 'Address'}} name={'address'} component={Address}/>
              <Stack.Screen options={{title: 'Checkout'}} name={'checkout'} component={Checkout}/>
              <Stack.Screen options={{title: 'Product'}} name={'product'} component={Product}/>
              <Stack.Screen options={{title: 'Contact Us'}} name={'contact'} component={Contact}/>
              <Stack.Screen options={{title: 'About Us'}} name={'about'} component={About}/>
              <Stack.Screen options={{title: 'My Wishlist'}} name={'wishlist'} component={Wishlist}/>

            </Stack.Navigator>
          </ApolloProvider> :
          <Stack.Navigator mode={'modal'} headerMode={'float'}>
            <Stack.Screen name={'loading'} component={Loading}/>
          </Stack.Navigator>
      }
    </NavigationContainer>
  )
}


export default App
