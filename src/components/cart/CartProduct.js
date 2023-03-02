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
    <div className="flex justify-center items-center my-5">
      <input
        placeholder={quantity}
        type="number"
        onChange={handleChange}
        value={quantity}
        min={0}
      />
      <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
    </div>
  )
}

export default CartProduct
