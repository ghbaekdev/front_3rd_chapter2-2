import React from "react";
import { Discount, Product } from "../../../types";
import ProductEditInputField from "./ProductEditInputField";

interface ProductEditFormProps {
  product: Product;
  onUpdate: (updates: Partial<Product>) => void;
  onEditComplete: () => void;
  onAddDiscount: () => void;
  onRemoveDiscount: (index: number) => void;
  newDiscount: Discount;
  onNewDiscountChange: (discount: Discount) => void;
}

const ProductEditForm: React.FC<ProductEditFormProps> = ({
  product,
  onUpdate,
  onEditComplete,
  onAddDiscount,
  onRemoveDiscount,
  newDiscount,
  onNewDiscountChange,
}) => {
  return (
    <div>
      <ProductEditInputField
        value={product.name}
        onChange={onUpdate}
        label="상품명"
        id="productName"
        name="name"
        type="text"
      />
      <ProductEditInputField
        value={product.price}
        onChange={onUpdate}
        label="가격"
        id="productPrice"
        name="price"
        type="number"
      />
      <ProductEditInputField
        value={product.stock}
        onChange={onUpdate}
        label="재고"
        id="productStock"
        name="stock"
        type="number"
      />
      <div>
        <h4 className="text-lg font-semibold mb-2">할인 정보</h4>
        {product.discounts.map((discount, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>
              {discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
            </span>
            <button
              onClick={() => onRemoveDiscount(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              삭제
            </button>
          </div>
        ))}
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="수량"
            value={newDiscount.quantity}
            onChange={(e) =>
              onNewDiscountChange({
                ...newDiscount,
                quantity: parseInt(e.target.value),
              })
            }
            className="w-1/3 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="할인율 (%)"
            value={newDiscount.rate * 100}
            onChange={(e) =>
              onNewDiscountChange({
                ...newDiscount,
                rate: parseInt(e.target.value) / 100,
              })
            }
            className="w-1/3 p-2 border rounded"
          />
          <button
            onClick={onAddDiscount}
            className="w-1/3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            할인 추가
          </button>
        </div>
      </div>
      <button
        onClick={onEditComplete}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2"
      >
        수정 완료
      </button>
    </div>
  );
};

export default ProductEditForm;
