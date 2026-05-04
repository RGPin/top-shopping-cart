import { useContext, useState } from "react";
import "./CartSummary.css";
import { GlobalContext } from "../../context";

export default function CartSummary() {
  const { cartContents, setCartContents } = useContext(GlobalContext);
  const [isHidden, setIsHidden] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const subTotal =
    Math.round(
      cartContents.reduce((acc, curr) => curr.price * curr.count + acc, 0) *
        100,
    ) / 100;
  const vat = Math.round(subTotal * 0.12 * 100) / 100;
  const total = Math.round((vat + subTotal) * 100) / 100;
  return (
    <div className="summary-container">
      <h1>Order Summary</h1>
      <div className="summary-details">
        <p className="detail">
          SubTotal: <span className="detail-value">{subTotal}</span>
        </p>
        <p className="detail">
          VAT: <span className="detail-value">{vat}</span>
        </p>
      </div>
      <div className="coupon-container">
        <button className="coupon" onClick={() => setIsHidden(!isHidden)}>
          Add a coupon<span>↓</span>
        </button>
        <input
          type="text"
          className={isHidden ? "hidden" : "coupon-input"}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              alert("no");
              setInputVal("");
              setIsHidden(true);
            }
          }}
        />
      </div>
      <h1 className="total">
        Total: <span className="total-value">{total}</span>
      </h1>
      <button
        className="checkout-btn"
        onClick={() => {
          alert("no");
          setCartContents([]);
        }}
      >
        Proceed to checkout
      </button>
    </div>
  );
}
