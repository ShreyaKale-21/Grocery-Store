import React from "react";
import { Link } from 'react-router-dom';
import hero from "../images/hero.png";
import side1 from "../images/side1.png";
import side2 from "../images/side2.jpg";
import Product from "./Product";

import trend1 from "../images/a1.jpg"
import trend2 from "../images/o4.jpg"
import trend3 from "../images/e4.jpg"
import trend4 from "../images/e2.jpg"
import trend5 from "../images/o1.jpg"
import b1 from "../images/bestSeller1.png"
import b2 from "../images/bestSeller2.png"
import b3 from "../images/bestSeller3.png"
import b4 from "../images/bestSeller4.png"
import customer from "../images/customer3.jpg"
import safety from "../images/safety.png";
import hot from "../images/hotProduct.jpg";
import new1 from "../images/new1.jpg";
import new2 from "../images/new2.jpg";
import new3 from "../images/new3.jpg";
import new4 from "../images/new4.png";
import new5 from "../images/new5.jpg";
import new6 from "../images/new6.jpg";
import new7 from "../images/new7.jpg";
import new8 from "../images/new8.jpg";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";
import c8 from "../images/c8.jpg";

const Sidebar = () => {

    const infoItems = [
        { icon: ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l3.5-3.5m-7 0L12 15m9 0v6H3v-6a9 9 0 0118 0z"></path></svg>
                ),
                text: 'Download the Bacola App to your Phone.',
        },
        {icon: ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8M5 3h14l-1 8H6l-1-8z"></path></svg>
                ),
                text: 'Order now so you dont miss the opportunities.',
        },
        {icon: ( <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 6v6m-4-3l8-8M6 10l8 8"></path></svg>
                ),
                text: 'Your order will arrive at your door in 15 minutes.',
        },
      ];

      const products = [
        {name: 'Multigrains Atta',
          originalPrice: '₹369',
          salePrice: '₹303',
          imageUrl: trend1, },
        {name: 'Gowardhan Ghee',
          originalPrice: '₹385',
          salePrice: '₹359',
          imageUrl: trend2, },
        {name: 'Fresh Avocado',
          originalPrice: '₹283',
          salePrice: '₹159',
          imageUrl: trend3, },
        {name: 'Fresh Dragon Fruit',
          originalPrice: '₹95.00',
          salePrice: '₹77.00',
          imageUrl: trend4, },
        {name: 'Fortune Sunflower Oil',
          originalPrice: '₹145',
          salePrice: '₹132',
          imageUrl: trend5, },
      ];

      const categories = [
        { name: 'Fruits & Vegetables', items: 11, imageUrl: c1 },
        { name: 'Rice, Atta & Dal', items: 6, imageUrl: c2 },
        { name: 'Oil, Masala & Sauces', items: 6, imageUrl: c3 },
        { name: 'Breakfast & Dairy', items: 8, imageUrl: c4 },
        { name: 'Instant & Frozen Foods', items: 7, imageUrl: c5 },
        { name: 'Beverages', items: 7, imageUrl: c6 },
        { name: 'Household Needs', items: 1, imageUrl: c7 },
        { name: 'Eggs, Meats & Fish', items: 5, imageUrl: c8 },
      ];

  return (
    <>
    <div className="flex font-display">
    {/* sidebar */}
    <div className=" ml-40 flex">
        {/* vertical line */}
        <div className="w-px h-[410px] mr-3 bg-gray-300 "></div>  

        {/* icons */}
        <div className="pt-5 text-sm text-gray-500 w-64">
            <ul className="space-y-6 pl-3">
                <li className="flex items-center space-x-2">
                    <Link to="/Fruits" className="flex items-center space-x-2">
                        <span role="img" aria-label="icon">🍎</span>
                        <span>Fruits & Vegetables</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <Link to="/Grocery" className="flex items-center space-x-2">
                    <span role="img" aria-label="icon">🌿</span>
                    <span>Grocery & Staples</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <Link to="/Breakfast" className="flex items-center space-x-2">
                    <span role="img" aria-label="icon">🥛</span>
                    <span>Breakfast & Dairy</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <Link to="/Breakfast" className="flex items-center space-x-2">
                    <span role="img" aria-label="icon">❄️</span>
                    <span>Instant & Frozen Foods</span>
                    </Link>
                </li>
                {/* <li className="flex items-center space-x-2">
                <Link to="/grocery-staples" className="flex items-center space-x-2">
                    <span role="img" aria-label="icon">☕</span>
                    <span>Beverages</span>
                    </Link>
                </li> */}
                <li className="font-display flex items-center space-x-2">
                <Link to="/Household" className="flex items-center space-x-2">
                    <span role="img" aria-label="icon">🍞</span>
                    <span>Household Needs</span>
                    </Link>
                </li>
                {/* <li className="flex items-center space-x-2">
                <Link to="/grocery-staples" className="flex items-center space-x-2">
                    <span role="img" aria-label="icon">🍪🧴</span>
                    <span>Beauty</span>
                    </Link>
                </li> */}
                <li className="flex items-center space-x-2">
                <Link to="/Eggs" className="flex items-center space-x-2">
                    <span role="img" aria-label="icon">🍤</span>
                    <span>Meats & Seafood</span>
                    </Link>
                </li>
            </ul>

            <div className="pt-3 ml-[-13px] pr-2 mx-[-8px]">
                <hr />
            </div>

            <div className="my-4 pl-5 space-y-4 text-gray-600">
                <p>Value of the Day</p>
                <p>Top 100 Offers</p>
                <p>New Arrivals</p>
            </div>

            <div className="pt-3 ml-[-13px] pr-2 mx-[-8px]">
                <hr />
            </div>

            </div>
            <div className="w-[0.5px]  h-[410px] mr-3 bg-gray-300 "></div>
        </div>

        <div className="m-6">
            <img src={hero} alt="" className="h-[450px] w-[875px] border-hidden rounded-md" />
        </div>
        </div>

        {/* Second section */}
        <div className="flex mt-2 ml-40 ">

            {/* Left section */}
            <div className="w-[270px] space-y-9 mt-[-40px]">
                {/* Image 1, 2 */}
                <img src={side1} alt="" className="border-hidden rounded-md "/>
                <img src={side2} alt="" className="border-hidden rounded-md"/>

                {/* download section */}
                <div className="rotate-90 translate-x-32">
                    {/* <hr /> */}
                </div>
                <section className="bg-white rounded-lg p-4 space-y-6 w-64">
                    {infoItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                        <div className="text-gray-600">{item.icon}</div>
                        <p className="text-gray-800">{item.text}</p>
                        </div>
                    ))}
                </section>

                    {/* Trending Products */}
                <section>
                    <p className="text-xl font-medium pb-4 text-blue-900">TRENDING PRODUCTS</p>
                    <div className="space-y-4 border rounded-sm p-2">
                        {products.map((product, index) => (
                            <div key={index} className="flex items-center">
                            <img src={product.imageUrl} className="w-12 h-12 rounded mr-4"/>
                            <div className="flex-1">
                                <h3 className="text-sm font-medium text-gray-800"> {product.name} </h3>
                                <div className="text-sm">
                                    <span className="line-through text-gray-400 mr-2"> {product.originalPrice} </span>
                                    <span className="text-red-500 font-semibold">{product.salePrice}</span>
                                    {/* <hr /> */}
                                </div>
                                <hr className="mt-5 ml-[-50px]" />
                            </div> 
                            </div>
                        ))}
                    </div>
                </section>

                {/* Customer Comment */}
                <section>
                    <p>Customer Comment</p>
                    <div className="p-8 mt-7 h-52 bg-yellow-50 border-hidden rounded-md w-64">
                        <p className="font-display text-sm">The Best Marketplace</p>
                        <p className="pt-3 text-sm pb-5 text-gray-400">"The fruits and veggies were super fresh and delivery was quick. Loved it!".</p>
                        <div className="flex">
                            <img src={customer} className="h-12 w-12 border-hidden rounded-full" />
                            <div className="pl-4">
                            <p className="text-sm font-medium">Tina Shah</p>
                            <p className="text-xs font-normal text-gray-500 pt-1">Home maker</p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>

            {/* right section */}
            <div className="pl-10 space-y-8">
                {/* Best Sellers */}
                <div>
                    <p className="text-xl font-medium text-blue-900">BEST SELLERS</p>
                    <p className="text-sm text-gray-400 mb-6">Do not miss the current offers until the end of March.</p>
                </div>
                <div className="flex">
                    <Product discount={10} imageUrl={b1} productName="Salt, Sugar & Jagger" stockStatus={true} rating={4} reviews={1} originalPrice={44} discountedPrice={40} />
                    <Product discount={10} imageUrl={b2} productName="Dals & Pulses" stockStatus={true} rating={4} reviews={1} originalPrice={62} discountedPrice={56} />
                    <Product discount={19} imageUrl={b3} productName="Dry Fruits" stockStatus={true} rating={4} reviews={1} originalPrice={361} discountedPrice={291} />
                    <Product discount={31} imageUrl={b4} productName="Atta & Flour" stockStatus={true} rating={4} reviews={1} originalPrice={173} discountedPrice={120} />
                    
                </div>
                <img src={safety} className="w-[880px] " />

                {/* Hot product */}
                <div>
                    <p className="text-xl font-medium text-blue-900">HOT PRODUCT FOR THIS WEEK</p>
                    <p className="text-sm text-gray-400 mb-6">Dont miss this opportunity at a special discount just for this week.</p>
                </div>

                {/* <div className="border-solid border-red-600 h-64 w-full rounded-lg flex"> */}
                <div className="border rounded-lg p-9 px-11 w-full  relative shadow-sm">

                    {/* Discount Badge */}
                    <div className="absolute top-6 left-8 bg-red-600 text-white text-md font-semibold rounded-full w-12 h-12 flex items-center justify-center">19%</div>
      
                    {/* Product Image */}
                    <div className="flex items-center gap-4">
                        <img src={hot}  className="w-36  object-contain"/>
                        
                        {/* Product Details */}
                        <div className="w-full ml-10">
                            <h3 className="text-gray-800 text-lg font-semibold">Daawat Rozana Super Basmati Rice </h3>
                            <p className="text-gray-600 text-xs">5 kg</p>
                            <p className="text-xs font-medium text-green-600">IN STOCK</p>

                          {/* Price Section */}
                            <div className="flex items-center mt-2 font-dosis">
                                <span className="text-gray-400 line-through mr-2">₹342</span>
                                <span className="text-red-600 font-bold text-lg">₹291</span>
                            </div>

                          {/* Offer Progress Bar */}
                            <div className="mt-4">
                                <div className="h-2 rounded-full bg-gray-200">
                                    <div className="h-2 rounded-full bg-gradient-to-r from-red-600 to-yellow-400" style={{ width: `$70%` }}></div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs mt-2">Remains until the end of the week</p>
                        </div>
                    </div>
                </div>

                {/* Discount */}
                <div className="flex bg-red-50 text-red-500 border-hidden rounded-md h-20 justify-center items-center space-x-4">
                    <p>Super discount on your first purchase.</p>
                    <p className="border-red-500 border-dashed border-2 rounded-3xl p-1 px-3">FREE25BAC</p>
                    <p className="text-gray-500"> Use coupon code in checkout</p>
                </div>

                {/* NEW PRODUCTS */}
                <div>
                    <p className="text-xl font-medium text-blue-900">NEW PRODUCTS</p>
                    <p className="text-sm text-gray-400 mb-6">New products with updated stocks.</p>
                </div>
                <div>
                <div className="flex">
                    <Product discount={34} imageUrl={new1} productName="Fresh Kashmir Apple" stockStatus={true} rating={4} reviews={1} originalPrice={197} discountedPrice={131} />
                    <Product discount={56} imageUrl={new2} productName="Fresh Custurd Apple" stockStatus={true} rating={4} reviews={1} originalPrice={107} discountedPrice={47} />
                    <Product discount={27} imageUrl={new3} productName="Fresh Onions" stockStatus={true} rating={4} reviews={1} originalPrice={92} discountedPrice={69} />
                    <Product discount={17} imageUrl={new4} productName="Fresh Potato" stockStatus={true} rating={4} reviews={1} originalPrice={71} discountedPrice={59} />                    
                </div><div className="flex">
                    <Product discount={28} imageUrl={new5} productName="Epigamia Strawberry Yogurt" stockStatus={true} rating={4} reviews={1} originalPrice={25} discountedPrice={18} />
                    <Product discount={28} imageUrl={new6} productName="Epigamia Lychee Yogurt" stockStatus={true} rating={4} reviews={1} originalPrice={25} discountedPrice={18} />
                    <Product discount={13} imageUrl={new7} productName="Quaker Oats" stockStatus={true} rating={4} reviews={1} originalPrice={182} discountedPrice={120} />
                    <Product discount={34} imageUrl={new8} productName="Kellogg's Muesli" stockStatus={true} rating={4} reviews={1} originalPrice={499} discountedPrice={327} />                    
                </div></div>

                
            </div>
      </div>

      {/* Categories */}
      <div className="bg-white border rounded-lg mt-9 ml-40 mr-44 mb-4" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {categories.map((category) => (
                            <div key={category.name} className="border p-3 text-center shadow-sm hover:shadow-lg">
                                <img src={category.imageUrl} alt={category.name} className="w-28 h-28 mx-auto object-contain mb-4"/>
                                <h3 className="text-gray-800 text-lg font-semibold">{category.name}</h3>
                                {/* <p className="text-gray-500 text-sm">{category.items} Items</p> */}
                            </div>
                        ))}
                    </div>
                </div>
    </>
  );
};

export default Sidebar;
