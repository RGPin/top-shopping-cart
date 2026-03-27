import { Link } from "react-router";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={"/assets/logo.png"} alt="logo" />
      </Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
}

export default Header;
