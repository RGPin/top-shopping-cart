import { useContext } from "react";
import "./ShopCard.css";
import { GlobalContext } from "../../context";

export default function ShopCard({ product }) {
  const { handleIncrementProduct, handleDecrementProduct, cartContents } =
    useContext(GlobalContext);
  const productQuantity = cartContents.find((item) => item.id === product.id);
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={product.image} className="product-card-image" />
      </div>
      <div>
        <p className="product-card-name truncate">{product.title}</p>
        <button
          className="product-card-quantity-btn"
          onClick={() => handleDecrementProduct(product)}
        >
          -
        </button>
        <span>{productQuantity?.count ?? 0}</span>
        <button
          className="product-card-quantity-btn"
          onClick={() => handleIncrementProduct(product)}
        >
          +
        </button>
        <p>{product.rating.rate}</p>
        <p>Price</p>
      </div>
    </div>
  );
}
