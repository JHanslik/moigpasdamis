import { useContext, useEffect } from "react"
import { useMutation } from "@apollo/client"
import { useFormik } from "formik"
import { useNavigate, Link } from "react-router-dom"

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
  console.log(customerInfo?.firstName)
  return (
    <div className="flex flex-col items-center"> 
      <div class=" mt-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-10">
          <div class="flex flex-col items-center pb-10">
              <h5 class="mt-4  mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</h5>
              {!customerInfo?.email ? ('Non renseigné') : (<span class="text-sm text-gray-500 dark:text-gray-400">{customerInfo?.email}</span>)}
              <h5 class="mt-4  mb-2 text-xl font-medium text-gray-900 dark:text-white">Prénom</h5>
              {!customerInfo?.firstName ? (<span class="text-sm text-gray-500 dark:text-gray-400">Non renseigné</span>) : ( <span class="text-sm text-gray-500 dark:text-gray-400">{customerInfo?.firstName}</span>)}
              <h5 class="mt-4  mb-2 text-xl font-medium text-gray-900 dark:text-white">Nom</h5>
              {!customerInfo?.lastName ? (<span class="text-sm text-gray-500 dark:text-gray-400">Non renseigné</span>) : ( <span class="text-sm text-gray-500 dark:text-gray-400">{customerInfo.lastName}</span>)}
              <h5 class="mt-4  mb-2 text-xl font-medium text-gray-900 dark:text-white">Téléphone</h5>
              {!customerInfo?.phone ? (<span class="text-sm text-gray-500 dark:text-gray-400">Non renseigné</span>) : ( <span class="text-sm text-gray-500 dark:text-gray-400">{customerInfo.phone}</span>)}
              <div className="flex pt-10 gap-4">
                <Link to="/update" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Mettre à jour</Link>
                <Link to="/orders" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Historique</Link>
              </div>
              
          </div>
      </div>
    </div>
    
  )
}

export default Profile
