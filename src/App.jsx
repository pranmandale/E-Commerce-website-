// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './Home';
// import Footer from './components/Footer/Footer';
// import ProductList from './components/ProductList/ProductList';
// import EProductList from './components/EProductList/EProductList';
// import KProductList from './components/kProductList/KProductList';
// import SearchResults from './components/SearchResults/SearchResults';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import AuthModal from './components/AuthModel/AuthModel'; // Import the AuthModal component
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { AuthProvider } from './components/authcontext/AuthContext'; // Import AuthProvider
// import Cart from './components/cart/Cart'; // Import Cart component

// const App = () => {
//     const [showAuthModal, setShowAuthModal] = useState(false);

//     const handleOpenAuthModal = () => {
//         setShowAuthModal(true);
//     };

//     const handleCloseAuthModal = () => {
//         setShowAuthModal(false);
//     };

//     React.useEffect(() => {
//         AOS.init({
//             offset: 100,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//         });
//         AOS.refresh();
//     }, []);

//     return (
//         <AuthProvider>
//             <Router basename="/E-Commerce-website-">
//                 <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//                     <Navbar onOpenAuthModal={handleOpenAuthModal} />
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/kids-wear" element={<KProductList category="kids" />} />
//                         <Route path="/mens-wear" element={<ProductList category="mobile" />} />
//                         <Route path="/electronics" element={<EProductList category="electronics" />} />
//                         <Route path="/search" element={<SearchResults />} />
//                         <Route path="/product/:id" element={<ProductDetail />} />
//                         <Route path="/cart" element={<Cart />} /> {/* Add this route for Cart */}
//                     </Routes>
//                     <Footer />
//                     {showAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
//                 </div>
//             </Router>
//         </AuthProvider>
//     );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './Home';
// import Footer from './components/Footer/Footer';
// import ProductList from './components/ProductList/ProductList';
// import EProductList from './components/EProductList/EProductList';
// import KProductList from './components/kProductList/KProductList';
// import SearchResults from './components/SearchResults/SearchResults';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import AuthModal from './components/AuthModel/AuthModel';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { AuthProvider } from './components/authcontext/AuthContext';
// import Cart from './components/cart/Cart';
// import { CartProvider } from './components/cartcontext/CartContext'; // Adjust the import path

// const App = () => {
//     const [showAuthModal, setShowAuthModal] = useState(false);

//     const handleOpenAuthModal = () => {
//         setShowAuthModal(true);
//     };

//     const handleCloseAuthModal = () => {
//         setShowAuthModal(false);
//     };

//     React.useEffect(() => {
//         AOS.init({
//             offset: 100,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//         });
//         AOS.refresh();
//     }, []);

//     return (
//         <AuthProvider>
//             <CartProvider> {/* Wrap the entire application with CartProvider */}
//                 <Router basename="/E-Commerce-website-">
//                     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//                         <Navbar onOpenAuthModal={handleOpenAuthModal} />
//                         <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route path="/kids-wear" element={<KProductList category="kids" />} />
//                             <Route path="/mens-wear" element={<ProductList category="mobile" />} />
//                             <Route path="/electronics" element={<EProductList category="electronics" />} />
//                             <Route path="/search" element={<SearchResults />} />
//                             <Route path="/product/:id" element={<ProductDetail />} />
//                             <Route path="/cart" element={<Cart />} />
//                         </Routes>
//                         <Footer />
//                         {showAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
//                     </div>
//                 </Router>
//             </CartProvider>
//         </AuthProvider>
//     );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './Home';
// import Footer from './components/Footer/Footer';
// import ProductList from './components/ProductList/ProductList';
// import EProductList from './components/EProductList/EProductList';
// import KProductList from './components/kProductList/KProductList';
// import SearchResults from './components/SearchResults/SearchResults';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import AuthModal from './components/AuthModel/AuthModel';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Cart from './components/cart/Cart';
// import { AuthProvider } from './components/authcontext/AuthContext';
// import { CartProvider } from './components/cartcontext/CartContext'; // Ensure CartProvider is imported

// const App = () => {
//     React.useEffect(() => {
//         AOS.init({
//             offset: 100,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//         });
//         AOS.refresh();
//     }, []);

//     return (
//         <AuthProvider>
//             <CartProvider> {/* Wrap your app with CartProvider */}
//                 <Router basename="/E-Commerce-website-">
//                     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//                         <Navbar />
//                         <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route path="/kids-wear" element={<KProductList category="kids" />} />
//                             <Route path="/mens-wear" element={<ProductList category="mobile" />} />
//                             <Route path="/electronics" element={<EProductList category="electronics" />} />
//                             <Route path="/search" element={<SearchResults />} />
//                             <Route path="/product/:id" element={<ProductDetail />} />
//                             <Route path="/cart" element={<Cart />} />
//                         </Routes>
//                         <Footer />
//                     </div>
//                 </Router>
//             </CartProvider>
//         </AuthProvider>
//     );
// };

// export default App;



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
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cart from './components/cart/Cart';
import { AuthProvider } from './components/authcontext/AuthContext';
import { CartProvider } from './components/cartcontext/CartContext'; // Ensure CartProvider is imported

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
        <AuthProvider>
            <CartProvider> {/* Wrap your app with CartProvider */}
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
