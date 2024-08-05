"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel4 from "./EmblaCarousel4";
import Header from "./Header";
import Footer from "./Footer";
import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";

const OPTIONS = { containScroll: false };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Notification() {
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <Header />
      <EmblaCarousel4 slides={SLIDES} options={OPTIONS} />
    </>
  );
}

export default Notification;
