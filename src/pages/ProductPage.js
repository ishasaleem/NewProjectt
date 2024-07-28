import React from 'react'
import Products from '../Components/Products'
import Review from '../Components/Review'
import Header from '../Components/Header'
import FAQs from '../Components/FAQ'
import Promotions from '../Components/Promotions'
import Prices from '../Components/Prices'
import Footer from '../Components/Footer'
const ProductPage = () => {
  return (
    <div><Header/>
        <Products/>
        
        <Promotions/>
        <Prices/>
        <Review/>
        <FAQs/>
        <Footer/>
    </div>
  )
}

export default ProductPage