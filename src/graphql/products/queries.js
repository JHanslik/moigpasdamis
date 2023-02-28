import { gql } from "@apollo/client";
import { CORE_PRODUCT_FIELDS } from "./fragments";

const GET_PRODUCTS = gql`
    ${CORE_PRODUCT_FIELDS}
    query GetProducts {
        products(first: 10) {
            edges {
                node {
                    ...CoreProductFields
                    availableForSale
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                    }
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
            }
        }
    }
`;

export { GET_PRODUCTS };
