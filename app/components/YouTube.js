"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import EmblaCarousel3 from "./EmblaCarousel3";

const OPTIONS = { containScroll: false };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function BestReview() {
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="flex flex-col gap-y-5 justify-center items-center">
      <div className="w-[90vw] md:w-[60vw] flex justify-between">
        <h1 className="text-4xl font-bold">👍 체험단시대 유튜브</h1>
        <Link className="font-bold text-2xl">더보기</Link>
      </div>
      <EmblaCarousel3 slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default BestReview;
