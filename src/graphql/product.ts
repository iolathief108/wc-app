import {gql} from '@apollo/client'

// noinspection JSUnusedLocalSymbols
const getProductQuantityQuery = gql`
	query GetProductQuantity ($id: ID!){
		__typename
		product(id: $id, idType: DATABASE_ID) {
			... on SimpleProduct{
				stockQuantity
			}
		}
	}
`

// noinspection JSUnusedLocalSymbols
const getProductDetail1Query = gql`
	query GetProductDetail1 ($id: ID!){
		__typename
		product(id: $id, idType: DATABASE_ID) {
			... on SimpleProduct{
				name
				image{
					sourceUrl(size: GALLERY_MASONRY)
				}
				regularPrice
				salePrice
			}
		}
	}
`

// noinspection JSUnusedLocalSymbols
const getHomeProductQuery = gql`
	query GetHomeProduct($first: Int!) {
    products(where: {search: "", orderby: {order: ASC, field: DATE},tag: "hot products"}, after: "", first: $first) {
      nodes {
        name
        databaseId
        image {
          sourceUrl(size: MEDIUM)
        }
        ... on SimpleProduct {
          regularPrice(format: FORMATTED)
          salePrice(format: FORMATTED)
        }
      }
    }
  }
`
