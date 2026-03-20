import { Link } from "react-router";

function CartPage() {
  return (
    <>
      <h1>Cart Page</h1>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}

export default CartPage;
