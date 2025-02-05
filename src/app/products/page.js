import React from 'react'
import Navbar from '../Components/Navbar'
import Navbar_2 from '../Components/Navbae_2'
import Prod_hero1 from '../Components/Prod_hero1'
import All_Products_bar from '../Components/All_Products_bar'
import Footer from '../Components/Footer'




const Products = () => {
  return (
    <>
        <Navbar/>
        <Navbar_2/>
        <Prod_hero1/>
        <All_Products_bar/>
        <div className="mt-3">
        <Footer/>
        </div>
    </>
  )
}

export default Products