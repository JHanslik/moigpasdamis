import { useQuery } from "@apollo/client"
import { GET_COLLECTIONS } from "../graphql/collection/queries"
import { Link } from "react-router-dom"
import { Menu } from '@headlessui/react'

const CollectionsList = () => {
  const { data, loading, error } = useQuery(GET_COLLECTIONS)


  if (loading) {
    return <p>Loading...</p>
  }
// console.log(data)
  return (
    <>
      <Menu>
      <Menu.Button class="py-4 px-5 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Collections</Menu.Button>
      <Menu.Items class="relative flex justify-center gap-10">
      <div className="bg-white flex absolute gap-4 dark:bg-gray-900 bottom-[-48px] rounded-b-md px-5">
      {data.collections.edges.map((collection) => {
        return(
        <Menu.Item>
          {({ active }) => (
            <div key={collection.node.title}>
            <Link to={`collections/${collection.node.handle}`} className="flex flex-column">
              <p className="py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">{collection.node.title}</p>
            </Link>
          </div>
          )}
        </Menu.Item>
        )
      })}
      </div>
      </Menu.Items>
    </Menu>
      </>
  )
}

export default CollectionsList
