import { useNavigate } from "react-router-dom"


const ProductCard = ({ productHandle, productTitle }) => {
  const Navigate = useNavigate()

  const handleClick = () => {
    Navigate(`/product/${productHandle}`)
  }

  return (
    <>
      <button onClick={handleClick}>see more</button>
    </>
  )
}

export default ProductCard
