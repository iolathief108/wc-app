import {gql} from '@apollo/client'

const checkoutMutation = gql`
	mutation Checkout($input: CheckoutInput!) {
		__typename
		checkout(input: $input) {
			result
			order {
				databaseId
				date
				lineItems {
					nodes {
						product {
							databaseId
							name
						}
						quantity
						subtotal
					}
				}
				subtotal
				total
			}
		}
	}`
