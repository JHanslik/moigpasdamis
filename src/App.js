import React from "react";
import { useQuery } from "react-query";

const endpoint = "https://moigpasdamis.myshopify.com/api/2023-01/graphql.json";
const getAllProducts = `
{
  products(first: 10) {
    edges {
      node {
        id
        title
        description
        availableForSale
        priceRange {
            maxVariantPrice {
                amount
                currencyCode
            }
        }
        variants (first: 10) {
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

export default function App() {
    const { data, isLoading, error } = useQuery("launches", () => {
        return fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token":
                    "ef6b8555f42c3e164725723455c56c43",
            },
            body: JSON.stringify({ query: getAllProducts }),
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Error fetching data");
                } else {
                    return response.json();
                }
            })
            .then((data) => data.data);
    });

    if (isLoading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;

    return (
        <div>
            <p>wololo</p>
        </div>
    );
}
