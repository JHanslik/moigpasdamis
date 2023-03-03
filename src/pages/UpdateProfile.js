import { useContext, useEffect } from "react"
import { useMutation } from "@apollo/client"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

import { CustomerContext } from "../contexts/customer"
import { UPDATE_CUSTOMER_INFO } from "../graphql/customers/mutations"

const Profile = () => {
  const navigate = useNavigate()
  const { customerInfo, customerAccessToken, setCustomerInfo } =
    useContext(CustomerContext)
  const [updateCustomerInfo, { data, loading, error, called }] =
    useMutation(UPDATE_CUSTOMER_INFO)
  const formik = useFormik({
    initialValues: {
      email: customerInfo?.email,
      firstName: customerInfo?.firstName,
      lastName: customerInfo?.lastName,
      phone: customerInfo?.phone,
    },
    onSubmit: (values) => {
      updateCustomerInfo({
        variables: {
          customerAccessToken,
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
        },
      })
      alert("Votre profil est bien mis à jour !")
    },
  })

  useEffect(() => {
    if (!customerInfo) {
      navigate("/login")
    }
  }, [customerInfo])

  useEffect(() => {
    if (data) {
      setCustomerInfo(data.customerUpdate.customer)
    }
  }, [data])
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl pb-4 text-center font-semibold tracking-tight mt-10 text-gray-900 dark:text-white">
        Mettre à jour votre profil
      </h1>
      <form
        className="bg-gray-800 w-full max-w-3xl mx-4 my-4 py-4 px-4 rounded"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre email
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre prénom
          </label>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre nom
          </label>
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre téléphone
          </label>
          <input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Valider
        </button>
      </form>
    </div>
  )
}

export default Profile
