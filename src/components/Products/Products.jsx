import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

import Product from '../../data/Products';

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#AAB7B8" }}
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#AAB7B8" }}
      onClick={onClick}
    />
  );
};

const Products = ({ category }) => {
  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const navigate = useNavigate();

  const filteredProducts = Product.filter(product => product.id >= 26 && product.id <= 31);
  const filteredProducts_smartphones = Product.filter(product => product.id >= 32 && product.id <= 37);
  const filteredProducts_Bestdeals = Product.filter(product => product.id >= 38 && product.id <= 43);

  return (
    <div className='pb-5 mt-0 bg-gray-100 dark:bg-gray-900 dark:text-white '>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-3xl font-semibold text-primary dark:text-secondary'>Top Selling Products for you</p>
          <h1 className='text-5xl font-bold dark:text-white'>Products</h1>
        </div>

        <div>
          <h1 className='pb-5 text-2xl font-bold'>Best Deals on Fashions</h1>
          <Slider {...settings}>
            {filteredProducts.map(data => (
              <div
                key={data.id}
                className='p-3 space-y-3 bg-white rounded-md shadow-md cursor-pointer dark:bg-gray-800 dark:text-white'
                onClick={() => navigate(`/product/${data.id}`)}
              >
                <img src={data.img} alt={data.title} className='h-[200px] w-[150px] object-cover' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='pt-8'>
          <h1 className='pb-4 text-2xl font-bold'>Top Deals on SmartPhones</h1>
          <Slider {...settings}>
            {filteredProducts_smartphones.map(data => (
              <div
                key={data.id}
                className='p-3 space-y-3 bg-white rounded-md shadow-md cursor-pointer dark:bg-gray-800 dark:text-white'
                onClick={() => navigate(`/product/${data.id}`)}
              >
                <img src={data.img} alt={data.title} className='h-[200px] w-[150px] object-cover' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='pt-8'>
          <h1 className='pb-4 text-2xl font-bold'>Best Fashion Brand For You!</h1>
          <Slider {...settings}>
            {filteredProducts_Bestdeals.map(data => (
              <div
                key={data.id}
                className='p-3 space-y-3 bg-white rounded-md shadow-md cursor-pointer dark:bg-gray-800 dark:text-white'
                onClick={() => navigate(`/product/${data.id}`)}
              >
                <img src={data.img} alt={data.title} className='h-[200px] w-[150px] object-cover' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
