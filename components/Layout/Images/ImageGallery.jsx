'use client'
import { useState, useEffect } from 'react';
import fs from 'fs/promises';
import path from 'path';
import ImageModal from './ImageModal';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesPath = path.join(process.cwd(), 'public', 'images');
        const files = await fs.readdir(imagesPath);
        const imageList = files.map((file, index) => ({
          id: index + 1,
          src: `/images/${file}`,
        }));
        setImages(imageList);
      } catch (error) {
        console.error('Error reading images directory:', error);
      }
    };

    fetchImages();
  }, []);

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

