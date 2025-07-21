import React from 'react';
import './Sidebar.css';
import LogoImgSidebar from "../../assets/logo.png";


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (

        <div className={`sidebar-wrapper ${isOpen ? 'open' : ''}`}>
            {/* Black background overlay */}
            <div className="sidebar-overlay" onClick={toggleSidebar}></div>


            <div className={`sidebar bg-white shadow ${isOpen ? 'open' : ''}`}>
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <a className="navbar-brand" href="#">
                        <img src={LogoImgSidebar} alt="Logo" height="35" />
                    </a>
                    <button
                        className={`btn-close custom-close ${isOpen ? 'open' : 'closed'}`}
                        onClick={toggleSidebar}
                        aria-label="Close"
                    ></button>

                </div>
                <ul className="nav flex-column p-3">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
                    <li className="nav-item"><a href="#services" className="nav-link">Service</a></li>
                    <li className="nav-item"><a href="#gallery" className="nav-link">Gallery</a></li>
                </ul>
            </div>
        </div >
    );
};

export default Sidebar;
