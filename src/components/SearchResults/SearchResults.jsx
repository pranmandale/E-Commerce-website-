import React from 'react';
import { useLocation } from 'react-router-dom';
import Fuse from 'fuse.js';
import Products from '../../data/Products';

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query')?.toLowerCase().trim() || ''; // Ensure query is lowercased and trimmed

  // Ensure Products data is correctly structured and available
  const fuse = new Fuse(Products, {
    keys: ['title', 'color'],
    threshold: 0.3 // Adjust threshold as needed
  });

  const filteredProducts = fuse.search(query).map(result => result.item);

  return (
    <div className="container mx-auto py-12">
      <h4 className='text-2xl pb-4 mb-3 font-bold dark:text-white'>Search Results</h4>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="mb-4">
            <div 
              className="flex bg-white dark:bg-gray-800 p-4 w-full rounded-lg py-10 cursor-pointer shadow-md"
              onClick={() => alert(`Welcome to ${product.title} page`)} >
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
        <p>No products found matching your search criteria.</p>
      )}
    </div>
  );
};

export default SearchResults;
