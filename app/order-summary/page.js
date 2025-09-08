"use client";
import { Suspense } from "react";
import OrderSummaryContent from "./OrderSummaryContent";

export default function OrderSummaryPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <OrderSummaryContent />
    </Suspense>
  );
}
