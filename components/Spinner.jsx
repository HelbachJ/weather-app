import Image from "next/image";
import React from "react";
import spinner from "../assets/spinner.gif";

{/* Spinner to show that data is being fetched */}
const Spinner = () => {
  return (
    <div className="relative flex flex-col justify-between max-w-[140px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10 ">
      <div className="relative flex justify-between pt-12">
        <Image src={spinner} alt="loading.." />
      </div>
    </div>
  );
};

export default Spinner;
