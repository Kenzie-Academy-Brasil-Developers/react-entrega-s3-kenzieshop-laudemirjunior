import { ADD_CART, REMOVE_CART, REMOVE_CART_TOTAL } from "./actionTypes";

export const addToCart = (product) => ({ type: ADD_CART, product });
export const removeFromCart = (list) => ({ type: REMOVE_CART, list });
export const removeFromCartTotal = (list) => ({
  type: REMOVE_CART_TOTAL,
  list,
});
