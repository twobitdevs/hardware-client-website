import React from 'react';
import "./CarouselImage.scss";

interface ExampleCarouselImageProps {
  src: string;
  alt: string;
}

export const CarouselImage: React.FC<ExampleCarouselImageProps> = ({ src, alt }) => {
  return (
    <div className="carousel-image">
      <img
        className="d-block w-100"
        src={src}
        alt={alt}
      />
    </div>
  );
};