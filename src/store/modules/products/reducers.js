import product from "../../../services";
const defaultState = product;

const productsReducer = (state = defaultState, action) => {
  console.log("PRODUCTS", action);
  return state;
};

export default productsReducer;
