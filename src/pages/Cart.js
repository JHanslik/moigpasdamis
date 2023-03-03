import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import CartProduct from "../components/cart/CartProduct"

import { CartContext } from "../contexts/cart"
import { CustomerContext } from "../contexts/customer"

const Cart = () => {
  const navigate = useNavigate()
  const { customerInfo } = useContext(CustomerContext)
  const { cart } = useContext(CartContext)

  const handleClick = async () => {
    if (!customerInfo) {
      navigate("/login")
    } else {
      window.location.replace(cart.checkoutUrl)
    }
  }

  if (!cart) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col items-center">
      {cart?.lines.edges.length > 0 ? (
        cart.lines.edges.map((cartProduct) => {
          return (
            <CartProduct
              key={cartProduct.node.id}
              lineQuantity={cartProduct.node.quantity}
              lineId={cartProduct.node.id}
              price={cartProduct.node.merchandise.price.amount}
              title={
                cartProduct.node.merchandise.title !== "Default Title"
                  ? cartProduct.node.merchandise.title
                  : cartProduct.node.merchandise.product.title
              }
              image={cartProduct.node.merchandise.image.url}
            />
          )
        })
      ) : (
        <p>Your cart is empty</p>
      )}
      <button
        onClick={handleClick}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-2xl px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 "
      >
        Validate your Cart
      </button>
    </div>
  )
}

export default Cart
