"use client";

import useCartStore from "@/store/cartStore";
import useModalStore from "@/store/modalStore";
import Image from "next/image";
import RemoveIcon from "@/public/icon-remove-item.svg";
import CarbonNeural from "@/public/icon-carbon-neutral.svg";

function EmptyCart() {
  return (
    <div className="mt-12 mb-6">
      <div className="relative w-32 h-32 mx-auto">
        <Image
          fill={true}
          src="/illustration-empty-cart.svg"
          alt="Empty Cart"
          className="object-cover"
        />
      </div>
      <div className="text-center noItems font-semibold mt-4">
        Your added items will appear here
      </div>
    </div>
  );
}

function CartItem({ item }: { item: any }) {
  const { removeFromCart } = useCartStore();
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex flex-col">
        <div className="font-semibold">{item.name}</div>
        <div className="flex gap-4">
          <div className="text-text-secondary font-semibold w-fit ">
            {item.quantity}x
          </div>
          <div className="noItems brightness-65">
            @ ${item.price.toFixed(2)}
          </div>
          <div className="noItems font-medium">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
      <button
        className="border-1 p-1 rounded-full hover:brightness-75 noItems transition-all duration-300 cursor-pointer"
        onClick={() => removeFromCart(item)}
      >
        <RemoveIcon />
      </button>
    </div>
  );
}

export function Cart() {
  const { cart } = useCartStore();
  const { toggleModal } = useModalStore();

  //
  const totalItems = cart.reduce((total, item) => total + item.quantity!, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity!,
    0
  );
  return (
    <div className="w-98 mobile:w-90 desktop:w-88 bg-white rounded-xl p-5 shadow-sm mx-auto">
      <div className="text-text-secondary font-bold text-2xl">
        Your Cart ({totalItems})
      </div>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <div className="flex flex-col gap-4">
            {cart.map((item, index) => {
              return (
                <div key={index} className="border-b border-gray-200 pb-3">
                  <CartItem item={item} />
                </div>
              );
            })}
          </div>

          {/* Total price goes here */}
          <div className="flex items-center justify-between my-8 ">
            <div className="text-text-primary font-medium">Order Total</div>
            <div className="text-3xl text-text-primary font-bold">
              ${totalPrice.toFixed(2)}
            </div>
          </div>
          <div className="flex bg-fuchsia-100 items-center justify-center gap-1 w-full h-12">
            <CarbonNeural />
            This is a{" "}
            <span className="text-text-primary font-semibold">
              carbon-neural
            </span>{" "}
            delivery
          </div>

          {/* Confirm Order */}
          <button
            className="bg-text-activate text-white w-full h-14 text-xl font-medium rounded-4xl mt-12 cursor-pointer active:brightness-75 transition-all duration-200"
            onClick={() => toggleModal(true)}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}
