import React, { useState } from 'react';
import Product from './Product';
import js1 from "../images/js1.jpg";
import js2 from "../images/js2.jpg";
import js3 from "../images/js3.jpg";
import js4 from "../images/js4.jpg";
import js5 from "../images/js5.jpg";
import js6 from "../images/js6.jpg";
import js7 from "../images/js7.jpg";
import js8 from "../images/js8.jpg";
import dm1 from "../images/dm1.jpg";
import dm2 from "../images/dm2.jpg";
import dm3 from "../images/dm3.jpg";
import dm4 from "../images/dm4.jpg";
import dm5 from "../images/dm5.jpg";
import cf1 from "../images/cf1.jpg";
import cf2 from "../images/cf2.jpg";
import cf3 from "../images/cf3.jpg";
import cf4 from "../images/cf4.jpg";
import fruit from "../images/fruit.jpg";

import Filter from './Filter';

const Breakfast = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Kissan Mixed Fruit Jam', discount: 4, imageUrl: js1, stock:true, rating: 3, ategory: 'Honey, jams & spreads',price1: 80, price2: 77 },
    { id: 2, name: 'Dabur Honey ', discount: 20, imageUrl:js2, stock:true, rating: 3, category: 'Honey, jams & spreads',price1: 475, price2: 380 },
    { id: 3, name: 'Pintola Peanut Butter', discount: 25, imageUrl:js3, stock:true, rating: 3, category: 'Honey, jams & spreads',price1: 449, price2: 386 },
    { id: 4, name: 'Dr. Oetker Veg Mayonnaise', discount: 8, imageUrl:js4, stock:true, rating: 3, category: 'Honey, jams & spreads', price1: 199, price2: 184 },
    { id: 5, name: 'Amul Cheese Spread, Pepper', discount: 10, imageUrl:js5, stock:true, rating: 3, category: 'Honey, jams & spreads',price1: 110, price2: 100 },
    { id: 6, name: 'Dr. Oetker Sandwich Spread', discount: 0, imageUrl:js6, stock:true, rating: 3, category: 'Honey, jams & spreads',price1: 99, price2: 99 },
    { id: 7, name: 'Kissan Orange Marmalade Jam', discount: 10, imageUrl:js7, stock:true, rating: 3, category: 'Honey, jams & spreads',price1: 200, price2: 180 },
    { id: 8, name: "HERSHEY'S Caramel Syrup", discount: 25, imageUrl:js8, stock:true, rating: 3, category: 'Honey, jams & spreads',price1: 265, price2: 198 },

    { id: 9, name: 'Bournvita Chocolate Nutrition Drink', discount: 26, imageUrl:dm1, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 852, price2: 630 },
    { id: 10, name: 'Horlicks Chocolate Nutrition Drink', discount: 28, imageUrl:dm2, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 450, price2: 325 },
    { id: 11, name: 'Pediasure Nutritional Drink Powder', discount: 10, imageUrl:dm3, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 770, price2: 693 },
    { id: 12, name: 'Horlicks Nutrition Drink Pouch', discount: 24, imageUrl:dm4, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 459, price2: 348 },
    { id: 13, name: 'Glucon-D Tangy Orange Glucose Powder', discount: 11, imageUrl:dm5, stock:true, rating: 3, category: 'Herbs & Seasonings', price1: 380, price2: 340 },

    { id: 14, name: "Kellogg's Muesli Fruit Nut & Seeds", discount: 30, imageUrl:cf1, stock:true, rating: 3, category: 'Corn flakes & Muesli', price1: 499, price2: 349 },
    { id: 15, name: 'Quaker Oats Rolled Oats', discount: 14, imageUrl:cf2, stock:true, rating: 3, category: 'Corn flakes & Muesli', price1: 428, price2: 367 },
    { id: 16, name: "Kellogg's Corn Flakes", discount: 25, imageUrl:cf3, stock:true, rating: 3, category: 'Corn flakes & Muesli', price1: 510, price2: 382 },
    { id: 17, name: "Kellogg's Multigrain Chocolate Moons ", discount: 47, imageUrl:cf4, stock:true,  rating: 3, category: 'Corn flakes & Muesli', price1: 750, price2: 397 },
    // Add more sample products as needed
  ];

  const categories = ["Honey, jams & spreads", "Drink mixes", "Corn flakes & Muesli"];

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

export default Breakfast;