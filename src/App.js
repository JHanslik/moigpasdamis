import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import client from "./graphql/client";

import Home from "./pages/Home.js";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp.js";
import Collection from "./pages/Collection";

const App = () => {
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:handle" element={<Product/>}/>
                <Route path="/collections/:handle" element={<Collection/>}/>
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
