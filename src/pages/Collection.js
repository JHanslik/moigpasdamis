import { useQuery } from "@apollo/client";
import { GET_COLLECTION } from "../graphql/collection/queries";
import {useParams} from 'react-router-dom'

const Collection = () => {

  const params = useParams()

    const { loading, error, data } = useQuery(GET_COLLECTION, {
      variables: {handle: params.handle},
    });
    
    
if(loading) {
  return(
    <p>Loading...</p>
    )
  }
  return (
    <p>Collection {data.collectionByHandle.products.edges[0].node.title}</p>
  )
}

export default Collection