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
// import firebase
import { useFirestore } from "../../hooks/useFirestore";

function Images({ imgData, likedImage }) {
  const {
    likeImageArr,
    downloadImagesArr,
    dispatch,
    setMore,
    user: authUser,
  } = useContext(GlobalContext);

  const { addDocument, deleteDocument } = useFirestore();

  const { urls, alt_description, user, links } = imgData;

  const alreadyAdded = likeImageArr.find((img) => {
    return img.id == imgData.id;
  });

  return (
    <div className="group relative left-0 top-0 m-2">
      <img className="block w-full" src={urls.regular} alt={alt_description} />

      <div className="invisibile group-hover:visibile opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="topBtn absolute right-3 top-3 flex gap-4">
          <div
            onClick={() => {
              if (!alreadyAdded) {
                addDocument("likeImageArr", { ...imgData, uid: authUser.uid });
              } else {
                deleteDocument("likeImageArr", alreadyAdded._id);
              }
            }}
            className={`like cursor-pointer rounded-md border-2 border-none p-2 text-black ${
              likedImage ? "bg-red-800" : "bg-gray-200"
            } `}
          >
            <FaHeart
              className={`${likedImage ? "text-white" : "bg-gray-200"}`}
            />
          </div>
          <div className="plus like cursor-pointer rounded-md border-2 border-none bg-gray-200 p-2 hover:bg-gray-300">
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
            }}
            className="download like cursor-pointer rounded-md border-2 border-none bg-gray-200 p-2 hover:bg-gray-300"
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
              name: user.name,
            });
          }}
          to="/image-info"
          className="bottomLeftBtn absolute bottom-3 left-3 flex items-center gap-2"
        >
          <div className="h-10 w-10 cursor-pointer">
            <img
              src={user.profile_image.small}
              alt=""
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="desc" style={{ maxWidth: "170px" }}>
            <h4 className="text-sm font-medium text-white md:text-lg">
              {user.name}
            </h4>
            {/* <p className="text-gray-50 font-light text-xs">{alt}</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Images;
