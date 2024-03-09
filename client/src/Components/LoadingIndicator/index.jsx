import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingIndicator = ({ size }) => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <CircularProgress variant="indeterminate" size={size ? size : 40} />
    </div>
  );
};

export default LoadingIndicator;
