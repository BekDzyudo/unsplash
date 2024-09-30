import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../context/globalContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Images from "./Images";
import { FcSearch } from "react-icons/fc";
import { Toaster, toast } from "react-hot-toast";
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
    <div className="py-3 align-elements">
      <div className="my-2">
        {/* <Search /> */}
        <form action="" className="max-w-96 mx-auto gap-2 w-full flex">
          <label className="input input-bordered flex items-center gap-2 w-full input-sm md:input-md">
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
            className="btn btn-primary md:hidden btn-sm"
          >
            Search
          </button>
        </form>
        <Toaster />
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images &&
            images.map((item) => {
              return (
                <Images
                  key={item.id}
                  urls={item.urls}
                  alt={item.alt_description}
                  profilImg={item.user.profile_image.small}
                  name={item.user.name}
                  links={item.links}
                  likedImage={likeImageArr.some(
                    (img) => img == item.urls.regular
                  )}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
      <div className="flex items-center justify-center m-5">
        <button
          onClick={() => {
            // setPageNum(pageNum + 1);

            dispatch({ type: "PER_PAGE", payload: per_page + 10 });
          }}
          className="px-20 py-2 rounded-lg text-white text-lg bg-gray-400"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default Home;
