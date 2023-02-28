import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
      <SignUp />
    </ApolloProvider>
  );
};

export default App;
