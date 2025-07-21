import { useState } from 'react'
import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import HeroSection from './components/HeroSection/HeroSection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import StructureSection from './components/StructureSection/StructureSection';
import MarketSlider from './components/MarketSlider/MarketSlider';
import ProcessStep from './components/ProcessStep/ProcessStep';
import PromoSection from './components/PromoSection/PromoSection';
import FooterSection from './components/FooterSection/FooterSection';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div id="home"><HeroSection /></div>
      <div id="about"><StructureSection /></div>
      <div id="services"><MarketSlider /></div>
      <div id="gallery"><ProcessStep /></div>
      {/* <HeroSection />
      <StructureSection />
      <MarketSlider />
      <ProcessStep /> */}
      <PromoSection />
      <FooterSection />

    </>

  )
}

export default App
