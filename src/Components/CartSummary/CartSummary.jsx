import "./CartSummary.css";

export default function CartSummary() {
  return (
    <div className="summary-container">
      <h1>Order Summary</h1>
      <div className="summary-details-container">
        <div className="summary-details">
          <p className="subtotal">
            SubTotal: <span className="subtotal-value"></span>
          </p>
          <p className="vat">
            VAT: <span className="vat-value"></span>
          </p>
        </div>
      </div>
      <div className="coupon-container">
        <h2>
          Add a coupon<button style={{ justifySelf: "flex-end" }}>↓</button>
        </h2>
        <input type="text" />
      </div>
      <h1 className="total">
        Total: <span className="total-value"></span>
      </h1>
      <button>Proceed to checkout</button>
    </div>
  );
}
