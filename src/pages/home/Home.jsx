import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Images from "./Images";
import { FcSearch } from "react-icons/fc";

function Home() {
  const { images } = useContext(GlobalContext);

  return (
    <div className="py-3 align-elements">
      <div>
        <form action="" className="flex items-center gap-3">
          <input type="search" className="border-2 rounded outline-none p-1 border-gray-500"/>
          <button>
            <FcSearch className="text-2xl" />
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
                  urls={item.urls}
                  alt={item.alt_description}
                  profilImg={item.user.profile_image.small}
                  name={item.user.name}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Home;
