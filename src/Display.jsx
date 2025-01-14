import React from "react";
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import images from "./images";
import "react-image-gallery/styles/css/image-gallery.css";
import "./App.css";

export default function Display() {
  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowLeft size={30} color="#000" />
      </button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowRight size={30} color="#000" />
      </button>
    );
  }

  return (
    <div className="App">
      <ImageGallery
        items={images}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
      />
    </div>
  );
}
