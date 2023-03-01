import { gql } from "@apollo/client"

const GET_COLLECTION = gql`
  query GetCollection($handle: String!) {
    collectionByHandle(handle: $handle) {
      title
      description
      products(first: 250) {
        edges {
          node {
            title
            description
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  weight
                  image {
                    url
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`

const GET_COLLECTIONS = gql`
  query GetCollections {
    collections(first: 50) {
      edges {
        node {
          handle
          title
        }
      }
    }
  }
`

export { GET_COLLECTION, GET_COLLECTIONS }
