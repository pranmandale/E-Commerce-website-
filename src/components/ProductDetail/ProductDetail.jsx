
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../data/Products';
import { useCart } from '../cartcontext/CartContext';
import { useAuth } from '../authcontext/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItemToCart } = useCart();
  const { user, loading } = useAuth();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = Products.find(prod => prod.id === parseInt(id, 10));
    setProduct(selectedProduct);
  }, [id]);

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    if (!user) {
      alert('Please log in to add items to the cart.');
      return;
    }
    addItemToCart(product);
    alert('Item Added to cart');
    console.log('Item added to cart:', product);
  };

  const handleBuyNow = (event) => {
    event.stopPropagation();
    if (!user) {
      alert('Please log in to proceed with the purchase.');
      return;
    }
    // Implement Buy Now logic here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 h-[900px]">
      <div className="p-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mb-6">
          <img src={product.img} alt={product.title} className="w-[400px] h-100 object-cover rounded-lg" />
        </div>
        <h1 className="mb-4 text-2xl font-bold text-center">{product.title}</h1>
        <p className="mb-4 text-2xl font-semibold text-center">Price: ₹{product.price}</p>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={(e) => handleAddToCart(product, e)}
            className="px-6 py-3 text-white duration-200 rounded-full shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 hover:scale-105"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="px-6 py-3 text-white duration-200 rounded-full shadow-md bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
