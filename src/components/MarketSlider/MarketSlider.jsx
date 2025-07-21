import React from 'react';
import "./MarketSlider.css";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import serviceBg from "../../assets/service-bg-1-1.jpg";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/mobile2.png";
import mobile3 from "../../assets/mobile3.png";
import mobile4 from "../../assets/mobile4.png";
import mobile5 from "../../assets/mobile5.png";
import mobile6 from "../../assets/mobile6.png";
import mobile7 from "../../assets/mobile7.png";
import mobile8 from "../../assets/mobile8.png";


export default function MarketSlider() {
    return (
        <div className="service-slider-section position-relative text-center">
            {/* Background image */}
            <img src={serviceBg} alt="Service Background" className="service-bg-img" />

            {/* Overlay Content */}
            <div className="overlay-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white">
                <h2 className="heading-black">Netural Market</h2>
                <h3 className="heading-green">Healthy Food</h3>
                <div className="flower-icon mb-4">🌿</div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }}
                    className="market-swiper"
                >
                    <SwiperSlide>
                        <img src={mobile1} alt="App Screenshot 1" className="img-fluid phone-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mobile2} alt="App Screenshot 2" className="img-fluid phone-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mobile3} alt="App Screenshot 3" className="img-fluid phone-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mobile4} alt="App Screenshot 3" className="img-fluid phone-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mobile5} alt="App Screenshot 3" className="img-fluid phone-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mobile6} alt="App Screenshot 3" className="img-fluid phone-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mobile7} alt="App Screenshot 3" className="img-fluid phone-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mobile8} alt="App Screenshot 3" className="img-fluid phone-img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
