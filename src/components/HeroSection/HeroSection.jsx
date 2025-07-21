import React from 'react'
import "./HeroSection.css";
import HeroBgImg from "../../assets/hero-bg-1-2.jpg"
import SliderShapeImg from "../../assets/slider-shape-1.png";
import SliderShapeImg2 from "../../assets/slider-shape-2.png";
import SliderShapeImg3 from "../../assets/slider-shape-3.png";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <img src={HeroBgImg} alt="Hero Background" className="hero-img" />
            <div>
                <img src={SliderShapeImg} alt="Slider Shape 1" className="slider-shape shape1" data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-once="true" />
            </div>
            <div>

                <img src={SliderShapeImg2} alt="Slider Shape 2" className="slider-shape shape2" data-aos="slide-up"
                    data-aos-duration="2000"
                    data-aos-once="true" ></img>
                <img src={SliderShapeImg3} alt="Slider Shape 3" className="slider-shape shape3" data-aos="slide-up"
                    data-aos-duration="2000" />
            </div>
            <div className="hero-content text-center text-white">
                <p className="subtext" data-aos="zoom-in-right" data-aos-duration="2000"
                    data-aos-once="true" >KEEP WITH FOODANO</p>
                <h1 className="display-2 fw-bold" data-aos="fade-up" data-aos-duration="2000"
                    data-aos-once="true">DELICIOUS AND<br />ITALIAN</h1>
            </div>
        </div>
    )
}
