import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  // console.log("user store",user)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="w-full absolute px-8 my-4 bg-gradient-to-t from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user ? (
        <div className="flex justify-between">
          <img
            className="w-[90px] h-[90px] p-2 m-2 "
            src={user?.photoURL}
            alt="user logo"
          />
          <button
            onClick={signout}
            className="px-2 my-8 h-[40px] text-white rounded-lg bg-red-500"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
