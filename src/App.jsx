
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import EProductList from './components/EProductList/EProductList';
import KProductList from './components/kProductList/KProductList';
import SearchResults from './components/SearchResults/SearchResults';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AuthModal from './components/AuthModel/AuthModel';
import Products from './components/Products/Products';
import Top from './components/TopRatedProductList/Top'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cart from './components/cart/Cart';
import { AuthProvider } from './components/authcontext/AuthContext';
import { CartProvider } from './components/cartcontext/CartContext';

const App = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleOpenAuthModal = () => {
        setShowAuthModal(true);
    };

    const handleCloseAuthModal = () => {
        setShowAuthModal(false);
    };

    return (
        <AuthProvider>
            <CartProvider>
                <Router basename="/E-Commerce-website-">
                    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                        <Navbar onOpenAuthModal={handleOpenAuthModal} />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/top-products" element={<Top category="product2" />}/>
                            <Route path="/kids-wear" element={<KProductList category="kids" />} />
                            <Route path="/mens-wear" element={<ProductList category="mobile" />} />
                            <Route path="/electronics" element={<EProductList category="electronics" />} />
                            <Route path="/search" element={<SearchResults />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                        <Footer />
                        {showAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
                    </div>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
