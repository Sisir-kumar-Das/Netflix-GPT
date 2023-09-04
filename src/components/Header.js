import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo Pic"
      />
      {user && (
        <div className="flex p-2 m-2">
          <img className=" w-14 h-14 " alt="user icon" src={user?.photoURL} />
          {console.log(user)}
          <button
            onClick={handleSignOut}
            className=" rounded-lg bg-red-700 text-white cursor-pointer font-bold px-4 mx-4 hover:bg-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
