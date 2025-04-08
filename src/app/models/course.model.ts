export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  date?: string;
  onSale: boolean,
  soldOut: boolean;
  img?: string;
}
