import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@apollo/client"

import { ADD_LINE_TO_CART } from "../graphql/cart/mutations"
import { CartContext } from "../contexts/cart"

const ProductCard = ({ productHandle, productTitle }) => {
  const Navigate = useNavigate()
  const [AddToCart, { data, loading, error }] = useMutation(ADD_LINE_TO_CART)
  const { cartId, cartQuantities, setCartQuantities } = useContext(CartContext)

  const handleClick = () => {
    // AddToCart({
    //   variables: {
    //     cartId,
    //     lines: [
    //       {
    //         attributes: [
    //           {
    //             key: "key",
    //             value: "value",
    //           },
    //         ],
    //         merchandiseId: productId,
    //         quantity: 1, // a changer
    //       },
    //     ],
    //   },
    // })
    // const newCartQuantities = cartQuantities + 1 // a changer
    // setCartQuantities(newCartQuantities)
    Navigate(`/product/${productHandle}`)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <button onClick={handleClick}>see more</button>
    </>
  )
}

export default ProductCard
