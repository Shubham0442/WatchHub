import React from "react";
import { IoStarSharp, IoStarHalf, IoStarOutline } from "react-icons/io5";

const StarRating = ({ stars }) => {
  const starList = new Array(5).fill(0);

  return (
    <div className="flex gap-2px text-lg">
      {starList?.map((_, index) =>
        stars - index < 1 && stars - index > 0 ? (
          <IoStarHalf key={index} color="#ffc901" />
        ) : stars >= index + 1 ? (
          <IoStarSharp key={index} color="#ffc901" />
        ) : (
          <IoStarOutline key={index} color="#ffc901" />
        )
      )}
    </div>
  );
};

export default StarRating;
