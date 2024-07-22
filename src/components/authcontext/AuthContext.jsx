import React, { createContext, useState, useContext, useEffect } from 'react';
import { account } from '../appwrite/Appwrite';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await account.get();
            setUser(response);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            await fetchUser();
            localStorage.setItem('auth', 'true');
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        await account.deleteSession('current');
        setUser(null);
        setCart([]);
        localStorage.removeItem('auth');
    };

    const addItemToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        console.log(`Added to cart: ${product.title}`);
    };

    const removeItemFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const value = { user, login, logout, loading, cart, addItemToCart, removeItemFromCart };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};



