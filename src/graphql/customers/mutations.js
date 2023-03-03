import { gql } from "@apollo/client"

const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
      }
    }
  }
`

const SIGNIN_CUSTOMER_CREDENTIALS = gql`
  mutation SignInWithEmailAndPassword($email: String!, $password: String!) {
    customerAccessTokenCreate(input: { email: $email, password: $password }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        message
      }
    }
  }
`

const UPDATE_CUSTOMER_INFO = gql`
  mutation UpdateCustomerInfo(
    $customerAccessToken: String!
    $email: String
    $firstName: String
    $lastName: String
    $phone: String
  ) {
    customerUpdate(
      customerAccessToken: $customerAccessToken
      customer: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        phone: $phone
      }
    ) {
      customer {
        firstName
        lastName
        email
        phone
        id
      }
      customerUserErrors {
        code
        message
      }
      userErrors {
        message
      }
    }
  }
`

export { CREATE_CUSTOMER, SIGNIN_CUSTOMER_CREDENTIALS, UPDATE_CUSTOMER_INFO }
