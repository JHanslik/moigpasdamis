import { useQuery } from "@apollo/client"
import { GET_PRODUCT } from "../graphql/product/queries"
import { useParams } from "react-router-dom"
import { ADD_LINE_TO_CART } from "../graphql/cart/mutations"
import { useMutation } from "@apollo/client"
import { useContext } from "react"
import { CartContext } from "../contexts/cart"


const Product = () => {
  const params = useParams()

  const { loading: productLoading, error: productError, data: productData } = useQuery(GET_PRODUCT, {
    variables: { handle: params.handle },
  })
  const [AddToCart, { data, loading, error }] = useMutation(ADD_LINE_TO_CART)
  const { cartId, cartQuantities, setCartQuantities } = useContext(CartContext)


  const handleClick = (variantId) => {
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
            merchandiseId: variantId,
            quantity: 1, // a changer
          },
        ],
      },
    })
    const newCartQuantities = cartQuantities + 1 // a changer
    setCartQuantities(newCartQuantities)
    console.log(cartQuantities)
  }

  if (productLoading) {
    return <p>Loading...</p>
  }
  return (
    <>
      {productData.product.variants.edges.map((variant) => {
        console.log()
        return (
          <div key={variant.node.title}>
            {variant.node.title === "Default Title" ? (
              <p>{productData.product.title}</p>
            ) : (
              <p>{variant.node.title}</p>
            )}
          <button onClick={() => handleClick(variant.node.id)}>Add to cart</button>
          </div>
        )
      })}
    </>
  )}

export default Product
