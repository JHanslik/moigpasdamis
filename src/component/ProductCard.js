import { useNavigate } from "react-router-dom"


const ProductCard = ({ productHandle, productTitle, productCost, productImage }) => {
  const Navigate = useNavigate()

  const handleClick = () => {
    Navigate(`/product/${productHandle}`)
  }

  return (
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-10 my-10 dark:bg-gray-800 dark:border-gray-700">
          <a onClick={handleClick}>
              <img class="p-8 h-[300px] object-cover" src={productImage} alt="product image" />
          </a>
          <div class="px-5 pb-5">
              <a onClick={handleClick}>
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productTitle}</h5>
              </a>
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">{productCost} €</span>
                  <button onClick={handleClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Afficher la page produit</button>
              </div>
          </div>
      </div>
  )
}

export default ProductCard
