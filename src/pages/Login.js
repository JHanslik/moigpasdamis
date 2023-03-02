import { useMutation } from "@apollo/client"
import { useContext, useEffect } from "react"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

import { SIGNIN_CUSTOMER_CREDENTIALS } from "../graphql/customers/mutations"
import { CustomerContext } from "../contexts/customer"

const Login = () => {
  const navigate = useNavigate()
  const { setCustomerAccessToken, customerInfo } = useContext(CustomerContext)
  const [SignInWithEmailAndPassword, { data, loading, error, called }] =
    useMutation(SIGNIN_CUSTOMER_CREDENTIALS)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      SignInWithEmailAndPassword({
        variables: {
          email: values.email,
          password: values.password,
        },
      })
    },
  })

  useEffect(() => {
    if (data) {
      setCustomerAccessToken(
        data.customerAccessTokenCreate.customerAccessToken.accessToken
      )
    }
  }, [data])

  useEffect(() => {
    if (customerInfo) {
      navigate("/profile")
    }
  }, [customerInfo])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Entrer votre email.."
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Entrer votre mot de passe"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit">Se connecter</button>
    </form>
  )
}

export default Login
