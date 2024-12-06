import React, { useEffect, useState } from 'react';

const Filter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [inStockOnly, setInStockOnly] = useState(false);

  // Notify parent of filter changes
  useEffect(() => {
    onFilterChange({ selectedCategories, priceRange, inStockOnly });
  }, [selectedCategories, priceRange, inStockOnly, onFilterChange]);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter(item => item !== category)
        : [...prevSelectedCategories, category]
    );
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevPriceRange) => ({
      ...prevPriceRange,
      [name]: Number(value)
    }));
  };

  // Handle in-stock checkbox change
  const handleInStockChange = () => {
    setInStockOnly(prev => !prev);
  };

  return (
    <aside className="w-[270px] p-4 font-dosis text-gray-500 space-y-10">
      <div className="mb-8 mt-2">
        <h2 className="text-gray-600 font-semibold mb-4">PRODUCT CATEGORIES</h2>
        <ul className="space-y-3">
          {categories.map(category => (
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

      <div className="mb-8">
        <h2 className="text-gray-600 font-semibold mb-4">FILTER BY PRICE</h2>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            placeholder="Min"
            className="w-20 p-2 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            placeholder="Max"
            className="w-20 p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-8">
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
    </aside>
  );
};

export default Filter;
