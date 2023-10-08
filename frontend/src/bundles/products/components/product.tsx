import { Link } from "react-router-dom";

import { type Product } from "../types.ts";
import Rating from "./rating.tsx";

type Props = {
  product: Product
}

const Product = ({ product }: Props) => {

  return (
    <Link to={`/product/${product._id}`} className="group shadow-md p-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.image}
          alt={product.description}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="pt-2">
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </Link>
  );
};

export default Product;
