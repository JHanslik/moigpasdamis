import { useQuery } from "@apollo/client"
import { GET_COLLECTION } from "../graphql/collection/queries"
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Collection = () => {
  const params = useParams()

  const { loading, error, data } = useQuery(GET_COLLECTION, {
    variables: { handle: params.handle },
  })

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <h1 className="py-8 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Collection {data.collectionByHandle.title}
      </h1>
      <p className="text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {data.collectionByHandle.description} !
      </p>
      <div className="flex justify-center">
        {data.collectionByHandle.products.edges.map((product) => {
          return (
            <ProductCard
              key={product.node.handle}
              productHandle={product.node.handle}
              productTitle={product.node.title}
              productCost={product.node.priceRange.maxVariantPrice.amount}
              productImage={product.node.variants.edges[0].node.image.url}
            />
          )
        })}
      </div>
    </>
  )
}

export default Collection
