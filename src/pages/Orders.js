import { useQuery } from "@apollo/client"
import { GET_CUSTOMER_ORDERS } from "../graphql/order/queries"
import { useContext, useEffect, useState } from "react"
import { CustomerContext } from "../contexts/customer"

const Orders = () => {
  const { customerAccessToken } = useContext(CustomerContext)
  const [orders, setOrders] = useState([])

  const { loading, error, data } = useQuery(GET_CUSTOMER_ORDERS, {
    variables: { customerAccessToken },
  })

  useEffect(() => {
    if (data) {
      setOrders()
      console.log(data)
    }
  }, [data])

  return <div>Orders</div>
}

export default Orders
