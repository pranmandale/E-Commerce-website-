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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md dark:bg-gray-800">
        <button
          className="absolute text-gray-700 top-4 right-4 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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


