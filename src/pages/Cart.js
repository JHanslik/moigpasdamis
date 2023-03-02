import { useContext, useEffect, useState } from "react"
import { useQuery, useMutation } from "@apollo/client"

import CartProduct from "../components/cart/CartProduct"

import { CREATE_CHECKOUT } from "../graphql/checkout/mutations"
import { GET_CART } from "../graphql/cart/querries"
import { CartContext } from "../contexts/cart"

const Cart = () => {
  const { cartId } = useContext(CartContext)
  const { loading, error, data } = useQuery(GET_CART, {
    variables: { cartId: cartId },
  })
  const [createCheckout ,{loading: checkoutLoading, error: checkoutError, data: checkoutData}] = useMutation(CREATE_CHECKOUT)

  useEffect(() => {
    if(checkoutData){
      window.location.replace(checkoutData.checkoutCreate.checkout.webUrl)
    }
  }, [checkoutData])

  const handleClick = () => {
    const lineItems = data?.cart?.lines.edges.map((cartProduct) => {
      console.log(cartProduct.node.merchandise.id)
      return {
        customAttributes: [
          {
            key: "key",
            value: "value",
          },
        ],
        quantity: cartProduct.node.quantity,
        variantId: cartProduct.node.merchandise.id,
      }
    })

    createCheckout({
      variables: {
        input: {
          allowPartialAddresses: true,
          buyerIdentity: {
            countryCode: "FR",
          },
          customAttributes: [
            {
              key: "key",
              value: "value",
            },
          ],
          email: "test@gmail.com",
          lineItems,
          note: "",
          shippingAddress: {
            address1: "",
            city: "Paris",
            country: "France",
            firstName: "",
            lastName: "",
            phone: "",
            zip: "",  
          },
        },
      },
    })
  }

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      {data.cart?.lines.edges.length > 0 ? (
        data.cart.lines.edges.map((cartProduct) => {
          return (
            <CartProduct
              key={cartProduct.node.id}
              lineQuantity={cartProduct.node.quantity}
              lineId={cartProduct.node.id}
            />
          )
        })
      ) : (
        <p>Your cart is empty</p>
      )}
      <button onClick={handleClick}>Validate your Cart</button>
    </>
  )
}

export default Cart
