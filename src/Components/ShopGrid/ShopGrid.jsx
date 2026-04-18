import "./ShopGrid.css";
import ShopCard from "../ShopCard/ShopCard";

export default function ShopGrid({ products }) {
  return (
    <div className="products-grid">
      {products?.length &&
        products.map((product) => (
          <ShopCard product={product} key={product.id} />
        ))}
    </div>
  );
}
