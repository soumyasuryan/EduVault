"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderSummaryContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const image = searchParams.get("image");

  const [location, setLocation] = useState({ city: "", country: "" });
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    fetch("/api")
      .then((res) => res.json())
      .then((data) =>
        setLocation({ city: data.city, country: data.country })
      );
  }, []);

  if (!mounted) return null;
  if (!title) return <p>No product selected.</p>;

  function handleConfirmPurchase() {
    router.push(
      `/confirmPurchase?title=${encodeURIComponent(title)}&price=${price}&image=${encodeURIComponent(image)}`
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white/90 shadow-md rounded-lg mt-6 ">
      <h1 className="text-2xl text-center text-black font-bold mb-4">
        Order Summary
      </h1>
      <div className="flex flex-col justify-start items-center border-2 border-black p-6 rounded-2xl">
        <div className="flex mb-5">
          <img src="open-book2.svg" className="h-7 mr-2" alt="" />
          <h1 className="text-[#1c0472] font-bold text-xl">EduVault</h1>
        </div>
        <img src={image} alt={title} className="h-80 w-auto" />
        <div>
          <h2 className="text-xl font-semibold mt-4 text-black">{title}</h2>
          <p className=" text-black">
            <span className="text-blue-500 font-bold">Price:</span> {price}
          </p>
          <p className="font-bold text-black">
            <span className="text-red-600">Location📍: </span>{" "}
            {location.city}, {location.country}
          </p>
        </div>
      </div>
      <button
        className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        onClick={handleConfirmPurchase}
      >
        Confirm Purchase
      </button>
    </div>
  );
}
