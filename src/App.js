// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './style.css'; // Import the CSS file

const App = () => {
  const [minWidth, setMinWidth] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    // Function to update the position of the footer
    const updateFooterPosition = () => {
      const footer = document.querySelector('footer');
      const gallery = document.querySelector('#gallery');
      const windowHeight = window.innerHeight;

      if (footer && gallery) {
        const galleryBottom = gallery.offsetTop + gallery.clientHeight;

        if (galleryBottom < windowHeight) {
          footer.style.position = 'fixed';
          footer.style.bottom = '0';
        } else {
          footer.style.position = 'relative';
        }
      }
    };

    // Attach the function to the scroll event
    window.addEventListener('scroll', updateFooterPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', updateFooterPosition);
    };
  }, [catData]); // Update the position when catData changes

  const applyFilters = () => {
    // Logic to filter catData based on minWidth and minHeight
    // Update the state with the filtered data
  };

  return (
    <div>
      <Header />
      <Filters
        minWidth={minWidth}
        minHeight={minHeight}
        setMinWidth={setMinWidth}
        setMinHeight={setMinHeight}
        applyFilters={applyFilters}
      />
      <Gallery catData={catData} setCatData={setCatData} />
      <Footer />
    </div>
  );
};

export default App;
