import { useMutation } from "@apollo/client"
import { useContext, useEffect } from "react"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"

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
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={formik.handleSubmit} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Tu veux des amis, connecte toi !
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Entrer votre email.."
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Entrer votre mot de passe"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Se connecter
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Pas inscrit ?{" "}
            <Link
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Créer un compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
