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

// const plusSymbol=[
//   "+",
//   "+",
//   "+",
//   "+",
//   "+",
//   "+",
//   "+",
//   "+",
//   "+",
// ]
export const ImageCard = ({ imageUrl, index }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  const message = messages[index]; 
  // const message2 = plusSymbol[index]; 

  return (
    <div className="imageCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="img-fluid" src={imageUrl} alt="images" />
      {showOverlay && (
        <div className="image-overlay">
          <p>{message}
          {/* <span className="plus-symbol">{message2}</span> */}
          </p>
        </div>
      )}
    </div>
  );
};
