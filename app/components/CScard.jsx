"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import { useCart } from "../context/CardContext"; 
import toast from "react-hot-toast";

function CScard(props) {
  const router = useRouter();
  const { addToCart } = useCart(); 
  function handleBuyNow(){
       router.push(`/order-summary?title=${encodeURIComponent(props.language+" Cheat Sheet")}&price=${props.price}&image=${encodeURIComponent(props.cheat_sheet_image)}`);
    }
    function handleAddToCart() {
    addToCart({
      title: props.language+" Cheat Sheet",
      price: props.price,
      image: props.cheat_sheet_image,
    });
    toast.success(`${props.language} Cheat sheet added to cart 🛒`,{style: {
    minWidth: "auto",   
    padding: "16px",
    fontWeight:"bolder"
  },});
  }
  return (
    <div>
       <div className="bg-white text-black border-4 border-b border-gray-700 flex flex-col 2xl:w-120 sm:w-120 w-90 items-center p-10 m-2 xl:m-10 rounded-3xl h-auto">
      
      <img className='h-40 md:h-50  mb-5' src={props.cheat_sheet_image} alt="" />
      <div className='mt-2 mb-8'>
        <p className='text-xl font-bold text-center mb-5'>{props.language}</p>  
        <p className='flex'><span className='text-blue-500 font-bold'>Author:</span><span className='ml-1'>{props.author}</span> </p>        
        <p className='flex'><span className='text-blue-500 font-bold'>Price:</span><span className='ml-1'>${props.price}</span> </p>        
      </div>
      <div className="flex justify-around mt-8 w-full">
        <button
          onClick={handleAddToCart} 
          className="border-2 font-bold bg-blue-800/20 border-[#1c0472] text-sm sm:text-lg 2xl:text-xl p-4 md:w-45 w-30 rounded-xl"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="border-2 text-sm sm:text-lg 2xl:text-xl p-4 md:w-45 w-30 rounded-xl bg-[#1c0472] text-white font-bold"
        >
          Buy Now
        </button>
      </div>
    </div>
    </div>
  );
}

export default CScard;
