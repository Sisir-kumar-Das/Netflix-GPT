import React from "react";

const VideoTitle = ({ title, overview }) => {
  const btns = ["Play", "More Info"];
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white">
      <h1 className=" text-5xl font-bold">{title}</h1>
      <p className=" py-6 w-1/4">{overview}</p>

      <div>
        {btns.map((btn, index) => (
          <button
            className="bg-gray-100 hover:bg-gray-400 text-black text-xl font-bold py-2 px-16 mx-2 h-16 rounded inline-flex items-center bg-opacity-2"
            key={index}
          >
            {!index ? <span>▶{btn}</span> : <span>ℹ️{btn}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoTitle;
