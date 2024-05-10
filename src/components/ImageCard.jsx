import React, { useState } from 'react';

const messages = [
  "Web 3",
  "App-2",
  "Card-2",
  "Card-1",
  "Web-3",
  "Card-3",
  "App-3",
  "Web-2",
  "App-1",
];

export const ImageCard = ({ imageUrl, index }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  const message = messages[index]; 

  return (
    <div className="imageCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="img-fluid" src={imageUrl} alt="images" />
      {showOverlay && (
        <div className="image-overlay">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};
