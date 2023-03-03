import { gql } from "@apollo/client"

const GET_CUSTOMER_INFO = gql`
  query FetchCustomerInfo($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
      id
      lastName
      phone
    }
  }
`

export { GET_CUSTOMER_INFO }
