import { Container } from "./styles.js";
import { addToCartThunk } from "../../store/modules/cart/thunks.js";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <p>{item.name.slice(0, 50).concat("...")}</p>
      <img src={item.image} alt={item.name} />
      <span>R${item.price.toFixed(2).replace(".", ",")}</span>
      <button onClick={() => dispatch(addToCartThunk(item))}>Comprar</button>
    </Container>
  );
};

export default Card;
