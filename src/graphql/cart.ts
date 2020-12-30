import {gql} from '@apollo/client';

const getCartQuery = gql`
	query GetCart {
		__typename
		cart {
			total
			contents {
				itemCount
				nodes {
					quantity
					key
					total
					product {
						name
						... on SimpleProduct{
							stockQuantity
						}
						image{
							sourceUrl(size: SHOP_SINGLE)
						}
						galleryImages {
							nodes{
								sourceUrl(size: SHOP_SINGLE)
							}
						}
					}
				}
			}
		}
	}
`;

const getCartQuantityQuery = gql`
	query GetCartQuantity {
		__typename
		cart {
			contents {
				nodes {
					quantity
					product {
						databaseId
						... on SimpleProduct{
							stockQuantity
						}
					}
				}
			}
		}
	}
`;

const removeFromCartMutation = gql`
	mutation RemoveFromCart($key: [ID]) {
    __typename
    removeItemsFromCart(input: {keys: $key, clientMutationId: "1234"}) {
      clientMutationId
    }
	}
	`;

const updateCartMutation = gql`
	mutation UpdateCart($items: [CartItemQuantityInput]) {
		updateItemQuantities(input: {clientMutationId: "jj", items: $items}){
			clientMutationId
		}
	}
`;

const addToCartMutation = gql`
	mutation AddToCart ($pdId: Int!){
		addToCart(input: {productId: $pdId, quantity: 1, clientMutationId: "1234"}) {
			cart {
				contents {
					itemCount
				}
			}
		}
	}`
