import { useMutation } from "@apollo/client"
import { SIGNIN_CUSTOMER_CREDENTIALS } from "../graphql/customers/mutations"
import { useContext, useEffect } from "react"
import { CustomerContext } from "../contexts/customer"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const { setCustomerAccessToken, customerAccessToken } =
    useContext(CustomerContext)
  const [SignInWithEmailAndPassword, { data, loading, error, called }] =
    useMutation(SIGNIN_CUSTOMER_CREDENTIALS)

  useEffect(() => {
    if (data) {
      setCustomerAccessToken(
        data.customerAccessTokenCreate.customerAccessToken.accessToken
      )
    }
  }, [data])

  useEffect(() => {
    if (customerAccessToken.length > 0) {
      navigate("/profile")
    }
  }, [customerAccessToken])

  const handleClick = () => {
    SignInWithEmailAndPassword({
      variables: {
        email: "test3@gmail.com",
        password: "testtest",
      },
    })
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return <button onClick={handleClick}>submit</button>
}

export default Login
