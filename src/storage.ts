import AsyncStorage from '@react-native-async-storage/async-storage'
import {AccountDetails, UserType} from './types'
import {sleep} from './global'
import {RefundIdTypeEnum} from './generated/graphql'

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

export const delete_order_id_from_storage = async (orderId: number):Promise<boolean> => {
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

export const check_wishlist = async (value: number): Promise<boolean> =>{
  let wishlistState = await get_wishlist()
  for (let i = 0; i < wishlistState.length; i++) {
    if (wishlistState[i] === value) {
      return true
    }
  }
  return false
}

