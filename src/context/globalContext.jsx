import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [images, setImages] = useState("");
  const [searchValue, setSearchValue] = useState("all");
  const [per_page, setPerPage] = useState(10);
  const [likeImageArr, setLikeImageArr] = useState(
    JSON.parse(localStorage.getItem("likeImagesArr")) || []
  );
  //

  useEffect(() => {
    localStorage.setItem("likeImagesArr", JSON.stringify(likeImageArr));

    fetch(
      `https://api.unsplash.com/search/photos?client_id=RRVvRp7SkQ-zBpNfkk9i1YLCNn7W7M4x-5dC10sJiD8&query=${searchValue}&page=1&per_page=${per_page}`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.results));
  }, [searchValue, per_page, likeImageArr]);

  return (
    <GlobalContext.Provider
      value={{
        images,
        setSearchValue,
        setPerPage,
        per_page,
        setLikeImageArr,
        likeImageArr,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
