import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'

import Footer from './components/Footer/Footer'

const Home = () => {
  React.useInsertionEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();
}, []);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      {/* <Navbar/> */}
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
