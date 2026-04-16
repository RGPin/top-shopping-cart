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
      <Footer />
    </>
  );
}

export default ShopPage;
