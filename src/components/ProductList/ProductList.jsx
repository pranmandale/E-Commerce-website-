import React from 'react';
import products from '../../data/Products';

const ProductList = ({ category }) => {
  console.log('Category:', category);
  console.log('All Products:', products);

  const filteredProducts = products.filter(product => product.category === category);

  console.log('Filtered Products:', filteredProducts);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="pt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="mt-2">{product.color}</p>
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
