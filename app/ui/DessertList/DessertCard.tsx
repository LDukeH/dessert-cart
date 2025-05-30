import CartItem from "@/types/cartItem";
import Image from "next/image";
import AddToCartIcon from "@/public/icon-add-to-cart.svg";
import useCartStore from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import IncrementIcon from "@/public/icon-increment-quantity.svg";
import DecrementIcon from "@/public/icon-decrement-quantity.svg";

function AddButton({ item }: { item: CartItem }) {
  const { addToCart, decreaseQuantity, getQuantity } = useCartStore();
  const quantity = getQuantity(item);

  useEffect(() => {
    getQuantity(item);
  }, [getQuantity]);

  return (
    <AnimatePresence>
      {!(quantity > 0) ? (
        <motion.button
          className="addButton cursor-pointer add px-7 text-text-primary font-medium bg-bg-primary border-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          onClick={() => {
            addToCart(item);
          }}
        >
          <div key="add" className="flex items-center justify-between ">
            <AddToCartIcon />
            Add to Cart
          </div>
        </motion.button>
      ) : (
        // if quantity is greater than 0, show the increment and decrement buttons
        <motion.div
          className="addButton flex items-center justify-between px-7 text-text-primary font-medium bg-text-activate"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          <button
            key="counter"
            className="indeButton"
            onClick={() => {
              decreaseQuantity(item);
            }}
          >
            <DecrementIcon />
          </button>
          {/* manage the quantity here ok */}
          <span className="text-white">{quantity}</span>

          {/* use addItem again to increase */}
          <button
            className="indeButton"
            onClick={() => {
              addToCart(item);
            }}
          >
            <IncrementIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DessertCard({ item }: { item: CartItem }) {
  return (
    <div className="w-fit mx-auto">
      <div className="w-62 h-62 relative">
        <Image
          fill={true}
          src={item.image.desktop}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          alt={item.name}
          className="object-cover origin-center rounded-2xl"
        />
        <div>
          <AddButton item={item} />
        </div>
      </div>

      <div className="mt-8">
        <div className="text-text-tertiary text-sm font-medium">
          {item.category}
        </div>
        <div className="text-text-primary text-base font-semibold">
          {item.name}
        </div>
        <div className="text-text-secondary font-semibold">
          ${item.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
