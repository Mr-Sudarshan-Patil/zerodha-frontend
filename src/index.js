import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Aboutpage from './landing_page/about/Aboutpage';
import ProductPage from './landing_page/products/productPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import SignupPage from './landing_page/signup/SignupPage';
import 'react-toastify/ReactToastify.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>} /> 
    <Route path="/signup/*" element={<SignupPage/>}/>
    <Route path="/about" element={<Aboutpage/>}/>
    <Route path="/product" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="/*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
 </BrowserRouter>
);


