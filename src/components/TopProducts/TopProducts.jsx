import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'
import Product from '../../data/Products';



const TopProducts = () => {
  // navigation to productdetail page
  const navigate = useNavigate();


  const filteredProducts = Product.filter(product => product.id >= 44 && product.id <= 46);
  return (
    <div className='mt-0 pt-6 pb-4 bg-gray-100 dark:bg-gray-900 dark:text-white'>
      <div className='container'>
        {/* header section */}
        <div className='text-left mb-24 '>
          <p 
          className='text-sm text-primary dark:text-secondary'
          >
          Top Rated Products for you
          </p>
          <h1 
        //   data-aos="fade-up" 
          className='text-3xl font-bold dark:text-white'
          >
          Best Products
          </h1>
          <p 
        //    data-aos="fade-up" 
          className='text-xs text-gray-400 dark:text-gray-500'
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Facere velit tenetur expedita.
          </p>
        </div>
        <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
        >
            {
              filteredProducts.map((data) => (
                    <div
                    key={data.id}

                    // animations added
                    // data-aos="zoom-in"
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 hover:
                    hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
                    
                    >
                    {/* image section */}
                      <div className='h-[100px]'>
                        <img
                          src={data.img}
                          className='max-w-[140px] block mx-auto transform -translate-y-20 
                          group-hover:scale 105 duration-300 drop-shadow-md'
                        />
                      </div>
                      {/* details section */}
                      <div className='p-4 text-center'>
                      {/* start rating */}
                          <div className='w-full flex items-center justify-center gap-1'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                          </div>
                          <h1 className='text-xl font-bold'>{data.title}</h1>
                          <p 
                          className='text-gray-500 group-hover:white duration-300 text-sm line-clamp-2'
                          >{data.description}                           
                          </p>
                          <button
                          className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4
                          group-hover:bg-primary group:hover:text-primary'
                          // onClick={handleOrderPopup}
                          onClick={() => navigate(`/product/${data.id}`)}
                          >
                          Order Now
                          </button>
                      </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
