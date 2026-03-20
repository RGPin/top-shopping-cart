import App from "./Components/App";
import ShopPage from "./Components/ShopPage";
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "home",
        element: <HomePage />
    },
    {
        path: "shop",
        element: <ShopPage />
    },
    {
        path: "cart",
        element: <CartPage />
    }
];

export default routes;