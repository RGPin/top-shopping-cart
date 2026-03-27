import ShopPage from "./Components/ShopPage";
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";
import App from "./Components/App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
];

export default routes;
