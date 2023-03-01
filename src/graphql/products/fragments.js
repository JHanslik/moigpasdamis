import { gql } from "@apollo/client";

const CORE_PRODUCT_FIELDS = gql`
    fragment CoreProductFields on Product {
        id
        title
        handle
        description
    }
`;

export { CORE_PRODUCT_FIELDS };
