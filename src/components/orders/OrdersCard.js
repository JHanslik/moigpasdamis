import { Link } from "react-router-dom"

const ordersCard = ({ name, totalPrice, orderUrl }) => {
  return (
    <Link
      to={orderUrl}
      target="blank"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {totalPrice.amount}
          {totalPrice.currencyCode}
        </p>
      </div>
    </Link>
  )
}

export default ordersCard
