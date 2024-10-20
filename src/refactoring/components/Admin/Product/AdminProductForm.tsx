import { useState } from 'react';
import { Product } from '../../../../types';
import InputField from '../../common/InputField';

interface AdminProductFormProps {
  onProductAdd: (product: Product) => void;
  handleCloseForm: () => void;
}

export default function AdminProductForm({
  onProductAdd,
  handleCloseForm,
}: AdminProductFormProps) {
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    stock: 0,
    discounts: [],
  });

  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    setNewProduct({
      name: '',
      price: 0,
      stock: 0,
      discounts: [],
    });
    handleCloseForm();
  };
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">새 상품 추가</h3>
      <InputField
        id="productName"
        type="text"
        label="상품명"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />

      <InputField
        id="productPrice"
        type="number"
        label="가격"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            price: parseInt(e.target.value),
          })
        }
      />

      <InputField
        id="productStock"
        type="number"
        label="재고"
        value={newProduct.stock}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            stock: parseInt(e.target.value),
          })
        }
      />
      <button
        onClick={handleAddNewProduct}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        추가
      </button>
    </div>
  );
}
