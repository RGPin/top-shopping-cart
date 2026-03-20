import { Link } from "react-router";

function ShopPage() {
  return (
    <>
      <h1>Shop page</h1>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}

export default ShopPage;
