import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}

export default HomePage;
