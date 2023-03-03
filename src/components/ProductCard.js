import { Link } from "react-router-dom"

const ProductCard = ({
  productHandle,
  productTitle,
  productCost,
  productImage,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-10 my-10 dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 h-[300px] object-cover"
        src={productImage}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {productTitle}
        </h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {productCost} €
          </span>
          <Link
            to={`/product/${productHandle}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Afficher la page produit
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
