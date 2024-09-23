import React, { useContext } from "react";

function ImagesLikes({ image }) {
  return (
    <div className="m-2">
      <img className="block w-full" src={image} />
    </div>
  );
}

export default ImagesLikes;
