import { useMutation } from "@apollo/client"
import { CREATE_CUSTOMER } from "../graphql/customers/mutations"

const SignUp = () => {
  const [createCustomer, { data, loading, error, called }] =
    useMutation(CREATE_CUSTOMER)

  const handleClick = () => {
    createCustomer({
      variables: {
        input: {
          email: "test2@gmail.com",
          password: "testtest",
        },
      },
    })
  }

  return <button onClick={handleClick}>submit</button>
}

export default SignUp
