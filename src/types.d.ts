/*
*
*  "productCategories": {
      "nodes": [
        {
          "name": "Bath & Body",
          "databaseId": 200,
          "parentDatabaseId": 195
        },
        *
        * "pageInfo": {
        "hasNextPage": false,
        "endCursor": "YXJyYXljb25uZWN0aW9uOjIyNQ=="
      }
* */

export type categoryDataTypes = {
  productCategories: {
    nodes: {
      name: string
      databaseId: number
      parentDatabaseId: number
      count: number | null
    }[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
  }
}

/*
    "products": {
      "nodes": [
        {
          "name": "MISS ROSE 4D waterproof long lasting Curling Thick black mascara",
          "databaseId": 15442,
          "image": {
            "sourceUrl": "https://shoptown.lk/wp-content/uploads/33bd457f8b54eb70623eb1ed088cbfac-300x300.jpg"
          },
          "regularPrice": "450",
          "salePrice": "349",
          "link": "https://shoptown.lk/shop/miss-rose-4d-waterproof-long-lasting-curling-thick-black-mascara/"
        },


      "pageInfo": {
        "endCursor": "YXJyYXljb25uZWN0aW9u
* */
export type productsDataTypes = {
  products: {
    nodes: {
      name: string
      wished: boolean
      databaseId: number
      image: {
        sourceUrl: string
      }
      regularPrice: string
      salePrice: string
    }[]
    pageInfo: {
      endCursor: string
      hasNextPage: boolean
    }
  }
}

export type productsVarTypes = {
  search: string | null
  after: string
  first: number
  CategoryId: number | null
}

export type AccountDetails = {
  firstName: string
  lastName: string
  address1: string
  address2: string
  city: string
  email: string
  mobileNumber: string
}

//
export type UserType =
  | {
      username: string
      password: string
      email: string
      customerDatabaseId: number
    }
  | null
  | undefined

export type GetCheckoutDetailQueryType = {
  checkout: {
    result: string
    order: {
      databaseId: number
      subtotal: string
      total: string
      lineItems: {
        nodes: {
          product: {
            databaseId: number
            name: string
          }
          quantity: 1
          total: string
          subtotal: string
        }[]
      }
    }
  }
}

// export type CheckoutMutationVariableType = {
//   input: {
//     clientMutationId: string
//     paymentMethod: string
//     adfasdf: string
//     isPaid: boolean
//     shipping: {
//       address1: string
//       address2: string
//       city: string
//       email: string
//       firstName: string
//       lastName: string
//       phone: string
//     }
//   }
// }

type SignupMutationQueryVariable = {
  username?: string
  password: string
  firstName: string
  lastName: string
  email?: string
  clientMutationId: string
}

export type HomeSingleCategory = {
  id: number
  name: string
  image: string
}

/*
 * Stack Navigation Param list
 * */
export type RootStackParamList = {
  home: undefined
  email: undefined
  address: undefined
  checkout: undefined
  product: {
    dbId: number
    name: string
    mainImage: string
    regularPrice: string
    salePrice: string
    wished: boolean
  }
  contact: undefined
  about: undefined
  wishlist: undefined
  loading: undefined
  cart: undefined
  orders: undefined
}

/*
 * Bottom tab param list
 * */
export type RootBottomTabParamList = {
  home_tab: undefined
  search_tab:
    | {
        queryVariables: {
          search: string
          after: string
          first: number
          CategoryId: number
          CategoryName?: string | undefined
        }
      }
    | undefined
  categories_tab: undefined
  profile_tab: undefined
}
