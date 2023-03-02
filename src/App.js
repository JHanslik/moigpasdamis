import client from "./graphql/client"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import { CustomerContextProvider } from "./contexts/customer"
import { CartContextProvider } from "./contexts/cart"

import Home from "./pages/Home.js"
import Product from "./pages/Product"
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import Collection from "./pages/Collection"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"

import Header from "./components/Header"
import MainContainer from "./components/MainContainer"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CustomerContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Header />
            <MainContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:handle" element={<Product />} />
                <Route path="/collections/:handle" element={<Collection />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </MainContainer>
          </BrowserRouter>
        </CartContextProvider>
      </CustomerContextProvider>
    </ApolloProvider>
  )
}

export default App
