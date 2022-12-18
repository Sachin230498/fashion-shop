import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import "../CSS/Home.css";

export default function BtnSlider({ direction, moveSlide, v }) {
  if (direction === "next") {
    return (
      <button className="btn-slide next" onClick={moveSlide}>
        {v} <ChevronRightIcon w={10} h={10} color={"grey"} />
      </button>
    );
  } else {
    return (
      <button className="btn-slide prev" onClick={moveSlide}>
        <ChevronLeftIcon color={"grey"} w={10} h={10} />
      </button>
    );
  }
}
