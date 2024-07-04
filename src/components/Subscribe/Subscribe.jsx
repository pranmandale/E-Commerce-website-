import React from 'react'
import Banner from "../../assets/website/orange-pattern.jpg"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "250px",
    width: "100%",
}

const Subscribe = () => {
  return (
    <div 
    data-aos="zoom-in"
    className='mb-0 bg-gray-100 dark:bg-gray-800 text-white '
    // style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10 pt-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl text-gray-900 !text-center sm:text-left sm:text-4xl font-semibold dark:text-white'>
                Get Notified about new products
            </h1>
            <input
                data-aos="fade-up"
                type='text'
                placeholder='enter your email'
                className='w-full p-3 rounded-full'
            />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
