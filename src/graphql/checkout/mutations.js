import { gql } from "@apollo/client"

const CREATE_CHECKOUT = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
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

const CUSTOMER_ASSOCIATE = gql`
  mutation checkoutCustomerAssociateV2(
    $checkoutId: ID!
    $customerAccessToken: String!
  ) {
    checkoutCustomerAssociateV2(
      checkoutId: $checkoutId
      customerAccessToken: $customerAccessToken
    ) {
      checkout {
        webUrl
      }
      checkoutUserErrors {
        field
        message
        code
      }
      customer {
        id
        email
      }
    }
  }
`
export { CREATE_CHECKOUT, CUSTOMER_ASSOCIATE }
