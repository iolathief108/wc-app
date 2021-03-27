/* WOO SESSION */
export let woo_session_global: string | null | undefined = undefined

export function set_woo_session(session_string: string | null) {
  woo_session_global = session_string
}

export interface Product {
  name: string
  imageUrl?: string
  gqlId?: string
  productId?: number
  regularPrice?: number
  salePrice?: number | undefined
}

export function formatPrice(priceString: string): string {
  if (typeof priceString === 'string') {
    priceString = priceString
      .replace('රු ', '')
      .replace('රු', '')
      .replace(' Rs', '')
      .replace('Rs', '')
      .replace('.00', '')
    return 'Rs.' + priceString
  }
  else
    return priceString
}



export function getDefaultProduct(product: Product): Product {
  return {
    name: product.name,
    imageUrl: product.imageUrl !== undefined ? product.imageUrl : '',
    gqlId: product.gqlId !== undefined ? product.gqlId : '',
    productId: product.productId !== undefined ? product.productId : 0,
    regularPrice: product.regularPrice !== undefined ? product.regularPrice : 0,
    salePrice: product.salePrice !== undefined ? product.salePrice : 0,
  }
}

export async function sleep(ms: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function extractNumber(text: string): number | undefined {
  let regexRes = text.match(/[\D]*\s?([\d,.]+)[\D]*/)
  if (regexRes === null)
    return undefined
  return parseInt(regexRes[1].replace(',', ''))
}

export type searchQuery = {
  searchString?: string | null,
  categoryId?: number | null
}

// export let isWishlistUpdated = true
// export function wishlistUpdated() {
//   isWishlistUpdated = true
// }
// export function wishlistUpdatedOK() {
//   isWishlistUpdated = false
// }

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
