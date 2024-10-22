import { Coupon } from "../../../types";
import useForm from "../../hooks/useForm";

const initialCouponState: Coupon = {
  name: "",
  code: "",
  discountType: "percentage",
  discountValue: 0,
};

interface CouponFormProps {
  handleAddCoupon: (coupon: Coupon) => void;
}

const CouponForm = ({ handleAddCoupon }: CouponFormProps) => {
  const {
    formState: newCoupon,
    handleInputChange: handleCouponInputChange,
    handleSelectChange: handleCouponSelectChange,
    resetForm: resetCouponForm,
  } = useForm(initialCouponState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddCoupon(newCoupon as Coupon);
    resetCouponForm();
  };

  return (
    <div className="space-y-2 mb-4">
      <input
        name="name"
        type="text"
        placeholder="쿠폰 이름"
        value={newCoupon.name}
        onChange={handleCouponInputChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="code"
        type="text"
        placeholder="쿠폰 코드"
        value={newCoupon.code}
        onChange={handleCouponInputChange}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <select
          name="discountType"
          value={newCoupon.discountType}
          onChange={handleCouponSelectChange}
          className="w-full p-2 border rounded"
        >
          <option value="amount">금액(원)</option>
          <option value="percentage">할인율(%)</option>
        </select>
        <input
          name="discountValue"
          type="number"
          placeholder="할인 값"
          value={newCoupon.discountValue}
          onChange={handleCouponInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        쿠폰 추가
      </button>
    </div>
  );
};

export default CouponForm;
