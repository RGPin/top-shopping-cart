import { useContext } from "react";
import "./ShopCard.css";
import { GlobalContext } from "../../context";
import { useNavigate } from "react-router";

export default function ShopCard({ product }) {
  const { handleIncrementProduct, handleDecrementProduct, cartContents } =
    useContext(GlobalContext);
  const productQuantity = cartContents.find((item) => item.id === product.id);

  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/shop/${product.id}`)}
    >
      <div className="product-card-image-container">
        <img src={product.image} className="product-card-image" />
      </div>
      <div>
        <p className="product-card-name truncate">{product.title}</p>
        <button
          className="product-card-quantity-btn"
          onClick={(event) => handleDecrementProduct(event, product)}
        >
          -
        </button>
        <span>{productQuantity?.count ?? 0}</span>
        <button
          className="product-card-quantity-btn"
          onClick={(event) => handleIncrementProduct(event, product)}
        >
          +
        </button>
        <p>{product.rating.rate}</p>
        <p className="product-card-price">${product.price}</p>
      </div>
    </div>
  );
}
