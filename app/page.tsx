"use client";
import { DessertList } from "@/app/ui/DessertList/DessertList";
import { Cart } from "@/app/ui/Cart";
import { ConfirmModal } from "@/app/ui/ConfirmModal/ConfirmModal";
import useModalStore from "@/store/modalStore";

export default function Home() {
  const { isOpen } = useModalStore();

  return (
    <div>
      {isOpen && <ConfirmModal />}
      <div className="mobile:p-24 pt-8 flex flex-col gap-8 justify-center mobile:flex-row mobile:items-baseline items-center">
        <div className="w-3/4">
          <DessertList />
        </div>
        <div className="h-full w-fit">
          <Cart />
        </div>
      </div>
    </div>
  );
}
