


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../../data/Products'; // Adjust the path to your product data
import { useCart } from '../cartcontext/CartContext'; // Import useCart from CartContext

const BuyNowProductDetail = ({ product }) => {
    const navigate = useNavigate();
    const { addItemToCart, removeItemFromCart, isInCart } = useCart(); // Get cart functions from CartContext
    const [isInCartState, setIsInCartState] = useState(false); // State to track if product is in cart

    useEffect(() => {
        // Check if product is in cart on component mount
        setIsInCartState(isInCart(product.id));
    }, [product, isInCart]);

    const handleBuyNow = () => {
        addItemToCart(product); // Add product to cart using context function
        console.log('Item added to cart:', product); // Log confirmation message
        setIsInCartState(true); // Update isInCartState after adding to cart
        navigate('/cart'); // Navigate to cart page or another relevant page after adding to cart
    };

    const handleRemoveFromCart = () => {
        removeItemFromCart(product.id); // Remove product from cart using context function
        console.log('Item removed from cart:', product); // Log confirmation message
        setIsInCartState(false); // Update isInCartState after removing from cart
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                    <img src={product.img} alt={product.title} className="w-[400px] h-96 object-cover rounded-lg" />
                </div>
                <h1 className="text-2xl font-bold mb-4 text-center">{product.title}</h1>
                <p className="text-2xl font-semibold mb-4 text-center">Price: ₹{product.price}</p>

                
                <div className="flex justify-center mt-4 space-x-4">
          <button
           onClick={handleRemoveFromCart}
            className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 hover:scale-105 duration-200 
                            text-white py-3 px-6 rounded-full shadow-md"
          >
           Remove from Cart
          </button>
          <button
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 hover:scale-105 duration-200 
            text-white py-3 px-6 rounded-full shadow-md"
          >
            Buy Now
          </button>
        </div>
            </div>
        </div>
    );
};

export default BuyNowProductDetail;
