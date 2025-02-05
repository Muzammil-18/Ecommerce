"use client"
import { useParams } from "next/navigation";
import { Comfortaa, Titillium_Web, Noto_Sans_Display, Arimo, Lora } from "next/font/google";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import Button from "../../Components/Button";
import Hero_3 from "../../Components/Hero_3";
import Hero_2 from "../../Components/Hero_2";
import Hero_5 from "../../Components/Hero_5";
import Footer from "../../Components/Footer";


const lora = Lora({
  weight: "600",
  subsets: ["latin"],
});

const c = Comfortaa({
  weight: "600",
  subsets: ["latin"],
});

const a = Arimo({
  weight: "400",
  subsets: ["latin"],
});

const t = Titillium_Web({
  weight: "300",
  subsets: ["latin"],
});

const n =  Noto_Sans_Display({
  weight: "700",
  subsets: ["latin"],
});

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    { 
        id: "1", 
        img_src: '/assets/Parent.png', 
        title: 'The Dandy Chair', 
        price: '£250', 
        description: 'A stylish and comfortable chair with a modern touch. Perfect for adding elegance to any space.' 
    },
    { 
        id: "2", 
        img_src: '/assets/Parent2.png', 
        title: 'Rustio Vase Set', 
        price: '£155', 
        description: 'A set of rustic-inspired vases with a timeless charm. Ideal for showcasing flowers or as decorative pieces.' 
    },
    { 
        id: "3", 
        img_src: '/assets/Parent3.png', 
        title: 'The Silky Vase', 
        price: '£125', 
        description: 'A smooth and elegant vase with a refined finish. Complements both classic and contemporary interiors.' 
    },
    { 
        id: "4", 
        img_src: '/assets/Parent4.png', 
        title: 'The Lucy Lamp', 
        price: '£399', 
        description: 'A sleek and modern lamp with soft lighting. Enhances ambiance while serving as a statement piece.' 
    },
    { 
        id: "5", 
        img_src: '/assets/All_prdo_img5.png', 
        title: 'The Elisyan Light', 
        price: '£250', 
        description: 'A minimalistic yet sophisticated light fixture. Designed to bring warmth and elegance to any room.' 
    },
    { 
        id: "6", 
        img_src: '/assets/Parent6.png', 
        title: 'The Harmonia Set', 
        price: '£250', 
        description: 'A beautifully crafted decor set that exudes harmony. Perfect for creating a balanced and stylish look.' 
    },
    { 
        id: "7", 
        img_src: '/assets/Parent7.png', 
        title: 'The Axis Round', 
        price: '£155', 
        description: 'A round decorative piece with a bold design. Ideal for adding a touch of uniqueness to your decor.' 
    },
    { 
        id: "8", 
        img_src: '/assets/Parent8.png', 
        title: 'The Nova Chairs', 
        price: '£125', 
        description: 'A set of contemporary chairs with ergonomic design. Offers comfort and style for dining or lounging.' 
    },
    { 
        id: "9", 
        img_src: '/assets/Parent.png', 
        title: 'The Dandy Chair', 
        price: '£250', 
        description: 'A stylish and comfortable chair with a modern touch. Perfect for adding elegance to any space.' 
    },
    { 
        id: "10", 
        img_src: '/assets/Parent2.png', 
        title: 'Rustio Vase Set', 
        price: '£155', 
        description: 'A set of rustic-inspired vases with a timeless charm. Ideal for showcasing flowers or as decorative pieces.' 
    },
    { 
        id: "11", 
        img_src: '/assets/Parent3.png', 
        title: 'The Silky Vase', 
        price: '£125', 
        description: 'A smooth and elegant vase with a refined finish. Complements both classic and contemporary interiors.' 
    },
    { 
        id: "12", 
        img_src: '/assets/Parent4.png', 
        title: 'The Lucy Lamp', 
        price: '£399', 
        description: 'A sleek and modern lamp with soft lighting. Enhances ambiance while serving as a statement piece.' 
    }
];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center text-3xl text-[#2A254B]">Product not found</p>;
  }

  const[count, setCount]= useState(1)

  return (

    <>
    <Navbar/>

    <div className="flex flex-col md:flex-row w-full mt-1">

      <div
        className="w-full md:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${product.img_src})` }}
      ></div>

      <div className="w-full mt-5 md:mt-0 md:w-1/2 px-[22px] md:px-12 flex flex-col justify-center ">
        <h1 className={`${n.className} text-3xl  text-[#2A254B]`}>{product.title}</h1>
        <p className={`${c.className} pt-1 text-xl text-[#2A254B]`}>{product.price}</p>

        <h2 className={`${t.className} mt-4 text-[#2A254B] text-xl `}>Description</h2>
        <p className={`${a.className} text-[#505977]`}>{product.description}</p>
        <ul className={`${a.className} text-[#505977] list-disc pl-8`}>
          <li>Premium Material</li>
          <li>Handmade Upholestry</li>
          <li>Quality Timeless Classic</li>
        </ul>
        <h2 className={`${t.className} mb-5 mt-6 text-[#2A254B] text-lg pt-4`}>Dimesnsions</h2>
        <div className="flex justify-around md:justify-between w-full md:w-1/2 md:space-x-9">
          <p className={`text-[#2A254B] ${c.className} `}>Height <br /> <span className={`font-bold text-[#505977]`}>110cm</span></p>
          <p className={`text-[#2A254B] ${c.className} `}>Width <br /> <span className={`font-bold text-[#505977]`}>75cm</span></p>
          <p className={`text-[#2A254B] ${c.className} `}>Depth <br /> <span className={`font-bold text-[#505977]`}>50cm</span></p>
        </div>
        <div className={`${t.className} text-lg text-[#2A254B] hidden lg:flex mt-5 space-x-12`}>
          <h1 className="py-2">Amount</h1>
          <div className="flex  bg-[#F9F9F9]  space-x-4">
            <button className="py-1 px-3" disabled={count==0} onClick={()=>(setCount(count-1))}>-</button>
            <p className="py-1 px-3">{count}</p>
            <button className="py-1 px-3" onClick={()=>(setCount(count+1))}>+</button>
          </div>
          <div>
            <button className="text-white bg-[#2A254B] py-2 px-5 ">Add to cart</button>
          </div>
        </div>

        <div className={`${t.className} flex lg:hidden flex-col mt-2 text-[#2A254B]`}>
        <h1 className="py-2 text-xl">Quantity</h1>
        <div className="flex mx-auto bg-[#F2F2F2]  space-x-4 mb-3">
            <button className="py-1 px-3" disabled={count==0} onClick={()=>(setCount(count-1))}>-</button>
            <p className="py-1 px-3">{count}</p>
            <button className="py-1 px-3" onClick={()=>(setCount(count+1))}>+</button>
          </div>
            <button className="text-white bg-[#2A254B] py-2 px-5 ">Add to cart</button>
        </div>
      </div>
    </div>
    <div className="w-full mt-5 ">
            <p className={`${lora.className} text-black text-2xl ml-3 font-extrabold`}>You Might Also Like</p>
    </div>
    <Hero_3/>
    <Hero_2/>
    <Hero_5/>
    <Footer/>
    </>
  );
};

export default ProductDetails;
