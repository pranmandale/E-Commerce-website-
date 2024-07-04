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
      
      className='mb-0  dark:bg-gray-900 text-white'

    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl text-gray-900 !text-center sm:text-left sm:text-4xl font-semibold dark:text-white'>
            Get Notified about new products
          </h1>
          {/* <input
            data-aos="fade-up"
            type='text'
            placeholder='Enter your email'
            className='w-full p-3 rounded-full'
          /> */}
          <div className='text-center'>
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 
              text-white py-1 px-4 rounded-full"
            >
              Sign in
            </button>
            <p 
              className='text-gray-900 cursor-pointer dark:text-white pt-3' 
              onClick={() => alert("Ordering not available yet")}
            >
              Already have an account?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
