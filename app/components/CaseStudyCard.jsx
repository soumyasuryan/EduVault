"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CardContext"; 
import toast from "react-hot-toast";

function CaseStudyCard({ title, industry, company, case_image, problem, solution, technologies, year,price }) {
  const router = useRouter();
  const { addToCart } = useCart(); 
    function handleBuyNow(){
       router.push(`/order-summary?title=${encodeURIComponent(title)}&price=${price}&image=${encodeURIComponent(case_image)}`);
    }
    function handleAddToCart() {
    addToCart({
      title: title,
      price: price,
      image: case_image,
    });
    toast.success(`${title} added to cart 🛒`,{style: {
    minWidth: "auto",
    padding: "16px",
    fontWeight:"bolder"
  },});
  }
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col gap-4 hover:shadow-xl transition m-3">
      <div className="flex items-center gap-3">
        <img src={case_image} alt={company} className="h-12 w-12 object-contain" />
        <div>
          <h2 className="text-lg font-bold text-black">{title}</h2>
          <p className="text-sm text-gray-600">{company} • {industry}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-red-600">Problem</h3>
        <p className="text-sm text-gray-700">{problem}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-green-600">Solution</h3>
        <p className="text-sm text-gray-700">{solution}</p>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-blue-500">Price:${price}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="text-right text-xs text-gray-500">
        Year: {year}
      </div>
      <div className="flex justify-around mt-8 w-full">
        <button
          onClick={handleAddToCart} 
          className="border-2 font-bold bg-blue-800/20 border-[#1c0472] text-sm sm:text-lg 2xl:text-xl p-4 md:w-45 w-30 rounded-xl text-black"
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

export default CaseStudyCard;
