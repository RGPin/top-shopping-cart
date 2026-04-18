import { Link } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useFetch from "../../hooks/useFetch";
import ShopGrid from "../ShopGrid/ShopGrid";

function ShopPage() {
  const [data, error, loading] = useFetch(
    "https://fakestoreapi.com/products",
    {},
  );
  console.log(data);
  return (
    <>
      <Header />
      <main>
        {loading && <h3>Loading, please wait...</h3>}
        {error && <h3>Error encountered: {error}</h3>}
        {data && <ShopGrid products={data} />}
      </main>
      <Footer />
    </>
  );
}

export default ShopPage;
