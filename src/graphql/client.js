import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "https://moigpasdamis.myshopify.com/api/2023-01/graphql.json",
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem("token");
    const token = "ef6b8555f42c3e164725723455c56c43";
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            "X-Shopify-Storefront-Access-Token": token,
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
