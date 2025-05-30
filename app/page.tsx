import { DessertList } from "@/app/DessertList/DessertList";
import { Cart } from "./Cart";

export default function Home() {
  return (
    <div className="p-24 grid grid-cols-9">
      <div className="col-span-6">
        <DessertList />
      </div>
      <div className="col-span-3 h-full">
        <Cart />
      </div>
    </div>
  );
}
