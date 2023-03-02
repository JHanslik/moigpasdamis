import { useMutation } from "@apollo/client"
import { useFormik } from "formik"

import { CREATE_CUSTOMER } from "../graphql/customers/mutations"

const SignUp = () => {
  const [createCustomer, { data, loading, error, called }] =
    useMutation(CREATE_CUSTOMER)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      createCustomer({
        variables: {
          input: {
            email: values.email,
            password: values.password,
          },
        },
      })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Entrez votre email.."
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Entrez votre mot de passe.."
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit">Valider</button>
    </form>
  )
}

export default SignUp
