import { createContext, useEffect, useState } from "react";
import useSessionStorage from "../hooks/useSessionStorage";
import useFetch from "../hooks/useFetch";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cartContents, setCartContents] = useState([]);
  const [storedValue, setValue, sessionStorageErr] = useSessionStorage(
    "fakestoreapi-products",
  );
  const shouldFetch = storedValue == null;
  const [data, error, loading] = useFetch(
    shouldFetch ? "https://fakestoreapi.com/products" : null,
    {},
  );

  function handleIncrementProduct(event, product) {
    setCartContents((prevState) => {
      const existingProduct = prevState.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevState.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item,
        );
      }

      return [...prevState, { ...product, count: 1 }];
    });
    event.stopPropagation();
  }

  function handleDecrementProduct(event, product) {
    setCartContents((prevState) => {
      const existingProduct = prevState.find((item) => item.id === product.id);

      if (!existingProduct) return prevState;

      return prevState
        .map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item,
        )
        .filter((item) => item.count > 0);
    });
    event.stopPropagation();
  }

  useEffect(() => {
    if (data) setValue(data);
  }, [data]);

  const products = storedValue ?? data;

  return (
    <GlobalContext.Provider
      value={{
        cartContents,
        setCartContents,
        handleIncrementProduct,
        handleDecrementProduct,
        products,
        loading,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
