import { gql } from "@apollo/client"

const CART_FRAGMENT = gql`
  fragment cartFragment on Cart {
    id
    updatedAt
    totalQuantity
    checkoutUrl
    buyerIdentity {
      customer {
        email
        id
      }
      email
    }
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
              id
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
`

export { CART_FRAGMENT }
