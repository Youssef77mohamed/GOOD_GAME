import React, { useEffect, useRef, useState } from "react";
import "./Esports.css";
import { Container } from "react-bootstrap";
import Logo from "../../images/Esports/logo02.png";
import { motion } from "framer-motion";
import images from "./images";

export default function EsportsBody() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <>
      <div className="bg-img">
        <Container>
          <div className="logo-img pt-5 d-flex">
            <img src={Logo} alt="logo" className="w-100 h-25 logo" />
            <img
              src={
                "https://d3075koojqalel.cloudfront.net/bbs/new/20230602225200_87281.jpg"
              }
              alt="logo"
              className="w-75 img-before-logo"
            />
          </div>
        </Container>
        <motion.div
          ref={carouselRef}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="img" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-spotlight ">
        <Container>
          <div className="text-img-spotlight ">
            <img
              src="https://d3075koojqalel.cloudfront.net/player/month/20220104044218_41815.png"
              alt="spotlight-img"
            />
            <div className=" text-light fs-3 fw-bold">
              <p>Even ( Peng Fei Zheng)</p>
              <p>ALL GAMERS</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
