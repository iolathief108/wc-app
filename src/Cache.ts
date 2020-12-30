import {Cache} from './lib/react-native-cache'
import AsyncStorage from '@react-native-async-storage/async-storage'

const cache = new Cache({
  namespace: 'long1',
  policy: {
    maxEntries: 50000, // if unspecified, it can have unlimited entries
    stdTTL: 0
  },
  backend: AsyncStorage,
})

const cache_7day = new Cache({
  namespace: 'short1',
  policy: {
    maxEntries: 1000, // if unspecified, it can have unlimited entries
    stdTTL: 0
  },
  backend: AsyncStorage,
})


/* PRODUCT DETAILS */
export type cacheProduct = {
  dbId: number
  name?: string
  regularPrice?: string
  salePrice?: string | null
  mainImageUri?: string | null
}

export const set_product_detail = async (product: cacheProduct) => {
  try {
    const jsonValue = JSON.stringify(product)
    await cache.set('@product_' + product.dbId, jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const get_product_detail = async (dbId: number):Promise<cacheProduct|null> => {
  try {
    const jsonValue = await cache.get('@product_' + dbId)
    return !!jsonValue ? JSON.parse(jsonValue) : null
  } catch (e) {
    return null
  }
}


/* HOME PAGE CACHE */
// export type HomePageCache = {

// }
// export const set_home_page_cashe = async ()

