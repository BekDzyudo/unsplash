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
    case "DOWNLOAD_IMAGE_ARR":
      return { ...state, downloadImagesArr: payload };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  // const [pageNum, setPageNum] = useState(1);
  const [more, setMore] = useState({});

  const [state, dispatch] = useReducer(changeState, {
    images: [],
    searchValue: "all",
    per_page: 10,
    likeImageArr: JSON.parse(localStorage.getItem("likeImagesArr")) || [],
    downloadImagesArr:
      JSON.parse(localStorage.getItem("downloadImagesArr")) || [],
  });
  //  import.meta.env.VITE_ACCESS_KEY
  useEffect(() => {
    localStorage.setItem("likeImagesArr", JSON.stringify(state.likeImageArr));
    localStorage.setItem(
      "downloadImagesArr",
      JSON.stringify(state.downloadImagesArr)
    );
    fetch(
      `https://api.unsplash.com/search/photos?client_id=RRVvRp7SkQ-zBpNfkk9i1YLCNn7W7M4x-5dC10sJiD8&query=${
        state.searchValue ?? "all"
      }&page=1&per_page=${state.per_page}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "CHANGE_IMAGES", payload: data.results });
      });
  }, [
    state.searchValue,
    state.likeImageArr,
    state.per_page,
    state.downloadImagesArr,
    more,
  ]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        setMore,
        more,
        // setPageNum,
        // pageNum,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
