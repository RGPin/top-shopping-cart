import ShopPage from "./Components/ShopPage";
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
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
