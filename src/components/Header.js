import { useContext, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import CollectionsList from "./CollectionsList"

import { CartContext } from "../contexts/cart"

const Header = () => {
  const { cart, cartQuantities } = useContext(CartContext)

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-2border-b border-gray-200 dark:border-gray-600 min-h-[5vh]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Moijaipasdamis
          </span>
        </Link>
        <div className="flex md:order-2">
          <Link
            to="/login"
            className="ml-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Se connecter
          </Link>
        </div>
        <div className="flex">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="headerLinks flex flex-wrap -mb-px">
              <li className="mr-2">
                <NavLink
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Accueil
                </NavLink>
              </li>
              <li className="mr-2">
                <NavLink
                  to="/profile"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Profil
                </NavLink>
              </li>
              <li className="mr-2"></li>
            </ul>
          </div>
          <Link
            to="/cart"
            className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="sr-only">Notifications</span>
            Panier
            <div className="absolute inline-flex items-center justify-center w-8 h-8 text-l font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {cart?.totalQuantity}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
