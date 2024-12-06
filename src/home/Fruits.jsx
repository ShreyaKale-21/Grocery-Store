import React, { useState } from 'react';
import Product from './Product';
import Allv1 from "../images/Allv1.jpg";
import Allv2 from "../images/Allv2.jpg";
import Allv3 from "../images/Allv3.jpg";
import Allv4 from "../images/Allv4.jpg";
import Allf1 from "../images/new1.jpg";
import Allf2 from "../images/new2.jpg";
import Allf3 from "../images/Allf3.jpg";
import Allf4 from "../images/Allf4.jpg";
import e1 from "../images/e1.jpg";
import e2 from "../images/e2.jpg";
import e3 from "../images/e3.jpg";
import e4 from "../images/e4.jpg";
import he1 from "../images/he1.jpg";
import he2 from "../images/he2.jpg";
import he3 from "../images/he3.jpg";
import he4 from "../images/he4.jpg";
import fruit from "../images/fruit.jpg";

import Filter from './Filter';

const Fruits = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Fresh Onion ', discount: 27, imageUrl: Allv1, stock:true, rating: 3,category: 'Fresh Vegetables',price1: 94, price2: 69 },
    { id: 2, name: 'Fresh Potato', discount: 17, imageUrl:Allv2, stock:true, rating: 3, category: 'Fresh Vegetables',price1: 71, price2: 59 },
    { id: 3, name: 'Fresh Cucumber', discount: 20, imageUrl:Allv3, stock:true, rating: 3, category: 'Fresh Vegetables',price1: 30, price2: 24 },
    { id: 4, name: 'Fresh Bhendi', discount: 29, imageUrl:Allv4, stock:true, rating: 3, category: 'Fresh Vegetables', price1: 35, price2: 35 },
    { id: 5, name: 'Fresh Apple', discount: 29, imageUrl:Allf1, stock:true, rating: 3, category: 'Fresh Fruits', price1: 139, price2: 139 },
    { id: 6, name: 'Fresh Custard Apple', discount: 56, imageUrl:Allf2, stock:true, rating: 3, category: 'Fresh Fruits', price1: 107, price2: 47 },
    { id: 7, name: 'Fresh Banana', discount: 34, imageUrl:Allf3, stock:true, rating: 3, category: 'Fresh Fruits', price1: 90, price2: 59 },
    { id: 8, name: 'Fresh Papaya', discount: 19, imageUrl:Allf4, stock:true, rating: 3, category: 'Fresh Fruits', price1: 106, price2: 86 },
    { id: 9, name: 'Fresh Basil', discount: 7, imageUrl:e1, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 28, price2: 26 },
    { id: 10, name: 'Fresh Dragon Fruit ', discount: 19, imageUrl:e2, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 95, price2: 77 },
    { id: 11, name: 'Fresh Kiwi Green', discount: 12, imageUrl:e3, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 160, price2: 141 },
    { id: 12, name: 'Fresh Avocado', discount: 44, imageUrl:e4, stock:true, rating: 3, category: 'Exotic Fruits & Veggies', price1: 283, price2: 159 },
    { id: 13, name: 'Fresh Curry Leaves', discount: 58, imageUrl:he1, stock:true, rating: 3, category: 'Herbs & Seasonings', price1: 31, price2: 13 },
    { id: 14, name: 'Fresh Coriander', discount: 29, imageUrl:he2, stock:true, rating: 3, category: 'Herbs & Seasonings', price1: 31, price2: 22 },
    { id: 15, name: 'Fresh Mint Leaves', discount: 75, imageUrl:he3, stock:true, rating: 3, category: 'Herbs & Seasonings', price1: 32, price2: 8 },
    { id: 16, name: 'Fresh Lemon Grass', discount: 29, imageUrl:he4, stock:true, rating: 3, category: 'Herbs & Seasonings', price1: 14, price2: 10 },
    // Add more sample products as needed
  ];

  const categories = ["Herbs & Seasonings", "Exotic Fruits & Veggies", "Fresh Fruits", "Fresh Vegetables"];

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

export default Fruits;


{/* <aside className="w-[270px] ml-40 p-4 border-r font-dosis text-gray-500 space-y-10">
        <div className="mb-8 mt-2">
          <h2 className="text-gray-600 font-semibold mb-4">PRODUCT CATEGORIES</h2>
          <ul className="space-y-3">
            {["Herbs & Seasonings", "Exotic Fruits & Veggies", "Fresh Fruits", "Fresh Vegetables"].map(category => (
              <li key={category}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Filter */}
        {/* <div className="mb-8">
          <h2 className="text-gray-600 font-semibold mb-4">FILTER BY PRICE</h2>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
              placeholder="Min"
              className="w-full p-2 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
              placeholder="Max"
              className="w-full p-2 border rounded"
            />
          </div>
        </div> */}

        {/* In Stock Filter */}
        {/* <div className="mb-8">
        <h2 className="text-gray-600 font-semibold mb-4">PRODUCT STATUS</h2>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={handleInStockChange}
              className="mr-2"
            />
            In Stock Only
          </label>
        </div>
      </aside>  */}

        // // State for selected categories, price range, and stock filter
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [priceRange, setPriceRange] = useState({ min: 0, max: 500 }); // Set an initial price range
  // const [inStockOnly, setInStockOnly] = useState(false);
  
  // // Filter products based on selected criteria
  // const filteredProducts = products.filter(product => {
  //   const isInSelectedCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
  //   const isInPriceRange = product.price2 >= priceRange.min && product.price2 <= priceRange.max;
  //   const isInStock = !inStockOnly || product.stock;
  //   return isInSelectedCategory && isInPriceRange && isInStock;
  // });

  // // Handle category selection
  // const handleCategoryChange = (category) => {
  //   setSelectedCategories(prev =>
  //     prev.includes(category)
  //       ? prev.filter(item => item !== category)
  //       : [...prev, category]
  //   );
  // };

  // // Handle price range change
  // const handlePriceChange = (e) => {
  //   const { name, value } = e.target;
  //   setPriceRange(prev => ({ ...prev, [name]: Number(value) }));
  // };

  // // Handle in-stock checkbox change
  // const handleInStockChange = () => {
  //   setInStockOnly(prev => !prev);
  // };