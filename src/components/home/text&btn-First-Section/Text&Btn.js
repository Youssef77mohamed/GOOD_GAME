import React from "react";
import Logos from "../../../images/logo/Untitled-1.png";
import { Link } from "react-router-dom";
export default function TextAndBtn() {
    return (
        <>
        <div className="pt-100 d-flex justify-content-center align-items-center ">
            <img className="logos" src={Logos} alt="" />
            <div>
            <span className="text-logo fw-bold">GOOD GAME</span>
            <span className="d-block fs-5 text-mercenary fw-bold fst-italic">
                MERCENARY FORCES CORPORATION
            </span>
            </div>
        </div>
        <h2 className="mt-5 fw-bold">Quick, Simple & Massive!</h2>
        <Link
            className="bg-warning py-1 px-5 text-black text-decoration-none fw-bold w-25 fs-3 mt-4 hover-btn-download fst-italic"
            to="/DOWNLOAD"
        >
            PLAY FOR FREE
        </Link>
        </>
    );
}
