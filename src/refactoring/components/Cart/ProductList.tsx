import { CartItem, Product } from "../../../types";
import { getRemainingStock } from "../../hooks/utils/discountUtils";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
}

const ProductList = ({ products, cart, addToCart }: ProductListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
      <div className="space-y-2">
        {products.map((product) => {
          const remainingStock = getRemainingStock(product, cart);
          return (
            <ProductCard
              key={product.id}
              product={product}
              remainingStock={remainingStock}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
