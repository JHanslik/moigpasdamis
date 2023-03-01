import client from "./graphql/client"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CustomerContextProvider } from "./contexts/customer"
import { CartContextProvider } from "./contexts/cart"

import Home from "./pages/Home.js"
import Product from "./pages/Product"
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import Collection from "./pages/Collection"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CustomerContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:handle" element={<Product />} />
              <Route path="/collections/:handle" element={<Collection />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </CustomerContextProvider>
    </ApolloProvider>
  )
}

export default App
