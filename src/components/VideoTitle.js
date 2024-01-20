import React from "react";

const VideoTitle = ({ title, overview }) => {
  const btns = ["Play", "More Info"];
  return (
    <div className=" pt-36 px-12">
      <div>
        <h1 className=" text-5xl font-bold">{title}</h1>
        <p className=" py-6 w-1/4">{overview}</p>
      </div>
      <div>
        {btns.map((btn, index) => (
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-16 mx-2 h-16 rounded inline-flex items-center bg-opacity-2"
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
