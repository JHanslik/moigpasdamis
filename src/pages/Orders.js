import { useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import OrdersCard from "../components/orders/OrdersCard"
import { CustomerContext } from "../contexts/customer"
import { GET_CUSTOMER_ORDERS } from "../graphql/order/queries"

const Orders = () => {
  const navigate = useNavigate()
  const { customerAccessToken, customerInfo } = useContext(CustomerContext)
  const [orders, setOrders] = useState([])

  const { data, loading } = useQuery(GET_CUSTOMER_ORDERS, {
    variables: { customerAccessToken },
  })
  useEffect(() => {
    if (!customerInfo) {
      navigate("/login")
    }
  }, [customerInfo])
  useEffect(() => {
    if (data) {
      if (data.customer.orders) {
        setOrders(data.customer.orders.edges)
      }
    }
  }, [data])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col gap-4 m-x-auto">
      <h2 className="py-8 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Historique des commandes
      </h2>
      {orders.map((order) => {
        return (
          <OrdersCard
            key={order?.node.name}
            name={order?.node.name}
            totalPrice={order?.node.totalPrice}
            orderUrl={order?.node.customerUrl}
          />
        )
      })}
    </div>
  )
}

export default Orders
