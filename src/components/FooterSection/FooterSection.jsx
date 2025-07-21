import React from "react";
import "./FooterSection.css";
import footerImg from "../../assets/footer-bg-1.jpg";

export default function FooterSection() {
    return (
        <footer className="footer-section">
            <div className="footer-bg-wrapper">
                <img src={footerImg} alt="Footer Background" className="footer-bg" />
            </div>

            <div className="container">
                <div className="row footer-content">
                    {/* Contact Us */}
                    <div className="col-md-6 col-lg-3 footer-col">
                        <h5 className="footer-title">Contact Us</h5>
                        <ul className="footer-info">
                            <li>6Fifth Avenue 5501, Broadway,</li>
                            <li>New York Morris Street</li>
                            <li>London 1234</li>
                            <li><i className="fa fa-paper-plane"></i> foodano@example.com</li>
                            <li><i className="fa fa-fax"></i> +(123) 4567 89000</li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="col-md-6 col-lg-3 footer-col">
                        <h5 className="footer-title">Useful Links</h5>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="/">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Now */}
                    <div className="col-md-6 col-lg-3 footer-col">
                        <h5 className="footer-title">Follow Us Now</h5>
                        <ul className="footer-social">
                            <li><i class="fa-brands fa-facebook"></i>Facebook</li>
                            <li><i class="fa-brands fa-twitter"></i> Twitter</li>
                            <li><i class="fa-brands fa-square-behance"></i> Behance</li>
                            <li><i class="fa-brands fa-square-dribbble"></i> Dribbble</li>
                            <li><i class="fa-brands fa-linkedin"></i> Linkedin</li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div className="col-md-6 col-lg-3 footer-col">
                        <h5 className="footer-title">Subscribe</h5>
                        <form className="footer-form">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="footer-input"
                            />
                            <button type="submit" className="subscribe-btn">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright © 2022 Foodano - All Rights Reserved by Vecuro</p>
                </div>
            </div>
        </footer>
    );
}
