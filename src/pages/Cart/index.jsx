import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CardCart from "../../components/CardCart";
import { Container, Bar, Block } from "./styles.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeFromCartThunkTotal } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../components/animation/loader.json";

const Cart = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const total = () => {
    return cart
      .reduce((acc, total) => acc + total.price, 0)
      .toFixed(2)
      .replace(".", ",");
  };

  const notify = () => toast("Compra concluída com sucesso!");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Bar>
        <article>
          <h2 onClick={() => history.push("/")}>Shop</h2>
          <div>
            <spam>R${total()}</spam>
            <button
              onClick={() => {
                dispatch(removeFromCartThunkTotal());
                notify();
              }}
            >
              Finalizar compra
            </button>
          </div>
        </article>
      </Bar>
      {cart.map((item) => {
        return <CardCart item={item} />;
      })}
      <Block>
        {cart.length === 0 ? (
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            speed={0.75}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        ) : null}
      </Block>
      <ToastContainer />
    </Container>
  );
};

export default Cart;
