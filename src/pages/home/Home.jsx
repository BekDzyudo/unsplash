import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../context/globalContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Images from "./Images";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-toastify";
import Search from "../../components/Search";
import { useActionData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// export const action = async ({ request }) => {
//   let formData = await request.formData();
//   let search = formData.get("search");
//   return search;
// };

function Home() {
  const { images, setPageNum, pageNum, per_page, likeImageArr, dispatch } =
    useContext(GlobalContext);
  // const val = useActionData();
  // console.log(val);

  const searchValue = useRef();

  function searchFunck(e) {
    e.preventDefault();
    if (searchValue.current.value) {
      dispatch({ type: "SEARCH_VALUE", payload: searchValue.current.value });
    } else if (!searchValue.current.value) {
      toast.error("maydonni to'ldiring!");
    }
  }

  return (
    <div className="align-elements py-3">
      <div className="my-2">
        {/* <Search /> */}
        <form action="" className="mx-auto flex w-full max-w-96 gap-2">
          <label className="input input-sm input-bordered flex w-full items-center gap-2 md:input-md">
            <input
              ref={searchValue}
              type="search"
              className="grow"
              placeholder="Search"
              name="search"
            />
            <FaSearch className="h-4 w-4 opacity-70" />
          </label>
          <button
            onClick={searchFunck}
            className="btn btn-primary btn-sm md:hidden"
          >
            Search
          </button>
        </form>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images &&
            images.map((item) => {
              return (
                <Images
                  key={item.id}
                  imgData={item}
                  likedImage={likeImageArr.some(
                    (img) => img.urls.regular == item.urls.regular,
                  )}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
      <div className="m-5 flex items-center justify-center">
        <button
          onClick={() => {
            // setPageNum(pageNum + 1);

            dispatch({ type: "PER_PAGE", payload: per_page + 10 });
          }}
          className="rounded-lg bg-gray-400 px-20 py-2 text-lg text-white"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default Home;
