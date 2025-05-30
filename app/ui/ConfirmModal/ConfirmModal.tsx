"use client";
import ConfirmIcon from "@/public/icon-order-confirmed.svg";
import { ItemCard } from "./ItemCard";
import useCartStore from "@/store/cartStore";
import useModalStore from "@/store/modalStore";

function OrderList() {
  const { cart } = useCartStore();

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity!, 0)
    .toFixed(2);

  return (
    <div className="bg-fuchsia-50 rounded-xl p-4 mt-8 scrollable">
      <div className="h-64 overflow-y-scroll">
        {cart.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-between text-text-primary font-medium mt-4">
        Order Total <span className="text-xl font-bold">${totalPrice}</span>
      </div>
    </div>
  );
}

export function ConfirmModal() {
  const { clearCart } = useCartStore();
  const { toggleModal } = useModalStore();

  return (
    <div className="flex justify-center">
      <div
        className="modal-layout"
        onClick={() => {
          toggleModal(false);
        }}
      ></div>

      {/* content */}
      <div className="modal-content w-screen h-9/10 mobile:h-98 mobile:w-1/2 desktop:w-1/3 p-8 rounded-4xl mobile:rounded-2xl">
        <ConfirmIcon />
        <div className="text-text-primary font-bold text-3xl mt-6">
          Order Confirmed
        </div>
        <div className="text-text-primary font-extralight">
          We hope you enjoy your food!
        </div>
        <OrderList />
        <button
          onClick={() => {
            clearCart();
            toggleModal(false);
          }}
          className="w-full border-1 bg-text-activate text-white font-medium h-12 rounded-full mt-6 cursor-pointer active:brightness-75 transition-all duration-200"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
