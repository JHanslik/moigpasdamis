import { gql } from "@apollo/client";

const GET_CUSTOMER_INFO = gql`
query FetchCustomerInfo($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
      id
      lastName
      defaultAddress {
          id
      }
      addresses(first: 100) {
          edges {
              node {
                  address1
                  city
                  country
                  id
                  province
                  zip
              }
          }
      }
    }
  }
`

export { GET_CUSTOMER_INFO }