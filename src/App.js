import React from 'react';
import Navbar from './home/Navbar'; // Update path if necessary
import Sidebar from './home/Sidebar';
import Fruits from './home/Fruits';
import Grocery from './home/Grocery';
import Household from './home/Household';
import Breakfast from './home/Breakfast';
import Eggs from './home/Eggs';
import Cart from './home/Cart';
import Footer from './home/Footer';
import { CartProvider } from './home/CartContext';
// import Cart from './home/Cart';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Billing from './home/Billing';

function App() {
  return (
    <>
    <CartProvider>
    <Router>
    <Navbar /> <div className="App">
    <Routes>

        <Route path="/" element={<Sidebar />} />
        <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Grocery" element={<Grocery />} />
        <Route path="/Household" element={<Household />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="/Eggs" element={<Eggs/>} />
        <Route path="/Billing" element={<Billing/>} />
        {/*<Route path="/instant-frozen-foods" element={<InstantFrozenFoods />} />
        <Route path="/beverages" element={<Beverages />} />
        // <Route path="/household-needs" element={<HouseholdNeeds />} />
        <Route path="/beauty" element={<Beauty />} /> */}
      </Routes>
      <Footer/>
      </div>
      {/* Other components or content */}
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
