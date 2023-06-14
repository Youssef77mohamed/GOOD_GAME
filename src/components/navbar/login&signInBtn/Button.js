import React from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ButtonLog() {
  return (
    <>
      <div className="bg-black">
        <Container>
          <div className="d-flex justify-content-end">
            {localStorage.getItem("userLOG") ? (
              <DropdownButton
                title={` Hi ${localStorage.getItem("userLOG")}`}
                className="drop-btn my-1"
                variant="light"
              >
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/MyAccount"}>My Account</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.clear();
                    window.location = "/login";
                  }}
                >
                  LOG OUT
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <Link
                id="Login-btn"
                to="/login"
                className="my-1 btn-acc btn fw-bold "
              >
                Log In
              </Link>
            )}

            <Link
              to="/signup"
              className="my-1 ms-3 btn-acc  btn fw-bold "
            >
              Sign Up
            </Link>
            <Link
              className="fw-bold text-decoration-none text-black bg-warning pt-2 px-2 ms-3  fs-5 hover-btn-download "
              to="/DOWNLOAD"
            >
              DOWNLOAD
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
