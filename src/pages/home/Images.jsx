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
import { Link } from "react-router-dom";

function Images({ urls, alt, profilImg, name, links, likedImage }) {
  const { likeImageArr, downloadImagesArr, dispatch, setMore } =
    useContext(GlobalContext);

  return (
    <div className="m-2 relative top-0 left-0 group">
      <img className="block w-full" src={urls.regular} alt={alt} />

      <div className="invisibile opacity-0 group-hover:visibile group-hover:opacity-100 transition-all duration-300">
        <div className="topBtn absolute top-3 right-3 flex gap-4">
          <div
            onClick={() => {
              if (!likeImageArr.includes(urls.regular)) {
                dispatch({
                  type: "LIKE_IMAGE_ARR",
                  payload: [...likeImageArr, urls.regular],
                });
              }
              // ====
              else {
                const index = likeImageArr.indexOf(urls.regular);

                if (index !== -1) {
                  likeImageArr.splice(index, 1);
                  dispatch({
                    type: "LIKE_IMAGE_ARR",
                    payload: [...likeImageArr],
                  });
                }
              }
              // setHeardActive(!heardActive);
              // ====
            }}
            className={`like border-2 border-none cursor-pointer p-2 rounded-md text-black ${
              likedImage ? "bg-red-800" : "bg-gray-200"
            } `}
          >
            <FaHeart
              className={`${likedImage ? "text-white" : "bg-gray-200"}`}
            />
          </div>
          <div className="plus like border-2 border-none cursor-pointer p-2 rounded-md bg-gray-200 hover:bg-gray-300">
            <FaPlus className="text-black" />
          </div>
        </div>
        <div className="bottomRightBtn absolute bottom-3 right-3">
          <div
            onClick={() => {
              if (!downloadImagesArr.includes(urls.regular)) {
                dispatch({
                  type: "DOWNLOAD_IMAGE_ARR",
                  payload: [...downloadImagesArr, urls.regular],
                });
              }
              // ====
              else {
                const index = downloadImagesArr.indexOf(urls.regular);

                if (index !== -1) {
                  downloadImagesArr.splice(index, 1);
                  dispatch({
                    type: "DOWNLOAD_IMAGE_ARR",
                    payload: [...downloadImagesArr],
                  });
                }
              }
              // setHeardActive(!heardActive);
              // ====
            }}
            className="download like border-2 border-none cursor-pointer p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            <a
              href={links.download + "&force=true"}
              rel="nofollow"
              download
              target="_blank"
            >
              <MdOutlineFileDownload className="text-2xl text-black" />
            </a>
          </div>
        </div>
        <Link
          onClick={() => {
            setMore({
              alt,
              imageUrl: urls.regular,
              name,
            });
          }}
          to="/image-info"
          className="bottomLeftBtn absolute bottom-3 left-3 flex items-center gap-2"
        >
          <div className="w-10 h-10 cursor-pointer">
            <img
              src={profilImg}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="desc" style={{ maxWidth: "170px" }}>
            <h4 className="text-white font-medium text-sm md:text-lg">
              {name}
            </h4>
            {/* <p className="text-gray-50 font-light text-xs">{alt}</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Images;
