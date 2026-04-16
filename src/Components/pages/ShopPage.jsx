import { Link } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useFetch from "../../hooks/useFetch";

function ShopPage() {
  const [data, error, loading] = useFetch(
    "https://fakestoreapi.com/products",
    {},
  );
  console.log(data);
  return (
    <>
      <Header />
      {loading && <h3>Loading, please wait...</h3>}
      {error && <h3>Error encountered: {error}</h3>}
      {data && data.map((product) => <p key={product.id}>{product.title}</p>)}
      <Footer />
    </>
  );
}

export default ShopPage;
