import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import icon from '../images/icon.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header className="bg-white px-40">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between text-xs text-gray-700">
        <div className="flex space-x-4">
          <a href="#about" className="hover:text-sky-400">About Us</a>
          <a href="#account" className="hover:text-sky-400">My Account</a>
          <a href="#wishlist" className="hover:text-sky-400">Wishlist</a>
          <a href="#order-tracking" className="hover:text-sky-400">Order Tracking</a>
        </div>
        <div className="flex space-x-4">
          <p className="flex items-center space-x-1">
            <span>100% Secure Delivery</span>
            <span role="img" aria-label="secure">🔒</span>
          </p>
          <a href="tel:+0020500" >
            Need help? Call Us: 880-005-5555
          </a>
          <div className="flex items-center space-x-2">
            <select className="border-none bg-transparent hover:text-sky-400">
              <option>English</option>
            </select>
            <select className="border-none bg-transparent hover:text-sky-400">
              <option>INR</option>
            </select>
          </div>
        </div>
      </div>
      <hr />

      {/* Main header */}
      <div className="container mx-auto space-x-8 px-4 pt-8 pb-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Logo */}
        <div className=" items-center space-x-2">
          <img src={icon} alt="Logo" className="h-12 w-auto"/>
          <p className="text-xs -ml-14 text-gray-500">Online Grocery Shopping Center</p>
          
        </div>

        {/* Location */}
        <div className="relative w-44 p-2 ml-10 border border-gray-300 shadow-md hover:shadow-lg rounded-lg">
      {/* Label */}
      <div className="absolute top-0 left-3 mt-2 bg-white px-1 text-[10px] text-gray-400">
        Your Location
      </div>

      {/* Select dropdown */}
      <select className="w-full pt-4 px-2 text-blue-900 text-sm font-medium focus:outline-none bg-white border-none cursor-pointer appearance-none">
        <option >Select a Location</option>
        <option>New Delhi</option>
        <option>Chennai</option>
        <option>Kolkata</option>
        <option>Mumbai</option>
        <option>Pune</option>
      </select>
      
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      </div>

        {/* Search */}
        <div className="flex-1 mx-4 mt-4 lg:mt-0 ">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full  py-2 h-14 bg-gray-100 px-3 rounded-md"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <button className="p-2 rounded-md bg-gray-100">
            <span role="img" aria-label="user">👤</span>
          </button>
          <div className="relative">
            <button className="p-2 rounded-md bg-gray-100">
                <Link to="/Cart"><FontAwesomeIcon icon={faCartPlus} /></Link>
            </button>
          </div>
          {/* <p>$0.00</p> */}
        </div>
      </div>

      {/* Categories */}
      <nav className="bg-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Left side: Categories Selector */}
        <div className="flex items-center space-x-3 mr-40">
          {/* All Categories Button */}
          <button className="bg-sky-400 text-white px-4 py-2 rounded-full flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>ALL CATEGORIES
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {/* <span className="bg-gray-100 text-gray-500 px-2 py-1 text-xs rounded-full">TOTAL 63 PRODUCTS</span> */}
        </div>

        {/* Center: Main Navigation */}
        

          {/* <a href="#" className="text-gray-700 hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">
            { <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3a12 12 0 0112 12"></path>
            </svg> }
            FRUIT & VEGETABLES </a> */}

          <Link to="/" className="text-gray-700  hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">HOME</Link>
          <Link to="/Eggs" className="text-gray-700  hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">EGGS & MEAT</Link>
          <Link to="/Fruits" className="text-gray-700  hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">FRUIT & VEGETABLES</Link>
          <Link to="/Grocery" className="text-gray-700  hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">GROCERY</Link>
          <Link to="/Breakfast" className="text-gray-700  hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">BREAKFAST FOOD</Link>
          <Link to="/Household" className="text-gray-700  hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">HOUSEHOLD</Link>
          {/* <a href="#" className="text-gray-700  hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">BEAUTY</a> */}
          {/* <a href="#" className="text-gray-700 hover:text-sky-400 px-4 py-2 hover:rounded-full hover:bg-sky-100">CONTACT</a> */}
        </div>

    </nav>
    </header>
    <hr />
    </>
  );
};

export default Navbar;
