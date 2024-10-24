import { Product } from "../../../types";
import useForm from "../../hooks/useForm";
import ProductInputField from "./ProductInputField";

const initialProductState: Omit<Product, "id"> = {
  name: "",
  price: 0,
  stock: 0,
  discounts: [],
};

interface ProductFormProps {
  handleAddNewProduct: (newProduct: Product) => void;
}

const ProductForm = ({ handleAddNewProduct }: ProductFormProps) => {
  const {
    formState: newProduct,
    handleInputChange: handleProductInputChange,
    resetForm: resetProductForm,
  } = useForm(initialProductState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddNewProduct(newProduct as Product);
    resetProductForm();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">새 상품 추가</h3>
      <ProductInputField
        id="productName"
        label="상품명"
        name="name"
        value={newProduct.name}
        onChange={handleProductInputChange}
      />
      <ProductInputField
        id="productPrice"
        label="가격"
        name="price"
        value={newProduct.price}
        onChange={handleProductInputChange}
      />
      <ProductInputField
        id="productStock"
        label="재고"
        name="stock"
        value={newProduct.stock}
        onChange={handleProductInputChange}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        추가
      </button>
    </div>
  );
};

export default ProductForm;
