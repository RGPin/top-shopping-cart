import { useContext } from "react";
import "./ShopCard.css";
import { GlobalContext } from "../../context";

export default function ShopCard({ product }) {
  const {
    handleIncrementProduct,
    handleDecrementProduct,
    cartContents,
    handleShowDetails,
  } = useContext(GlobalContext);
  const productQuantity = cartContents.find((item) => item.id === product.id);

  return (
    <div className="product-card" onClick={handleShowDetails}>
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
