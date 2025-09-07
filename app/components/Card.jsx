"use client";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CardContext"; 
import React, { useState } from "react";
import toast from "react-hot-toast";

function Card(props) {
  const router = useRouter();
  const { addToCart } = useCart(); 

  function handleBuyNow() {
    router.push(
      `/order-summary?title=${encodeURIComponent(props.title)}&price=${props.price}&image=${encodeURIComponent(props.image)}`
    );
  }

  function handleAddToCart() {
    addToCart({
      title: props.title,
      price: props.price,
      image: props.image,
    });
    toast.success(`${props.title} added to cart 🛒`,{style: {
    minWidth: "auto",   // increase width
    padding: "16px",
    fontWeight:"bolder"
  },});
  }

  return (
    <div className="bg-white text-black border-4 border-b border-gray-700 flex flex-col 2xl:w-120 sm:w-120 w-90  items-center p-10 m-2 xl:m-10 rounded-3xl h-auto">
      <p className="text-2xl font-bold text-center mb-5">{props.title}</p>
      <img
        className="h-70 w-60 mb-5 border-2 border-black"
        src={props.image}
        alt={props.title}
      />
      <div className="mt-2">
        <p className="flex">
          <span className="text-blue-500 text-lg font-bold">Author:</span>
          <span className="ml-1">{props.author}</span>
        </p>
        <p className="flex">
          <span className="text-blue-500 text-lg font-bold">Price:</span>
          <span className="ml-1">${props.price}</span>
        </p>
        <p>
          <span className="text-blue-500 text-lg font-bold">Year:</span>{" "}
          {props.year}
        </p>
        <p>
          <span className="text-blue-500 text-lg font-bold">Description:</span>{" "}
          {props.description}
        </p>
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
  );
}

export default Card;

