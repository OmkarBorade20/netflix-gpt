import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  // console.log("user store",user)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
       //signin 
        const {uid,email,displayName,photoURL} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
         navigate("/browse")
      } else {
       //signout
         dispatch(removeUser());
         navigate("/")
      }
    });

    return ()=>unsubscribe();

  },[])

  return (
    <div className="w-full absolute px-2 bg-gradient-to-b from-black  z-10 flex justify-between opacity-90">
      <Link to="/browse"><img
        className="w-44 my-4" 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      /></Link>
      {user ? (
        <div className="flex justify-between">
          <img
            className="my-7 w-[50px] h-[50px] p-2 m-2 hover:opacity-80"
            src={user?.photoURL}
            alt="user logo"
          />

        <img onClick={signout}
            className=" w-16 px-2 my-8 h-[40px] hover:opacity-60 cursor-pointer" alt="logout logo"  src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"/>
        
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
