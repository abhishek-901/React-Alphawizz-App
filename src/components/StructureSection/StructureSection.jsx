import React from 'react'
import "./StructureSection.css";
import heroImage from "../../assets/mobile1.png";
import aboutImg from "../../assets/about-bg-1-1.png";
import secIcon from "../../assets/sec-icon-1.png";
import natureImg from "../../assets/nature.png";
import vegitable from "../../assets/vegetables.png";
import shape1 from "../../assets/shape-1-1.png";
import shape2 from "../../assets/shape-1.png";


export default function StructureSection() {
    return (
        <div
            className="container-fluid hero-section d-flex align-items-center"
            style={{ backgroundImage: `url(${aboutImg})` }}
        >
            <div className="row w-100 align-items-center">
                <div className="col-md-6 text-center text-md-start d-flex justify-content-center">
                    <img src={heroImage} alt="Hero Mobile" className="img-fluid hero-mobile-img" />
                </div>

                <div className="col-md-6 text-center text-md-start hero-text">
                    <p className="tagline">WE ARE FOODANO</p>
                    <h1 className="display-4 fw-bold best-text">The Best Trusted</h1>
                    <h2 className="display-6 farm-text">Farms In the World</h2>
                    <div>
                        <img src={secIcon} alt="Image-icon" className='icon-image-sec' />
                    </div>
                    <p className="subtitle">With Love & Dedication</p>
                    <div>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse.
                        </p>

                    </div>

                    <div className="row text-center justify-content-start">
                        <div className="col-6 col-md-3 d-flex">
                            <img src={natureImg} alt="100% organic" className="nature-img" />
                            <p className="feature-text">100% organic</p>
                        </div>
                        <div className="col-6 col-md-3 d-flex">
                            <img src={vegitable} alt="Natural Foods" className="vegitable-img" />
                            <p className="feature-text-2">Natural Foods</p>
                        </div>
                    </div>

                    <div className="shape-wrapper">
                        <img src={shape1} alt="Shape 1" className="shape-img-left" />
                        <img src={shape2} alt="Shape 2" className="shape-img-right bounce-img" data-aos="fade-down"
                            data-aos-duration="1500"
                            data-aos-once="true" />
                    </div>


                    {/* Optional image like "Naturally Grown" logo can go here */}
                </div>
            </div>
        </div>
    )
}
