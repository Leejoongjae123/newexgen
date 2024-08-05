"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla2 w-[90vw] md:w-[60vw]">
      <h1 className="text-4xl font-bold my-5">🧑 매니저이야기</h1>
      <div className="embla__viewport2" ref={emblaRef}>
        <div className="embla__container2">
          {slides.map((index) => (
            <div className="embla__slide2" key={index}>
              <div className="embla__slide__number2 relative ">
                <Chip className="absolute top-4 left-4 z-10 bg-white">Chip</Chip>
                <img
                  src={`/images/carousel/carousel${index + 1}.jpg`}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-auto"
                />
                
              </div>
              <h2 className="text-2xl font-bold">Hello</h2>
              <p className="text-xl font-semibold text-gray-500">Nice to meet you</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
