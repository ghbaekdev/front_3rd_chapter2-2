import React from "react";
import { Product } from "../../../types";
import { useProductList } from "../../hooks/useProductList";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onProductUpdate: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductUpdate,
}) => {
  const {
    openProductIds,
    editingProduct,
    newDiscount,
    toggleProductAccordion,
    handleProductUpdate,
    handleEditProduct,
    handleEditComplete,
    handleAddDiscount,
    handleRemoveDiscount,
    setNewDiscount,
  } = useProductList(products, onProductUpdate);

  return (
    <div className="space-y-2">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          index={index}
          product={
            editingProduct && editingProduct.id === product.id
              ? editingProduct
              : product
          }
          isOpen={openProductIds.has(product.id)}
          isEditing={editingProduct?.id === product.id}
          onToggle={() => toggleProductAccordion(product.id)}
          onEdit={() => handleEditProduct(product)}
          onUpdate={(updates) => handleProductUpdate(product.id, updates)}
          onEditComplete={handleEditComplete}
          onAddDiscount={() => handleAddDiscount(product.id)}
          onRemoveDiscount={(index) => handleRemoveDiscount(product.id, index)}
          newDiscount={newDiscount}
          onNewDiscountChange={setNewDiscount}
        />
      ))}
    </div>
  );
};

export default ProductList;
