"use client";

import useCartStore from "@/store/cartStore";

export function DessertList() {
  const { fetchData } = useCartStore();
  fetchData();

  return (
    <div>
      <div className="text-text-primary text-4xl font-bold">Desserts</div>
      <div></div>
    </div>
  );
}
