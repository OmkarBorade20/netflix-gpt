import React, { useState,useRef } from 'react'
import Header from './Header'
import { IsValidSignin,IsValidSignup } from '../utils/validate';
import { auth } from '../utils/firebase.config';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [isSignin,setIsSignin]=useState(true);
    const [errorMessage,setErrorMessage]=useState(true);


    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);



    const toggleBtn=()=>{
        setIsSignin(!isSignin)
    }

    const handelclick=()=>{
        //check for validation
        
      
        const message=isSignin?IsValidSignin(email.current.value,password.current.value):  IsValidSignup(email.current.value,password.current.value,name.current.value);
        console.log(message)
        setErrorMessage(message);
   
        //do api api call to validate the user.
        if(message) return;

        if(isSignin){
            //sign in logic
            signInWithEmailAndPassword(auth,email.current.value,password.current.value )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user",user)

                    // dispatch(addUser(user));
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error",errorCode+"-"+errorMessage)
                    setErrorMessage(errorCode+"-"+errorMessage)
                });
        }
        else{
            //sing up logic 
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        console.log("user",user)
                        // dispatch(addUser(user));
                        updateProfile(user, {
                            displayName: name.current.value, photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                          }).then(() => {
                            // Profile updated!
                            
                            const {email,uid,displayName,photoURL,}=auth.currentUser;
                            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                            navigate("/browse")    
                          }).catch((error) => {
                           setErrorMessage(error)
                          });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log("Error",errorCode+"-"+errorMessage)
                        setErrorMessage(errorCode+"-"+errorMessage)
                    });
            }
    }

  return (
    <div className=''>
        <Header/>
        <div className='absolute '>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
            alt='bgImage'/>
        </div>
        <form onClick={(e)=>e.preventDefault()} className='w-[500px] absolute bg-black my-48 ml-[600px] text-white  p-12 opacity-80 rounded-xl' >
            <h1 className=' font-bold text-3xl my-4'>{isSignin?"Sign In":"Sign Up"}</h1>
            {!isSignin?<input ref={name} className='w-full p-4 my-6 bg-gray-700' type='text' placeholder='Full Name'/>:<></>}
            <input ref={email} className='w-full p-4 my-6 bg-gray-700' type='text' placeholder='Email Address'/>
            <input ref={password}className='w-full p-4 my-6 bg-gray-700' type='password' placeholder='Password'/>
        {errorMessage && <p className='p-2 my-2 text-red-500 font-bold '>{errorMessage}</p>}
            <button onClick={handelclick} className='w-full p-4 my-6 bg-red-600 rounded-lg'>{isSignin?"Sign In":"Sign Up"}</button>
            <p onClick={toggleBtn} className='font-bold text-lg my-3 p-4 cursor-pointer'>{isSignin?"New to Netflix?  Sign up now":"Already Registerd? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login