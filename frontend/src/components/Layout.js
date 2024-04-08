import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import katsuraImg10 from "../images/CCluster.jpg"; // Import corrected image name

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [language, setLanguage] = useState("English"); // Default language

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Implement language change logic here
  };

  return (
    <div className={`layout ${loaded ? "loaded" : ""}`}>
      <Header
        onLanguageChange={handleLanguageChange}
        selectedLanguage={language}
      />
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
      <style jsx>{`
        .layout {
          position: relative;
          overflow: auto;
          width: 100vw;
          min-height: 100vh; /* Changed to min-height */
          background-size: cover; /* Make the background image cover the entire background */
          background-position: center;
          background-attachment: fixed;
          background-image: url(${katsuraImg10}); /* Use imported image variable */
        }

        .content-wrapper {
          padding-bottom: 72px; /* Adjust according to your footer height */
          /* This ensures that the content does not get covered by the footer */
          margin-bottom: -72px; /* Equal to the footer height */
          overflow-x: hidden; /* Ensure no horizontal overflow */
          overflow-y: auto; /* Allow vertical scrolling */
        }

        .footer { 
          position: fixed;
          bottom: 0;
          width: 100%;
          z-index: 2; /* Ensure footer appears above content */
          background-color: #333; /* Example background color */
          color: #fff; /* Example text color */
          padding: 10px; /* Example padding */
        }

        .loaded .content-wrapper {
          opacity: 1;
        }

        @media only screen and (max-width: 768px) {
          /* Adjust styles for screens smaller than 768px */
          .content-wrapper {
            padding-bottom: 56px; /* Adjust footer padding for smaller screens */
            margin-bottom: -56px;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
