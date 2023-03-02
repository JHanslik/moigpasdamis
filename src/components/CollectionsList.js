import { useQuery } from "@apollo/client"
import { GET_COLLECTIONS } from "../graphql/collection/queries"
import { Link } from "react-router-dom"

const CollectionsList = () => {
  const { data, loading, error } = useQuery(GET_COLLECTIONS)

  if (loading) {
    return <p>Loading...</p>
  }
console.log(data)
  return (
    <>
      {data.collections.edges.map((collection) => {
        return (
          <div key={collection.node.title}>
            <Link to={`collections/${collection.node.handle}`}>
              <p class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Collections</p>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default CollectionsList
