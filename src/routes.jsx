import ShopPage from "./Components/pages/ShopPage";
import HomePage from "./Components/pages/HomePage";
import CartPage from "./Components/pages/CartPage";
import App from "./App";

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
