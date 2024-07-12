import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Kwear from '../../data/Products'; 

const KProductList = ({ category }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const priceRanges = [
    { label: 'Below ₹1000', min: 0, max: 999 },
    { label: '₹1000 - ₹1500', min: 1000, max: 1500 },
    { label: 'Above ₹1500', min: 1501, max: Infinity }
  ];

  const handleRadioChange = (e) => {
    const { value } = e.target;
    const [min, max] = value.split('-').map(Number);
    setSelectedPriceRange({ min, max });
  };

  const filteredProducts = Kwear.filter(product => {
    const productPrice = parseFloat(product.color.replace(/[^\d.]/g, ''));
    const isCategoryMatch = product.category.toLowerCase() === category.toLowerCase(); // Case insensitive category match
    const isPriceMatch = !selectedPriceRange || (productPrice >= selectedPriceRange.min && productPrice <= selectedPriceRange.max);
    return isCategoryMatch && isPriceMatch;
  });

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
                onClick={() => navigate(`/product/${product.id}`)} // Navigate to product detail page
              >
                <img src={product.img} alt={product.title} className="w-52 h-63 object-cover rounded-lg mr-8" />
                <div className="flex flex-col justify-between">
                  <div className='ml-6'>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="mt-2">{product.color}</p>
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

export default KProductList;
