"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "./images";
import { Link } from "@nextui-org/react";
function ShareData() {
  const [images, setImages] = useState(IMAGES);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">👏 자랑하기</h1>
        <Link href='/boast' className="font-bold text-2xl">더보기</Link>
      </div>

      <div className="flex gap-x-5 gap-y-5 justify-center items-center flex-wrap">
        <Button className="text-2xl p-7" size="lg">
          #컬픽스마스카라
        </Button>
        <Button className="text-2xl p-7" size="lg">
          #수분크림
        </Button>
        <Button className="text-2xl p-7" size="lg">
          #로션
        </Button>
        <Button className="text-2xl p-7" size="lg" color="primary">
          #샴푸
        </Button>
        <Button className="text-2xl p-7" size="lg">
          #컨디셔너
        </Button>
        <Button className="text-2xl p-7" size="lg">
          #컨디셔너
        </Button>
        <Button className="text-2xl p-7" size="lg">
          #컨디셔너
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="hidden md:grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="hidden md:grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareData;
