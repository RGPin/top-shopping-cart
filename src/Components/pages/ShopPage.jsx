import { Link } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useFetch from "../../hooks/useFetch";
import ShopGrid from "../ShopGrid/ShopGrid";
import useSessionStorage from "../../hooks/useSessionStorage";
import { useContext, useEffect, useState } from "react";
import "./ShopPage.css";
import { GlobalContext } from "../../context";

function ShopPage() {
  const { products, loading, error } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <main>
        {loading && <h3 className="loading">Loading, please wait...</h3>}
        {error && <h3 className="error">Error encountered: {error}</h3>}
        {products ? (
          <ShopGrid products={products} />
        ) : (
          <h3 className="empty-shop-list"></h3>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ShopPage;
