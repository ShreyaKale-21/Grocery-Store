import React, { useState } from "react";
import { useCart } from './CartContext';

const Billing = () => {
    
    const { cartItems } = useCart();
    const subtotal = cartItems.reduce(
        (total, item) => total + item.discountedPrice * item.quantity,
        0
      );
    const shippingCost = subtotal >= 50 ? 0 : 5; // Free shipping if subtotal >= $50
    const total = subtotal + shippingCost;

    // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error on input
  };

  // Validate fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/^\w/, (c) => c.toUpperCase())} is required.`;
      }
    });
    
    // Specific validation for ZIP Code
  if (formData.zip && !/^\d{6}$/.test(formData.zip)) {
    newErrors.zip = "ZIP Code must be a 6-digit number.";
  }

  // Specific validation for Phone Number (10 digits)
  if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Invalid phone number.";
  }

  // Specific validation for Email (contains '@' and ends with '.com')
  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email format.";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
  };

  // Handle Place Order
  const handlePlaceOrder = () => {
    if (validateForm()) { // Only proceed if the form is valid
      setShowPopup(true); // Show the popup
      setTimeout(() => {
        setShowPopup(false); // Hide the popup after 3 seconds
      }, 3000);

      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        phone: "",
        email: "",
      });
    }
  };

  return (
    <>
    <div className=" ml-40 flex gap-x-40 my-16">
      <form className="space-y-4 text-gray-700 w-[650px]">
      <h2 className="text-xl text-gray-800 font-semibold font-display mb-4">BILLING DETAILS</h2>
        
        {/* Name Fields */}
        <div className="flex flex-col  md:flex-row gap-8">
          <div className="flex-1">
            <label className="block  text-base font-medium mb-3" htmlFor="firstName">
              First name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full bg-red-50 rounded-sm p-3"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="flex-1">
            <label className="block text-base font-medium mb-3" htmlFor="lastName">
              Last name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full bg-red-50 rounded-sm p-3"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>    

        {/* Address Fields */}
        <div>
          <label className="block text-base font-medium mb-3">Street address</label>
          <input
            type="text"
            id="address"
              value={formData.address}
              onChange={handleInputChange}
            className="w-full bg-red-50 rounded-sm p-3"
            placeholder="House number and street name"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

          <input
            type="text"
            className="w-full bg-red-50 rounded-sm p-3"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>

        {/* City, State, ZIP */}
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <label className="block text-base font-medium mb-3">City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full bg-red-50 rounded-sm p-3"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-base font-medium mb-3">ZIP Code</label>
              <input
                type="text"
                id="zip"
                value={formData.zip}
                onChange={handleInputChange}
                className="w-full bg-red-50 rounded-sm p-3"
              />
              {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
            </div>
          </div>

        {/* Phone and Email */}
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <label className="block text-base font-medium mb-3">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-red-50 rounded-sm p-3"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-base font-medium mb-3">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-red-50 rounded-sm p-3"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
        </form>

{/* Order Summary */}
<div className='w-1/4 p-5 border rounded-lg  h-[450px]'>
      <div className=" pt-4 mt-4 space-y-5">
        <h3 className='font-semibold font-dosis text-gray-800 text-xl'>YOUR ORDER</h3> <hr />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <hr />
        <div className="mt-4 text-gray-800 space-y-4">
          <label className="flex  items-center">
            <input type="radio" name="payment" className="mr-2" />
            Credit or debit card
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" /> Net Banking
          </label>
        <label className="flex items-center">
          <input type="radio" name="payment" className="mr-2" />        
        UPI Apps
        </label>
        <label className="flex items-center">
          <input type="radio" name="payment" className="mr-2" />
          Cash on delivery
        </label>
      </div>
      </div>

      {/* Terms and Place Order */}
      <div className="mt-4">
        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-md" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-4 left-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          Order placed successfully!
        </div>
      )}

    </div>

    </div>
    </>
  );
};

export default Billing;
