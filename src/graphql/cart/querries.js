import { gql } from "@apollo/client"

const GET_CART = gql`
  query GetCart($cartId: String!) {
    cart(id: $cartId) {
      id
      updatedAt
      totalQuantity
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
      lines(first: 10) {
        edges {
          node {
            merchandise {
              ... on ProductVariant {
                title
              }
            }
            id
          }
        }
      }
    }
  }
`
export { GET_CART }
