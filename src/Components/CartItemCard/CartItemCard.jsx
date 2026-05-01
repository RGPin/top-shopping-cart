import { useContext } from "react";
import { GlobalContext } from "../../context";
import "./CartItemCard.css";

export default function CartItemCard({ product }) {
  const { handleIncrementProduct, handleDecrementProduct } =
    useContext(GlobalContext);

  return (
    <div className="cart-item-card">
      <div className="item-img-container">
        <img className="item-img" src={product.image} />
      </div>
      {/* <div className="item-title-container"> */}
      <h3 className="item-title">{product.title}</h3>
      {/* </div> */}
      <div>
        <button onClick={() => handleIncrementProduct(product)}>+</button>
        <span>{product.count}</span>
        <button onClick={() => handleDecrementProduct(product)}>-</button>
      </div>
      <h2 className="item-price">${product.price}</h2>
    </div>
  );
}
