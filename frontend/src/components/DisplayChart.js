import React, { useState } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import PopularityChart from './PopularityChart.js';
import DescriptionBox from './DescriptionBox';
import katsuraImg1 from "../images/Library01.jpg"; // Import corrected image name
import katsuraImg2 from "../images/MainCafeteriaEntrance.jpg"; // Import corrected image name
import katsuraImg3 from "../images/cafeteriaexit33.jpg"; // Import corrected image name
import katsuraImg4 from "../images/C1Entrance01.jpg"; // Import corrected image name
import katsuraImg5 from "../images/cafeteriaexit333.jpg"; // Import corrected image name
import katsuraImg6 from "../images/BClusterAdministration.jpg"; // Import corrected image name
import katsuraImg7 from "../images/A4Entrance.jpg"; // Import corrected image name
import katsuraImg8 from "../images/A4Parking02.jpg"; // Import corrected image name
import katsuraImg9 from "../images/BoulangerieSeribakery02.jpg"; // Import corrected image name
import katsuraImg10 from "../images/CCluster.jpg"; // Import corrected image name

function MyDropdown({ admin }) {
  const [selectedOption, setSelectedOption] = useState('AMPM18-KJ016');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { t } = useI18next();

  // Define background images for each option
  const backgroundImageMap = {
    'AMPM18-KJ012': katsuraImg1,
    'AMPM18-KJ016': katsuraImg2,               
    'AMPM18-KJ017': katsuraImg3,                 
    'AMPM18-KJ009': katsuraImg4,                
    'AMPM18-KJ010': katsuraImg5,                
    'AMPM18-KJ011': katsuraImg6,                
    'AMPM18-KJ013': katsuraImg7,                
    'AMPM18-KJ014': katsuraImg8,                
    'AMPM18-KJ015': katsuraImg9,                
    'AMPM18-KJ008': katsuraImg10,              
  };

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  const dropdownOptions = [
    { value: 'AMPM18-KJ012', label: t('Katsura Main Library')},
    { value: 'AMPM18-KJ016', label: t('Main Cafeteria Entrance')},
    { value: 'AMPM18-KJ017', label: t('Main Cafeteria Exit')},
    { value: 'AMPM18-KJ009', label: t('C1 Entrance')},
    { value: 'AMPM18-KJ010', label: t('Inside Main Cafeteria')},
    { value: 'AMPM18-KJ011', label: t('B Cluster Administration Office')},
    { value: 'AMPM18-KJ013', label: t('A4 Rear Entrance')},
    { value: 'AMPM18-KJ014', label: t('P3P Parking Mae')},
    { value: 'AMPM18-KJ015', label: t('Boulangerie Seri Bakery')},
    { value: 'AMPM18-KJ008', label: t('C Cluster Administration Office')},
  ];

  return (
   <div className="grid gap-2 rounded-lg" style={{ backgroundImage: `url(${backgroundImageMap[selectedOption]})`, backgroundSize: 'cover'}}>
<div>
        <p className="prose max-w-none text-base md:text-lg text-white text-justify font-arial font-medium" style={{ color: 'rgba(0, 0, 0, 10)', padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: '8px'}}>
         
        </p>
      </div>

      <div
        className="dropdown"
        style={{ position: 'relative', display: 'inline-block', zIndex: '3' }}
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <button className="dropbtn" onClick={toggleDropdown} style={{ padding: '10px', backgroundColor: 'rgba(179, 107, 0, 10)', color: 'white', borderRadius: '8px',margin: "50px 0 0 0" }}>
          {t('SELECT CAMPUS LOCATION')}
          <span className="relative right-45">&#10148;</span>
          {dropdownVisible && (
            <div className="dropdown-content" style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 2.)', padding: '0px', borderRadius: '8px', textAlign: 'left', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>

              {dropdownOptions.map(option => (
                <button
                  key={option.value}
                  className={selectedOption === option.value ? 'selected' : ''}
                  onClick={() => setSelectedOption(option.value)}
                  style={{
                    margin: '0px', // Adjust margin as needed
                    padding: '5px 3px', // Adjust padding for vertical and horizontal spacing
                    transition: 'transform 0.1s',
                    borderRadius: '0px',
                    fontFamily: 'Arial',
                    fontSize: '15px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 1, 0.7)',
                    textAlign: 'left', // Align text to the left
                    backgroundImage: option.value === selectedOption ? option.backgroundImage : 'none', // Set background image based on selection
                    backgroundSize: 'cover', // Adjust background size as needed
                    backgroundRepeat: 'no-repeat', // Adjust background repeat as needed
                    backgroundPosition: 'center', // Adjust background position as needed

                  }}
                  onMouseEnter={e => {
                    e.target.style.transform = 'scale(1.1)'; // Scale button slightly on hover
                    e.target.style.backgroundColor = 'rgba(0, 0, 1, 0.7)';
                    e.target.style.color = 'orange'; // Change font color to orange
                  }}
                  onMouseLeave={e => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = 'rgba(0, 0, 1, 0.7)';
                    e.target.style.color = 'white'; // Change font color to orange
                  }}
                >
                  {option.label}
                  {/* Add bubbles here */}
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                </button>
              ))}
            </div>
          )}
        </button>
      </div>

      <PopularityChart location={selectedOption} />

      <div className="flex justify-left">
        <a href="https://forms.gle/AGJnrFne3BGP7wkn6">
          <button
            className="bg-primary text-white text-sm sm:text-md font-medium py-2 px-4 rounded-lg relative"
            style={{
              color: 'white',
              padding: '10px',
              backgroundColor: 'rgba(179, 107, 0, 10)',
              transition: 'background-color 0.1s, transform 0.1s',
              borderRadius: '5',
              fontFamily: 'Arial black',
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = 'rgba(51, 102, 204, 10)';
              e.target.style.transform = 'scale(1)';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'rgba(204, 122, 0, 10)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {t('Participate in online survey')}
            <span className="relative right-45">&#10148;</span>
          </button>
        </a>
      </div>

      <DescriptionBox location={selectedOption} />
    </div>
  );
}

export default MyDropdown;
