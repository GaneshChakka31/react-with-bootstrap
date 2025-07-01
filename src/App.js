import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home';
import BoxCarousel from './BoxCarousel';
import LoginScreen from './LoginScreen';
import Airconditioner from './Airconditioner'; 
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import CartPage from "./CartPage";

function App() {
  const location = useLocation();  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
        <Route path="/air-conditioner" element={<Airconditioner />} /> 
        <Route path="/productdetail" element={<ProductDetail />} />
         <Route path="/CartPage" element={<CartPage />} />
      </Routes>

      {location.pathname === '/Home' && <BoxCarousel />}
      <Footer />
    </>
  );
}

export default App;
