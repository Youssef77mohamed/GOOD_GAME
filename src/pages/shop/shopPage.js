import React, { useEffect, useState } from "react";
import ProductItem from "../../components/shop/ProductItem";
import { Col, Container, Row } from "react-bootstrap";
import ButtonLog from "../../components/navbar/login&signInBtn/Button";
import MainNavBar from "../../components/navbar";
import IconsSocial from "../../components/footer/Icons-Social";
import FooterBtn from "../../components/footer/FooterBtn";
import shop from "../../images/shop/hiddencave_shop.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/productsSlice";
import BackToTopButton from "../../components/back to top/BackToTop";

export default function ShopPage() {
    const [filterProduct, setFilterProduct] = useState([]);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="bg-shop">
        <ButtonLog />
        <MainNavBar />
        <img className="w-100" src={shop} alt="shop" />
        <Container>
            <div className="search-container my-4">
            <div className="input ps-4">
                <input
                id="input-search"
                className="input-search"
                placeholder="search..."
                type="q"
                onChange={(e) => {
                    setFilterProduct(e.target.value);
                }}
                />
            </div>
            <div
                className="icon-search"
                onClick={() => {
                const search = document.querySelector(".search-container");
                search.classList.toggle("active");
                }}
            ></div>
            <span
                className="clear"
                onClick={() => {
                document.getElementById("input-search").value = "";
                setFilterProduct("");
                }}
            ></span>
            </div>
            <Row>
            {products
                .filter((product) => {
                if (filterProduct == "") {
                    return product;
                } else if (
                    product.title
                    .toLowerCase()
                    .includes(filterProduct.toLowerCase())
                ) {
                    return product;
                }
                })
                .map((product, key) => {
                return (
                    <Col key={key}>
                    <ProductItem product={product} />
                    </Col>
                );
                })}
            </Row>
        </Container>
        <BackToTopButton/>
        <IconsSocial />
        <FooterBtn />
        </div>
    );
}
