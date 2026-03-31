import { Link } from "react-router";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="title-logo">
        <img src={"/assets/logo.png"} alt="logo" className="logo" />
        <h1 className="title">Cartly</h1>
      </Link>
      <Link to="/shop">
        <h1>Shop</h1>
      </Link>
      <Link to="/cart">
        <h1>Cart</h1>
      </Link>
    </header>
  );
}

export default Header;
