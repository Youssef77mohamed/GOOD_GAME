import React, { useState } from 'react'
import "./login.css"
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast ,ToastContainer  } from 'react-toastify'





export default function BodyLogIn() {
  const [password , setPassword] = useState("");
  const [visible , setVisible] = useState(false);

  const handleSubmitLog = (e)=>{
    e.preventDefault();

    
      
      const user = document.getElementById("user");
      const pass = document.getElementById("password-input")
      if (sessionStorage.getItem("username") === JSON.stringify(user.value) &&sessionStorage.getItem("password") === JSON.stringify(pass.value) ) {
        localStorage.setItem("userLOG",user.value )
        localStorage.setItem("passwordLOG",pass.value )
        window.location = "/profile";
      }else {
          toast.error('Incorrect email or password', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }
  }

  return (
    <div className='bg-login  '>
        <div className='form'>
        <form onSubmit={handleSubmitLog} className='form-log rounded-1 '>
        <h2 className='fw-bold text-light'>LOG IN</h2>
            
            <div className='position-relative'>
                <FaUser className='icon-password position-absolute'/>
            <input id='user' type='text' placeholder='User Name' className='input-logIn d-block mt-3 w-100 ps-5  py-3 p-1'/>

            </div>
            
            
            <div className='position-relative mt-2'>
                <FaLock className='icon-password position-absolute'/>
                <div onClick={()=>setVisible(!visible)}>
                  {visible ? <FaEye className='icon-eye'/>: <FaEyeSlash className='icon-eye-slash'/>}
                </div>
                
                
            <input id='password-input'
                  type={visible ? "text": "password"} 
                  placeholder='Password' 
                  className='input-logIn d-block w-100 ps-5 py-3 p-1'
                  onChange={(e)=>setPassword(e.target.value)}
                  />
            <ToastContainer/>
            </div>
                  <button type='submit'
                  className='btn-log mt-3'
                  > <span>LogIn</span>
                  </button>
                  <Link to={"/signUp"} className=' new-acc '> I need a new account</Link>
        </form>
        </div>
    </div>
  )
}
