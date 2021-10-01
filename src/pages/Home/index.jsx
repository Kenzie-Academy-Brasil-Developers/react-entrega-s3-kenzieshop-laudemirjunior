import Card from "../../components/Card";
import { Container, Display, Bar } from "./styles.js";
import { GrCart } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const history = useHistory();
  const products = useSelector((store) => store.products);
  const { cart } = useSelector((store) => store);

  const quant = () => {
    return cart.length;
  };

  return (
    <Container>
      <Bar>
        <article>
          <div>
            <h2>Shop</h2>
          </div>
          <div onClick={() => history.push("/cart")}>
            <GrCart />
            <span>{quant()}</span>
          </div>
        </article>
      </Bar>
      <Display>
        {products.map((item) => {
          return <Card item={item} />;
        })}
      </Display>
    </Container>
  );
};

export default Home;
