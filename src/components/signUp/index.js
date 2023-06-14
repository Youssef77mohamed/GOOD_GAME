
import"./signup.css"

import FormInput from "./FormInput"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";

export default function BodySignUp() {
  const [values , setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  });
  const inputs=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"user name",
      errorMessage:"Username should be 3-16 characters !",
      pattern:"^[A-Za-z0-9]{3,16}$",
      require:true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address",
      require:true,

    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      errorMessage:"error",

    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters !",
      pattern:"^[A-Za-z0-9]{8,20}$",
      require: true,
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Password don't match!",
      pattern:values.password,
      require: true,

    }
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (values.username && values.email && values.password &&values.confirmPassword !== "") {
      sessionStorage.setItem("user",JSON.stringify(values))
      sessionStorage.setItem("username",JSON.stringify(values.username))
      sessionStorage.setItem("password",JSON.stringify(values.password))
      window.location = "/login";
    }else{
      toast.error('Please fill all the fields', {
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
  const onChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }

  return (
    <div className='bg-login form-sign style-form'>
      
      <form onSubmit={handleSubmit}>
        <h1 className="fw-bold">SIGN UP</h1>
        {inputs.map((input)=>(

        <FormInput 
        key={input.id} {...input} 
        value={values[input.name]}
        onChange={onChange}
        />
        ))}
        
        <button className="btn-sign mt-2">submit</button>
        <ToastContainer/>
      </form>
    </div>
  )
}
