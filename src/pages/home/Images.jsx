import React, { useContext, useState } from "react";
// qora likee
import { FaHeart } from "react-icons/fa";
// oq like
import { FaRegHeart } from "react-icons/fa";
// download icon
import { MdOutlineFileDownload } from "react-icons/md";
// plus
import { FaPlus } from "react-icons/fa6";
import { GlobalContext } from "../../context/globalContext";

function Images({ urls, alt, profilImg, name }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="m-2 relative top-0 left-0"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <img className="block w-full" src={urls.regular} alt={alt} />
      {active && (
        <div>
          <div className="topBtn absolute top-3 right-3 flex gap-4">
            <div className="like border-2 border-none cursor-pointer p-2 rounded-md bg-gray-200 hover:bg-gray-300">
              <FaHeart />
            </div>
            <div className="plus like border-2 border-none cursor-pointer p-2 rounded-md bg-gray-200 hover:bg-gray-300">
              <FaPlus />
            </div>
          </div>
          <div className="bottomRightBtn absolute bottom-3 right-3">
            <div className="download like border-2 border-none cursor-pointer p-2 rounded-md bg-gray-200 hover:bg-gray-300">
              <MdOutlineFileDownload className="text-2xl" />
            </div>
          </div>
          <div className="bottomLeftBtn absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-10 h-10 cursor-pointer">
              <img
                src={profilImg}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="desc" style={{ maxWidth: "170px" }}>
              <h4 className="text-white font-medium">{name}</h4>
              <p className="text-gray-50 font-light text-xs">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
