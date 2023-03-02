import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CustomerContext } from "../contexts/customer"

const Profile = () => {
  const navigate = useNavigate()
  const { customerInfo } = useContext(CustomerContext)
  useEffect(() => {
    if (!customerInfo) {
      navigate("/")
    }
  }, [customerInfo])
  console.log(customerInfo)
  return <div>Profile</div>
}

export default Profile
