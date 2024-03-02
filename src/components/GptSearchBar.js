import React from "react";
import { LOGIN_BG } from "../utils/constant";
import lang from "../utils/languageConstants";

const gptSearchBar = () => {
  return (
    <>
      <div>
        <img className=" absolute w-full" src={LOGIN_BG} alt="Logo Pic" />
        <div className=" relative  pt-[15%] p-24 w-full flex justify-center items-center">
          <form className="  w-full ">
            <input
              className="rounded-lg w-2/4 h-14 p-4 font-bold"
              type="text"
              placeholder={lang.odia.gptPlaceHolder}
            />
            <button className=" rounded-lg bg-red-700 text-white cursor-pointer font-bold px-4 mx-4 hover:bg-red-500 w-40 h-14">
              {lang.odia.search}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default gptSearchBar;
