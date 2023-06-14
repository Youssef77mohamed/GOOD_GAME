import React from "react";
import FooterImg from "../../images/footer/sge-white-h.svg";
import FooterImg2 from "../../images/footer/sgw-white-h.svg";
import { Link } from "react-router-dom";

export default function FooterBtn() {
  return (
    <div className="bg-color">
      <div className="footer-btn-logo py-5 style">
        <div className="btn-footer">
          <Link
            className="btn me-5 px-5 py-2 border-light btn text-light text-decoration-none hover_btn text-uppercase fw-bold fs-5"
            to={
              localStorage.getItem("userLOG") ? "/profile" : "/login"
            }
          >
            Profile
          </Link>
          <Link
            to={"/shop"}
            className="btn me-5 px-5 py-2 border-light btn text-light text-decoration-none hover_btn text-uppercase fw-bold fs-5"
          >
            Shop
          </Link>
        </div>
        <div className="img-footer d-flex">
          <div>
            <img src={FooterImg} alt="footer logo" />
          </div>
          <div>
            <img src={FooterImg2} alt="footer logo" />
          </div>
        </div>
      </div>
      <p className="text-footer text-center py-5">
        © 2023 SMILEGATE WEST, INC. ALL RIGHTS RESERVED. © 2023 SMILEGATE
        ENTERTAINMENT. ALL RIGHTS RESERVED. Trademarks referenced herein belong
        to their respective owners.
      </p>
      <p className="m-0 pb-3 text-light text-center">
        {" "}
        PRIVACY POLICY | TERMS AND CONDITIONS | IMPRINT
      </p>
    </div>
  );
}
