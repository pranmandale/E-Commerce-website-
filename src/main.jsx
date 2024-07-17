import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// App.js or index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // import { AuthProvider } from './AuthContext';
// import {AuthProvider} from './components/authcontext/AuthContext';

// ReactDOM.render(
//     <React.StrictMode>
//         <AuthProvider>
//             <App />
//         </AuthProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
