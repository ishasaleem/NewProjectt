import React from 'react'
import Header from '../Components/Header'
import Contactus from '../Components/Contactus'
import Phonenumber from '../Components/Phonenumber'
import Emailaddress from '../Components/Emailaddress'
import BusinessHours from '../Components/BusinessHours'
import Footer from '../Components/Footer'
import Location from '../Components/Location'
const ContactUS = () => {
  return (
    <div>
        <Header/>
   <Contactus/>
        <Phonenumber/>
        <Emailaddress/>
        <BusinessHours/>
        <Location/>
        <Footer/>
      
    </div>
  )
}

export default ContactUS