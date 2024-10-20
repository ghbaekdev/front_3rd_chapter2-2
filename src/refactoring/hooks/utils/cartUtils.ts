import { CartItem, Coupon } from '../../../types';

export const calculateItemTotal = (item: CartItem) => {
  const { product, quantity } = item;
  const { price } = product;

  return price * quantity;
};

export const getMaxApplicableDiscount = (item: CartItem) => {
  const { product, quantity } = item;
  const { discounts } = product;

  let maxDiscount = 0;

  for (const discount of discounts) {
    if (quantity >= discount.quantity) {
      maxDiscount = Math.max(maxDiscount, discount.rate);
    }
  }
  return maxDiscount;
};

export const calculateCartTotal = (
  cart: CartItem[],
  selectedCoupon: Coupon | null
) => {
  const totalBeforeDiscount = cart.reduce(
    (total, item) => total + calculateItemTotal(item),
    0
  );

  let totalDiscount = 0;
  let totalAfterDiscount = totalBeforeDiscount;

  if (selectedCoupon) {
    if (selectedCoupon.type === 'amount') {
      totalDiscount = Math.min(selectedCoupon.value, totalBeforeDiscount);
    } else if (selectedCoupon.type === 'percentage') {
      totalDiscount = (totalBeforeDiscount * selectedCoupon.value) / 100;
    }
    totalAfterDiscount = totalBeforeDiscount - totalDiscount;
  }

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount,
  };
};

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] => {
  return cart
    .map((item) => {
      if (item.product.id === productId) {
        if (newQuantity <= 0) {
          // 수량이 0 이하면 null 반환 (나중에 필터링됨)
          return null;
        }

        // 재고 한도를 확인하고 수량 업데이트
        const updatedQuantity = Math.min(newQuantity, item.product.stock);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    })
    .filter((item): item is CartItem => item !== null);
};
