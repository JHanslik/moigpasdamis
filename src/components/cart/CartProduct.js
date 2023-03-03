import { useState, useContext, useEffect } from "react"
import { useMutation } from "@apollo/client"

import { CartContext } from "../../contexts/cart"
import { UPDATE_LINES_CART } from "../../graphql/cart/mutations"

const CartProduct = ({ lineId, lineQuantity, image, title, price }) => {
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
    <div className="min-w-[900px] mt-8 flex py-8 justify-center items-center m-x-auto w-auto bg-white border border-gray-200 rounded-lg shadow mx-10 my-10 dark:bg-gray-800 dark:border-gray-700">
      <img
        className="px-8 h-[300px] object-cover"
        src={image}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price} €
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <input
            placeholder={quantity}
            className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="number"
            onChange={handleChange}
            value={quantity}
            min={0}
          />
          <button
            onClick={handleClick}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 "
          >
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
      </div>
    </div>
  )
}

export default CartProduct
