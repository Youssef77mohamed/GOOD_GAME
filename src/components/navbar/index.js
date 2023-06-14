import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";


function MainNavBar() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className=" w-100 position-sticky sticky-top bg-nav "
      >
        <Container className="fw-bold ">
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  ">
              <div >
                <Nav.Link className="text-dark link-nav-hover" as={Link} to="/">
                  HOME
                </Nav.Link>
              </div>
              <div>
                <Nav.Link
                  className="text-dark link-nav-hover"
                  as={Link}
                  to="/Ranking"
                >
                  RANKING
                </Nav.Link>
              </div>
              <div className="a-after">
                <Nav.Link
                  className="text-dark link-nav-hover"
                  as={Link}
                  to="/Esports"
                >
                  E-Sports
                </Nav.Link>
              </div>
              <div >
                <Nav.Link
                  className="text-dark link-nav-hover"
                  as={Link}
                  to="/shop"
                >
                  SHOP
                </Nav.Link>
              </div>
              {localStorage.getItem("userLOG") ? (
                <div className="cart position-absolute ">
                  <Nav.Link
                    to={"/profile"}
                    className="text-dark fs-30"
                    as={Link}
                  >
                    <FaCartArrowDown /> 
                  </Nav.Link>
                  <span className="cart-length ">{cart.length}</span>
                </div>
              ) : (
                ""
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavBar;
