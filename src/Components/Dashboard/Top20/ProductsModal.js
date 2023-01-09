import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ProductsModal({
  pd,
  selectProductFunction,
  selectModalProduct,
  selectedProduct,
  fetchData,
}) {
  const [ifSelectThisPro, setIfSelectThisPro] = useState(false);

  useEffect(() => {
    const ifSelect = selectModalProduct.filter((dt) => dt.id === pd._id);

    console.log(ifSelect);

    setIfSelectThisPro(!ifSelect.length === false ? true : false);
  }, [selectModalProduct]);

  const [productImage, srtProductImage] = useState([
    pd.ProductImage[0][0].image,
  ]);

  const chnageProductImage = (props) => {
    srtProductImage(props[0].image);
  };

  // onClick delete product handeling
  const selectProduct = (props) => {
    selectProductFunction({ id: props._id });
  };

  //filter fetch data
  useEffect(() => {
    let filterData = fetchData.filter(
      (fData) => fData?.cateTop20.cate === pd.ProductCategory
    );

    // let finalFilterData = filterData.filter((fData) =>
    //   fData.cateTop20.productsId.filter((inData) => inData.id === pd._id)
    // );

    // let finalFilterData = filterData.filter((fData) =>
    //   fData.cateTop20.productsId.filter((sData) =>
    //     console.log(sData, "this is fetch inside sData :", sData.id === pd._id)
    //   )
    // );

    if (!filterData.length === false) {
      let finalFilterData = filterData[0].cateTop20.productsId.filter(
        (fData) => fData.id === pd._id
      );

      console.log("this is fetch inside-->>  : ", filterData);

      setIfSelectThisPro(!finalFilterData.length === true ? false : true);
    }
  }, [fetchData]);

  return (
    <ModalProductback className="p-2 col-3 ">
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
                <div onClick={() => selectProduct(pd)}>
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

        <div
          className=""
          style={{ cursor: "pointer" }}
          onClick={() => selectProduct(pd)}
        >
          <div>
            <div>
              <span>
                <b>{pd.ProductName}</b>
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
            <div class="mt-3 d-flex justify-content-between">
              <div>
                <Button variant="outlined" size="small">
                  Show
                </Button>
              </div>
              <div onClick={() => selectProduct(pd)}>
                <Button variant="outlined" size="small">
                  Select
                </Button>
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
