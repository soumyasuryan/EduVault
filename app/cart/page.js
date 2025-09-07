"use client";
import { useCart } from "../context/CardContext";
import { useRouter } from "next/navigation";
export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router=useRouter()
  function handleConfirmPurchase(){
     router.push(`/confirmPurchase`);
  }

  if (cart.length === 0) return <p className="text-center mt-50 h-50">Your cart is empty 🛒</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 flex flex-col h-100">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between border-b py-3">
          <div className="flex items-center gap-3">
            <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-blue-500">${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(index)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={handleConfirmPurchase} className="mt-10 w-full text-xl bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 cursor-pointer">Proceed to Buy</button>
    </div>
  );
}
