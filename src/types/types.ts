export interface ProductInfoProps {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface Rating {
  rate: number;
  count: number;
}
export interface ProductInfoType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}
