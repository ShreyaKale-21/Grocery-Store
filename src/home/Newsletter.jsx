import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState(''); // State to manage email input

  const handleSubscribeClick = () => {
    if (email.trim() === '') {
      alert('Please enter a valid email address.');
      return;
    }
    setIsModalOpen(true);
    setEmail(''); // Reset email field after subscribing
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-800 text-gray-50 py-10 ">
      {/* <p className="text-base">20 discount for your first order</p> */}
      <h2 className="text-3xl font-bold mt-2">Join our newsletter and get...</h2>
      <p className="text-slate-400 text-sm mt-2">Join our email subscription now to get updates on promotions and coupons.</p>
      
      <div className="mt-4 flex  items-center space-x-2">
        <div className="flex items-center justify-around bg-white rounded-md shadow-md px-4 py-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
          <input type="email" placeholder="Your email address" className="outline-none text-gray-600"/>
          <button 
            onClick={handleSubscribeClick} 
            className="bg-blue-700 text-white rounded-md px-6 py-2 shadow-md hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-2xl font-bold text-gray-800">Thank you for subscribing!</h3>
            <p className="text-gray-600 mt-2">You have successfully subscribed to our newsletter.</p>
            <button 
              onClick={closeModal} 
              className="mt-4 bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
