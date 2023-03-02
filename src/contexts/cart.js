import { createContext, useState, useEffect, useContext } from "react"
import { useMutation, useQuery } from "@apollo/client"

import { CustomerContext } from "./customer"
import { CREATE_CART, UPDATE_BUYER_IDENTITY } from "../graphql/cart/mutations"
import { GET_CART } from "../graphql/cart/queries"

const CartContext = createContext({})

const CartContextProvider = (props) => {
  const [cartQuantities, setCartQuantities] = useState(0)
  const [cartId, setCartId] = useState("")
  const [cart, setCart] = useState(null)

  const { customerInfo, customerAccessToken } = useContext(CustomerContext)

  const [CartCreate, { data, loading, error }] = useMutation(CREATE_CART)
  const [
    cartBuyerIdentityUpdate,
    {
      data: cartBuyerIdentityUpdateData,
      loading: cartBuyerIdentityUpdateLoading,
      error: cartBuyerIdentityUpdateError,
    },
  ] = useMutation(UPDATE_BUYER_IDENTITY)

  const {
    loading: getCartLoading,
    error: getCartError,
    data: getCartData,
  } = useQuery(GET_CART, {
    variables: { cartId },
    skip: !cartId,
  })

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
    if (getCartData) {
      if (getCartData.cart) {
        setCart(getCartData.cart)
      } else {
        CartCreate()
      }
    }
  }, [getCartData])

  useEffect(() => {
    if (data) {
      localStorage.setItem("cartId", data.cartCreate.cart.id)
      setCartId(data.cartCreate.cart.id)
    }
  }, [data])

  useEffect(() => {
    if (customerInfo && customerAccessToken && cart) {
      cartBuyerIdentityUpdate({
        variables: {
          buyerIdentity: {
            customerAccessToken,
          },
          cartId: cart.id,
        },
      })
    }
  }, [customerInfo, customerAccessToken, cart])

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
