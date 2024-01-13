'use client'
import React, { useState } from 'react';
import ImageModal from './ImageModal';

const imageContext = require.context('../../public/images', false, /\.(jpg|jpeg|png)$/);
const images = imageContext.keys().map((key, index) => ({
  id: index + 1,
  src: `/images${key.slice(1)}`,
}));

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className="w-full h-auto cursor-pointer"
          onClick={() => handleClick(image)}
        />
      ))}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ImageGallery;
