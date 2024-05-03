import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import { IsValidSignin, IsValidSignup } from "../utils/validate";
import { auth } from "../utils/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVTAR_IMG, BG_IMG } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleBtn = () => {
    setIsSignin(!isSignin);
  };

  const handelclick = () => {
    //check for validation

    const message = isSignin
      ? IsValidSignin(email.current.value, password.current.value)
      : IsValidSignup(
          email.current.value,
          password.current.value,
          name.current.value
        );
    //console.log(message);
    setErrorMessage(message);

    //do api api call to validate the user.
    if (message) return;

    if (isSignin) {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log("user", user);

          // dispatch(addUser(user));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //console.log("Error", errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sing up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //console.log("user", user);
          // dispatch(addUser(user));
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVTAR_IMG,
          })
            .then(() => {
              // Profile updated!

              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //console.log("Error", errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
    <div className="">
      <Header />
      <div className="absolute ">
        <img className="fixed h-full w-full object-cover" src={BG_IMG} alt="bgImage" />
      </div>
      <div className="border border-white">
        <form
          onClick={(e) => e.preventDefault()}
           className="w-[85%] md:w-[25%] ml-[30px] md:ml-[600px] bg-black my-32 md:my-48  text-white  p-3 md:p-12 opacity-80 rounded-xl "
        >
          <h1 className=" font-bold text-2xl md:text-3xl my-2 md:my-4">
            {isSignin ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignin ? (
            <input
              ref={name}
              className="w-full p-2 md:p-4 my-2 md:my-6 bg-gray-700"
              type="text"
              placeholder="Full Name"
            />
          ) : (
            <></>
          )}
          <input
            ref={email}
            className="w-full p-2 md:p-4 my-2 md:my-6 bg-gray-700"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="w-full p-2 md:p-4 my-2 md:my-6 bg-gray-700"
            type="password"
            placeholder="Password"
          />
          {errorMessage && (
            <p className="p-2 my-2 md:my-2 text-red-500 font-bold ">{errorMessage}</p>
          )}
          <button
            onClick={handelclick}
            className="w-full p-2 md:p-4 my-2 md:my-6 bg-red-600 rounded-lg"
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleBtn}
            className="font-bold text-md md:text-lg my-1 md:my-3 p-2 md:p-4 cursor-pointer"
          >
            {isSignin
              ? "New to Netflix?  Sign up now"
              : "Already Registerd? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
