import { useState, useContext, useEffect } from "react"
import { useMutation } from "@apollo/client"

import { CartContext } from "../../contexts/cart"
import { UPDATE_LINES_CART } from "../../graphql/cart/mutations"

const CartProduct = ({ lineId, lineQuantity }) => {
  const { cartId } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)
  const [UpdateCart, { data, loading, error }] = useMutation(UPDATE_LINES_CART)

  useEffect(() => {
    setQuantity(lineQuantity)
  }, [])

  const handleClick = () => {
    UpdateCart({
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
            id: lineId,
            quantity: quantity,
          },
        ],
      },
    })
  }
  const handleChange = (e) => {
    setQuantity(Number(e.target.value))
  }
  return (
    <>
      <button onClick={handleClick}>Cart</button>
      <input
        placeholder={quantity}
        type="number"
        onChange={handleChange}
        value={quantity}
        min={0}
      />
    </>
  )
}

export default CartProduct
