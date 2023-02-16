export interface CartState {
  items: ICart[];
  totalPrice: number;
}

export interface ICart {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: number;
  count: number;
}
