import { removeFromCartThunk } from "../../store/modules/cart/thunks.js";
import { useDispatch } from "react-redux";
import { Container, Block } from "./styles.js";

const CardCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <p>{item.name}</p>
      <div>
        <img src={item.image} alt={item.name} />
        <Block>
          <span>
            {item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button onClick={() => dispatch(removeFromCartThunk(item))}>
            Remover
          </button>
        </Block>
      </div>
    </Container>
  );
};

export default CardCart;
