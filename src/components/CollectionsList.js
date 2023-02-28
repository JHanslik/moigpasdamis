import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../graphql/collection/queries";
import {Link} from 'react-router-dom'

const CollectionsList = () => {

    const {data, loading, error} = useQuery(GET_COLLECTIONS);

if(loading) {
    return(
        <p>Loading...</p>
    )
}
console.log(data.collections)
  return (
    <>
        {data.collections.edges.map(collection => {
            return (
                <>
                <Link to={`collections/${collection.node.handle}`}>
                 <p>{collection.node.title}</p>
                </Link>
                </>
            )
        })}
        </>        
    );
}

export default CollectionsList