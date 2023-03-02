import { gql } from "@apollo/client"
import { CART_FRAGMENT } from "./fragments"

const CREATE_CART = gql`
  ${CART_FRAGMENT}
  mutation cartCreate {
    cartCreate {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`

const ADD_LINE_TO_CART = gql`
  ${CART_FRAGMENT}
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`

const UPDATE_LINES_CART = gql`
  ${CART_FRAGMENT}
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`

const UPDATE_BUYER_IDENTITY = gql`
  ${CART_FRAGMENT}
  mutation cartBuyerIdentityUpdate(
    $buyerIdentity: CartBuyerIdentityInput!
    $cartId: ID!
  ) {
    cartBuyerIdentityUpdate(buyerIdentity: $buyerIdentity, cartId: $cartId) {
      cart {
        ...cartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`

export {
  CREATE_CART,
  UPDATE_LINES_CART,
  ADD_LINE_TO_CART,
  UPDATE_BUYER_IDENTITY,
}
