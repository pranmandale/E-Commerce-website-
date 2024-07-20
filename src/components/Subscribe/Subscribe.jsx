// import React from 'react'
// import Banner from "../../assets/website/orange-pattern.jpg"

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "250px",
//   width: "100%",
// }

// const Subscribe = () => {
//   return (
//     <div 
      
//       className='mb-0  dark:bg-gray-900 text-white'

//     >
//       <div className='container backdrop-blur-sm py-10'>
//         <div className='space-y-6 max-w-xl mx-auto'>
//           <h1 className='text-2xl text-gray-900 !text-center sm:text-left sm:text-4xl font-semibold dark:text-white'>
//             Get Notified about new products
//           </h1>
//           <div className='text-center'>
//             <button
//               onClick={() => alert("Ordering not available yet")}
//               className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 
//               text-white py-1 px-4 rounded-full"
//             >
//               Sign in
//             </button>
//             <p 
//               className='text-gray-900 cursor-pointer dark:text-white pt-3' 
//               onClick={() => alert("Ordering not available yet")}
//             >
//               Already have an account? Login
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Subscribe


import React, { useState } from 'react';
import Banner from "../../assets/website/orange-pattern.jpg";
import AuthModal from '../AuthModel/AuthModel';


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "250px",
  width: "100%",
};

const Subscribe = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

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
