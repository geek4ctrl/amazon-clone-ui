import { useContext } from 'react';
import './Header.css';

import { ProductsContext, ProductsDispatchContext } from '../../context/ProductsContext';
import { Link } from 'react-router-dom';



function Header(props) {

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();

        window.reload()
    }

    const totalItems = useContext(ProductsContext);
    const username = localStorage.getItem('username');

    return (

        props.token ?
            <div>
                <nav className="bg-blue border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900" style={{ backgroundColor: "#131921" }}>
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <Link to="/" className="flex items-center">
                            <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673171025/logo-amazon_gzbc3l.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" style={{ filter: "invert(1)" }} />

                            {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Amazon</span> */}
                        </Link>

                        <div className="mb-3" style={{ width: "50%" }}>
                            <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> </label>
                            <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product..." required />
                        </div>

                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-12 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                        </button>

                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{ backgroundColor: "#131921" }}>

                                <Link onClick={logout} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" style={{ color: "white" }}>Hello {username},
                                    <h2>Sign Out</h2>
                                </Link>

                                <Link to="/Login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: "white" }}>Returns & Orders
                                </Link>

                                <Link to="/Login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: "white" }}>Amazon Prime
                                </Link>

                                <span style={{ display: "flex", color: "white" }}>
                                    <Link to="/Cart" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: "white" }}>
                                        <span className="material-symbols-outlined">
                                            shopping_cart_checkout
                                        </span>
                                    </Link>
                                    {totalItems?.basket?.length}
                                </span>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            : <div>
                <nav className="bg-blue border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900" style={{ backgroundColor: "#131921" }}>
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <Link to="/" className="flex items-center">
                            <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673171025/logo-amazon_gzbc3l.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" style={{ filter: "invert(1)" }} />

                            {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Amazon</span> */}
                        </Link>

                        <div className="mb-3" style={{ width: "50%" }}>
                            <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> </label>
                            <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product..." required />
                        </div>

                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-12 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                        </button>

                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{ backgroundColor: "#131921" }}>

                                <Link to="/Login" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" style={{ color: "white" }}>Hello, sign in
                                </Link>

                                <Link to="/Login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: "white" }}>Returns & Orders
                                </Link>

                                <Link to="/Login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: "white" }}>Amazon Prime
                                </Link>

                                <span style={{ display: "flex", color: "white" }}>
                                    <Link to="/Cart" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ color: "white" }}>
                                        <span className="material-symbols-outlined">
                                            shopping_cart_checkout
                                        </span>
                                    </Link>
                                    {totalItems?.basket?.length}
                                </span>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

    )
}

export default Header;
