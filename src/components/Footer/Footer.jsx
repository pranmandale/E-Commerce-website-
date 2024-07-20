import React from 'react'
import FooteLogo from "../../assets/logo.png"
import Banner from "../../assets/website/footer-pattern.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"100%",
    width: "100%",
};

const FooterLinks = [
    {
        title : 'Home',
        link: "/",
    },

    {
        title: "about",
        link: "/",
    },

    {
        title: "contact",
        link: "/",
    },

    {
        title: "Blog",
        link: "/",
    },
]
 
const Footer = () => {
  return (
    <div 
    // style ={BannerImg}
    className='text-white mb-0 mt-0 bg-gray-900'>
      <div className='container'>
      <div 
      // data-aos="zoom-in"
      className='grid md:grid-cols-3 pb-40 pt-5'>
        {/* company details */}
        <div className='py-8 px-4'>
          <h1 
          className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
          <img
            src={FooteLogo}
            className='max-w-[50px]'
          />
          shopsy
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corrupti inventore omnis atque a delectus optio!
          </p>
        </div>
        {/* Footer Links details */}

        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
          <div>
              <div className='py-8 px-4'>
                <h1
                className='sm:text-xl text-xl font-bold sm: text-left text-justify mb-3'
                >
                Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map((link) => (
                    <li 
                    className='curson-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' 
                    key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))
                  }
                </ul>
              </div>
          </div>
          {/* social links */}
            
            <div>
              <div className='flex items-center gap-3 mt-6'>
                  <a href='https://www.instagram.com/_pranav_mandale_/?hl=en' target='_blank'>
                  <FaInstagram className='text-3xl'/>
                  </a>

                  <a href='https://www.facebook.com/profile.php?id=61561444047865' target='_blank'>
                  <FaFacebook className='text-3xl'/>
                  </a>

                  <a href='https://www.linkedin.com/in/pranav-mandale-765a60224/' target='_blank'>
                  <FaLinkedin className='text-3xl'/>
                  </a>

                  <a href='#'>
                  <FaTwitter className='text-3xl'/>
                  </a>
              </div>
              <div className='mt-6'>
                  <div className='flex items-center gap-3'>
                    <FaLocationArrow/>
                    <p>Sangli, Maharashtra</p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <FaMobileAlt/>
                    <p>+91 7218909766</p>
                  </div>
              </div>
            </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
