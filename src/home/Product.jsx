import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Product = ({ 
  discount, 
  imageUrl, 
  productName, 
  stockStatus, 
  rating,  
  originalPrice, 
  discountedPrice 
}) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    const product = {
      discount,
      imageUrl,
      productName,
      originalPrice,
      discountedPrice,
      quantity: 1 // or any initial quantity
    };
    addToCart(product);
    // navigate('/Cart');

    setShowPopup(true); // Show popup notification
    setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="bg-white border rounded-sm shadow-sm p-4 w-[220px]">
      {/* Discount Badge */}
      <div className='relative'>
      <div className="absolute top-1 left-1 font-dosis font-semibold w-9 bg-sky-400 text-white text-xs px-2 py-1 rounded">
        {discount}%
      </div>
      </div>
      
      {/* Product Image */}
      <img 
        src={imageUrl} 
        alt={productName} 
        className="h-40 w-full object-contain p-3"
      />
      
      {/* Product Details */}
      <h3 className="text-gray-800 text-sm font-display mb-1">
        {productName}
      </h3>
      <p className={`text-xs font-medium mb-2 ${stockStatus ? 'text-green-600' : 'text-red-600'}`}>
        {stockStatus ? 'IN STOCK' : 'OUT OF STOCK'}
      </p>

      
      {/* Rating */}
      <div className="flex items-center mb-2">
        <div className="text-yellow-400">
          {/* Star Ratings */}
          {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
        </div>
      </div>
      
      {/* Price Section */}
      <div className="flex items-center mb-4 font-dosis">
        <span className="text-gray-400 line-through mr-2">₹{originalPrice}</span>
        <span className="text-red-600 font-bold text-lg">₹{discountedPrice}</span>
      </div>
      
      {/* Add to Cart Button */}
      <button onClick={handleAddToCart} className=" hover:bg-sky-400 hover:text-white text-sky-400 border-sky-400 border-[1px] py-2 px-4 w-full rounded-full font-semibold">
        Add to cart
      </button>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded shadow-lg">
          “{productName}” has been added to your cart.
          <button onClick={() => navigate('/cart')} className="underline ml-2">View cart</button>
        </div>
      )}
    </div>
  );
};

export default Product;
