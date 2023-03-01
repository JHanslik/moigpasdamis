import { GET_CUSTOMER_INFO } from "../graphql/customers/queries";
import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { CustomerContext } from "../contexts/customer";


const Profile = () => {

  const { customerAccessToken, setCustomerInfo, customerInfo } = useContext(CustomerContext)

  const { loading, error, data } = useQuery(GET_CUSTOMER_INFO, {
    variables: {customerAccessToken: customerAccessToken},
  });
  
  useEffect(() => {
    if(data){
      setCustomerInfo(data.customer)
    }
  }, [data])

  return (
    <div>Profile</div>
  )
}

export default Profile