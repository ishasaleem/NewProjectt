import React from 'react';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Client from '../Components/Client'
import Shop from '../Components/Shop'
import Hm from '../Components/Hm';
import Footer from '../Components/Footer';
const Homepg = () => {
  return (
    <div>
  
      <Header/>
      <Hm/>
<About/>
<  Menu/>

<Shop/>
<Client/>
<Footer/>
      
    </div>
  );
}

export default Homepg;
