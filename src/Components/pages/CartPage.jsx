import { Link } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartItemList from "../CartItemList/CartItemList";
import CartSummary from "../CartSummary/CartSummary";
import "./CartPage.css";

function CartPage() {
  return (
    <>
      <Header />
      <main className="cart-main">
        <CartItemList />
        <CartSummary />
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
