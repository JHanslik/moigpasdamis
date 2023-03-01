import { gql } from "@apollo/client";

const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
      }
    }
  }
`;

const SIGNIN_CUSTOMER_CREDENTIALS = gql`
mutation SignInWithEmailAndPassword(
  $email: String!, 
  $password: String!,
) {
  customerAccessTokenCreate(input: { 
      email: $email, 
      password: $password,
  }) {
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

export { CREATE_CUSTOMER, SIGNIN_CUSTOMER_CREDENTIALS };
