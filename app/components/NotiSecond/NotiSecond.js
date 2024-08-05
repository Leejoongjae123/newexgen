"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="embla2 w-[90vw] md:w-[60vw]">
      <h1 className="text-4xl font-bold my-5">📜 공지사항</h1>
      <div className="embla__viewport2" ref={emblaRef}>
        <div className="embla__container2">
          {slides.map((index) => (
            <div className="embla__slide2" key={index}>
              <div className="embla__slide__number2 relative ">
                <Chip className="absolute top-4 left-4 z-10">베스트</Chip>
                <img
                  src={`/images/carousel/carousel${index + 1}.jpg`}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-auto"
                  onClick={onOpen}
                />
              </div>
              <h2 className="text-2xl font-bold">Hello</h2>
              <p className="text-xl font-semibold text-gray-500">
                Nice to meet you
              </p>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default EmblaCarousel;
