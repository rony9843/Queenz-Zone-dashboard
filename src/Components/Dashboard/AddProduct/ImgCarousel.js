import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarusalColorBtn from "./CarusalColorBtn";
import SigleProductCarosel from "./SigleProductCarosel";

export default function ImgCarousel({ AlOverProductInfoContext, AllInfo }) {
  console.log("this is carusal : ", AlOverProductInfoContext);
  //   console.log("this is carusal AllInfo : ", Array.isArray(AllInfo[0]));
  console.log("this is carusal AllInfo : ", AllInfo);

  //   const morear = [AlOverProductInfoContext];
  //   console.log("more array : ", morear);

  //   if (AllInfo.length <= 2) {
  //     console.log("this is two array ");
  //   } else {
  //     console.log("this is one array");
  //   }

  // AllInfo[0][0].image.map((dt) => console.log(dt[0]));

  const [carusalSelect, setCarusalSelect] = useState(AllInfo);

  const [autocarOff, setAutoCarOff] = useState(true);

  const SelectCarusalForColor = (props) => {
    console.log("flwwwwwwwwwww::::::::   ", props);
    setCarusalSelect(props);
    setAutoCarOff(false);
  };

  console.log("this is dataaaa", carusalSelect);

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "300px" }}>
        <Carousel>
          {!AllInfo.length === false &&
            autocarOff === true &&
            AlOverProductInfoContext.map((dt) => (
              <div>
                <img src={dt} />
              </div>
            ))}
        </Carousel>
        {/* <Carousel> */}
        {/* {AllInfo.map((dt) =>
            dt[0].image.map((img) => (
              <div>
                <img src={img} />
              </div>
            ))
          )} */}

        {/* </Carousel> */}

        {/* {AllInfo.map((dt) => (
          <SigleProductCarosel dt={dt}></SigleProductCarosel>
        ))} */}

        {/* {AllInfo.map((dt) => dt.map((clr) => console.log(clr.image)))} */}
        {/* {carusalSelect.map((dt) => (
          <span>this is</span>
        ))} */}

        {autocarOff === false && (
          <SigleProductCarosel
            carusalSelect={carusalSelect}
          ></SigleProductCarosel>
        )}

        <div className="d-flex justify-content-center">
          {" "}
          {AllInfo.map((dt) => (
            <CarusalColorBtn
              dt={dt}
              SelectCarusalForColor={SelectCarusalForColor}
            ></CarusalColorBtn>
          ))}
        </div>
      </div>
    </div>
  );
}
