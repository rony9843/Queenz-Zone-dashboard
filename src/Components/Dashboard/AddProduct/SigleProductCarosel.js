import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function SigleProductCarosel({ carusalSelect }) {
  console.log("data img ::: ", carusalSelect[0]);

  // dt[0].image.map((img) => console.log(img[0]));

  return (
    <div>
      <Carousel>
        {carusalSelect[0].image.map((img) => (
          <div>
            <img src={img[0]} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
