import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LoadingMain = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <RotatingLines
      visible={true}
      height="160"
      width="160"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    </div>
  );
};

export default LoadingMain;
