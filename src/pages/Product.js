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
  console.log(productData.product.collections.nodes)
  return (
    <>
    {productData.product.variants.edges.length > 1 ? (<h1 class="text-lg text-center font-semibold tracking-tight mt-10 text-gray-900 dark:text-white">{productData.product.title}</h1>) : ('')}
    <div class="flex justify-center">
      {productData.product.variants.edges.map((variant) => {
        return (
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-10 my-10 dark:bg-gray-800 dark:border-gray-700" key={variant.node.title}>
          <a onClick={handleClick}>
              <img class="p-8 h-[300px] object-cover" src={variant.node.image.url} alt="product image" />
          </a>
          <div class="px-5 pb-5">
              <a onClick={handleClick}>
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{variant.node.title === "Default Title" ? (
                    <p>{productData.product.title}</p>
                    ) : (
                      <p>{variant.node.title}</p>
                      )}</h5>
              </a>
              <p class="text-sm py-5 tracking-tight text-gray-900 dark:text-white">{productData.product.description}</p>
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">{variant.node.price.amount} €</span>
                  <button onClick={() => handleClick(variant.node.id)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter au panier</button>
              </div>
          </div>
          </div>          
        )
      })}
      {/* {productData.product.collections.map((collection) => {
        return (
          <button>{collection.nodes.title}</button>
        )
      })} */}
    </div>
    </>
  )}

export default Product

