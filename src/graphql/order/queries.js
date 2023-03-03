import { gql } from "@apollo/client"

const GET_CUSTOMER_ORDERS = gql`
  query FetchCustomerOrder($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: 10) {
        edges {
          node {
            id
            name
            customerUrl
            totalPrice {
              amount
              currencyCode
            }
            fulfillmentStatus
          }
        }
      }
    }
  }
`

export { GET_CUSTOMER_ORDERS }
