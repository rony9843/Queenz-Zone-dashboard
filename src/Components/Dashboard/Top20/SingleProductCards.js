import React, { useState } from "react";
import styled from "styled-components";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function SingleProductCards({ pd }) {
  const [ifSelectThisPro, setIfSelectThisPro] = useState(false);

  const [productImage, srtProductImage] = useState([
    pd.ProductImage[0][0].image,
  ]);

  const chnageProductImage = (props) => {
    srtProductImage(props[0].image);
  };

  return (
    <ModalProductback className="p-2  ">
      <div
        className="p-2"
        style={{
          border: "1px solid #fec400",
          borderRadius: "5px",
          backgroundColor: `${
            !ifSelectThisPro === false ? "#fec400" : "white"
          } `,
        }}
      >
        <div className=" d-flex justify-content-center">
          <div>
            <Carousel>
              {productImage.map((img) => (
                <div>
                  <img style={{ borderRadius: "10px" }} src={img} alt="" />
                </div>
              ))}
            </Carousel>
            <div class="d-flex justify-content-center">
              {pd.ProductImage.map((clr) => (
                <div
                  onClick={() => chnageProductImage(clr)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: clr[0].color,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="" style={{ cursor: "pointer" }}>
          <div>
            <div>
              <span>
                <b>
                  {pd.ProductName.length > 50
                    ? pd.ProductName.substring(0, 60) + "..."
                    : pd.ProductName}{" "}
                </b>
              </span>
            </div>
            <div className="pt-1 d-flex">
              <div>
                <span>
                  Price : <b>{pd.ProductPrice}</b>{" "}
                </span>
              </div>
              <div className="px-2">
                <span style={{ fontSize: "12px" }}>
                  Offer :{" "}
                  <s>
                    {" "}
                    <b>{pd.ProductOffer}</b>{" "}
                  </s>
                </span>
              </div>
            </div>
            <div className="pt-1">
              <div className="">
                Category : <b>{pd.ProductCategory}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProductback>
  );
}

const ModalProductback = styled.div`
  .porduct_container {
    border: 1px solid #fec400;
    border-radius: 10px;
  }
  .carousel-root {
    width: 130px;
  }
  .carousel .thumb {
    width: 50px !important;
    border: none !important;
    border-radius: 5px;
  }

  .carousel .thumbs-wrapper {
    margin: 10px !important;
    overflow: hidden;
  }
`;
