import { useRef, useState } from "react";

import {
  CarouselContainer,
  CarouselSlider,
  CarouselItem,
  CarouselCircleContainer,
  CarouselCircle,
} from "./styled";

export default function Carousel({ items = [], dragSpeed = 2 }) {
  const carouselSlider = useRef(null);
  console.log(carouselSlider);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (evt) => {
    setIsDown(true);
    setStartX(evt.pageX - carouselSlider.current.offsetLeft);
    setScrollLeft(carouselSlider.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);

  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (evt) => {
    if (!isDown) return;
    evt.preventDefault();
    const x = evt.pageX - carouselSlider.current.offsetLeft;
    const walk = (x - startX) * dragSpeed;
    carouselSlider.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <CarouselContainer>
      <CarouselSlider
        active={isDown}
        ref={carouselSlider}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {items.map(({ src }) => (
          <CarouselItem key={src} img={src} />
        ))}
      </CarouselSlider>
      <CarouselCircleContainer>
        {items.map(({ src }) => (
          <CarouselCircle key={src} />
        ))}
      </CarouselCircleContainer>
    </CarouselContainer>
  );
}

// todo ancho
// no flechas en los laterales
// arrastre de imagenes
// responsive
// indicar cantidad de elementos con circulos debajo de las imagenes.
// reutilizable (images por props, que sean links o referencias locales de images)
