import React from 'react';
import Img1 from "../../assets/Mobile/e3.webp";
import Img2 from "../../assets/Mobile/w1.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/Mobile/p1.jpg"
import Img6 from "../../assets/Mobile/p2.webp"
import Img7 from "../../assets/Mobile/v1.jpg"
import Img8 from "../../assets/Mobile/v2.png"
import Img9 from "../../assets/Mobile/v3.webp"
import Img10 from "../../assets/Mobile/v4.jpg"
import Img11 from "../../assets/Mobile/v5.webp"

import Img12 from "../../assets/Mobile/f1.webp"
import Img13 from "../../assets/Mobile/f2.webp"

import Img14 from "../../assets/Mobile/s1.jpg"
import Img15 from "../../assets/Mobile/s2.jpg"
import Img16 from "../../assets/Mobile/wa1.jpg"
import Img17 from "../../assets/Mobile/e2.webp"
import Img18 from "../../assets/Mobile/j1.avif"
import Img19 from "../../assets/Mobile/j2.avif"
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick"

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    // rating: 5.0,
    color: "From ₹399",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    // rating: 4.5,
    color: "From ₹249",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    // rating: 4.7,
    color: "From ₹199",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    // rating: 4.4,
    color: "From ₹399",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img12,
    title: "Fashion T-Shirt",
    // rating: 4.5,
    color: "From 299",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img13,
    title: "Fashion T-Shirt",
    // rating: 4.5,
    color: "From ₹299",
    aosDelay: "800",
  },
];

const SmartPhone = [
  {
    id: 1,
    img: Img5,
    title: "Blue Poco X3",
    // rating: 4.5,
    color: "From ₹99999",
    aosDelay: "800",
  },
  {
    id: 2,
    img: Img6,
    title: "Black Poco X3",
    // rating: 4.5,
    color: "From ₹10999",
    aosDelay: "800",
  },
  {
    id: 3,
    img: Img7,
    title: "Fhd Glow Y21 vivo",
    // rating: 4.5,
    color: "From ₹13999",
    aosDelay: "800",
  },
  {
    id: 4,
    img: Img8,
    title: "vivo X100",
    // rating: 4.5,
    color: "From ₹14999",
    aosDelay: "800",
  },
  {
    id: 5,
    img: Img9,
    title: "vovo T3 series",
    // rating: 4.5,
    color: "From ₹18999",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img11,
    title: "Blue vivo V15",
    // rating: 4.5,
    color: "From ₹13999",
    aosDelay: "800",
  },
];

const BestDeals = [
  {
    id: 1,
    img: Img14,
    title: "casual shoes for men",
    // rating: 4.5,
    color: "From ₹399",
    aosDelay: "800",
  },
  {
    id: 2,
    img: Img15,
    title: "Leather Shoes for men",
    // rating: 4.5,
    color: "From ₹399",
    aosDelay: "800",
  },
  {
    id: 3,
    img: Img16,
    title: "wallet",
    // rating: 4.5,
    color: "From ₹99",
    aosDelay: "800",
  },
  {
    id: 4,
    img: Img17,
    title: "Bose earbuds",
    // rating: 4.5,
    color: "From ₹799",
    aosDelay: "800",
  },
  {
    id: 5,
    img: Img18,
    title: "Mid rise fid jeans",
    // rating: 4.5,
    color: "From ₹999",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img19,
    title: "jeans for mens",
    // rating: 4.5,
    color: "From ₹899",
    aosDelay: "800",
  },
];

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

const Products = () => {
  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='mt-0 pb-5 bg-gray-100 dark:bg-gray-900 dark:text-white'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-3xl font-semibold text-sm text-primary dark:text-secondary'>Top Selling Products for you</p>
          <h1 className='text-5xl font-bold dark:text-white'>Products</h1>
          {/* <p className='text-xs text-gray-400 dark:text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere velit tenetur expedita.
          </p> */}
        </div>
              
        {/* Body section */}
        <div>
          <h1 className='pb-5 text-2xl font-bold'>Best Deals on Fashions</h1>
          <Slider {...settings}>
            {ProductsData.map((data) => (
              <div key={data.id} className='space-y-3 bg-white dark:bg-gray-800 dark:text-white p-3 rounded-md shadow-md'>
                <img src={data.img} alt='' className='h-[200px] w-[150px] object-cover' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    {/* <FaStar className='text-yellow-500' /> */}
                    {/* <span>{data.rating}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='pt-8'>
          <h1 className='pb-4 text-2xl font-bold'>Top Deals on SmartPhones</h1>
          <Slider {...settings}>
            {SmartPhone.map((data) => (
              <div key={data.id} className='space-y-3 bg-white dark:bg-gray-800 dark:text-white p-3 rounded-md shadow-md'>
                <img src={data.img} alt='' className='h-[200px] w-[150px] object-cover' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    {/* <FaStar className='text-yellow-500' /> */}
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='pt-8'>
          <h1 className='pb-4 text-2xl font-bold'>Best Fashion Brand For You!</h1>
          <Slider {...settings}>
            {BestDeals.map((data) => (
              <div key={data.id} className='space-y-3 bg-white dark:bg-gray-800 dark:text-white p-3 rounded-md shadow-md'>
                <img src={data.img} alt='' className='h-[200px] w-[150px] object-cover' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    {/* <FaStar className='text-yellow-500' /> */}
                    <span>{data.rating}</span>
                  </div>
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
