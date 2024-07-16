import Img5 from "../assets/Mobile/p1.jpg";
import Img6 from "../assets/Mobile/p2.webp";
import Img7 from "../assets/Mobile/shirt3.jpg";
import Img8 from "../assets/Mobile/shirt4.jpg";
import Img9 from "../assets/Mobile/v3.webp";
import Img10 from "../assets/Mobile/shirt1.jpg"
import Img11 from "../assets/Mobile/shirt2.webp"
import Img12 from "../assets/Mobile/sh1.jpg"
import Img13 from "../assets/Mobile/sh2.jpg"
import Img14 from "../assets/Mobile/p3.webp"
import Img15 from "../assets/Mobile/p2.webp"

import p from "../assets/Mobile/v3.webp";
import l1 from "../assets/Laptops/l1.avif"
import l2 from "../assets/Laptops/l2.jpg"
import l3 from "../assets/Laptops/l3.avif"
import p1 from "../assets/Laptops/p1.jpg"
import l4 from "../assets/Laptops/l4.avif"
import p2 from "../assets/Laptops/p2.webp"
import m1 from "../assets/Mobile/v1.jpg"
import m2 from "../assets/Mobile/v5.webp"
import m3 from "../assets/Mobile/v4.jpg"


import k1 from "../assets/kids/k1.jpeg";
import k2 from "../assets/kids/k2.jpg"
import k3 from "../assets/kids/k3.jpg"
import k4 from "../assets/kids/k4.jpg"
import k5 from "../assets/kids/k5.jpg"
import k6 from "../assets/kids/k6.jpg"
import k7 from "../assets/kids/k7.webp"



const Products = [
  {
    id: 1,
    img: Img10,
    title: "Summer Korea Style Handsome Fashion Mens Shirts",
    color: "From ₹799",
    price: 799,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  {
    id: 2,
    img: Img11,
    title: "Leriya Fashion Shirts for Men || Rayon Block Print & Preppy Short Sleeves Shirt ",
    color: "From ₹875",
    price: 875,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  {
    id: 3,
    img: Img7,
    title: "Korean Style Joint Contrast Fashion Casual Shirts for Men",
    color: "From ₹1567",
    price: 1567,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  {
    id: 4,
    img: Img8,
    title: "Buy Blue Fer Fashion Men Green Solid Cotton Blend Casual Shirt (Xxl",
    color: "From ₹1500",
    price: 1500,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  {
    id: 5,
    img: Img12,
    title: "branded shoes for men",
    color: "From ₹699",
    price: 699,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  {
    id: 6,
    img: Img13,
    title: "Buy Dexture Air Jordan Style trendy Sneakers For Men",
    color: "From ₹999",
    price: 999,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  {
    id: 7,
    img: Img14,
    title: "Produkt By Jack & Jones Acid Heavily Washed Slim Fit Jeans For Men ",
    color: "From ₹1786",
    price: 1786,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  {
    id: 8,
    img: Img15,
    title: "Decible Polyster Blend Formal Trousers For Man |formal pants blue | pant trousers for men",
    color: "From ₹1298",
    price: 1298,
    aosDelay: "800",
    category: "mobile", // Added category
  },
  // {
  //   id: 5,
  //   img: Img9,
  //   title: "vivo T3 series",
  //   color: "From ₹16999",
  //   aosDelay: "800",
  //   category: "electronics", // Added category
  // },
 
  // Add more products with their respective categories if needed

  // electronics secion
  {
    id: 9,
    img: p,
    title: "vivo T3 series",
    color: "From ₹16999",
    price:16999,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 10,
    img: l1,
    title: "HP Pavilion 39.6cm(15.6) Laptop 15-eg3018TU",
    color: "From ₹43700",
    price: 43700,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 11,
    img: l2,
    title: "ASUS Vivobook 15, Intel Celeron N4020, 15.6' (39.62cms) HD",
    color: "From ₹45900",
    price: 45900,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 12,
    img: l3,
    title: "V15 39.62cms- 12th Gen Intel i5",
    color: "From ₹44991",
    price: 44991,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 13,
    img: p1,
    title: "128 GB Pen Drive",
    color: "From ₹299",
    price:299,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 14,
    img: l4,
    title: "13th Gen Intnel core i5-13450Hx(20MB cache, 10cores",
    color: "From ₹1,39,900",
    price: 139900,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 15,
    img: p2,
    title: "Sanddisk 256 GB USB Type-C ultra Go Flash drive",
    color: "From ₹487",
    price: 487,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 16,
    img: m1,
    title: "Vivo Y21 (4 GB RAM, 64 GB ROM, Midnight Blue)",
    color: "From ₹13700",
    price: 13700,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 17,
    img: m2,
    title: "Super Amoled Blue Vivo V15 Memory Size 32gb Display Size 6.39 Inch Vivo Mobile",
    color: "From ₹14700",
    price: 14700,
    aosDelay: "800",
    category: "electronics", // Added category
  },
  {
    id: 18,
    img: m3,
    title: "vivo Y22 (Starlit Blue, 64 GB)",
    color: "From ₹11300",
    price: 11300,
    aosDelay: "800",
    category: "electronics", // Added category
  },

// kids secion

  {
    id: 19,
    img: k1,
    title: "Kid's Clothing Set Baba Suit Boy Clothing Set",
    color: "From ₹1699",
    price: 1699,
    aosDelay: "800",
    category: "kids", // Added category
  },
  {
    id: 20,
    img: k2,
    title: "Kids Wear - Readymade Suits - Indo Western :: ANERI BOUTIQUE",
    color: "From ₹1890",
    price: 1890,
    aosDelay: "800",
    category: "kids", // Added category
  },
  {
    id: 21,
    img: k3,
    title: "Little Hardy Kids Ethnic Wear Kurta Pyjama and Waistcoat Set For Boys",
    color: "From ₹1700",
    aosDelay: "800",
    category: "kids", // Added category
  },
  {
    id: 22,
    img: k4,
    title: "High Quality Special Ethnic wear for Girls kids Set",
    color: "From ₹2100",
    price: 2100,
    aosDelay: "800",
    category: "kids", // Added category
  },
  {
    id: 23,
    img: k5,
    title: "Blue Party Wear Kids Dress",
    color: "From ₹1299",
    price: 1299,
    aosDelay: "800",
    category: "kids", // Added category
  },
  {
    id: 24,
    img: k6,
    title: "Cotton Yellow Kids Western Midi Dress",
    color: "From ₹785",
    price: 785,
    aosDelay: "800",
    category: "kids", // Added category
  },
  {
    id: 25,
    img: k7,
    title: "Buy Boys Summer Outfit Kids Cotton Suit/ Toddler Boy Summer Clothes",
    color: "From ₹899",
    price: 899,
    aosDelay: "800",
    category: "kids", // Added category
  },



  // productsdata

  // {
  //   id: 1,
  //   img: Img1,
  //   title: "Women Ethnic",
  //   // rating: 5.0,
  //   color: "From ₹399",
  //   aosDelay: "0",
  // },
  // {
  //   id: 2,
  //   img: Img2,
  //   title: "Women Western",
  //   // rating: 4.5,
  //   color: "From ₹249",
  //   aosDelay: "200",
  // },
  // {
  //   id: 3,
  //   img: Img3,
  //   title: "Goggles",
  //   // rating: 4.7,
  //   color: "From ₹199",
  //   aosDelay: "400",
  // },
  // {
  //   id: 4,
  //   img: Img4,
  //   title: "Printed T-Shirt",
  //   // rating: 4.4,
  //   color: "From ₹399",
  //   aosDelay: "600",
  // },
  // {
  //   id: 5,
  //   img: Img12,
  //   title: "Fashion T-Shirt",
  //   // rating: 4.5,
  //   color: "From 299",
  //   aosDelay: "800",
  // },
  // {
  //   id: 6,
  //   img: Img13,
  //   title: "Fashion T-Shirt",
  //   // rating: 4.5,
  //   color: "From ₹299",
  //   aosDelay: "800",
  // },


];

export default Products;
