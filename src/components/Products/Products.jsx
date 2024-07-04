import React from 'react';
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from 'react-icons/fa';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className='mt-0 pb-5 bg-gray-100 dark:bg-gray-900 dark:text-white'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-primary dark:text-secondary'>Top Selling Products for you</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 dark:text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Facere velit tenetur expedita.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* Card section */}
            {ProductsData.map((data) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className='space-y-3 bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow-md'
              >
                <img src={data.img} alt=''
                  className='h-[220px] w-[150px] object-cover rounded-md'
                />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-500'/>
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button  */}
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-10 rounded-md'>
              view all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
