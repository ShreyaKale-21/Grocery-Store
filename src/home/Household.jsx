import React, { useState } from 'react';
import Product from './Product';
import af1 from "../images/af1.jpg";
import af2 from "../images/af2.jpg";
import af3 from "../images/af3.jpg";
import af4 from "../images/af4.jpg";
import tt1 from "../images/tt1.jpg";
import tt2 from "../images/tt2.jpg";
import tt3 from "../images/tt3.jpg";
import tt4 from "../images/tt4.jpg";
import hs1 from "../images/hs1.jpg";
import hs2 from "../images/hs2.jpg";
import hs3 from "../images/hs3.jpg";
import hs4 from "../images/hs4.jpg";
import hc1 from "../images/hc1.jpg";
import hc2 from "../images/hc2.jpg";
import hc3 from "../images/hc3.jpg";
import hc4 from "../images/hc4.jpg";
import hc5 from "../images/hc5.jpg";
import hc6 from "../images/hc6.jpg";
import hc7 from "../images/hc7.jpg";
import fruit from "../images/fruit.jpg";

import Filter from './Filter';

const Household = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Dettol Antiseptic Liquid ', discount: 1, imageUrl: hc1, stock:true, rating: 3,category: 'Household cleaners',price1:365.55 , price2: 364 },
    { id: 2, name: 'Harpic Toilet Cleaner', discount: 16, imageUrl:hc2, stock:true, rating: 3, category: 'Household cleaners',price1: 215,price2: 181 },
    { id: 3, name: 'Comfort Fabric Conditioner Pouch', discount: 17, imageUrl:hc3, stock:true, rating: 3, category: 'Household cleaners',price1: 435, price2: 362 },
    { id: 4, name: 'Surf Excel Detergent Powder', discount: 8, imageUrl:hc4, stock:true, rating: 3, category: 'Household cleaners',pric1e: 76, price2: 70 },
    { id: 5, name: 'Vim Lemon Dishwash Liquid Gel', discount: 19, imageUrl:hc5, stock:true, rating: 3, category: 'Household cleaners', price1: 405, price2: 329 },
    { id: 6, name: 'Vim Bar', discount: 17, imageUrl:hc6, stock:true, rating: 3, category: 'Household cleaners', price1: 86, price2: 71 },
    { id: 7, name: 'Exo Round Dishwash Bar ', discount: 20, imageUrl:hc7, stock:true, rating: 3, category: 'Household cleaners', price1: 172, price2: 137 },
    { id: 8, name: 'Presto Kitchen Tissue Rolls', discount: 38, imageUrl:tt1, stock:true, rating: 3, category: 'Paper towels & tissues', price1: 505, price2: 315 },
    { id: 9, name: 'Solimo Toilet Paper Roll ', discount: 33, imageUrl:tt2, stock:true, rating: 3, category: 'Paper towels & tissues', price1: 420, price2: 280 },
    { id: 10, name: 'Solimo Kitchen Towel Paper', discount: 31, imageUrl:tt3, stock:true, rating: 3, category: 'Paper towels & tissues', price1: 335, price2: 230 },
    { id: 11, name: 'Origami Tissue Paper Roll', discount: 12, imageUrl:tt4, stock:true, rating: 3, category: 'Paper towels & tissues', price1: 290, price2: 247 },
    { id: 12, name: 'Godrej aer Bathroom Freshener', discount: 23, imageUrl:af1, stock:true, rating: 3, category: 'Air fresheners', price1: 325, price2: 249 },
    { id: 13, name: 'Odonil Bathroom Air Freshner Blocks ', discount: 25, imageUrl:af2, stock:true, rating: 3, category: 'Air fresheners', price1: 192, price2: 144 },
    { id: 14, name: 'Odonil Gel Pocket Mix - 30g', discount: 32, imageUrl:af3, stock:true, rating: 3, category: 'Air fresheners', price1: 175, price2: 119 },
    { id: 15, name: 'Odonil Bathroom Air Freshener Zipper', discount: 27, imageUrl:af4, stock:true, rating: 3, category: 'Air fresheners', price1: 265, price2: 193 },
    { id: 16, name: 'Presto! Elite Spin Mop', discount: 45, imageUrl:hs1, stock:true, rating: 3, category: 'Household Supplies', price1: 2158, price2: 1186 },
    { id: 17, name: 'Kuber Square Plastic Bucket', discount: 50, imageUrl:hs2, stock:true, rating: 3, category: 'Household Supplies', price1: 499, price2: 249 },
    { id: 18, name: 'Shalimar Premium Garbage Bags', discount: 13, imageUrl:hs3, stock:true, rating: 3, category: 'Household Supplies', price1: 344, price2: 299 },
    { id: 19, name: 'Cello Standee Floor Wiper', discount: 0, imageUrl:hs4, stock:true, rating: 3, category: 'Household Supplies', price1: 257, price2: 257 },
    // Add more sample products as needed
  ];

  const categories = ["Household cleaners", "Paper towels & tissues", "Air fresheners", "Household Supplies"];

  const [filters, setFilters] = useState({
    selectedCategories: [],
    priceRange: { min: 0, max: 500 },
    inStockOnly: false
  });

  // Update filters based on changes from ProductFilter component
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const filteredProducts = products.filter(product => {
    const isInSelectedCategory = filters.selectedCategories.length === 0 || filters.selectedCategories.includes(product.category);
    const isInPriceRange = product.price2 >= filters.priceRange.min && product.price2 <= filters.priceRange.max;
    const isInStock = !filters.inStockOnly || product.stock;
    return isInSelectedCategory && isInPriceRange && isInStock;
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className='w-[270px] ml-40 p-4  font-dosis text-gray-500 space-y-10'>
        <Filter categories={categories} onFilterChange={handleFilterChange} />
      </div>
      

      {/* Main Content */}
      <main className="flex-1  mr-48 pl-10">
        <div className='my-7'>
          <img src={fruit} alt="" />
        </div>
        <div className="grid grid-cols-4 ">
          {filteredProducts.map(product => (
            <Product
            key={product.id}
            discount={product.discount}
            imageUrl={product.imageUrl}
            productName={product.name}
            stockStatus={product.stock}
            rating={product.rating}
            originalPrice={product.price1}
            discountedPrice ={product.price2}
          />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Household;