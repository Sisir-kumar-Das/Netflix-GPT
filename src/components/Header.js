import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(dispatch(removeUser()));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo Pic"
      />
      <div className="flex p-2 m-2">
        <img
          className=" w-14 h-14 "
          src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABa6Y5pM3JkNAfrT6Eft5tCbH2MaN5pMRxaSN-XFC50l-yFu-19V7MqIFhWgAHOjoJtIAKbO6fsH6rB-tfGr51sXpmjuwHHXthRKCvZhCX5UaEiwvxdC_RmBSh6Td1BWpH5ytu3r7t1hn8A.png?r=1d4"
          alt="user icon"
        />
        <button
          onClick={handleSignOut}
          className=" rounded-lg bg-red-700 text-white cursor-pointer font-bold px-4 mx-4 hover:bg-red-500"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
