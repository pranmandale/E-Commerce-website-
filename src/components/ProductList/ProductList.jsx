// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Products from '../../data/Products'; // Adjust the path to your product data
// import { useCart } from '../cartcontext/CartContext'; 

// const ProductList = ({ category }) => {
//     const [selectedPriceRange, setSelectedPriceRange] = useState(null);
//     const navigate = useNavigate();
//     const { addItemToCart } = useCart(); // Get addItemToCart from CartContext

//     const priceRanges = [
//         { label: 'Below ₹1000', min: 0, max: 999 },
//         { label: '₹1000 - ₹1500', min: 1000, max: 1500 },
//         { label: 'Above ₹15,000', min: 1501, max: Number.POSITIVE_INFINITY }
//     ];

//     const handleRadioChange = (e) => {
//         const { value } = e.target;
//         const [min, max] = value.split('-').map(Number);
//         setSelectedPriceRange({ min, max });
//     };

//     const filteredProducts = Products.filter(product => {
//         const productPrice = product.price; // Assuming you have a price field
//         const isCategoryMatch = product.category === category;
//         const isPriceMatch = !selectedPriceRange || (productPrice >= selectedPriceRange.min && productPrice <= selectedPriceRange.max);
//         return isCategoryMatch && isPriceMatch;
//     });

//     // const handleAddToCart = (product, event) => {
//     //     event.stopPropagation(); // Prevent navigation on button click
//     //     addItemToCart(product);
//     //     console.log('Item added to cart:', product);
//     // };

//     const handleProductClick = (productId) => {
//         navigate(`/product/${productId}`);
//     };

//     return (
//         <div className="container mx-auto py-12 flex">
//             <div className="w-1/4 pr-8">
//                 <h4 className='text-2xl pb-4 mb-3 font-bold dark:text-white'>Filter by Price</h4>
//                 {priceRanges.map((range, index) => (
//                     <div key={index} className="mb-4">
//                         <label className="inline-flex items-center">
//                             <input 
//                                 type="radio" 
//                                 name="priceRange" 
//                                 value={`${range.min}-${range.max}`} 
//                                 onChange={handleRadioChange} 
//                                 checked={selectedPriceRange && selectedPriceRange.min === range.min && selectedPriceRange.max === range.max}
//                                 className="form-radio"
//                             />
//                             <span className="ml-2 text-gray-700 dark:text-white">{range.label}</span>
//                         </label>
//                     </div>
//                 ))}
//             </div>
//             <div className="w-3/4">
//                 <h4 className='text-2xl pb-4 mb-3 font-bold dark:text-white'>Products</h4>
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map(product => (
//                         <div key={product.id} className="mb-4">
//                             <div 
//                                 className="flex bg-white dark:bg-gray-800 p-4 w-full rounded-lg py-10 cursor-pointer shadow-md"
//                                 onClick={() => handleProductClick(product.id)} 
//                             >
//                                 <img src={product.img} alt={product.title} className="w-52 h-63 object-cover rounded-lg mr-8" />
//                                 <div className="flex flex-col justify-between w-full">
//                                     <div className='ml-6'>
//                                         <h3 className="text-lg font-semibold">{product.title}</h3>
//                                         <p className="mt-2">{product.color}</p>
//                                         <p className="mt-2">Price: ₹{product.price}</p>
//                                     </div>
//                                     {/* <button 
//                                         onClick={(e) => handleAddToCart(product, e) }
//                                         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//                                     >
//                                         Add to Cart
//                                     </button> */}
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found in this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductList;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../../data/Products'; // Adjust the path to your product data
import { useCart } from '../cartcontext/CartContext'; 

const ProductList = ({ category }) => {
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const navigate = useNavigate();
    const { addItemToCart } = useCart(); // Get addItemToCart from CartContext

    const priceRanges = [
        { label: 'Below ₹1000', min: 0, max: 999 },
        { label: '₹1000 - ₹1500', min: 1000, max: 1500 },
        { label: 'Above ₹15,000', min: 1501, max: Number.POSITIVE_INFINITY }
    ];

    const handleRadioChange = (e) => {
        const { value } = e.target;
        const [min, max] = value.split('-').map(Number);
        setSelectedPriceRange({ min, max });
    };

    const filteredProducts = Products.filter(product => {
        const productPrice = product.price; // Assuming you have a price field
        const isCategoryMatch = product.category === category;
        const isPriceMatch = !selectedPriceRange || (productPrice >= selectedPriceRange.min && productPrice <= selectedPriceRange.max);
        return isCategoryMatch && isPriceMatch;
    });

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="container mx-auto py-12 flex">
            <div className="w-1/4 pr-8">
                <h4 className='text-2xl pb-4 mb-3 font-bold dark:text-white'>Filter by Price</h4>
                {priceRanges.map((range, index) => (
                    <div key={index} className="mb-4">
                        <label className="inline-flex items-center">
                            <input 
                                type="radio" 
                                name="priceRange" 
                                value={`${range.min}-${range.max}`} 
                                onChange={handleRadioChange} 
                                checked={selectedPriceRange && selectedPriceRange.min === range.min && selectedPriceRange.max === range.max}
                                className="form-radio"
                            />
                            <span className="ml-2 text-gray-700 dark:text-white">{range.label}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div className="w-3/4">
                <h4 className='text-2xl pb-4 mb-3 font-bold dark:text-white'>Products</h4>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="mb-4">
                            <div 
                                className="flex bg-white dark:bg-gray-800 p-4 w-full rounded-lg py-10 cursor-pointer shadow-md"
                                onClick={() => handleProductClick(product.id)} 
                            >
                                <img src={product.img} alt={product.title} className="w-52 h-63 object-cover rounded-lg mr-8" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className='ml-6'>
                                        <h3 className="text-lg font-semibold">{product.title}</h3>
                                        <p className="mt-2">{product.color}</p>
                                        <p className="mt-2">Price: ₹{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;

