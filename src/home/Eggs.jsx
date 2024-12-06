import React, { useState } from 'react';
import Product from './Product';

import eg1 from "../images/eg1.jpg";
import eg2 from "../images/eg2.jpg";
import eg3 from "../images/eg3.jpg";
import eg4 from "../images/eg4.jpg";
import ch1 from "../images/ch1.jpg";
import ch2 from "../images/ch2.jpg";
import ch3 from "../images/ch3.jpg";
import ch4 from "../images/ch4.jpg";
import mt1 from "../images/mt1.jpg";
import mt2 from "../images/mt2.jpg";
import mt3 from "../images/mt3.jpg";
import mt4 from "../images/mt4.jpg";
import fs1 from "../images/fs1.jpg";
import fs2 from "../images/fs2.jpg";
import fs3 from "../images/fs3.jpg";
import fs4 from "../images/fs4.jpg";
import fs5 from "../images/fs5.jpg";
import fruit from "../images/fruit.jpg";

import Filter from './Filter';

const Eggs = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Fresh Eggs, Pack of 12', discount: 23, imageUrl: eg1, stock:true, rating: 3, ategory: 'Eggs',price1: 130, price2: 100 },
    { id: 2, name: 'Fresh Eggs, Pack of 6', discount: 23, imageUrl:eg2, stock:true, rating: 3, category: 'Eggs',price1: 65, price2: 50 },
    { id: 3, name: 'Farm made Eggs,12 Pieces', discount: 0, imageUrl:eg3, stock:true, rating: 3, category: 'Eggs',price1: 289, price2: 289 },
    { id: 4, name: 'UPF Healthy Brown Eggs, 6 Pieces', discount: 5, imageUrl:eg4, stock:true, rating: 3, category: 'Eggs', price1: 99, price2: 94 },

    { id: 5, name: 'FreshToHome Chicken Curry Cut', discount: 27, imageUrl:ch1, stock:true, rating: 3, category: 'Chicken', price1: 199, price2: 145 },
    { id: 6, name: 'FreshToHome Chicken Breast Fillet', discount: 18, imageUrl:ch2, stock:true, rating: 3, category: 'Chicken', price1: 329, price2: 269 },
    { id: 7, name: 'FreshToHome Boneless Chicken Cubes', discount: 10, imageUrl:ch3, stock:true, rating: 3, category: 'Chicken', price1: 164, price2: 148 },
    { id: 8, name: 'FreshToHome Chicken Liver Cut', discount: 8, imageUrl:ch4, stock:true, rating: 3, category: 'Chicken', price1: 119, price2: 109 },

    { id: 13, name: 'Klaas Frozen Tilapia Fillets, 500g', discount: 59, imageUrl:fs1, stock:true, rating: 3, category: 'Fish & seafood', price1: 440, price2: 179 },
    { id: 14, name: 'Klaas Frozen River Salmon Fillets, 500g', discount: 55, imageUrl:fs2, stock:true, rating: 3, category: 'Fish & seafood', price1: 390, price2: 175 },
    { id: 15, name: 'Mega Frozen Prawns - Large, Peeled', discount: 45, imageUrl:fs3, stock:true, rating: 3, category: 'Fish & seafood', price1: 600, price2: 329 },
    { id: 16, name: 'FreshToHome Rohu/Rui', discount: 56, imageUrl:fs4, stock:true, rating: 3, category: 'Fish & seafood', price1: 502, price2: 219 },
    { id: 17, name: 'Naik Frozen Bombay Duck (Bombil)', discount: 39, imageUrl:fs5, stock:true, rating: 3, category: 'Fish & seafood', price1: 400, price2: 235 },
    
    { id: 9, name: 'Zorabian Chicken Kebab, 250 g', discount: 0, imageUrl:mt1, stock:true, rating: 3, category: 'Frozen Meats', price1: 185, price2: 185 },
    { id: 10, name: 'Yummiez Chicken Chilly Sausage, 250 g', discount: 6, imageUrl:mt2, stock:true, rating: 3, category: 'Frozen Meats', price1: 190, price2: 179 },
    { id: 11, name: 'Elicious Chicken Caribbean Sausages', discount: 8, imageUrl:mt3, stock:true, rating: 3, category: 'Frozen Meats', price1: 330, price2: 303 },
    { id: 12, name: 'Prasuma Frozen Chicken Chilli Salami', discount: 8, imageUrl:mt4, stock:true, rating: 3, category: 'Frozen Meats', price1: 185, price2: 170 },
    // Add more sample products as needed
  ];

  const categories = ["Eggs", "Chicken", "Frozen Meats", "Fish & seafood"];

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

export default Eggs;