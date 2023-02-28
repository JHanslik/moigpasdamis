import { useMutation } from "@apollo/client";
import { CREATE_CUSTOMER } from "../graphql/customers/mutations";

const SignUp = () => {
  const [createCustomer, { data, loading, error, called }] =
    useMutation(CREATE_CUSTOMER);

  console.log(called);

  const handleClick = () => {
    createCustomer({
      variables: {
        input: {
          email: "benoit.paquier@konexio.eu",
          password: "konexio",
        },
      },
    });
  };

  return <button onClick={handleClick}>submit</button>;
};

export default SignUp;
