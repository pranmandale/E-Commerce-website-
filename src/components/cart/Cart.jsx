
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../cartcontext/CartContext'; 
import BuyNowProductDetail from '../Cartdetail/CartDetail'; // Adjust path as needed

const Cart = () => {
    const { cartItems } = useCart(); // Assuming useCart provides cartItems with product details
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product

    // Function to handle click on a product
    const handleProductClick = (productId) => {
        setSelectedProduct(productId); // Set selected product based on productId
    };

    // Function to navigate to product detail page
    const goToProductDetail = (productId) => {
        navigate(`/product/${productId}`); // Navigate to product detail page
    };

    return (
        <div className="container mx-auto py-15">
            <h2 className="text-3xl font-bold mb-4">Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer">
                            {/* Conditionally render BuyNowProductDetail if selectedProduct matches */}
                            {selectedProduct === item.id ? (
                                <BuyNowProductDetail key={index} product={item} />
                            ) : (
                                <>
                                    <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-lg mr-4" />
                                    <div className="flex-grow" onClick={() => handleProductClick(item.id)}>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-gray-600">Price: ₹{item.price}</p>
                                        <p className="text-gray-600">Description: {item.description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
