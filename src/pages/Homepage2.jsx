// src/pages/Homepage2.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import NewSection from '../components/NewSection';
import NewFooter1 from '../components/Newfooter'; // Ensure this import is correct

const Homepage2 = () => {
  const [sectionContent, setSectionContent] = useState({
    title: "Welcome to Homepage2",
    description: "Select a section to view its content.",
    items: []
  });

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section') || 'VR for Good'; // Default section if none is provided

    // Fetch the data from the public folder
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // Set the content based on the section or fallback to default
        setSectionContent(data[section] || {
          title: "Welcome to Homepage2",
          description: "Select a section to view its content.",
          items: []
        });
      });
  }, [location.search]); // Re-run effect when search params change

  return (
    <>
      <Navbar2 />
      <div className="container">
        <NewSection sectionContent={sectionContent} />
      </div>
      <NewFooter1 />
    </>
  );
};

export default Homepage2;
