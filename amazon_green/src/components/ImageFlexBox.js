import React from 'react';

const ImageFlexBox = () => {
  const handleImageClick = (path) => {
    window.location.href = path;
  };
  
  return (
    <div className="flex-box">
      <img src="/assets/paper.png" alt="Paper and cardboard" onClick={() => handleImageClick('/paper-and-cardboard-form')} />
      <img src="/assets/metal.png" alt="Metal" onClick={() => handleImageClick('/metal-form')} />
      <img src="/assets/plastic.png" alt="Plastic" onClick={() => handleImageClick('/plastic-form')} />
      <img src="/assets/glass.png" alt="Glass" onClick={() => handleImageClick('/glass-form')} />
    </div>
  );
};

export default ImageFlexBox;
