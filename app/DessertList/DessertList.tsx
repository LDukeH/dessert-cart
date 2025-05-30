"use client";

import useCartStore from "@/store/cartStore";
import { useEffect } from "react";
import { DessertCard } from "./DessertCard";

export function DessertList() {
  const { fetchData, items } = useCartStore();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="text-text-title text-4xl font-bold">Desserts</div>
      <div>
        <div className="grid grid-cols-3 gap-2 mt-8 gap-y-6">
          {items.map((item) => {
            return <DessertCard key={item.name} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
