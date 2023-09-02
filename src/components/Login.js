import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <img
        className=" absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Logo Pic"
      />
      <div className=" w-1/4 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white">
        <form>
          <h1 className=" font-bold text-3xl py-6 my-4 mx-2">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="py-2 my-3 w-full rounded-md mx-2 bg-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 my-4 w-full rounded-md mx-2 bg-gray-600"
          />
          <button className=" p-4 my-3 bg-red-700 w-full rounded-md mx-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
