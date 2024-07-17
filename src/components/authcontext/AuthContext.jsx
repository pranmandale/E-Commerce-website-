// // AuthContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { account } from '../appwrite/Appwrite';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const fetchUser = async () => {
//         try {
//             const response = await account.get();
//             setUser(response);
//         } catch (error) {
//             setUser(null);
//         }
//     };

//     useEffect(() => {
//         fetchUser();
//     }, []);

//     const login = async (email, password) => {
//         const response = await account.createEmailSession(email, password);
//         setUser(response);
//     };

//     const logout = async () => {
//         await account.deleteSession('current');
//         setUser(null);
//     };

//     const value = { user, login, logout };

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


// src/authcontext/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { account } from '../appwrite/Appwrite'; // Adjust the import path as needed

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
            localStorage.setItem('auth', 'true'); // Store authentication state
        } catch (error) {
            console.error('Login error:', error); // Log the error details
            throw error;
        }
    };

    const logout = async () => {
        await account.deleteSession('current');
        setUser(null);
        localStorage.removeItem('auth'); // Remove authentication state
    };

    const value = { user, login, logout, loading };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
