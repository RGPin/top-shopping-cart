import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cartContents, setCartContents] = useState([]);

  function handleIncrementProduct(product) {
    setCartContents((prevState) => {
      const existingProduct = prevState.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevState.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item,
        );
      }

      return [...prevState, { id: product.id, count: 1 }];
    });
  }

  function handleDecrementProduct() {}

  console.log(cartContents);
  return (
    <GlobalContext.Provider
      value={{
        cartContents,
        handleIncrementProduct,
        handleDecrementProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
