import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFast , faPercent, faIndianRupeeSign, faSeedling, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import news from '../images/news.jpg'
import foot from "../images/foot.png"
import Newsletter from './Newsletter';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className=' bg-blue-800 h-80 items-center justify-center mt-20 gap-x-36 w-full flex font-display'>
        <div>
            <Newsletter/>
        </div>
        <img src={news} alt="news" className='' />
    </div>
    <footer className="mx-32 font-display text-gray-800">
      {/* Top Icons Section */}
      <div className="flex justify-around py-10 border-gray-300">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faSeedling} />
          <p>Everyday fresh products</p>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faTruckFast} />
          <p>Free delivery for order over $70</p>
        </div>
        <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faPercent} />
          <p>Daily Mega Discounts</p>
        </div>
        <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faIndianRupeeSign} />
          <p>Best price on the market</p>
        </div>
      </div>
      <hr />

      {/* Categories Section */}
      <div className="grid grid-cols-5 gap-6 py-10 px-12">
        <div>
          <Link to='/fruits'><h3 className="font-semibold text-gray-700 text-[15px] font-dosis">FRUITS & VEGETABLES</h3></Link>
          <ul className="space-y-1 mt-2 text-sm text-gray-600">
            <li>Fresh Vegetables</li>
            <li>Herbs & Seasonings</li>
            <li>Fresh Fruits</li>
            <li>Cuts & Sprouts</li>
            <li>Exotic Fruits & Veggies</li>
          </ul>
        </div>
        <div>
          <Link to="/Breakfast"><h3 className="font-semibold text-gray-700 text-[15px] font-dosis">BREAKFAST & DAIRY</h3></Link>
          <ul className="space-y-1 mt-2 text-sm text-gray-600">
            <li>Honey, jams & spreads</li>
            <li>Corn flakes & Muesli</li>
            <li>Oatse</li>
            <li>Drink mixes</li>
            <li>Honey</li>
            <li>Yogurt</li>
          </ul>
        </div>
        
        <div>
        <Link to="/Grocery"><h3 className="font-semibold text-gray-700 text-[15px] font-dosis">GROCERY & STAPLES</h3></Link>
          <ul className="space-y-1 mt-2 text-sm text-gray-600">
            <li>Dals</li>
            <li>Attas & Flours</li>
            <li>Oil</li>
            <li>Whole Grains</li>
            <li>Cooking pastes & sauces</li>
            <li>Ghee</li>
            <li>Powdered Masalas</li>
          </ul>
        </div>
        <div>
          <Link to="/Eggs"><h3 className="font-semibold text-gray-700 text-[15px] font-dosis">MEAT & SEAFOOD</h3></Link>
          <ul className="space-y-1 mt-2 text-sm text-gray-600">
            <li>Eggs</li>
            <li>Chicken Sausage</li>
            <li>Chicken</li>
            <li>Frozen Meat</li>
            <li>Fish & Seafood</li>
          </ul>
        </div>
        <div>
        <Link to="/Household"><h3 className="font-semibold text-gray-700 text-[15px] font-dosis">HOUSEHOLD NEEDS</h3></Link>
          <ul className="space-y-1 mt-2 text-sm text-gray-600">
            <li>Household cleaners</li>
            <li>Paper towels & tissues</li>
            <li>Air fresheners</li>
            <li>Household Supplies</li>
            <li>Dishwashing supplies</li>
            <li>Laundry detergents</li>
          </ul>
        </div>
      </div>

      {/* Contact and Social Media Section */}
      <div className=" py-6 px-12 border-t border-gray-300">
        <div className="flex justify-between items-center">
          <div className="space-x-2 space-y-[-4px] flex">
          <FontAwesomeIcon icon={faPhoneVolume} />
            <p className="text-lg font-semibold">880-005-5555</p>
          </div>
          <div className="flex items-center space-x-4">
            <p>Download App on Mobile:</p>
            <img src={foot} alt="Google Play" className="h-12" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-slate-500">
          <p>Copyright 2024 © Bacola WordPress Theme. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
