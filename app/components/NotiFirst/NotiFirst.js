"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla1 w-[90vw] md:w-[60vw]">
      <div className="embla__viewport1" ref={emblaRef}>
        <div className="embla__container1">
          {slides.map((index) => (
            <div className="embla__slide1" key={index}>
              <div className="embla__slide__number1 relative ">
                <img
                  src={`/images/carousel/carousel${index + 1}.jpg`}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
