import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PromoSection.css";
import organicImg from "../../assets/ad-img-1-1.jpg";
import veggieImg from "../../assets/ad-img-1-2.jpg";

const PromoSection = () => {
    return (
        <div className="promo-section">
            <Container fluid>
                <Row className="common">
                    {/* Left Box */}
                    <Col md={6} className="promo-box">
                        <img src={organicImg} alt="Organic" className="full-img" />
                        <div className="overlay-text">
                            <h2>We Offer Premium &<br />100% Organic Food</h2>
                            <a href="#" className="shop-now">Shop Now</a>
                        </div>
                    </Col>

                    {/* Right Box */}
                    <Col md={6} className="promo-box">
                        <img src={veggieImg} alt="Vegetables" className="full-img" />
                        <div className="overlay-text">
                            <h2>
                                Vegetables <span className="highlight">Big Sale</span> Fresh<br /> Farm Products
                            </h2>
                            <a href="#" className="shop-now">Shop Now</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PromoSection;
