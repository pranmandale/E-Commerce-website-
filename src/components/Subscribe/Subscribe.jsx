import React, { useState } from 'react';
import AuthModal from '../AuthModel/AuthModel';
import { useAuth } from '../authcontext/AuthContext'; // Import useAuth from AuthContext



const Subscribe = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth(); // Get the user from the auth context

  const handleOpenModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  // If the user is logged in, don't render this component
  if (user) {
    return null;
  }

  return (
    <div className="mb-0 dark:bg-gray-900 text-white">
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl text-gray-900 !text-center sm:text-left sm:text-4xl font-semibold dark:text-white'>
            Get Notified about new products
          </h1>
          <div className='text-center'>
            <button
              onClick={handleOpenModal}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 
              text-white py-1 px-4 rounded-full"
            >
              Sign in
            </button>
            <p 
              className='text-gray-900 cursor-pointer dark:text-white pt-3' 
              onClick={handleOpenModal}
            >
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
      {isAuthModalOpen && <AuthModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Subscribe;
