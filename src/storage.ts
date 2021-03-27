import AsyncStorage from '@react-native-async-storage/async-storage'
import {AccountDetails} from './types'
import Axios from 'axios'
import makeid from './lib/makeid'
import {websiteUrl} from './config'

/* WOO SESSION */
export const set_wsession_to_storage = async (value): Promise<boolean> => {
  try {
    await AsyncStorage.setItem('woo-session', value)
    return true
  } catch (e) {
    return false
  }
}

export const get_woo_session_from_storage = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('woo-session')
  } catch (e) {
    return null
  }
}


/* USER ACCOUNT DETAILS */
export const set_account_details = async (value: AccountDetails): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@account_details', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const get_account_details = async (): Promise<AccountDetails | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@account_details')

    return !!jsonValue ? JSON.parse(jsonValue) : null
  } catch (e) {
    return null
  }
}


/* ALL ORDER IDS */
export type OrderOnStorageType = {
  order_id: number
  subtotal: string
  total: string
  date: string
  lineItems: {
    subtotal: string
    name: string
    databaseId: number
    quantity: number
  }[]
}

export const set_order_id_to_storage = async (order: OrderOnStorageType): Promise<boolean> => {
  try {
    let before = await get_order_ids_from_storage()
    before.push(order)
    const jsonValue = JSON.stringify(before)
    await AsyncStorage.setItem('@orders', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const get_order_ids_from_storage = async (): Promise<OrderOnStorageType[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@orders')
    return !!jsonValue ? JSON.parse(jsonValue) : []
  } catch (e) {
    return []
  }
}

export const delete_order_id_from_storage = async (orderId: number): Promise<boolean> => {
  try {
    let before = await get_order_ids_from_storage()
    let newd = []

    for (let i = 0; i < before.length; i++) {
      if (before[i].order_id !== orderId) newd = [...newd, before[i]]
    }

    const jsonValue = JSON.stringify(newd)
    await AsyncStorage.setItem('@orders', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

/* WHISH LIST THING */
export const set_wishlist = async (wishlist_productId: number): Promise<boolean> => {
  try {
    let before = await get_wishlist()
    let already_have = false
    for (let i = 0; i < before.length; i++)
      if (before[i] === wishlist_productId) already_have = true

    if (!already_have) {
      before = [...before, wishlist_productId]
      const jsonValue = JSON.stringify(before)
      await AsyncStorage.setItem('@wishlist', jsonValue)
    }
    return true
  } catch (e) {
    return false
  }
}

export const remove_whishlist = async (wishlist_productId: number): Promise<boolean> => {
  try {
    let before = await get_wishlist()

    before = before.filter(((value) => value !== wishlist_productId))
    // await sleep(1000)
    const jsonValue = JSON.stringify(before)
    await AsyncStorage.setItem('@wishlist', jsonValue)

    return true
  } catch (e) {
    return false
  }
}

export const get_wishlist = async (): Promise<number[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@wishlist')
    return !!jsonValue ? JSON.parse(jsonValue) : []
  } catch (e) {
    return []
  }
}

export const check_wishlist = async (value: number): Promise<boolean> => {
  let wishlistState = await get_wishlist()
  for (let i = 0; i < wishlistState.length; i++) {
    if (wishlistState[i] === value) {
      return true
    }
  }
  return false
}

/* ITEMS ON CART */
export type cartItemOnStorageType = {
  image: string
  product_name: string
  databaseId: number
  price: number
  price_deleted: number
  qty: number
  max_qty: number
}

export const add_cart_item = async (item: cartItemOnStorageType): Promise<boolean> => {
  try {
    let before = await get_cart_items()
    let found = false
    for (let i = 0; i < before.length; i++) {
      if (before[i].databaseId === item.databaseId) {
        found = true
        item.qty += before[i].qty
        before[i] = item
        break
      }
    }
    if (!found) {
      before.push(item)
    }
    const jsonValue = JSON.stringify(before)
    await AsyncStorage.setItem('@cartItems', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const get_cart_items = async (): Promise<cartItemOnStorageType[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@cartItems')
    return !!jsonValue ? JSON.parse(jsonValue) : []
  } catch (e) {
    return []
  }
}

export const update_cart_items = async (): Promise<boolean> => {
  try {
    //todo: this is designed to simple products only not for variable products
    let cartItems = await get_cart_items()
    if (cartItems.length === 0) return true
    let stockHasBeenChanged = false
    let result = await Axios.post(`${websiteUrl}/graphql/`, {
      query: `{
          products(where: {include: ${JSON.stringify(cartItems.map(value => value.databaseId))}}) {
            nodes {
              databaseId
              ... on SimpleProduct {
                stockQuantity
              }
            }
          }
        }`,
    })
    let productNodes: {databaseId: number, stockQuantity: number}[] = result.data.data.products.nodes

    cartItems.forEach(value => productNodes.forEach(async productNode => {
      if (productNode.databaseId === value.databaseId) {
        if (productNode.stockQuantity !== value.max_qty) {
          stockHasBeenChanged = true
          await empty_cart()
        }
      }
    }))

    return stockHasBeenChanged
  } catch (e) {
    return false
  }
}

export const remove_item_from_cart = async (databaseId: number): Promise<boolean> => {
  try {
    let before = await get_cart_items()
    let new_ = before.filter(value => value.databaseId !== databaseId)

    const jsonValue = JSON.stringify(new_)
    await AsyncStorage.setItem('@cartItems', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const decrease_item_from_cart = async (databaseId: number): Promise<boolean> => {
  try {
    let before = await get_cart_items()
    let new_ = before.map(value => {
      if (value.databaseId === databaseId)
        if (value.qty > 1)
          value.qty = value.qty - 1
      return value
    })

    const jsonValue = JSON.stringify(new_)
    await AsyncStorage.setItem('@cartItems', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const increase_item_from_cart = async (databaseId: number): Promise<boolean> => {
  try {
    let before = await get_cart_items()
    let new_ = before.map(value => {
      if (value.databaseId === databaseId) value.qty = value.qty + 1
      return value
    })
    console.log(new_)
    const jsonValue = JSON.stringify(new_)
    await AsyncStorage.setItem('@cartItems', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const empty_cart = async (): Promise<boolean> => {
  try {
    let new_ = []

    const jsonValue = JSON.stringify(new_)
    await AsyncStorage.setItem('@cartItems', jsonValue)
    return true
  } catch (e) {
    return false
  }
}

/* app id */
let app_id: string = undefined
export const get_app_id = async (): Promise<string> => {
  if (app_id) return app_id
  else {
    try {
      const id = await AsyncStorage.getItem('@appId')
      app_id = id
      if (id) return id
      else {
        let generatedAppId = makeid(30)
        app_id = generatedAppId
        await AsyncStorage.setItem('@appId', generatedAppId)
        return generatedAppId
      }
    } catch (e) {
      return null
    }
  }
}
