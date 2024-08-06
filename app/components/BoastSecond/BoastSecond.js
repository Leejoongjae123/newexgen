"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import "./base.css";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
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
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="embla8 w-[90vw] md:w-[60vw]">
      <h1 className="text-4xl font-bold my-5">👏 자랑하기</h1>
      <div className="flex items-center flex-wrap gap-5 my-5">
        <Button size="lg" color="primary">
          Primary
        </Button>
        <Button size="lg" color="default">
          Primary
        </Button>
        <Button size="lg" color="default">
          Primary
        </Button>
        <Button size="lg" color="default">
          Primary
        </Button>
        <Button size="lg" color="default">
          Primary
        </Button>
        <Button size="lg" color="default">
          Primary
        </Button>
        <Button size="lg" color="default">
          Primary
        </Button>
      </div>

      <div className="embla__viewport8" ref={emblaRef}>
        <div className="embla__container7">
          {slides.map((index) => (
            <div className="embla__slide7 gap-y-5 flex flex-col" key={index}>
              <Card className="py-4 shadow-none flex " >
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    onClick={onOpen}
                  />
                </CardBody>
                <CardFooter className="pb-0 px-4 flex-col items-start">
                  <div className="flex justify-between w-full items-center">
                    <div>
                      <Chip color="secondary">
                        <p className="text-xl">#택배인증</p>
                      </Chip>
                    </div>
                    <div className="text-xl text-gray-500">2시간 전</div>
                  </div>
                  <div className="my-1">
                    <p className="text-2xl font-bold">
                      이번주 택배 인증합니다.
                    </p>
                  </div>

                  <div className="flex justify-between items-center w-full mt-5">
                    <div className="flex items-center gap-x-2">
                      <Avatar
                        isBordered
                        className=""
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                      <p className="text-xl font-semibold">이중재 님</p>
                    </div>

                    <div className="flex items-center gap-x-2">
                      <FaRegHeart className="text-gray-500" />
                      <div className="text-xl">12</div>
                      <HiOutlineChatBubbleOvalLeftEllipsis className="text-gray-500" />
                      <div className="text-xl">3</div>

                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="py-4 shadow-none flex " >
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    onClick={onOpen}
                  />
                </CardBody>
                <CardFooter className="pb-0 px-4 flex-col items-start">
                  <div className="flex justify-between w-full items-center">
                    <div>
                      <Chip color="secondary">
                        <p className="text-xl">#택배인증</p>
                      </Chip>
                    </div>
                    <div className="text-xl text-gray-500">2시간 전</div>
                  </div>
                  <div className="my-1">
                    <p className="text-2xl font-bold">
                      이번주 택배 인증합니다.
                    </p>
                  </div>

                  <div className="flex justify-between items-center w-full mt-5">
                    <div className="flex items-center gap-x-2">
                      <Avatar
                        isBordered
                        className=""
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                      <p className="text-xl font-semibold">이중재 님</p>
                    </div>

                    <div className="flex items-center gap-x-2">
                      <FaRegHeart className="text-gray-500" />
                      <div className="text-xl">12</div>
                      <HiOutlineChatBubbleOvalLeftEllipsis className="text-gray-500" />
                      <div className="text-xl">3</div>

                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="py-4 shadow-none flex " >
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    onClick={onOpen}
                  />
                </CardBody>
                <CardFooter className="pb-0 px-4 flex-col items-start">
                  <div className="flex justify-between w-full items-center">
                    <div>
                      <Chip color="secondary">
                        <p className="text-xl">#택배인증</p>
                      </Chip>
                    </div>
                    <div className="text-xl text-gray-500">2시간 전</div>
                  </div>
                  <div className="my-1">
                    <p className="text-2xl font-bold">
                      이번주 택배 인증합니다.
                    </p>
                  </div>

                  <div className="flex justify-between items-center w-full mt-5">
                    <div className="flex items-center gap-x-2">
                      <Avatar
                        isBordered
                        className=""
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                      <p className="text-xl font-semibold">이중재 님</p>
                    </div>

                    <div className="flex items-center gap-x-2">
                      <FaRegHeart className="text-gray-500" />
                      <div className="text-xl">12</div>
                      <HiOutlineChatBubbleOvalLeftEllipsis className="text-gray-500" />
                      <div className="text-xl">3</div>

                    </div>
                  </div>
                </CardFooter>
              </Card>
              
              
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
