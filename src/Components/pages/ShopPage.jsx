import { Link } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useFetch from "../../hooks/useFetch";
import ShopGrid from "../ShopGrid/ShopGrid";
import useSessionStorage from "../../hooks/useSessionStorage";
import { useEffect, useState } from "react";

function ShopPage() {
  const [storedValue, setValue, sessionStorageErr] = useSessionStorage(
    "fakestoreapi-products",
  );
  const shouldFetch = storedValue == null;
  const [data, error, loading] = useFetch(
    shouldFetch ? "https://fakestoreapi.com/products" : null,
    {},
  );

  useEffect(() => {
    if (data) setValue(data);
  }, [data]);

  const products = storedValue ?? data;
  // console.log(JSON.stringify(data));
  return (
    <>
      <Header />
      <main>
        {loading && <h3>Loading, please wait...</h3>}
        {error && <h3>Error encountered: {error}</h3>}
        {products && <ShopGrid products={products} />}
      </main>
      <Footer />
    </>
  );
}

export default ShopPage;
