// Cart.js
import React from 'react';
import Billing from './Billing';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const remainingForFreeShipping = 50 - subtotal; // Assuming free shipping at $50
  const shippingCost = subtotal >= 50 ? 0 : 5; // Free shipping if subtotal >= $50
  const total = subtotal + shippingCost;

  return (
    <div className="p-4 bg-white rounded-md mx-20 my-10 justify-around flex ">
      <div className='w-3/5 p-3'>
      

      {/* Cart items */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.productName} className="flex items-center justify-between mb-4 border-b border-gray-200">
            <img src={item.imageUrl} alt={item.productName} className="h-16 w-16 m-4 object-cover" />
            <div className="flex-1 mx-2">
              <h3 className="text-sm font-medium text-gray-700">{item.productName}</h3>
              
            </div>
            <p className="text-base text-gray-500 pr-5 mr-6">
            ₹{item.discountedPrice.toFixed(2)}
                 {/* x {item.quantity} */}
              </p>
            <div className="flex items-center w-24">
              <button
                onClick={() => updateQuantity(item.productName, item.quantity - 1)}
                className="px-3 py-1 text-sm font-bold border rounded-full bg-slate-200"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.productName, item.quantity + 1)}
                className="px-[10px] py-1 text-sm font-bold border rounded-full bg-slate-200"
              >
                +
              </button>
              <hr />
            </div>
            <p className='w-10 ml-6'>{item.discountedPrice.toFixed(2) * item.quantity}</p>
            
              <button
                onClick={() => removeFromCart(item.productName)}
                className="ml-2 font-bold text-gray-700 text-sm font-dosis">
                x
              </button>
          </div>
        ))
      )}

      {/* Coupon code input */}
      {/* <div className="flex items-center mt-4 w-2/4">
        <input
          type="text"
          placeholder="Coupon code"
          className="flex-1 px-2 py-1 border rounded-sm mr-2"
        />
        <button className="bg-blue-900 font-semibold text-white px-4 py-1 rounded-sm">Apply coupon</button>
      </div> */}
      </div>

      {/* Cart totals */}
      <div className='w-1/4 p-5 border rounded-lg font-display h-[450px]'>
      <div className=" pt-4 mt-4 space-y-5">
        <h3 className='font-semibold text-gray-700 text-base font-dosis'>CART TOTAL</h3>
        <hr />
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span className='text-gray-700'>₹{subtotal.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm mb-2">
          <div>Shipping</div>
          <div className="text-gray-700 space-y-3">
            <div>
            <label>
              <input type="radio" checked={shippingCost === 5} readOnly /> Flat rate: ₹50.00
            </label></div>
            <div><label>
              <input type="radio" checked={shippingCost === 0} readOnly /> Local pickup
            </label></div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <hr />
      </div>

      {/* Proceed to checkout button */}

      <button className="w-full  bg-red-500 text-white py-2 mt-8 rounded-sm">
        <Link to="/Billing">Proceed to checkout</Link>
      </button>
      </div>
    </div>
  );
};

export default Cart;
