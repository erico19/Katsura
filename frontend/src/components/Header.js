import React from "react";
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import kyodaiLogo from "../images/kyodai-logo.svg";

const Header = () => {
  const { languages, originalPath, i18n } = useI18next();
  
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Adding a div for the header with transparent black background color */}
      <div className="header-bg" style={{ backgroundColor: 'rgba(0, 0, 102, 20)' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-2 md:py-3"> {/* Change justify-between to justify-center to center content */}
          {/* Adjusting the width of the logo container */}
          
          {/* Adding the h1 element with increased thickness */}
          <h1 className="text-white font-black text-lg md:text-2xl flex-grow text-center" 
            style={{ 
              fontFamily: 'DM Sans', // Setting font family to DM Sans
              fontSize: '30px',  // Setting font size to 19 pixels
              textAlign: 'center', // Aligning text to the center
              margin: '-5px 0 0 0',
            }}>
            Katsura Campus Wi-Fi Times
          </h1>
          <div className="flex gap-4 md:gap-8 text-white">
            <ul className="flex gap-4 md:gap-8 text-white">
              <li>
                <Link to="/" className="font-semibold hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-semibold hover:underline">
                  About Us
                </Link>
              </li>
              {/* Language selection aligned with menu items */}
              {languages.map((lng) => (
                <li key={lng}>
                  <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none', color: 'white' }}>
                    {lng}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
