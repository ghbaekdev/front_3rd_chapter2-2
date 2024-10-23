import { Coupon, Product } from "../../types.ts";
import { useCart } from "../hooks/index.ts";
import CartList from "./Cart/CartList.tsx";
import CartSummary from "./Cart/CartSummary.tsx";
import CouponSelect from "./Cart/CouponSelect.tsx";
import ProductList from "./Cart/ProductList.tsx";

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
  } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductList products={products} cart={cart} addToCart={addToCart} />
        <div>
          <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
          <CartList
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
          <CouponSelect
            coupons={coupons}
            selectedCoupon={selectedCoupon}
            applyCoupon={applyCoupon}
          />
          <CartSummary calculateTotal={calculateTotal} />
        </div>
      </div>
    </div>
  );
};
