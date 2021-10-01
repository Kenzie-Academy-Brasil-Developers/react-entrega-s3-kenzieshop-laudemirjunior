import { removeFromCartThunk } from "../../store/modules/cart/thunks.js";
import { useDispatch } from "react-redux";
import { Container, Block } from "./styles.js";

const CardCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <p>{item.name.slice(0, 60).concat("...")}</p>
      <div>
        <img src={item.image} alt={item.name} />
        <Block>
          <span>R${item.price.toFixed(2).replace(".", ",")}</span>
          <button onClick={() => dispatch(removeFromCartThunk(item))}>
            Remover
          </button>
        </Block>
      </div>
    </Container>
  );
};

export default CardCart;
