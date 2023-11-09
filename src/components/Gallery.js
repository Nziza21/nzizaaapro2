import React from 'react';
import CatImage from './CatImage';

const Gallery = ({ catData }) => {
  return (
    <section id="gallery">
      {catData.map((cat) => (
        <CatImage key={cat.id} cat={cat} />
      ))}
    </section>
  );
};

export default Gallery;
