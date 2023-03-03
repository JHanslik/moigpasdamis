import { useQuery } from "@apollo/client"
import { GET_PRODUCT } from "../graphql/product/queries"
import { useParams } from "react-router-dom"
import { ADD_LINE_TO_CART } from "../graphql/cart/mutations"
import { useMutation } from "@apollo/client"
import { useContext } from "react"
import { CartContext } from "../contexts/cart"

const Product = () => {
  const params = useParams()

  const {
    loading: productLoading,
    error: productError,
    data: productData,
  } = useQuery(GET_PRODUCT, {
    variables: { handle: params.handle },
  })
  const [AddToCart, { data, loading, error }] = useMutation(ADD_LINE_TO_CART)
  const { cartId } = useContext(CartContext)

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
            quantity: 1,
          },
        ],
      },
    })
  }

  if (productLoading) {
    return <p>Loading...</p>
  }
  return (
    <>
      {productData.product.variants.edges.length > 1 ? (
        <h1 className="pt-8 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {productData.product.title}
        </h1>
      ) : (
        ""
      )}
      <div className="flex justify-center pt-8">
        <p className="text-sm dark:text-gray-800">
          Votre achat se trouve dans la collection{" "}
          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-100 border border-blue-100">
            {productData.product.collections.nodes[0].handle}
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        {productData.product.variants.edges.map((variant) => {
          return (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-10 my-10 dark:bg-gray-800 dark:border-gray-700"
              key={variant.node.title}
            >
              <img
                className="p-8 h-[300px] object-cover"
                src={variant.node.image.url}
                alt="product image"
              />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {variant.node.title === "Default Title" ? (
                    <p>{productData.product.title}</p>
                  ) : (
                    <p>{variant.node.title}</p>
                  )}
                </h5>
                <p className="text-sm py-5 tracking-tight text-gray-900 dark:text-white">
                  {productData.product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {variant.node.price.amount} €
                  </span>
                  <button
                    onClick={() => handleClick(variant.node.id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        {/* {productData.product.collections.map((collection) => {
        return (
          <button>{collection.nodes.handle}</button>
          )
        })} */}
      </div>
    </>
  )
}

export default Product
