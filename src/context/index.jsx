import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cartContents, setCartContents] = useState([]);

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

  function handleShowDetails() {
    console.log("clicked");
  }

  return (
    <GlobalContext.Provider
      value={{
        cartContents,
        handleIncrementProduct,
        handleDecrementProduct,
        handleShowDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
