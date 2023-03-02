import { useQuery } from "@apollo/client"
import { GET_PRODUCTS } from "../graphql/products/queries"
import { Link } from "react-router-dom"

import ProductCard from "../components/ProductCard"

const Home = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS)

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {data.products.edges.map((product) => {
          // console.log(product.node.variants.edges[0].node.image.url)
          return (
            <div key={product.node.handle}>
              <ProductCard
                productHandle={product.node.handle}
                productTitle={product.node.title}
                productCost={product.node.priceRange.maxVariantPrice.amount}
                productImage={product.node.variants.edges[0].node.image.url}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
