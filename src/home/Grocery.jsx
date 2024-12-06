import React, { useState } from 'react';
import Product from './Product';
import Filter from './Filter';
import fruit from "../images/fruit.jpg";

import d1 from "../images/d1.jpg"
import d2 from "../images/d2.jpg"
import d3 from "../images/d3.jpg"
import d4 from "../images/d4.jpg"
import d5 from "../images/d5.jpg"
import d6 from "../images/d6.jpg"

import m1 from "../images/m1.jpg"
import m2 from "../images/m2.jpg"
import m3 from "../images/m3.jpg"
import m4 from "../images/m4.jpg"
import m5 from "../images/m5.jpg"
import a1 from "../images/a1.jpg"
import a2 from "../images/a2.jpg"
import a3 from "../images/A3.jpg"
import a4 from "../images/a4.jpg"

import o1 from "../images/o1.jpg"
import o2 from "../images/o2.jpg"
import o3 from "../images/o3.jpg"
import o4 from "../images/o4.jpg"

import w1 from "../images/w1.jpg"
import w2 from "../images/w2.jpg"
import w3 from "../images/w3.jpg"

const Grocery = () => {
    // Sample product data
    const products = [
      { id: 1, name: 'Toor Dal ', discount: 26, imageUrl: d1, stock:true, rating: 3, reviews: 3,category: 'Dals',price1: 289, price2: 214 },
      { id: 2, name: 'Urad Dal', discount: 16, imageUrl:d2, stock:true, rating: 3, reviews: 3, category: 'Dals',price1: 254, price2: 214 },
      { id: 3, name: 'Kabuli Chana', discount: 21, imageUrl:d3, stock:true, rating: 3, reviews: 3, category: 'Dals',price1: 158, price2: 125 },
      { id: 4, name: 'Masoor Dal', discount: 13, imageUrl:d4, stock:true, rating: 3, reviews: 3, category: 'Dals', price1: 164, price2: 142 },
      { id: 5, name: 'Moong Dal', discount: 29, imageUrl:d5, stock:true, rating: 3, reviews: 3, category: 'Dals', price1: 215, price2: 153 },
      { id: 6, name: 'Rajma', discount: 13, imageUrl: d6, stock:true, rating: 3, reviews: 3, category: 'Dals', price1: 184, price2: 161 },
      { id: 7, name: 'Tata Salt', discount: 13, imageUrl: m1, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 184, price2: 161 },
      { id: 8, name: 'Turmeric Powder', discount: 26, imageUrl: m2, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 100, price2: 76 },
      { id: 9, name: 'Red Chilli Powder', discount: 5, imageUrl: m3, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 110, price2: 104 },
      { id: 10, name: 'Coriander Powder', discount: 15, imageUrl: m4, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 86, price2: 73 },
      { id: 11, name: 'Garam Masala', discount: 4, imageUrl:m5, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 90, price2: 86 },
      { id: 12, name: 'Multigrains Atta', discount: 18, imageUrl:a1, stock:true, rating: 3, category: "Attas & Flours", price1: 369, price2: 303 },
      { id: 13, name: 'FORTUNE Maida', discount: 33, imageUrl:a2, stock:true, rating: 3, category: "Attas & Flours", price1: 180, price2: 120 },
      { id: 14, name: 'FORTUNE Besan', discount: 33, imageUrl:a3, stock:true, rating: 3, category: "Attas & Flours", price1: 180, price2: 120 },
      { id: 15, name: 'Vedaka Rawa', discount: 29, imageUrl:a4, stock:true, rating: 3, category: "Attas & Flours", price1: 110, price2: 79 },

      { id: 16, name: 'Fortune Sunflower Oil', discount: 9, imageUrl:o1, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 145, price2: 132 },
      { id: 17, name: 'Fortune Mustard Oil', discount: 10, imageUrl:o2, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 203, price2: 185 },
      { id: 18, name: 'Fortune Soyabean Oil', discount: 10, imageUrl:o3, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 151, price2: 138 },
      { id: 19, name: 'Gowardhan Ghee', discount: 7, imageUrl:o4, stock:true, rating: 3, category: "Oil, Ghee & Masalas", price1: 385, price2: 359 },
      { id: 20, name: 'Mantra Wheat', discount: 10, imageUrl: w1, stock:true, rating: 3, category: "Whole Grains", price1: 50, price2: 45 },
      { id: 21, name: 'Vedaka Jowar', discount: 5, imageUrl: w2, stock:true, rating: 3, category: "Whole Grains", price1: 110, price2: 105 },
      { id: 22, name: 'Vedaka Bajra', discount: 21, imageUrl: w3, stock:true, rating: 3, category: "Whole Grains", price1: 70, price2: 55 },
    // Add more sample products as needed
    ];
  
    const categories = ["Dals", "Attas & Flours", "Whole Grains", "Oil, Ghee & Masalas", ];
  
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
  
  export default Grocery;