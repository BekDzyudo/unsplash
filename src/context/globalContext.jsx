import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [images, setImages] = useState("");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=RRVvRp7SkQ-zBpNfkk9i1YLCNn7W7M4x-5dC10sJiD8&query=books&page=1`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.results));
  }, []);

  return (
    <GlobalContext.Provider value={{ images }}>
      {children}
    </GlobalContext.Provider>
  );
}
