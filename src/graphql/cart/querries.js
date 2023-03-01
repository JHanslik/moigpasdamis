import { gql } from "@apollo/client"

const GET_CART = gql`
  query GetCart($cartId: ID!) {
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
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                title
                image {
                  url
                }
                price {
                  amount
                  currencyCode
                }
                product {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
export { GET_CART }
