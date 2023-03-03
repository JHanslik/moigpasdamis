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
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <button type="submit">Valider</button>
    </form>
  )
}

export default Profile
