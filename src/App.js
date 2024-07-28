import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepg from './pages/Homepg';
import Aboutus from './pages/Aboutus';
import { Terms } from './pages/Terms';
import './App.css';
import OurSTORY from './pages/OurSTORY';
import ProductPage from './pages/ProductPage';
import Events from './pages/Events';

import Menuu from './pages/Menuu';
import Flavor from './pages/Flavor';
import Ingredients from './pages/Ingredients';
import ContactUS from './pages/ContactUS';
const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/about_us" element={<Aboutus />} />
        <Route path="/ProductPage" element={<ProductPage/>} />
        <Route path="/Terms" element={<Terms/>} />
        <Route path="/Ourpages" element={<OurSTORY/>} />
        <Route path="/ContactUS" element={<ContactUS/>} />
        <Route path="/Flavor" element={<Flavor/>} />
        <Route path="/Menuu" element={<Menuu/>} />
        <Route path="/Ingredients" element={<Ingredients/>} />
        <Route path="/Events" element={<Events/>} />
      </Routes>
    </div>
  );
};

export default App;
