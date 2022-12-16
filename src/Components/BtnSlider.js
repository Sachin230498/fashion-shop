import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import "../CSS/Home.css";

export default function BtnSlider({ direction, moveSlide, v }) {
  if (direction === "next") {
    return (
      <button className="btn-slide next" onClick={moveSlide}>
        {v} <ChevronRightIcon w={8} h={8} />
      </button>
    );
  } else {
    return (
      <button className="btn-slide prev" onClick={moveSlide}>
        <ChevronLeftIcon w={8} h={8} />
      </button>
    );
  }
}
