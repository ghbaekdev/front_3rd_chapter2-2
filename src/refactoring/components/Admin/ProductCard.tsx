import React from "react";
import { Discount, Product } from "../../../types";
import DiscountCard from "./DiscountCard";
import ProductEditForm from "./ProductEditForm";

interface ProductCardProps {
  product: Product;
  isOpen: boolean;
  isEditing: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onUpdate: (updates: Partial<Product>) => void;
  onEditComplete: () => void;
  onAddDiscount: () => void;
  onRemoveDiscount: (index: number) => void;
  newDiscount: Discount;
  onNewDiscountChange: (discount: Discount) => void;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isOpen,
  isEditing,
  onToggle,
  onEdit,
  onUpdate,
  onEditComplete,
  onAddDiscount,
  onRemoveDiscount,
  newDiscount,
  onNewDiscountChange,
  index,
}) => {
  return (
    <div
      className="bg-white p-4 rounded shadow"
      data-testid={`product-${index + 1}`}
    >
      <button
        data-testid="toggle-button"
        onClick={onToggle}
        className="w-full text-left font-semibold"
      >
        {product.name} - {product.price}원 (재고: {product.stock})
      </button>
      {isOpen && (
        <div className="mt-2">
          {isEditing ? (
            <ProductEditForm
              product={product}
              onUpdate={onUpdate}
              onEditComplete={onEditComplete}
              onAddDiscount={onAddDiscount}
              onRemoveDiscount={onRemoveDiscount}
              newDiscount={newDiscount}
              onNewDiscountChange={onNewDiscountChange}
            />
          ) : (
            <div>
              {product.discounts.map((discount, index) => (
                <DiscountCard discount={discount} key={index} />
              ))}
              <button
                data-testid="modify-button"
                onClick={onEdit}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2"
              >
                수정
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
