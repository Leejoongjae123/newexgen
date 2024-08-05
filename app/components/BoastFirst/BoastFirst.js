"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Avatar,
} from "@nextui-org/react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="embla7 w-[90vw] md:w-[60vw]">
      <div className="embla__viewport7" ref={emblaRef}>
        <div className="embla__container7">
          {slides.map((index) => (
            <div className="embla__slide7" key={index}>
              <div className="embla__slide__number7 relative">
                <Chip className="absolute top-8 left-8 z-50 w-10 h-10">
                  베스트
                </Chip>

                <img
                  src={`/images/carousel/carousel${index + 1}.jpg`}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-auto z-10 cursor-pointer"
                  onClick={onOpen}
                />
                <div className="absolute bottom-8 left-8 z-50 w-full flex items-center gap-2">
                  <Avatar
                    isBordered
                    className=""
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  <p className="text-white text-sm font-bold">김영훈</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
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
