"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/CardContext";

export default function OrderSummary() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const price = Number(searchParams.get("price")) || 0;
  const image = searchParams.get("image");

  const { cart } = useCart();

  const [location, setLocation] = useState({ city: "", country: "", state: "" });
  const [formData, setFormData] = useState({
    house: "",
    locality: "",
    city: "",
    state: "",
    landmark: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) =>
        setLocation({
          city: data.city,
          country: data.country,
          state: data.region,
        })
      );
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      city: location.city || prev.city,
      state: location.state || prev.state,
    }));
  }, [location]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.house.trim()) newErrors.house = "House/Flat number is required";
    if (!formData.locality.trim()) newErrors.locality = "Locality is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Payment Gateway will be integrated soon!");
    }
  };

  const itemsToRender = title && price && image ? [{ title, price, image }] : cart;

  if (!itemsToRender || itemsToRender.length === 0)
    return <p className="text-center mt-10">Your cart is empty 🛒</p>;

  const deliveryFee = 50;
  const subtotal = itemsToRender.reduce((sum, item) => {
    let itemPrice = typeof item.price === "string"
      ? Number(item.price.replace("$", ""))
      : Number(item.price);
    return sum + itemPrice;
  }, 0);

  const total = subtotal + deliveryFee;

  return (
    <div className="md:max-w-xl mx-1 md:mx-auto md:p-6 p-3 bg-white shadow-md rounded-lg mt-6">
      <h1 className="md:text-2xl text-lg text-center text-black font-bold mb-4">
        Billing Details
      </h1>
      <div className="flex flex-col justify-start items-center md:p-6 rounded-2xl">
        <div className="flex mb-5">
          <img src="open-book2.svg" className="h-7 mr-2" alt="" />
          <h1 className="text-[#1c0472] font-bold text-xl">EduVault</h1>
        </div>

        {/* Items */}
        <div className="md:p-5 w-full md:mb-0 mb-5">
          {itemsToRender.map((item, idx) => (
            <div key={idx} className="flex items-center border-b border-black py-3">
              <img src={item.image} alt={item.title} className="h-20 mx-5" />
              <div>
                <h2 className="text-lg font-semibold text-black">{item.title}</h2>
                <p className="text-black">
                  <span className="text-blue-500 font-bold">Price:</span> ${item.price}
                </p>
              </div>
            </div>
          ))}
          <p className="font-bold text-black mt-2">
            <span className="text-red-600">Location📍:</span> {location.city},{" "}
            {location.country}
          </p>
        </div>

        {/* Billing form */}
        <form onSubmit={handleSubmit} className="text-black text-lg w-full" noValidate>
          {/* Inputs here (same as your code) */}
          {/* ... */}
          <div className="border-t pt-4 mt-4">
            <p className="flex justify-between">
              <span>Subtotal:</span> <span>${subtotal}</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Fee:</span> <span>${deliveryFee}</span>
            </p>
            <p className="flex justify-between font-bold text-lg">
              <span>Total:</span> <span>${total}</span>
            </p>
          </div>
          <input
            type="submit"
            value="Pay Now"
            className="mt-6 w-full text-xl bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
