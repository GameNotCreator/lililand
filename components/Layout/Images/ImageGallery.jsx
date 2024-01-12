import { useState } from 'react';
import ImageModal from './ImageModal';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    src: `/images/image${index + 1}.jpg`,
  }));

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
