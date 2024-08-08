import React, { createContext, useState, useContext } from 'react';

// Create a new context
export const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

// CartContext provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart function
    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Remove item from cart function (assuming item has a unique identifier like id)
    const removeItemFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    // Clear cart function
    const clearCart = () => {
        setCartItems([]);
    };

    // Function to check if item is in cart based on item ID
    const isInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};
