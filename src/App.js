import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import client from "./graphql/client";
import { CustomerContextProvider } from "./contexts/customer";

import Home from "./pages/Home.js";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CustomerContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:handle" element={<Product/>}/>
                <Route path="/collections/:handle" element={<Collection/>}/>
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
      </CustomerContextProvider>
    </ApolloProvider>
  );
};

export default App;
