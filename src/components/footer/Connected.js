import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icons_Social from "./Icons-Social";

const remove = () => {
  const subInput = document.getElementById("sub");

  if (subInput.value === "") {
    toast.error("Add Your Email For Subscribe", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } else if (subInput.value !== "") {
    subInput.value = "";
    toast.success("Thank you for subscribing!", {
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
};

export default function Connected() {
  return (
    <div>
      <div className="STAY-CONNECTED mt-5">
        <Icons_Social />

        <h2 className="text-light py-5 fw-bold">
          Stay updated with the latest Crossfire news by subscribing to our
          newsletter!
        </h2>
        <div className="pb-5">
          <input
            type="email"
            id="sub"
            className="w-50 email mb-2"
            placeholder="Enter your email address"
            name="email"
          />
          <input onClick={remove} type="submit" className="btn_sub fw-bold" />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
