import React from "react";
import "./ProcessStep.css";
import { Container, Row, Col } from "react-bootstrap";
import shape2 from "../../assets/shape-2.png";
import featureImg from "../../assets/feature-shape.png";

export default function ProcessStep() {
    const steps = [
        {
            number: "01",
            icon: "🌿",
            title: "Pick a starter option",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        },
        {
            number: "02",
            icon: "🍳",
            title: "Shop groceries",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        },
        {
            number: "03",
            icon: "🛵",
            title: "We deliver. You enjoy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        },
    ];

    return (
        <div className="process-section py-5">
            <img src={shape2} alt="Shape" className="bounce-img" data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true" />

            <Container>
                <img src={featureImg} alt="Feature" className="feature-arrow" />
                <img src={featureImg} alt="Feature" className="feature-arrow1" />

                <Row className="justify-content-center">

                    {steps.map((step, idx) => (
                        <Col key={idx} lg={4} md={6} className="text-center step-col">

                            <div className="step-circle mx-auto position-relative">

                                <div className="step-number">{step.number}</div>

                                <div className="step-icon">{step.icon}</div>

                            </div>
                            <h5 className="step-title mt-4">{step.title}</h5>
                            <p className="step-desc">{step.desc}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
