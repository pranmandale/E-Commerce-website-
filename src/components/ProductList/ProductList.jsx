import React from 'react';
import products from '../../data/Products';

const ProductList = ({ category }) => {
  console.log('Category:', category);
  console.log('All Products:', products);

  const filteredProducts = products.filter(product => product.category === category);

  console.log('Filtered Products:', filteredProducts);

  return (
    <div className="container mx-auto py-12">
    <h4 className='text-3xl pb-4 font-bold dark:text-white'>Products</h4>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="bg-white dark:bg-gray-800 p-4 mb-6 rounded-lg shadow-md flex">
            <img src={product.img} alt={product.title} className="w-48 h-48 object-cover rounded-lg mr-4" />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="mt-2">{product.color}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
