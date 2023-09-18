import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import Select from 'react-select'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  const cartItemNumber = useSelector((state)=>state.product.cartItem)


  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50">
      {/* desktop */}


      <div className="flex items-center h-full justify-between">
      <div className="ml-20">
  <Link to={""}>
    <div className="h-14">
      <img src={logo} className="h-full" alt="Logo" />
    </div>
  </Link>
  </div>


  {/* Add a div to occupy space */}
  <div className="flex-grow mx-6 md:mx-8 ml-15">
    {/* Add your search bar component here */}
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-10 py-1.5 rounded-md border border-gray-300 focus:ring focus:ring-blue-400"
    />
  </div>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
           
           
            <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New product
                  </Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.image ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){" "}
                  </p>
                  
                ) : (
                  <Link
                    to={"login"}
                    data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"menu/63f0fdbb3bcc2f97fa53d25d"}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      
{/* <!-- Modal toggle --> */}


{/* <!-- Main modal --> */}
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 


      {/* mobile */}
    </header>
  );
};

export default Header;
