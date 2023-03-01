import { useQuery } from "@apollo/client"
import { GET_PRODUCT } from "../graphql/product/queries"
import { useParams } from "react-router-dom"

const Product = () => {
  const params = useParams()

  const QueryProduct = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT, {
      variables: { handle: params.handle },
    })
    console.log(data)
  }

  QueryProduct()

  return <div>Product</div>
}

export default Product
