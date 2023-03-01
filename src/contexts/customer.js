import { createContext, useState, useEffect } from "react";

const CustomerContext = createContext({})

const CustomerContextProvider = (props) => {
    const [customerAccessToken, setCustomerAccessToken] = useState('')
    const [customerInfo, setCustomerInfo] = useState('')

    const value = {
        customerAccessToken,
        setCustomerAccessToken, 
        customerInfo, 
        setCustomerInfo
    }

    return (
        <CustomerContext.Provider value={value}>{props.children}</CustomerContext.Provider>
    )

}

export { CustomerContextProvider, CustomerContext }