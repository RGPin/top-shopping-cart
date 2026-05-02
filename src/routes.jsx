import ShopPage from "./Components/pages/ShopPage";
import HomePage from "./Components/pages/HomePage";
import CartPage from "./Components/pages/CartPage";
import App from "./App";
import Details from "./Components/pages/Details";

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
    path: "shop/:id",
    element: <Details />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
];

export default routes;
