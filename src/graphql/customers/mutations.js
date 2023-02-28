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

export { CREATE_CUSTOMER };
