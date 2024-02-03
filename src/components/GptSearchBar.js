import React from "react";
import { LOGIN_BG } from "../utils/constant";

const gptSearchBar = () => {
  return (
    <>
      <div>
        <img className=" absolute w-full" src={LOGIN_BG} alt="Logo Pic" />
        <div className=" relative  pt-[15%] w-full flex justify-center items-center">
          <form className="  w-full ">
            <input
              className="rounded-lg w-2/4 h-14  font-bold"
              type="text"
              placeholder="What would you like to watch today!!"
            />
            <button className=" rounded-lg bg-red-700 text-white cursor-pointer font-bold px-4 mx-4 hover:bg-red-500 w-40 h-14">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default gptSearchBar;
