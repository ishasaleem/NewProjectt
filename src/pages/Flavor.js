// src/components/Flavor.js
import React from 'react';
import Header from '../Components/Header';
import CFlavor from '../Components/CFlavor';
import Limited from '../Components/Limited';
import Month from '../Components/Month';
import Seasonal from '../Components/Seasonal';
import Ownflav from '../Components/Ownflav';
import Footer from '../Components/Footer';
const Flavor = () => {
  return (
    <div>
      <Header />
      <CFlavor />
      <Seasonal/>

      <Limited/>
      <Month/>
      <Ownflav/>
      <Footer/>
    </div>
  );
};

export default Flavor;
