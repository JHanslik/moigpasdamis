import { gql } from "@apollo/client"

const CREATE_CHECKOUT = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        webUrl
      }
      checkoutUserErrors {
        field
        message
        code
      }
      queueToken
    }
  }
`
export { CREATE_CHECKOUT }
