import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Introabout from '../Components/Introabout';
import Team from '../Components/Team';
import Community from '../Components/Community';
import Award from '../Components/Award';
import Footer from '../Components/Footer'
import Mission from '../Components/Mission';
const Aboutus = () => {
  return (
    <div>
         <Header/>
   <Introabout/>
   <Team/>
   <Mission/>
   <Community/>
   <Award/>
      <Footer/>
    </div>
  );
}

export default Aboutus;
