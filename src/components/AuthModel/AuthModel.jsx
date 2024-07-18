
import React, { useState } from 'react';
import Login from "../Login/Login.jsx";
import Signup from "../Signup/Signup.jsx";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>
        {isLogin ? (
          <Login onClose={onClose} onSignupClick={handleSignupClick} />
        ) : (
          <Signup onClose={onClose} onLoginClick={handleLoginClick} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
