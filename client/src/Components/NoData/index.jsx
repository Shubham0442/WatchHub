import React from "react";
import { FaBoxOpen } from "react-icons/fa6";

const NoData = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center">
      <div>
        <FaBoxOpen fontSize="50px" />
      </div>
      <div className="font-semibold text-lg">No Result Found!</div>
    </div>
  );
};

export default NoData;
