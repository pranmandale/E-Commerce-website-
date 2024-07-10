import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Home from './Home';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useInsertionEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-wear" element={<ProductList category="mobile" />} />
          <Route path="/electronics" element={<ProductList category="electronics" />} />
          {/* <Route path="/womens-wear" element={<ProductList category="womens-wear" />} /> */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
