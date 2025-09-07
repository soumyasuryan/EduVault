"use client"
import { useRouter } from "next/navigation";
import { useCart } from "../context/CardContext"; 
import React, { useState } from "react";
import toast from "react-hot-toast";

function CoursesCard(props) {
  const router = useRouter();
  const { addToCart } = useCart(); 
      function handleBuyNow(){
         router.push(`/order-summary?title=${encodeURIComponent(props.course_name)}&price=${props.price}&image=${encodeURIComponent(props.course_image)}`);
      }
  function handleAddToCart() {
    addToCart({
      title: props.course_name,
      price: props.price,
      image: props.course_image,
    });
    toast.success(`${props.course_name} added to cart 🛒`,{style: {
    minWidth: "auto",   
    padding: "16px",
    fontWeight:"bolder"
  },});
  }    
  return (
    
      <div className='bg-white text-black border-4 border-b border-gray-700 flex flex-col 2xl:w-120 sm:w-120 w-90 items-center p-10 m-2 xl:m-10 rounded-3xl sm:h-auto'>
      <p className='text-2xl font-bold text-center mb-5'>{props.course_name}</p>  
      <img className='md:h-50 h-40 mb-5' src={props.course_image} alt="" />
      <div className='mt-2 mb-4'>
        
        <p className='flex '><span className='text-blue-500 font-bold'>Faculty:</span><span className='ml-1'>{props.tutor_name}</span> </p>
        <p className='flex '><span className='text-blue-500 font-bold'>Price:</span><span className='ml-1'>${props.price}</span> </p>
        <p className='flex '><span className='text-blue-500 font-bold'>Skills:</span> <span className='ml-1'> {props.skills}</span></p>
        <p><span className='text-blue-500 font-bold'>Description:</span> {props.description}</p>
      </div>
      <div className='flex justify-around w-full mt-auto'>
        <button className="border-2 font-bold bg-blue-800/20 border-[#1c0472] text-sm sm:text-lg 2xl:text-xl p-4 md:w-45 w-30 rounded-xl" onClick={handleAddToCart}>Add to Cart</button>
        <button className="border-2 text-sm sm:text-lg 2xl:text-xl p-4 md:w-45 w-30 rounded-xl bg-[#1c0472] text-white font-bold" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
}

export default CoursesCard;
