import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import styled from "styled-components";
import AddProductReDesign from "./AddProductReDesign";
import DescriptionAndMoreDetails from "./DescriptionAndMoreDetails";
import ImgCarousel from "./ImgCarousel";

// product info create context
export const AlllllProductInfoContext = createContext();

export default function AllAboutProduct() {
  const [AlOverProductInfoContext, setAlOverProductInfoContext] = useState({});

  const [AllInfo, setAllInfo] = useState([]);

  const [productNameLength, setProductNameLength] = useState(0);

  const [FinalProductName, setFinalProductName] = useState();

  const [FinalProductPrice, setFinalProductPrice] = useState();

  const [FinalProductOffer, setFinalProductOffer] = useState();

  const [FinalProductCategory, setFinalProductCategory] = useState();

  const [FinalProductStock, setFinalProductStock] = useState(false);

  const [FinalProductDescription, setFinalProductDescription] = useState();

  // product size on off
  const [isSizeShow, setIsSizeShow] = useState(true);

  // product color on off
  const [isColor, setIsColor] = useState(false);

  // products brand
  const [isProductBrand, setIsProductBrand] = useState(false);

  // products brand
  const [ProductBrandOptionName, setProductBrandOptionName] = useState("Brand");

  // products brand
  const [ProductBrandOptionLink, setProductBrandOptionLink] = useState(false);

  // products brand
  const [ProductBrandName, setProductBrandName] = useState("");

  // products important info state
  const [isProductImportantInfo, setIsProductImportantInfo] = useState(false);

  // products important info
  const [ProductImportantInfoName, setProductImportantInfoName] = useState(
    "Important information"
  );

  // products important info
  const [ProductImportantInfoText, setProductImportantInfoText] = useState("");

  // products important info
  const [ProductImportantInfoTitleColor, setProductImportantInfoTitleColor] =
    useState("black");
  // products important info
  const [
    ProductImportantInfoContentColor,
    setProductImportantInfoContentColor,
  ] = useState("#574400");
  // products important info
  const [
    ProductImportantInfoBackgroundColor,
    setProductImportantInfoBackgroundColor,
  ] = useState("#FFF6C4");

  // product Des on off
  const [isProductDescription, setIsProductDescription] = useState(false);

  // product Des name
  const [productDescriptionName, setProductDescriptionName] =
    useState("Description");

  // product more details image
  const [IsProductMoreDetailsImage, setIsProductMoreDetailsImageName] =
    useState(false);

  // product more details image
  const [productMoreDetailsImageName, setProductMoreDetailsImageName] =
    useState("More Details");

  // product more details image
  const [productMoreDetailsMainImageUrl, setProductMoreDetailsMainImageUrl] =
    useState("");

  // input size
  const [inputAllSize, setInputAllSize] = useState([]);

  // input single size
  const [inputOneSize, setInputOneSize] = useState();

  const inputSizeBtn = () => {
    inputOneSize && setInputAllSize([...inputAllSize, inputOneSize]);
    setInputOneSize("");
  };

  useEffect(() => {
    if (isSizeShow) {
      if (!inputAllSize.length === false) {
        setFinalProductStock(true);
      } else {
        setFinalProductStock(false);
      }
    } else {
      setFinalProductStock(true);
    }
  }, [inputAllSize, isSizeShow]);

  const handleSizeKeypress = (e) => {
    //it triggers by pressing the enter key

    if (e.keyCode === 13) {
      if (inputOneSize !== "") {
        setInputAllSize([...inputAllSize, inputOneSize]);
        setInputOneSize("");
      }
    }
  };

  // delete size btn
  const deleteSizeBtn = (props) => {
    const newSize = inputAllSize.filter((sz) => sz !== props);
    setInputAllSize(newSize);
  };

  // use state for addtag
  const [tag, setTag] = useState("");

  // use state for addtag
  const [tagArray, setTagArray] = useState([]);

  const [gloError, setGloError] = useState({
    err: false,
    mag: "",
  });

  const submit = () => {
    if (
      FinalProductName === undefined ||
      FinalProductPrice === undefined ||
      FinalProductCategory === undefined ||
      !AllInfo.length === true
    ) {
      FinalProductName === undefined &&
        setGloError({
          err: true,
          msg: "Please,fill up the product's name input field",
        });

      FinalProductPrice === undefined &&
        setGloError({
          err: true,
          msg: "Please,fill up the product's Price input field",
        });

      FinalProductCategory === undefined &&
        setGloError({
          err: true,
          msg: "Please,fill up the product's Category",
        });

      !AllInfo.length === true &&
        setGloError({
          err: true,
          msg: "Please,Upload one or more product image",
        });
    } else if (isSizeShow === true) {
      if (inputAllSize.length === 0) {
        setGloError({
          err: true,
          msg: "Please,fill up the product's Size",
        });
      } else {
        const productDetails = [
          {
            isSizeShow: isSizeShow,
            productSize: inputAllSize,
            ProductName: FinalProductName,

            ProductPrice: FinalProductPrice,
            IsProductColor: isColor === true ? false : true,
            ProductImage: AllInfo,
            ProductOffer:
              FinalProductOffer === undefined
                ? "null"
                : FinalProductOffer === 0
                ? "null"
                : FinalProductOffer,
            stock: FinalProductStock,
            ProductCategory: FinalProductCategory,

            ProductTags: tagArray,
            isBrand: isProductBrand,
            ProductBrandOptionName: ProductBrandOptionName,
            ProductBrandOptionLink: ProductBrandOptionLink,
            ProductBrandName: ProductBrandName,
            isProductImportantInfo: isProductImportantInfo,
            ProductImportantInfoName: ProductImportantInfoName,
            ProductImportantInfoText: ProductImportantInfoText,
            ProductImportantInfoTitleColor: ProductImportantInfoTitleColor,
            ProductImportantInfoContentColor: ProductImportantInfoContentColor,
            ProductImportantInfoBackgroundColor:
              ProductImportantInfoBackgroundColor,
            isProductDescription: isProductDescription,
            productDescriptionName: productDescriptionName,
            FinalProductDescription: FinalProductDescription,
            IsProductMoreDetailsImage: IsProductMoreDetailsImage,
            productMoreDetailsImageName: productMoreDetailsImageName,
            productMoreDetailsMainImageUrl: productMoreDetailsMainImageUrl,
          },
        ];

        console.log("vhai submit hoise");

        fetch(
          "https://queenzzoneserver-production.up.railway.app/queenZoneUserProductUpload",
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ productDetails }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            window.location.reload(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    } else {
      const productDetails = [
        {
          isSizeShow: isSizeShow,
          productSize: false,
          ProductName: FinalProductName,
          ProductPrice: FinalProductPrice,
          IsProductColor: isColor === true ? false : true,
          ProductImage: AllInfo,
          ProductOffer:
            FinalProductOffer === undefined
              ? "null"
              : FinalProductOffer === 0
              ? "null"
              : FinalProductOffer,
          stock: FinalProductStock,
          ProductCategory: FinalProductCategory,
          ProductTags: tagArray,

          isBrand: isProductBrand,
          ProductBrandOptionName: ProductBrandOptionName,
          ProductBrandOptionLink: ProductBrandOptionLink,
          ProductBrandName: ProductBrandName,
          isProductImportantInfo: isProductImportantInfo,
          ProductImportantInfoName: ProductImportantInfoName,
          ProductImportantInfoText: ProductImportantInfoText,
          ProductImportantInfoTitleColor: ProductImportantInfoTitleColor,
          ProductImportantInfoContentColor: ProductImportantInfoContentColor,
          ProductImportantInfoBackgroundColor:
            ProductImportantInfoBackgroundColor,
          isProductDescription: isProductDescription,
          productDescriptionName: productDescriptionName,
          FinalProductDescription: FinalProductDescription,
          IsProductMoreDetailsImage: IsProductMoreDetailsImage,
          productMoreDetailsImageName: productMoreDetailsImageName,
          productMoreDetailsMainImageUrl: productMoreDetailsMainImageUrl,
        },
      ];

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneUserProductUpload",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productDetails }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          window.location.reload(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      // window.location.reload(false);
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    console.log("this is clicked 2");
    if (e.keyCode === 13) {
      if (tag != "") {
        console.log(tag);

        setTagArray([...tagArray, tag]);
        setTag("");
      }
    }
  };

  const picSubmit = (props) => {
    const fullColorPic = [
      {
        color: props,
        image: AlOverProductInfoContext,
      },
    ];
    console.log("this is producttttt : ", fullColorPic);
    setAllInfo([...AllInfo, fullColorPic]);

    console.log("this is pic submit first : ", props);
  };

  console.log("this is AlOverProductInfoContext : ", AllInfo);

  const ProductName = (props) => {
    console.log(props.length);
    setFinalProductName(props);
    setProductNameLength(props.length);
  };

  const ProductPrice = (props) => {
    setFinalProductPrice(props);
  };

  const ProductOffer = (props) => {
    setFinalProductOffer(props);
  };

  const ProductCategory = (props) => {
    console.log(props);
    setFinalProductCategory(props);
  };

  const ProductDescription = (props) => {
    setFinalProductDescription(props);
  };

  // add tag
  const addTag = (props) => {
    if (tag != "") {
      console.log(tag);

      setTagArray([...tagArray, tag]);
      setTag("");
    }
  };

  const dltTag = (props) => {
    const filTag = tagArray.filter((ftag) => ftag != props);

    setTagArray(filTag);
  };

  console.log(tagArray);

  const cancel = () => {
    window.location.reload(false);
  };

  // category

  const [category, sstcategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
    )
      .then((response) => response.json())
      .then((json) => {
        sstcategory(json);
        console.log("tyhis is catttttttt :;;  ", json);
      });
  }, []);

  const [resourceImageUrl, setResourceImageUrl] = useState("");

  const [resourceImageUrlArray, setResourceImageUrlArray] = useState([]);

  useEffect(() => {
    if (!resourceImageUrl.length === false) {
      //let rowData = resourceImageUrl.slice(1, -1);

      setResourceImageUrlArray(resourceImageUrl.split("\n"));
    } else {
      setResourceImageUrlArray([]);
    }
  }, [resourceImageUrl]);

  console.log("this is filter image array : ", !resourceImageUrlArray.length);

  return (
    <AlllllProductInfoContext.Provider
      value={[AlOverProductInfoContext, setAlOverProductInfoContext]}
    >
      <AllAboutProductBack
        className="p-2
      "
      >
        <div>
          <span className="" style={{ fontSize: "24px", fontWeight: "bold" }}>
            Add Product
          </span>
        </div>
        <div
          className="mt-3 p-2"
          style={{ border: "2px solid #fec400", borderRadius: "10px" }}
        >
          <div>
            <div className="w-100">
              <div className="">
                <div class="d-flex justify-content-between">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div class="mb-3">
                        <label for="productName" class="form-label">
                          Name
                        </label>

                        <textarea
                          type="text"
                          class="form-control"
                          onChange={(e) => ProductName(e.target.value)}
                          id="productName"
                          placeholder="product's name"
                          style={{ width: "420px" }}
                        />
                        {/* <div class="d-flex flex-row-reverse bd-highlight">
                      <label
                        for="productName"
                        class="form-label"
                        style={{ fontSize: "10px", color: "red" }}
                      >
                        maximum name length {productNameLength}/30
                      </label>
                    </div> */}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-2">
                      <div>
                        <label for="productPrice" class="form-label">
                          Price (main*)
                        </label>
                        <div
                          class="input-group mb-3"
                          style={{ height: "30px" }}
                        >
                          <span class="input-group-text">SAR</span>
                          <input
                            type="number"
                            onChange={(e) => ProductPrice(e.target.value)}
                            placeholder="50"
                            class="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-2">
                      <div>
                        <label for="productOffer" class="form-label">
                          Offer (optional*)
                        </label>
                        <div
                          class="input-group mb-3"
                          style={{ height: "30px" }}
                        >
                          <span class="input-group-text">SAR</span>
                          <input
                            placeholder="60"
                            onChange={(e) => ProductOffer(e.target.value)}
                            type="number"
                            class="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-2">
                      <div>
                        <label for="productName" class="form-label">
                          Category
                        </label>
                        <select
                          onChange={(e) => ProductCategory(e.target.value)}
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Category</option>
                          {category.map((ca) => (
                            <option value={ca.postCa}>{ca.postCa}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-2">
                      <div>
                        <label for="productStock" class="form-label">
                          Product in stock
                        </label>
                        <div
                          onClick={() =>
                            isSizeShow === false &&
                            setFinalProductStock(!FinalProductStock)
                          }
                          class="input-group mb-3"
                          style={{
                            height: "37px",
                            backgroundColor: `${
                              FinalProductStock === true ? "lime" : "red"
                            }`,
                            userSelect: "none",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            fontWeight: "bold",
                            color: `${
                              FinalProductStock === true ? "#0d6efd" : "white"
                            }`,
                            cursor: "pointer",
                          }}
                        >
                          <span>Stock</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-12-col-md-6 col-lg-6">
                    <div
                      className=""
                      style={{
                        borderRadius: "5px",
                        border: "1px solid #FEC400",
                        padding: "5px",
                      }}
                    >
                      <div className="d-flex">
                        <div className="">
                          <label for="productName" class="form-label">
                            <span style={{ color: "#FEC400" }}>
                              {ProductBrandOptionName}
                            </span>{" "}
                            (optional*)
                          </label>
                        </div>

                        <div className="d-flex mx-3">
                          <div>
                            <div class="form-check ">
                              <input
                                onClick={() => setIsProductBrand(true)}
                                class="form-check-input"
                                type="radio"
                                name="setIsProductBrand"
                              />
                              <label class="form-check-label">On</label>
                            </div>
                          </div>
                          <div className="mx-2">
                            <div class="form-check">
                              {isProductBrand === false ? (
                                <input
                                  onClick={() => setIsProductBrand(false)}
                                  class="form-check-input"
                                  type="radio"
                                  name="setIsProductBrand"
                                  checked
                                />
                              ) : (
                                <input
                                  onClick={() => setIsProductBrand(false)}
                                  class="form-check-input"
                                  type="radio"
                                  name="setIsProductBrand"
                                />
                              )}

                              <label class="form-check-label">Off</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {isProductBrand === true && (
                        <div>
                          <div class="">
                            <div className="row mb-3">
                              <div className="col-7">
                                <input
                                  className="form-control"
                                  type="text"
                                  onChange={(e) =>
                                    setProductBrandOptionName(e.target.value)
                                  }
                                  value={ProductBrandOptionName}
                                />
                              </div>
                              <div className="col-5">
                                <div className="d-flex justify-content-around">
                                  <Button
                                    style={{
                                      backgroundColor: "#FEC400",
                                      boxShadow: "none",
                                    }}
                                    variant="contained"
                                    onClick={() =>
                                      setProductBrandOptionName("Brand")
                                    }
                                  >
                                    Brand
                                  </Button>
                                  <Button
                                    style={{
                                      backgroundColor: "#FEC400",
                                      boxShadow: "none",
                                    }}
                                    variant="contained"
                                    onClick={() =>
                                      setProductBrandOptionName("Company")
                                    }
                                  >
                                    Company
                                  </Button>
                                  <Button
                                    style={{
                                      backgroundColor: "#FEC400",
                                      boxShadow: "none",
                                    }}
                                    variant="contained"
                                    onClick={() =>
                                      setProductBrandOptionName("Country")
                                    }
                                  >
                                    Country
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="mb-3">
                                <label for="BrandName" class="form-label">
                                  Name :
                                </label>

                                <div class="input-group mb-3">
                                  <input
                                    id="BrandName"
                                    onChange={(e) =>
                                      setProductBrandName(e.target.value)
                                    }
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="mb-3">
                                <label for="BrandLink" class="form-label">
                                  Link
                                </label>

                                <div class="input-group mb-3">
                                  <input
                                    id="BrandLink"
                                    onChange={(e) =>
                                      setProductBrandOptionLink(e.target.value)
                                    }
                                    type="text"
                                    class="form-control"
                                    placeholder="Optional"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-12-col-md-6 col-lg-6">
                    {" "}
                    <div
                      className=""
                      style={{
                        borderRadius: "5px",
                        border: "1px solid #FEC400",
                        padding: "5px",
                      }}
                    >
                      <div className="d-flex">
                        <div className="">
                          <label for="productName" class="form-label">
                            <span style={{ color: "#FEC400" }}>
                              {ProductImportantInfoName}
                            </span>{" "}
                            (optional*)
                          </label>
                        </div>

                        <div className="d-flex mx-3">
                          <div>
                            <div class="form-check ">
                              <input
                                onClick={() => setIsProductImportantInfo(true)}
                                class="form-check-input"
                                type="radio"
                                name="isProductImportantInfo"
                              />
                              <label class="form-check-label">On</label>
                            </div>
                          </div>
                          <div className="mx-2">
                            <div class="form-check">
                              {isProductImportantInfo === false ? (
                                <input
                                  onClick={() =>
                                    setIsProductImportantInfo(false)
                                  }
                                  class="form-check-input"
                                  type="radio"
                                  name="isProductImportantInfo"
                                  checked
                                />
                              ) : (
                                <input
                                  onClick={() =>
                                    setIsProductImportantInfo(false)
                                  }
                                  class="form-check-input"
                                  type="radio"
                                  name="isProductImportantInfo"
                                />
                              )}

                              <label class="form-check-label">Off</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {isProductImportantInfo === true && (
                        <div>
                          <div class="">
                            <div className="row mb-3">
                              <div className="col-7">
                                <input
                                  className="form-control"
                                  type="text"
                                  onChange={(e) =>
                                    setProductImportantInfoName(e.target.value)
                                  }
                                  value={ProductImportantInfoName}
                                />
                              </div>
                              <div className="col-5">
                                <div className="d-flex justify-content-around">
                                  <Button
                                    style={{
                                      backgroundColor: "#FEC400",
                                      boxShadow: "none",
                                    }}
                                    variant="contained"
                                    onClick={() =>
                                      setProductImportantInfoName(
                                        "Important information"
                                      )
                                    }
                                  >
                                    Important information
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div class="mb-3">
                                <label for="importantInfo" class="form-label">
                                  Information
                                </label>

                                <div class="input-group mb-3">
                                  <textarea
                                    id="importantInfo"
                                    onChange={(e) =>
                                      setProductImportantInfoText(
                                        e.target.value
                                      )
                                    }
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <div>
                                  <span>
                                    <b>Preview</b>{" "}
                                  </span>
                                </div>

                                <div className="d-flex justify-content-end">
                                  <div className=" d-flex align-items-center mx-1">
                                    <div>
                                      <span>Title :</span>
                                    </div>

                                    <div>
                                      <input
                                        onChange={(e) => {
                                          setProductImportantInfoTitleColor(
                                            e.target.value
                                          );
                                        }}
                                        type="color"
                                        value={ProductImportantInfoTitleColor}
                                        style={{
                                          border: "none",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className=" d-flex align-items-center mx-1">
                                    <div>
                                      <span>Content :</span>
                                    </div>

                                    <div>
                                      <input
                                        onChange={(e) => {
                                          setProductImportantInfoContentColor(
                                            e.target.value
                                          );
                                        }}
                                        type="color"
                                        value={ProductImportantInfoContentColor}
                                        style={{
                                          border: "none",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className=" d-flex align-items-center mx-1">
                                    <div>
                                      <span>Background :</span>
                                    </div>

                                    <div>
                                      <input
                                        onChange={(e) => {
                                          setProductImportantInfoBackgroundColor(
                                            e.target.value
                                          );
                                        }}
                                        type="color"
                                        value={
                                          ProductImportantInfoBackgroundColor
                                        }
                                        style={{
                                          border: "none",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  borderRadius: "5px",
                                  border: "1px solid #FEC400",
                                  padding: "5px",
                                }}
                              >
                                <div>
                                  <span
                                    style={{
                                      color: ProductImportantInfoTitleColor,
                                    }}
                                  >
                                    {ProductImportantInfoName} :{" "}
                                  </span>{" "}
                                </div>
                                <div
                                  style={{
                                    marginLeft: "10px",
                                    fontSize: "13px",
                                    backgroundColor:
                                      ProductImportantInfoBackgroundColor,
                                    borderRadius: "5px",
                                    padding: "5px",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: ProductImportantInfoContentColor,
                                    }}
                                  >
                                    {ProductImportantInfoText}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* {Description and more details} */}

                <DescriptionAndMoreDetails
                  resourceImageUrlArray={resourceImageUrlArray}
                  productDescriptionName={productDescriptionName}
                  setIsProductDescription={setIsProductDescription}
                  isProductDescription={isProductDescription}
                  setProductDescriptionName={setProductDescriptionName}
                  setFinalProductDescription={setFinalProductDescription}
                  productMoreDetailsMainImageUrl={
                    productMoreDetailsMainImageUrl
                  }
                  setProductMoreDetailsMainImageUrl={
                    setProductMoreDetailsMainImageUrl
                  }
                  setProductMoreDetailsImageName={
                    setProductMoreDetailsImageName
                  }
                  IsProductMoreDetailsImage={IsProductMoreDetailsImage}
                  productMoreDetailsImageName={productMoreDetailsImageName}
                  setIsProductMoreDetailsImageName={
                    setIsProductMoreDetailsImageName
                  }
                ></DescriptionAndMoreDetails>

                <div className="row mt-2 mb-2">
                  <div className="col-6">
                    <iframe
                      src="https://bulkimagecrop.com/"
                      width={"100%"}
                      height={"500"}
                      alt="demo"
                      title="crop"
                    ></iframe>
                  </div>
                  <div className="col-3">
                    <div style={{ fontSize: "12px" }}>
                      <div
                        className="p-1"
                        style={{
                          backgroundColor: "rgba(249, 213, 90, 0.13)",
                          borderRadius: "5px",
                        }}
                      >
                        <div>
                          <span>Image size must be square!!!</span>
                        </div>
                        <div>
                          <span>
                            Recommended - (1080px X 1080px) (1600px X 1600px)
                          </span>
                        </div>
                      </div>
                      <div
                        className="p-1 mt-2"
                        style={{
                          backgroundColor: "rgba(249, 213, 90, 0.13)",
                          borderRadius: "5px",
                        }}
                      >
                        <span>
                          Image uploading <strong>imgbb.com</strong>
                        </span>
                      </div>
                    </div>
                    <div class="mb-3 mt-2">
                      <label for="inputImage" class="form-label">
                        Paste <b>urls</b> (Direct Links)
                      </label>
                      <textarea
                        onBlur={(e) => setResourceImageUrl(e.target.value)}
                        style={{ height: "360px", backgroundColor: "#FEFAEA" }}
                        class="form-control"
                        id="inputImage"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-3 ">
                    <div className="p-1">
                      <span>
                        <b>Preview</b> (Product's Image){" "}
                      </span>
                      <hr />
                      <div className="row">
                        {!resourceImageUrlArray.length === false &&
                          resourceImageUrlArray.map((dt) => (
                            <div
                              className="col-3 p-1"
                              style={{ padding: "0px", margin: "0px" }}
                            >
                              <div>
                                <img
                                  style={{ width: "100%", borderRadius: "5px" }}
                                  src={dt}
                                  alt="error"
                                />
                              </div>
                              <div className="mt-1 d-flex justify-content-center">
                                <Button
                                  style={{
                                    backgroundColor: "red",
                                    color: "white",
                                  }}
                                  size="small"
                                  variant="outlined"
                                  color="error"
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div
                  className=" p-2 mt-2"
                  style={{ border: "1px solid #FEC400", borderRadius: "5px" }}
                >
                  <div className="p-1">
                    <span>Resources</span>
                    <hr />
                    <div className="row">
                      {!resourceImageUrlArray.length === false &&
                        resourceImageUrlArray.map((dt) => (
                          <div
                            className="col-4 p-1"
                            style={{ padding: "0px", margin: "0px" }}
                          >
                            <div>
                              <img
                                style={{ width: "100%", borderRadius: "5px" }}
                                src={dt}
                                alt="error"
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </StickyBox>
            </div>

            <div className="col-10">
              <div>
                <AddProductReDesign
                  setIsColor={setIsColor}
                  AllProInfo={AllInfo}
                  demo={picSubmit}
                ></AddProductReDesign>
              </div>
            </div>
          </div>

          <div
            className="mt-3 p-2"
            style={{ border: "2px solid #fec400", borderRadius: "10px" }}
          >
            {" "}
            <div className="row">
              <div className="col">
                <div class="mb-3">
                  <label for="addTags" class="form-label">
                    Add Tags
                  </label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="add tags..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) => setTag(e.target.value)}
                      // onKeyPress={handleKeypress}
                      onKeyUp={handleKeypress}
                      value={tag}
                    />
                    <button
                      type="button"
                      class="btn btn-warning"
                      onClick={() => addTag()}
                    >
                      Add
                    </button>
                  </div>
                  <div id="emailHelp" class="form-text">
                    This tag for searching for a Product
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div
                  className=" p-2"
                  style={{
                    overflow: "scroll",
                    border: "2px solid #fec400",
                    borderRadius: "10px",
                    backgroundColor: "#f9d55a21",
                    height: "470px",
                  }}
                >
                  {tagArray.map((singleTag) => (
                    <div
                      className="p-1 m-1"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        display: "inline-block",
                      }}
                    >
                      <span>{singleTag}</span>
                      <div
                        style={{
                          fontSize: "14px",
                          padding: "0px 5px",
                          display: "inline-block",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          onClick={() => dltTag(singleTag)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col">
                <ImgCarousel
                  AlOverProductInfoContext={AlOverProductInfoContext}
                  AllInfo={AllInfo}
                ></ImgCarousel>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div
              className="row pt-2 pb-3"
              style={{ border: "2px solid #fec400", borderRadius: "10px" }}
            >
              <div className="col-2">
                <div class="pb-2">
                  <span>Product Size</span>
                </div>
                <Button
                  className=" p-2"
                  style={{
                    backgroundColor: `${isSizeShow ? "#fec400" : "#dc3545"}`,
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                    transition: "1s",
                    color: `${isSizeShow ? "black" : "white"}`,
                  }}
                  onClick={() => setIsSizeShow(!isSizeShow)}
                  variant="contained"
                >
                  {" "}
                  <b>{isSizeShow ? "On" : "Off"}</b>
                </Button>
              </div>

              <div
                className="col-3"
                style={{ display: `${isSizeShow ? "block" : "none"}` }}
              >
                <div class="">
                  <span>Add Product Size</span>
                </div>
                <div className="pt-2">
                  <input
                    className="p-2"
                    type="text"
                    placeholder="size..."
                    name="size"
                    onKeyUp={handleSizeKeypress}
                    onChange={(e) => {
                      setInputOneSize(e.target.value.toUpperCase());
                    }}
                    value={inputOneSize}
                    id="size"
                    style={{
                      borderRadius: "5px",
                      border: ".5px solid #ced4da",
                      width: "100%",
                    }}
                  />
                </div>
                <div class=" pt-2 d-flex justify-content-between">
                  <div>
                    <Button
                      className="px-2 p-2"
                      onClick={() => setInputOneSize("")}
                      style={{
                        backgroundColor: `#dc3545`,
                        borderRadius: "5px",
                        cursor: "pointer",

                        textAlign: "center",
                        transition: "1s",
                        color: `white`,
                      }}
                      variant="contained"
                    >
                      cancel
                    </Button>
                  </div>
                  <div>
                    <Button
                      className=" px-2 p-2"
                      onClick={() => inputSizeBtn()}
                      style={{
                        backgroundColor: `${isSizeShow ? "#fec400" : "red"}`,
                        borderRadius: "5px",
                        cursor: "pointer",

                        textAlign: "center",
                        transition: "1s",
                        color: `${isSizeShow ? "black" : "white"}`,
                      }}
                      variant="contained"
                    >
                      add
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="col-7"
                style={{ display: `${isSizeShow ? "block" : "none"}` }}
              >
                <div
                  className=" p-2"
                  style={{
                    overflow: "scroll",
                    border: "2px solid #fec400",
                    borderRadius: "10px",
                    backgroundColor: "#f9d55a21",
                    height: "150px",
                  }}
                >
                  {inputAllSize.map((sz) => (
                    <div
                      className="p-1 m-1"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        display: "inline-block",
                      }}
                    >
                      <span>{sz}</span>
                      <div
                        onClick={() => deleteSizeBtn(sz)}
                        style={{
                          fontSize: "14px",
                          padding: "0px 5px",
                          display: "inline-block",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-between mt-3 p-2"
          style={{ border: "2px solid #fec400", borderRadius: "10px" }}
        >
          {" "}
          <button className="btn btn-danger" onClick={() => cancel()}>
            Cancel
          </button>
          <button
            className="btn btn-warning"
            style={{ backgroundColor: "rgb(254, 196, 0)" }}
            onClick={() => submit()}
          >
            Submit
          </button>
        </div>
        <div
          className="d-flex justify-content-center mt-3 p-2"
          style={{
            border: "2px solid #fec400",
            borderRadius: "10px",
            display: `${gloError.err === true ? "block" : "none"}`,
          }}
        >
          <div
            class=" p-2 alert-danger d-flex align-items-center"
            role="alert"
            style={{
              display: `${gloError.err === true ? "block" : "none"}`,
              borderRadius: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
              style={{
                display: `${gloError.err === true ? "block" : "none"}`,
              }}
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>{gloError.msg}</div>
          </div>
        </div>
      </AllAboutProductBack>
    </AlllllProductInfoContext.Provider>
  );
}

const AllAboutProductBack = styled.div`
  .ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable,
  .ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
    height: 500px;
  }
  /* 
  .DescriptionNoteStyle {
    .image img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      min-width: 100%;
    }

    .image-style-side {
      float: right;
      margin-left: var(--ck-image-style-spacing);
      max-width: 50%;
    }
  } */

  /* .DescriptionNoteStyle .image img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    min-width: 100%;
  }
  .DescriptionNoteStyle .image-style-side {
    float: right;
    margin-left: var(--ck-image-style-spacing);
    max-width: 50%;
  }

  .image-inline .ck-widget .ck-widget_selected {
    align-items: flex-start;
    display: inline-flex;
    max-width: 100%;
  }

  .DescriptionNoteStyle img {
    width: 100%;
  }

  .DescriptionNoteStyle figcaption {
    background-color: var(--ck-color-image-caption-background);
    caption-side: bottom;
    color: var(--ck-color-image-caption-text);
    display: table-caption;
    font-size: 0.75em;
    outline-offset: -1px;
    padding: 0.6em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;
