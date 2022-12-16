import React from "react";

export default function CarouselImageMap({ dt }) {
  return (
    <div>
      {dt &&
        dt.link.map((img) => (
          <div>
            <img src={img} alt="product" />
          </div>
        ))}
    </div>
  );
}
