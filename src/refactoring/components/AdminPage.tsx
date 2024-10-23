import { useState } from "react";
import { Coupon, Product } from "../../types";
import ProductForm from "./Admin/ProductForm";
import CouponForm from "./Admin/CouponForm";
import CouponList from "./Admin/CouponList";
import ProductList from "./Admin/ProductList";

interface Props {
  products: Product[];
  coupons: Coupon[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const AdminPage = ({
  products,
  coupons,
  onProductUpdate,
  onProductAdd,
  onCouponAdd,
}: Props) => {
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  const handleAddCoupon = (newCoupon: Coupon) => {
    onCouponAdd(newCoupon);
  };

  const handleAddNewProduct = (newProduct: Product) => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    setShowNewProductForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
          <button
            onClick={() => setShowNewProductForm(!showNewProductForm)}
            className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
          >
            {showNewProductForm ? "취소" : "새 상품 추가"}
          </button>
          {showNewProductForm && (
            <ProductForm handleAddNewProduct={handleAddNewProduct} />
          )}
          <ProductList products={products} onProductUpdate={onProductUpdate} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
          <div className="bg-white p-4 rounded shadow">
            <CouponForm handleAddCoupon={handleAddCoupon} />
            <CouponList coupons={coupons} />
          </div>
        </div>
      </div>
    </div>
  );
};
