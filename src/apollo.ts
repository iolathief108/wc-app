import 'react-native-gesture-handler'
import {auth, set_woo_session, woo_session_global} from './global'
import {ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client'
import base64 from 'react-native-base64'
import {get_woo_session_from_storage, set_wsession_to_storage} from './storage'
// import {persistCache, AsyncStorageWrapper} from 'apollo3-cache-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage'

let woo_session_initialized2 = false
let woo_session_initialized1 = false

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          keyArgs: ['where'],
          merge(existing = {nodes: []}, incoming = {nodes: []}) {

            let nodes = [...existing.nodes]

            for (let i = 0; i < incoming.nodes.length; i++) {
              let found = false
              for (let j = 0; j < nodes.length; j++) {
                if (nodes[j].databaseId !== incoming.nodes[i].databaseId) continue
                found = true
                break
              }
              if (!found)
                nodes = [...nodes, incoming.nodes[i]]
            }

            incoming.nodes = nodes
            return incoming
          },
        },
        productCategories: {
          keyArgs: [],
          merge(existing = {nodes: []}, incoming = {nodes: []}) {
            let nodes = [...existing.nodes]

            for (let i = 0; i < incoming.nodes.length; i++) {
              let found = false
              for (let j = 0; j < nodes.length; j++) {
                if (nodes[j].databaseId !== incoming.nodes[i].databaseId) continue
                found = true
                break
              }
              if (!found)
                nodes = [...nodes, incoming.nodes[i]]
            }

            incoming.nodes = nodes
            return incoming
            // incoming.nodes = [
            //   ...existing.nodes,
            //   ...incoming.nodes,
            // ]
            // return incoming
          },
        },
        cart: {
          merge(existing, incoming) {
            return incoming
          }
        }
      },
    },
  },
})


get_woo_session_from_storage().then(async value => {
  if (value) set_woo_session(value)
  woo_session_initialized1 = true
})

/* for Every Requist */
export const middleware = new ApolloLink((operation, forward) => {

  if (woo_session_global) {
    woo_session_initialized1 = true
    operation.setContext(({headers = {}}) => ({
      headers: {
        ...headers,
        'woocommerce-session': `Session ${woo_session_global}`,
      },
    }))
  }

  return forward(operation)
})


/* for Every Response */
const afterware = new ApolloLink((operation, forward) => {

  return forward(operation).map(response => {
    const context = operation.getContext().response.headers

    if (woo_session_initialized1 && woo_session_initialized2)
      (async () => {
        const session = context.map['woocommerce-session']
        if (!!session && await get_woo_session_from_storage() !== session) {
          set_woo_session(session)
          await set_wsession_to_storage(session)
        }
      })()
    else {
      woo_session_initialized2 = true
    }

    return response
  })

})


/* Apollo Client */
const link = createHttpLink({
  uri: 'https://shoptown.lk/graphql',
  credentials: 'includes',
})
let client: ApolloClient<NormalizedCacheObject>

export const getClient = () => client

export const setup = async () => {
  // await persistCache({
  //   cache,
  //   storage: new AsyncStorageWrapper(AsyncStorage),
  // })
  client = new ApolloClient({
    cache,
    headers: {
      Authorization: `Basic ${base64.encode(`${auth.user}:${auth.pass}`)}`,
    },
    link: afterware.concat(middleware.concat(link)),
  })
  return client
}
