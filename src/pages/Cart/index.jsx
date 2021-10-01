import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CardCart from "../../components/CardCart";
import { Container, Bar } from "./styles.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const history = useHistory();
  const { cart } = useSelector((store) => store);

  const total = () => {
    return cart
      .reduce((acc, total) => acc + total.price, 0)
      .toFixed(2)
      .replace(".", ",");
  };

  const notify = () => toast("Compra concluída com sucesso!");

  return (
    <Container>
      <Bar>
        <article>
          <h2 onClick={() => history.push("/")}>Shop</h2>
          <div>
            <spam>R${total()}</spam>
            <button onClick={notify}>Finalizar compra</button>
          </div>
        </article>
      </Bar>
      {cart.map((item) => {
        return <CardCart item={item} />;
      })}
      <ToastContainer />
    </Container>
  );
};

export default Cart;
