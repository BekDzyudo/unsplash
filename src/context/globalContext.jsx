import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_IMAGES":
      // return { ...state, images: [...state.images, ...payload] };
      return { ...state, images: payload };
    case "SEARCH_VALUE":
      return { ...state, searchValue: payload };
    case "PER_PAGE":
      return { ...state, per_page: payload };
    case "LIKE_IMAGE_ARR":
      return { ...state, likeImageArr: payload };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  // const [pageNum, setPageNum] = useState(1);

  const [state, dispatch] = useReducer(changeState, {
    images: [],
    searchValue: "all",
    per_page: 10,
    likeImageArr: JSON.parse(localStorage.getItem("likeImagesArr")) || [],
  });

  useEffect(() => {
    localStorage.setItem("likeImagesArr", JSON.stringify(state.likeImageArr));
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }&query=${state.searchValue ?? "all"}&page=1&per_page=${state.per_page}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "CHANGE_IMAGES", payload: data.results });
      });
  }, [state.searchValue, state.likeImageArr, state.per_page]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        // setPageNum,
        // pageNum,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
