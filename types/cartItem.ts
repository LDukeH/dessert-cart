interface CartItem {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: String;
  price: number;
  quantity?: number;
}

export default CartItem;
