import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/products/queries";

const Home = () => {
    const result = useQuery(GET_PRODUCTS);
    console.log(result);

    return <div>Home</div>;
};

export default Home;
