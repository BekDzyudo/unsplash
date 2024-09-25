import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { GlobalContext } from "../../context/globalContext";

function ImagesLikes({ image }) {
  const { likeImageArr, dispatch } = useContext(GlobalContext);
  return (
    <div className="m-2 relative top-0 left-0 group">
      <img className="block w-full" src={image} />

      <div className="invisibile opacity-0 group-hover:visibile group-hover:opacity-100 transition-all duration-300">
        <div className="topBtn absolute top-3 right-3 flex gap-4">
          <div
            className="bg-gray-200 border-2 cursor-pointer p-2 rounded-md"
            onClick={() => {
              if (likeImageArr.includes(image)) {
                const index = likeImageArr.indexOf(image);

                if (index !== -1) {
                  likeImageArr.splice(index, 1);
                  dispatch({
                    type: "LIKE_IMAGE_ARR",
                    payload: [...likeImageArr],
                  });
                }
              }
            }}
          >
            <MdDelete className="text-red-700 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesLikes;
