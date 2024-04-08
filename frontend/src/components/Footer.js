import React from "react";
import itslablogo from "../images/its-lab-logo.png";
import kyodaiLogo from "../images/kyodai-logo.png";


const Footer = () => {
  return (
    <>
      <div className="bg-white mt-8 p-2 md:p-4" style={{ padding: "15px", backgroundColor: "rgba(255, 255, 255, 1)", fontFamily: "Arial Rounded MT Bold", color: "rgba(0, 0, 102, 1)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              className="h-12 md:h-16"
              src={kyodaiLogo}
              alt="Kyodai Logo"
              style={{ filter: "none" }}
            />
          </div>
          <div className="mb-4 md:mb-0">
            <img
              className="h-12 md:h-16"
              src={itslablogo}
              alt="ITS Lab Logo"
            />
          </div>
          <div className="text-xs sm:text-sm md:text-base flex flex-col justify-center items-center md:items-start">
            <a href="/privacy-policy" className="text-blue hover:text-yellow-400" style={{ textDecoration: "none", textAlign: "left", transition: "color 0.3s" }}>Privacy Policy</a>
            <a href="/contact-us" className="text-blue hover:text-yellow-400" style={{ textDecoration: "none", textAlign: "left", transition: "color 0.3s" }}>Contact Us</a>
          </div>
        </div>
      </div>

      <div className="bg-white mt-4 p-4 text-center text-xs" style={{ padding: "10px", backgroundColor: "rgba(0, 0, 102, 1)", borderRadius: "0px", color: "white", margin: "-1px 0 0 0" }}>
        <p>© {new Date().getFullYear()} ITS Lab. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
