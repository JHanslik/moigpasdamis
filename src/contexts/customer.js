import { createContext, useState, useEffect } from "react"
import { useQuery } from "@apollo/client"

import { GET_CUSTOMER_INFO } from "../graphql/customers/queries"

const CustomerContext = createContext({})

const CustomerContextProvider = (props) => {
  const [customerAccessToken, setCustomerAccessToken] = useState("")
  const [customerInfo, setCustomerInfo] = useState(null)
  const { loading, error, data } = useQuery(GET_CUSTOMER_INFO, {
    variables: { customerAccessToken },
    skip: !customerAccessToken,
  })
  useEffect(() => {
    if (
      localStorage.getItem("customerAccessToken") &&
      localStorage.getItem("customerAccessToken").length > 0
    ) {
      const localStorageCustomerAccessToken = localStorage.getItem(
        "customerAccessToken"
      )
      setCustomerAccessToken(localStorageCustomerAccessToken)
    }
  }, [])

  useEffect(() => {
    if (data) {
      setCustomerInfo(data.customer)
      localStorage.setItem("customerAccessToken", customerAccessToken)
    }
  }, [data])

  const value = {
    customerAccessToken,
    setCustomerAccessToken,
    customerInfo,
    setCustomerInfo,
  }

  return (
    <CustomerContext.Provider value={value}>
      {props.children}
    </CustomerContext.Provider>
  )
}

export { CustomerContextProvider, CustomerContext }
