import React from 'react'

 
import Header from '../Components/Header'
import PastEvents from '../Components/PastEvents'
import UpcomingEvents from '../Components/UpcomingEvents'
import Testimonials from '../Components/Testimonials'
import Hosttevent from '../Components/Hosttevent'
import Footer from '../Components/Footer'
import Eventphotos from '../Components/Eventphotos'
const Events = () => {
  return (
    
    <div>
    <Header/>

    <PastEvents/>
    <UpcomingEvents/>
    <Eventphotos/>
   <Hosttevent/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default Events