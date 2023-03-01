import { useContext, useEffect } from "react"
import { useMutation } from "@apollo/client"

import { ADD_LINE_TO_CART } from "../graphql/cart/mutations"
import { CartContext } from "../contexts/cart"

const ProductCard = () => {
  const [AddToCart, { data, loading, error }] = useMutation(ADD_LINE_TO_CART)
  const { cartId, cartQuantities, setCartQuantities } = useContext(CartContext)

  const handleClick = () => {
    AddToCart({
      variables: {
        cartId,
        lines: [
          {
            attributes: [
              {
                key: "key",
                value: "value",
              },
            ],
            merchandiseId: "gid://shopify/ProductVariant/39914245292377", // a changer
            quantity: 1, // a changer
          },
        ],
      },
    })
    const newCartQuantities = cartQuantities + 1 // a changer
    setCartQuantities(newCartQuantities)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div>ProductCard</div>
      <button onClick={handleClick}></button>
      {/* select button */}
    </>
  )
}

export default ProductCard
