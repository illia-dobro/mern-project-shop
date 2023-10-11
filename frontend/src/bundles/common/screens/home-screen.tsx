import { useEffect, useState } from 'react';

import axios from 'axios';

import Product from '~/bundles/products/components/product';
import { type Product as ProductType } from '~/bundles/products/types.ts';

const HomeScreen = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="bg-white">
      <div className="py-4 sm:py-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product._id}  product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
};

export default HomeScreen;
