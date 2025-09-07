"use client";
import { useCart } from "../context/CardContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ViewCartButton() {
  const { cart } = useCart();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  // show button automatically when cart has items
  if (cart.length > 0 && !visible) {
    setVisible(true);
  }

  if (!visible) return null;

  return (
    <button
      onClick={() => router.push("/cart")} // redirect to cart page
      className="fixed bottom-6 right-6 bg-[#1c0472] text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-900 transition"
    >
      View Cart 🛒 ({cart.length})
    </button>
  );
}
