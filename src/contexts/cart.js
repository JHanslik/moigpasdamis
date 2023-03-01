import { createContext, useState, useEffect } from "react"
import { useMutation } from "@apollo/client"

import { CREATE_CART } from "../graphql/cart/mutations"

const CartContext = createContext({})

const CartContextProvider = (props) => {
  const [CartCreate, { data, loading, error }] = useMutation(CREATE_CART)

  const [cartQuantities, setCartQuantities] = useState(0)
  const [cartId, setCartId] = useState("")

  useEffect(() => {
    if (
      localStorage.getItem("cartId") &&
      localStorage.getItem("cartId").length > 0
    ) {
      const localStorageCartId = localStorage.getItem("cartId")
      setCartId(localStorageCartId)
    } else {
     CartCreate()
    }
  }, [])

  useEffect(() => {
    if (data) {
      localStorage.setItem("cartId", data.cartCreate.cart.id)
      setCartId(data.cartCreate.cart.id)
    }
  }, [data])

  const value = {
    cartQuantities,
    setCartQuantities,
    cartId,
    setCartId,
  }

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export { CartContextProvider, CartContext }
