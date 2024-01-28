'use client'
import { useState } from 'react';
import ImageModal from './ImageModal';
import ImageContainer from './ImageContainer';
const imageContext = require.context('@public/images', false, /\.(jpg|jpeg|png)$/);
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
    <div className="mt-20 flex flex-wrap justify-center">
      {images.map((image) => (
        <button
        onClick={() => handleClick(image)}
        ><ImageContainer
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          
        />
        </button>
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
