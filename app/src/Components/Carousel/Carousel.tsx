import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import { CarouselImage } from './CarouselImage/CarouselImage';
import image1 from '../../Assets/pexels-dmitry-demidov-515774-6789021.jpg';
import image2 from '../../Assets/pexels-ivan-samkov-5798978.jpg';
import image3 from '../../Assets/pexels-pixabay-259958.jpg';

const images = [
  { src: image1, alt: 'First slide', label: 'First slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
  { src: image2, alt: 'Second slide', label: 'Second slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: image3, alt: 'Third slide', label: 'Third slide label', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
];

export const Carousel: React.FC = () => {
  return (
    <BootstrapCarousel>
      {images.map((image, index) => (
        <BootstrapCarousel.Item key={index}>
          <CarouselImage src={image.src} alt={image.alt} />
          <BootstrapCarousel.Caption>
            <h3>{image.label}</h3>
            <p>{image.description}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};