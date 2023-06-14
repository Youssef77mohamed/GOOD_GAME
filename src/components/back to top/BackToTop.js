import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTop.css";

export default function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setBackToTopButton(true);
        } else {
            setBackToTopButton(false);
        }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
    return (
        <>
        {backToTopButton && (
            <FaArrowUp className="btn-scroll" onClick={scrollUp} />
        )}
        </>
    );
}
