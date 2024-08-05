// // ParentComponent.jsx
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import AuthModal from './AuthModal';

// const ParentComponent = () => {
//     const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//     const [authModalType, setAuthModalType] = useState('login'); // 'login' or 'signup'

//     const handleOpenAuthModal = (type) => {
//         setAuthModalType(type);
//         setIsAuthModalOpen(true);
//     };

//     const handleCloseAuthModal = () => {
//         setIsAuthModalOpen(false);
//     };

//     return (
//         <div>
//             <Navbar onOpenAuthModal={handleOpenAuthModal} />
//             {isAuthModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50">
//                     <div className="absolute inset-0 bg-black opacity-50" onClick={handleCloseAuthModal}></div>
//                     <div className="relative bg-white rounded-lg shadow-lg p-6 z-10">
//                         <AuthModal onClose={handleCloseAuthModal} type={authModalType} />
//                     </div>
//                 </div>
//             )}
//             {/* Other components can be added here */}
//         </div>
//     );
// };

// export default ParentComponent;
