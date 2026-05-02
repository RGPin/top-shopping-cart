import { useContext } from "react";
import { GlobalContext } from "../../context";
import "./CartItemCard.css";
import { useNavigate } from "react-router";

export default function CartItemCard({ product }) {
  const { handleIncrementProduct, handleDecrementProduct, handleShowDetails } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  return (
    <div
      className="cart-item-card"
      onClick={() => navigate(`/shop/${product.id}`)}
    >
      <div className="item-img-container">
        <img className="item-img" src={product.image} />
      </div>
      <h3 className="item-title">{product.title}</h3>
      <div>
        <button
          className="cart-item-btn"
          onClick={(event) => handleDecrementProduct(event, product)}
        >
          -
        </button>
        <span>{product.count}</span>
        <button
          className="cart-item-btn"
          onClick={(event) => handleIncrementProduct(event, product)}
        >
          +
        </button>
      </div>
      <h2 className="item-price">${product.price}</h2>
    </div>
  );
}
