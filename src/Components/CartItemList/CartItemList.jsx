import { useContext } from "react";
import { GlobalContext } from "../../context";
import CartItemCard from "../CartItemCard/CartItemCard";
import "./CartItemList.css";

export default function CartItemList() {
  const { cartContents } = useContext(GlobalContext);

  return (
    <div className="cart-list-container">
      {cartContents?.length ? (
        cartContents.map((item) => (
          <CartItemCard product={item} key={item.id} />
        ))
      ) : (
        <h1 className="empty-cart-list">No items added in the cart</h1>
      )}
    </div>
  );
}
