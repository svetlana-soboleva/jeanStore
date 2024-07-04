export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

export type User = {
  id: string;
  role: string;
  email: string;
  password: string;
};

export type Product = {
  id: string;
  brand: string;
  
  date: string;
};

export type Image = {
  id: string;
  product_id: string;
  image_url: string;
};

export type ProductWithImage = {
  id: string;
  brand: string;
  images: string[];
};