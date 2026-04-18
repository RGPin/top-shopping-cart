import "./ShopCard.css";

export default function ShopCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={product.image} className="product-card-image" />
      </div>
      <div>
        <p className="product-card-name truncate">{product.title}</p>
        <button className="product-card-quantity-btn">+</button>
        <p>{product.rating.rate}</p>
        <p>Price</p>
      </div>
    </div>
  );
}
