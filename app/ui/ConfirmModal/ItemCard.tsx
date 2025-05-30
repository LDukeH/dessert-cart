import CartItem from "@/types/cartItem";
import Image from "next/image";

export function ItemCard({ item }: { item: CartItem }) {
  const { name, price, quantity, image } = item;

  const totalPrice = price * quantity!;

  return (
    <div className="border-b-1 border-gray-300 flex pb-4 items-center justify-between mt-4">
      <div className="flex text-text-primary font-medium gap-4 ">
        <div className="relative w-12 h-12 ">
          <Image
            src={image.thumbnail}
            fill={true}
            alt={name}
            className="rounded-sm"
          />
        </div>

        {/* name and price part (im so sorry) */}
        <div>
          <div>{name}</div>
          <div className="flex gap-6">
            <span className="text-text-secondary font-semibold">
              {quantity}x
            </span>
            <span className="text-gray-400">@${price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* total sum */}
      <div className="text-black font-base text-base">
        ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
