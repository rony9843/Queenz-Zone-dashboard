import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Button from "@mui/material/Button";
import styled from "styled-components";

export default function Product({ p, editProductBtn }) {
  const [img, setImg] = useState(p.ProductImage[0][0].image);

  return (
    <ProductBack>
      <div>
        <div>
          <div className="product-main-div">
            <div>
              <div className="carousel_div">
                <Carousel
                  infiniteLoop={true}
                  autoPlay={true}
                  showThumbs={false}
                >
                  {img.map((img) => (
                    <div>
                      <img src={img[0]} alt="" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div>
                <div className="mt-2 d-flex justify-content-center">
                  {p.ProductImage.map((color) => (
                    <div
                      onClick={() => setImg(color[0].image)}
                      style={{
                        backgroundColor: `${color[0].color}`,
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                      }}
                    >
                      {console.log(color[0].image)}{" "}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="product_name">{p.ProductName}</span>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => editProductBtn(p)}
                  style={{ backgroundColor: "#fec400", boxShadow: "none" }}
                  size="small"
                  variant="contained"
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductBack>
  );
}

const ProductBack = styled.div`
  margin: 0px 5px;
  .product-main-div {
    padding: 5px;
    border: 1px solid #fec400;
    border-radius: 5px;
  }
  .carousel_div {
    width: 150px;
  }
  .carousel_div img {
    border-radius: 10px;
  }
  .product_name {
    font-size: 13px;
  }
`;
