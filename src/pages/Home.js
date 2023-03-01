import { useQuery } from "@apollo/client"
import { GET_PRODUCTS } from "../graphql/products/queries"
import { Link } from "react-router-dom"
import CollectionsList from "../components/CollectionsList"

import ProductCard from "../components/ProductCard"

const Home = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS)

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <CollectionsList />
      {data.products.edges.map((product) => {
        return (
          <div key={product.node.handle}>
            <ProductCard />
            <Link to={`product/${product.node.handle}`}>
              <p>{product.node.title}</p>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Home
