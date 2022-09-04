import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function SingleProductEdit({ pd, editProductBtn }) {
  const [productImage, srtProductImage] = useState([
    pd.ProductImage[0][0].image,
  ]);

  const chnageProductImage = (props) => {
    srtProductImage(props[0].image);
  };

  // onClick delete product handeling
  const deleteProduct = (props) => {
    console.log("this is id ", props._id);

    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneProductDelete/${props._id}`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div
      className="p-1 m-1"
      style={{ border: "1px solid #fec400", borderRadius: "5px" }}
    >
      <div className="row">
        <div className="col-6">
          <Carousel>
            {productImage.map((img) => (
              <div>
                <img src={img} alt="" />
              </div>
            ))}
          </Carousel>
          <div class="d-flex justify-content-center">
            {pd.ProductImage.map((clr) => (
              <div
                onClick={() => chnageProductImage(clr)}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: clr[0].color,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="col-6">
          <div>
            <div>
              <span>
                <b>{pd.ProductName}</b>
              </span>
            </div>
            <div className="mt-2">
              <div>
                <span>Price : {pd.ProductPrice}</span>
              </div>
              <div>
                <span style={{ fontSize: "12px" }}>
                  Offer : <s>{pd.ProductOffer}</s>
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div
                className="p-2"
                style={{
                  border: "1px solid #fec400",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              >
                Category : <b>{pd.ProductCategory}</b>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <div>
                <Button variant="outlined" onClick={() => editProductBtn(pd)}>
                  Edit
                </Button>
              </div>
              <div onClick={() => deleteProduct(pd)}>
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
