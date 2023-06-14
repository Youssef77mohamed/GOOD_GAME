import React from "react";
import "./profile.css";
import logo_profile from "../../images/logo/Untitled-1.png";
import imgError from "../../images/profile/image-error-desktop.b9aa0782.jpg";
import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrease,
  increase,
  removeFromCart,
} from "../../rtk/slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import PayButton from "./payButton";

export default function ProfileData() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, product) => {
    acc += product.price * product.qyt;
    return acc;
  }, 0);
  return (
    <div className="bg-profile">
      <div className="pt-5 d-flex justify-content-center align-items-center">
        <img className="logos" src={logo_profile} alt="logo" />
        <p className="text-logo text-black fw-bold">GOOD GAME</p>
      </div>
      <div className="py-5">
        {cart.length === 0 ? (
          <div>
            {" "}
            <p className="text-center fs-1 fw-bold">Oops !</p>
            <p className="text-center fs-4 fw-bold">
              No information available. Try again later.
            </p>
          </div>
        ) : (
          <Container>
            <Button
              variant="danger"
              className="my-3 fw-bold"
              onClick={() => dispatch(clearCart())}
            >
              Clear All
            </Button>
              <div className="table-over ">
              <Table striped bordered hover className=" table-w ">
              <thead className="bg-dark text-light text-center">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qyt</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="bg-warning text-dark fw-bold text-center">
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td width={"10%"}>
                      {" "}
                      <Image src={product.img} thumbnail />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price} EP</td>
                    <td>
                      <Button
                        variant="a"
                        onClick={() => dispatch(increase(product))}
                      >
                        <FaArrowUp />
                      </Button>
                      {product.qyt}
                      <Button
                        variant="a"
                        onClick={() => dispatch(decrease(product))}
                      >
                        <FaArrowDown />
                      </Button>
                    </td>
                    <td>{product.price * product.qyt} EP</td>
                    <td>
                      <Button
                        variant=""
                        onClick={() => dispatch(removeFromCart(product))}
                      >
                        <FaTrash className="fs-4 " />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
              </div>
              <div className="d-res-paypal d-flex justify-content-between">
            <h3>Total Price : {total} EP</h3>
              <PayButton total={total} />
              </div>
          </Container>
        )}
        
        <div className=" d-flex justify-content-center align-items-center">
          <img className="w-100" src={imgError} alt="error-img" />
        </div>
      </div>
    </div>
  );
}
