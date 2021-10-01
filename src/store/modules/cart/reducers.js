import { ADD_CART, REMOVE_CART, REMOVE_CART_TOTAL } from "./actionTypes";
const defaultState = JSON.parse(localStorage.getItem("cart")) || [];
const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];
    case REMOVE_CART:
      const { list } = action;
      return list;
    case REMOVE_CART_TOTAL:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
