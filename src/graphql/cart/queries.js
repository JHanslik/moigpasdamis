import { gql } from "@apollo/client"
import { CART_FRAGMENT } from "./fragments"

const GET_CART = gql`
  ${CART_FRAGMENT}
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cartFragment
    }
  }
`
export { GET_CART }
