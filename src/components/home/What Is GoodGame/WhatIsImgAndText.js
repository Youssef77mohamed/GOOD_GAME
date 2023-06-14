import React from "react";
import left from "../../../images/home/whatIs/feature-cf-left.jpg";
import { Link } from "react-router-dom";

export default function WhatIsImgAndText() {
  return (
    <>
      <h1 className="what-is mt-150  fw-bold">WHAT IS GOOD GAME?</h1>
      <div className="d-flex container-what-is mt-5">
        <div className="left-gg w-50">
          <img className="w-100" src={left} alt="img character" />
        </div>
        <div className="right-gg w-50 pt-5 ">
          <div>
            <h3 className="fw-bold">Join the biggest FPS in the world!</h3>
            <p className="my-3 fs-4">
              Good Game is a fast-paced free-to-play first person shooter,
              pitting two teams against each other. Select a mercenary from one
              of s everal special operations groups from around the world and
              choose from a massive armory of firearms, explosives, hand-to-hand
              weapons. Enjoy adrenaline-fueled action-packed battles across a
              variety of different modes spaning competitive
              player-versus-player arenas to cooperative survival scenarios.
            </p>
            <Link
              to="/DOWNLOAD"
              className="mt-3 fw-bold fs-3 text-decoration-none text-dark btn border-5 border-dark hover_btn"
            >
              PLAY FOR FREE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
