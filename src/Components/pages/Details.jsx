import { useContext } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../../context";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function Details() {
  const { id } = useParams();
  const { products, loading, error } = useContext(GlobalContext);
  const product = products?.find((item) => item.id === Number(id));
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!product) return <h1>Product not found</h1>;
  return (
    <>
      <Header />
      <main>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error encountered: {error}</h1>}
        {product ? (
          <ProductDetails product={product} />
        ) : (
          <h1>Product not found</h1>
        )}
      </main>
      <Footer />
    </>
  );
}
