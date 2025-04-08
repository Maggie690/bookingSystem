export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  date?: Date;
  onSale: boolean,
  soldOut: boolean;
  img?: string;
}
