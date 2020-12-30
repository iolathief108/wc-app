import {gql} from '@apollo/client'

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
					regularPrice(format: RAW)
					salePrice(format: RAW)
				}
			}
		}
	}
`
