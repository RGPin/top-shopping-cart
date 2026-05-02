import { useContext } from "react";
import "./ProductDetails.css";
import { GlobalContext } from "../../context";

export default function ProductDetails({ product }) {
  const { handleIncrementProduct, handleDecrementProduct, cartContents } =
    useContext(GlobalContext);

  const productQuantity = cartContents.find((item) => item.id === product.id);
  return (
    <div className="details-container">
      <div className="details-img-container">
        <img className="details-img" src={product.image} />
      </div>
      <div className="details-information">
        <h3>Category: {product.category}</h3>
        <h1 className="details-title">{product.title}</h1>
        <p className="details-description">{product.description}</p>
        <h3>
          Rating: <span>{product.rating.rate}</span> (
          <span>{product.rating.count}</span>)
        </h3>
        <div className="add-to-cart-container">
          <h2 className="add-to-cart-text">Add to Cart</h2>
          <div className="details-btn-container">
            <button
              className="details-btn"
              onClick={(event) => handleDecrementProduct(event, product)}
            >
              -
            </button>
            <span className="details-cart-quantity">
              {productQuantity?.count ?? 0}
            </span>
            <button
              className="details-btn"
              onClick={(event) => handleIncrementProduct(event, product)}
            >
              +
            </button>
          </div>
        </div>
        <h1 className="details-price">${product.price}</h1>
      </div>
    </div>
  );
}
