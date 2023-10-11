type ProductResponse = {
  _id: string;
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: string;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: [];
  createdAt: Date;
  updatedAt: Date;
};

export { type ProductResponse }
