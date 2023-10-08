import Product from '~/bundles/products/components/product';
import { products } from '~/bundles/products/components/products';

const HomeScreen = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product  product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
};

export default HomeScreen;
