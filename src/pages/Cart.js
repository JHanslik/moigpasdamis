import { useContext, useEffect } from "react"

import { useQuery } from "@apollo/client"
import { useMutation } from "@apollo/client"

import { GET_CART } from "../graphql/cart/querries"
import { UPDATE_LINES_CART } from '../graphql/cart/mutations'
import { CartContext } from "../contexts/cart"

const Cart = () => {

  // const [UpdateCart, { data, loading, error }] = useMutation(UPDATE_LINES_CART)
  const { cartId } = useContext(CartContext)
  
  const { loading, error, data } = useQuery(GET_CART, {
    variables: {cartId: cartId},
  });

  
  //   const handleClick = () => {
    //     UpdateCart({
      //       variables: {
        //           cartId,
        //           lines: [
          //             {
            //               attributes: [
              //                 {
                //                   key: "1",
                //                   value: "UN"
                //                 }
                //               ],
                //               id: "gid://shopify/CartLine/0c3cdd01-a205-4ee4-aa1d-bf191a79c8a5?cart=c1-518954cbbc3dd5e082815c516dc05b10",
                //               quantity: 3
                //             }
                //           ]
                //       }
                //   })
                // }
                
if (loading) {
  return <p>Loading...</p>
}
console.log(data)
return (
    <>
      <div>Cart</div>
      {/* <button onClick={handleClick}>Cart</button> */}
    </>
  )
}


export default Cart
