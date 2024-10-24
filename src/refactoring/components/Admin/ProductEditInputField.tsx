import { Product } from "../../../types";

interface ProductEditInputFieldProps {
  value: string | number;
  onChange: (updates: Partial<Product>) => void;
  label: string;
  id: string;
  name: string;
  type: string;
}

const ProductEditInputField = ({
  value,
  onChange,
  label,
  id,
  name,
  type,
}: ProductEditInputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}: </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) =>
          onChange({
            [name]: e.target.value,
          })
        }
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default ProductEditInputField;
