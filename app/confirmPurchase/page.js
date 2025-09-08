"use client";
import { Suspense } from "react";
import OrderSummary from "./OrderSummaryContent";

export default function ConfirmPurchasePage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading checkout...</div>}>
      <OrderSummary />
    </Suspense>
  );
}
