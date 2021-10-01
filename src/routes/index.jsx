import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
