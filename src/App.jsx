// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import EProductList from './components/EProductList/EProductList';
// import KProductList from './components/KProductList/KProductList';
import KProductList from './components/kProductList/KProductList';
import SearchResults from './components/SearchResults/SearchResults';
import ProductDetail from './components/ProductDetail/ProductDetail'; // Import the ProductDetail component
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router basename="/E-Commerce-website-">
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids-wear" element={<KProductList category="kids" />} />
          <Route path="/mens-wear" element={<ProductList category="mobile" />} />
          <Route path="/electronics" element={<EProductList category="electronics" />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
