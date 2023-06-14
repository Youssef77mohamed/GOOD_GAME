import React from "react";
import "./account.css";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccountBody() {
    const data = JSON.parse(sessionStorage.getItem("user"));

    return (
        <div>
        <div>
            <div className="my-account">
            <Container>
                <h2 className="text-light fw-bold">My Account</h2>
            </Container>
            </div>
            <Container className="my-5">
            <h2 className="bg-dark m-0 ps-2 py-4 text-light">Account Summary</h2>
            <Table striped bordered hover variant="dark">
                <tbody className="td-style">
                <tr>
                    <td>User Name</td>
                    <td>{data.username}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{data.email}</td>
                </tr>
                <tr>
                    <td>Birthday</td>
                    <td>{data.birthday}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <input className="w-100" value={data.password} />
                </tr>
                </tbody>
            </Table>
            <Link
                to={"/signUp"}
                onClick={() => {
                sessionStorage.removeItem("user");
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("password");
                localStorage.clear();
                }}
                className="text-dark d-flex justify-content-end"
            >
                Request to delete your account
            </Link>
            </Container>
        </div>
        </div>
    );
}
