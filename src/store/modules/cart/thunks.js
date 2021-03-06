import { addToCart, removeFromCart, removeFromCartTotal } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    list.push(product);
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addToCart(product));
  };
};

export const removeFromCartThunk = (sold) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product !== sold);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};

export const removeFromCartThunkTotal = () => (dispatch) => {
  localStorage.setItem("cart", JSON.stringify([]));
  dispatch(removeFromCartTotal([]));
};
