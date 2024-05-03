import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { toggleBtn } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);

  const toggle=useSelector(store=>store.gpt.searchToggle);

  //console.log("toggle",toggle)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  
  const HandleToggle=()=>{
    dispatch(toggleBtn());
    navigate("/browse")
  }

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
        //  navigate("/browse")
      } else {
       //signout
         dispatch(removeUser());
         navigate("/")
      }
    });

    return ()=>unsubscribe();

  },[])

  return (
    <div className=" w-full md:w-full absolute px-2 bg-gradient-to-b from-black  z-10 flex justify-between opacity-90 ">
      <Link to="/browse"><img
        className="w-32 md:w-44 my-1 md:my-4 mx-2 md:mx-2" 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      /></Link>
      {user ? (
        <div className="-mt-4 md:mt-2 md:my-0 flex justify-between  ml-[-90px] md:ml-0 mr-0 md:mr-20  ">

          <button onClick={HandleToggle} className=" w-[70px] md:w-28 h-6 md:h-10 my-9 mx-1 md:mx-4 rounded-lg bg-purple-600 text-white text-sm md:text-lg  font-bold hover:opacity-70">{toggle?"Home":"GPT-🔍"}</button>
          <img
            className=" hidden md:inline-block
            my-7 w-[50px] h-[50px] p-2 mx-4 hover:opacity-80"
            src={user?.photoURL}
            alt="user logo"
          />

        <img onClick={signout}
            className=" w-16 px-2 my-6 md:my-8 h-[40px] hover:opacity-70 cursor-pointer mx-4" alt="logout logo"  src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"/>
        

        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
