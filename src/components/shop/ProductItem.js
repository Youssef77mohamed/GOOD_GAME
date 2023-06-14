import React from "react";
import { Button, Card, ToastContainer } from "react-bootstrap";
import "./shop.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cartSlice";
import { toast } from "react-toastify";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

export default function ProductItem({ product }) {
    const Dispatch = useDispatch()
    
    const handlePurchase = () => {
        if (
        localStorage.getItem("userLOG") === null &&
        localStorage.getItem("passwordLOG") === null
        ) {
            toast.error('Please Login To Purchase', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            Dispatch(addToCart(product))
            const cartButton = document.querySelectorAll('.btn-shop');
            cartButton.forEach(button=>{
                button.addEventListener('click',()=>{
                    button.classList.add('clicked')
                })
            })
        }
    };

    return (
        <>
        <Card className="d-res-card my-4 card-shop" style={{ width: "18rem" }}>
            <Card.Img className="img-shop" variant="top" src={product.img} />
            <Card.Body className="">
            <Card.Title className=" mt-3 text-secondary">
                {product.title}
            </Card.Title>
            <div className=" justify-content-between align-items-center">
                <Card.Title className="fw-bold">Price : {product.price}EP</Card.Title>
                <div className="text-center fs-3">
                <Button
                onClick={handlePurchase}
                className="btn-shop py-2"
                variant="secondary"
                >
                <span className="Add-to-cart">Add to cart</span>
                <span className="added">Added</span>
                <FaCartArrowDown className="cart-btn"/>
                <FaBox className="cart-box"/>
                </Button>
                </div>
                <ToastContainer/>
            </div>
            </Card.Body>
        </Card>
        </>
    );
}
