// // AuthModal.js
// import React, { useState } from 'react';
// import Login from "../Login/Login.jsx";
// import Signup from "../Signup/Signup.jsx";

// const AuthModal = ({ onClose }) => {
//   const [isLogin, setIsLogin] = useState(true);

//   const handleLoginClick = () => {
//     setIsLogin(true);
//   };

//   const handleSignupClick = () => {
//     setIsLogin(false);
//   };

//   return (
//     <>
//       {isLogin ? (
//         <Login onClose={onClose} onSignupClick={handleSignupClick} />
//       ) : (
//         <Signup onClose={onClose} onLoginClick={handleLoginClick} />
//       )}
//     </>
//   );
// };

// export default AuthModal;


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
    <>
      {isLogin ? (
        <Login onClose={onClose} onSignupClick={handleSignupClick} />
      ) : (
        <Signup onClose={onClose} onLoginClick={handleLoginClick} />
      )}
    </>
  );
};

export default AuthModal;
