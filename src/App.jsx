// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import EProductList from './components/EProductList/EProductList';
import KProductList from './components/kProductList/KProductList';
import SearchResults from './components/SearchResults/SearchResults';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AuthModal from './components/AuthModel/AuthModel'; // Import the AuthModal component
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuthModal = () => {
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

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
        <Navbar onOpenAuthModal={handleOpenAuthModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids-wear" element={<KProductList category="kids" />} />
          <Route path="/mens-wear" element={<ProductList category="mobile" />} />
          <Route path="/electronics" element={<EProductList category="electronics" />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Remove this route as it's now managed by AuthModal */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
        <Footer />
        {showAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
      </div>
    </Router>
  );
};

export default App;
