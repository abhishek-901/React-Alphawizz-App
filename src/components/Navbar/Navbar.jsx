import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import LogoImg from "../../assets/logo.png";

const Navbar = ({ toggleSidebar }) => {
    const [scrollDir, setScrollDir] = useState("up");
    const [atTop, setAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setAtTop(true);
                setScrollDir("up");
            } else {
                setAtTop(false);
                if (currentScrollY > lastScrollY) {
                    setScrollDir("down");
                } else if (currentScrollY < lastScrollY) {
                    setScrollDir("up");
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light shadow p-3 z-3 
            ${atTop ? 'navbar-top' : scrollDir === 'up' ? 'navbar-fixed-show' : 'navbar-hide'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">
                    <img src={LogoImg} alt="Logo" height="40" />
                </a>
                <button className="d-lg-none btn sidebar-toggle-btn" onClick={toggleSidebar}>
                    <FaBars size={24} />
                </button>

                <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item"><a className="nav-link fw-bold" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold" href="#about">About Us</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold" href="#services">Service</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold" href="#gallery">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
