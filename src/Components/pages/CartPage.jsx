import { Link } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartItemList from "../CartItemList/CartItemList";

function CartPage() {
  return (
    <>
      <Header />
      <main>
        <CartItemList />
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
