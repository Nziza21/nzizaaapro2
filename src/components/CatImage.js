// src/components/CatImage.js
import React from 'react';

const CatImage = ({ cat }) => {
  return (
    <div className="cat-container">
      <img className="cat-image" src={cat.url} alt={`Cat ID: ${cat.id}`} />
      <p>Height: {cat.height}</p>
      <p>Width: {cat.width}</p>
    </div>
  );
};

export default CatImage;
