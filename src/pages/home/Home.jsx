import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../context/globalContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Images from "./Images";
import { FcSearch } from "react-icons/fc";
import { Toaster, toast } from "react-hot-toast";

function Home() {
  const { images, setPageNum, pageNum, per_page, likeImageArr, dispatch } =
    useContext(GlobalContext);

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
      <div>
        <form action="" className="flex items-center gap-3">
          <input
            ref={searchValue}
            type="search"
            className="border-2 rounded outline-none p-1 border-gray-500"
            placeholder="search..."
          />
          <button onClick={searchFunck}>
            <FcSearch className="text-2xl" />
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
