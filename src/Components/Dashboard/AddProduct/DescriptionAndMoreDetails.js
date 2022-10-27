import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import { Button } from "@mui/material";
import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import styled from "styled-components";

export default function DescriptionAndMoreDetails({
  productDescriptionName,
  setIsProductDescription,
  isProductDescription,
  setProductDescriptionName,
  setFinalProductDescription,
  productMoreDetailsMainImageUrl,
  setProductMoreDetailsMainImageUrl,
  setProductMoreDetailsImageName,
  IsProductMoreDetailsImage,
  productMoreDetailsImageName,
  resourceImageUrlArray,
  setIsProductMoreDetailsImageName,
}) {
  const [drawer, setDrawer] = useState(false);

  return (
    <DescriptionAndMoreDetailsBack>
      <div className="row">
        <div
          className={
            drawer ? "col-sm-5 col-md-6 col-lg-6" : "col-sm-6 col-md-6 col-lg-6"
          }
        >
          <div
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
                    {productDescriptionName}
                  </span>{" "}
                  (optional*)
                </label>
              </div>

              <div className="d-flex mx-3">
                <div>
                  <div class="form-check ">
                    <input
                      onClick={() => setIsProductDescription(true)}
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                    />
                    <label class="form-check-label">On</label>
                  </div>
                </div>
                <div className="mx-2">
                  <div class="form-check">
                    {isProductDescription === false ? (
                      <input
                        onClick={() => setIsProductDescription(false)}
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        checked
                      />
                    ) : (
                      <input
                        onClick={() => setIsProductDescription(false)}
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                      />
                    )}

                    <label class="form-check-label">Off</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description */}

            {isProductDescription === true && (
              <div class="">
                <div className="row mb-3">
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setProductDescriptionName(e.target.value)
                      }
                      value={productDescriptionName}
                    />
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-around">
                      <Button
                        style={{
                          backgroundColor: "#FEC400",
                          boxShadow: "none",
                        }}
                        variant="contained"
                        onClick={() => setProductDescriptionName("Description")}
                      >
                        Description
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "#FEC400",
                          boxShadow: "none",
                        }}
                        variant="contained"
                        onClick={() => setProductDescriptionName("Details")}
                      >
                        Details
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "#FEC400",
                          boxShadow: "none",
                        }}
                        variant="contained"
                        onClick={() =>
                          setProductDescriptionName("Specifications")
                        }
                      >
                        Specifications
                      </Button>
                    </div>
                  </div>
                </div>

                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setFinalProductDescription(data);
                  }}
                />

                {/* <textarea
                        onChange={(e) => ProductDescription(e.target.value)}
                        class="form-control"
                        aria-label="With textarea"
                        ></textarea> */}
              </div>
            )}
          </div>
        </div>

        <div
          style={{ padding: "0px", margin: "0px" }}
          className={
            drawer ? "col-sm-5 col-md-4 col-lg-4" : "col-sm-5 col-md-5 col-lg-5"
          }
        >
          <div
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
                    {productMoreDetailsImageName}
                  </span>{" "}
                  (optional*)
                </label>
              </div>

              <div className="d-flex mx-3">
                <div>
                  <div class="form-check ">
                    <input
                      onClick={() => setIsProductMoreDetailsImageName(true)}
                      class="form-check-input"
                      type="radio"
                      name="setIsProductMoreDetailsImageName"
                    />
                    <label class="form-check-label">On</label>
                  </div>
                </div>
                <div className="mx-2">
                  <div class="form-check">
                    {IsProductMoreDetailsImage === false ? (
                      <input
                        onClick={() => setIsProductMoreDetailsImageName(false)}
                        class="form-check-input"
                        type="radio"
                        name="setIsProductMoreDetailsImageName"
                        checked
                      />
                    ) : (
                      <input
                        onClick={() => setIsProductMoreDetailsImageName(false)}
                        class="form-check-input"
                        type="radio"
                        name="setIsProductMoreDetailsImageName"
                      />
                    )}

                    <label class="form-check-label">Off</label>
                  </div>
                </div>
              </div>
            </div>

            {IsProductMoreDetailsImage === true && (
              <div class="">
                <div className="row mb-3">
                  <div className="col-8">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setProductMoreDetailsImageName(e.target.value)
                      }
                      value={productMoreDetailsImageName}
                    />
                  </div>
                  <div className="col-4">
                    <div className="d-flex justify-content-around">
                      <Button
                        style={{
                          backgroundColor: "#FEC400",
                          boxShadow: "none",
                        }}
                        variant="contained"
                        onClick={() =>
                          setProductMoreDetailsImageName("More Details")
                        }
                      >
                        More Details
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="mb-3">
                    <label for="setMoreUrl" class="form-label">
                      Image Link
                    </label>

                    <div class="input-group mb-3">
                      <input
                        id="setMoreUrl"
                        onBlur={(e) =>
                          setProductMoreDetailsMainImageUrl(e.target.value)
                        }
                        type="text"
                        class="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        style={{
                          backgroundColor: "#FFDE4D",
                          color: "white",
                          border: "1px solid #FFDE4D",
                        }}
                      >
                        Submit
                      </button>
                    </div>

                    <div id="emailHelp" class="form-text">
                      Image uploading{" "}
                      <a
                        target="_blank"
                        href="https://imgbb.com/"
                        rel="noreferrer"
                      >
                        WEBSITE
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  <img
                    style={{ width: "100%" }}
                    src={productMoreDetailsMainImageUrl}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={
            drawer
              ? "px-2 col-sm-2 col-md-2 col-lg-2  "
              : " px-2  animationTR col-sm-1 col-md-1 col-lg-1 "
          }
        >
          <StickyBox offsetTop={20} offsetBottom={20}>
            {!drawer && (
              <div className="d-flex">
                <div>
                  <AutoAwesomeMosaicIcon
                    onClick={() => setDrawer(!drawer)}
                    className="iconColor"
                  ></AutoAwesomeMosaicIcon>
                </div>
              </div>
            )}

            {drawer && (
              <div
                className="p-2"
                style={{
                  backgroundColor: "rgb(255 240 190)",
                  borderRadius: "5px",
                }}
              >
                <div>
                  <div className="d-flex">
                    <div>
                      <ArrowRightAltIcon
                        style={{
                          backgroundColor: "#fefaea",
                          borderRadius: "5px",
                        }}
                        onClick={() => setDrawer(!drawer)}
                        className="iconColor mb-2"
                      ></ArrowRightAltIcon>
                    </div>

                    <div
                      className="mx-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => setDrawer(!drawer)}
                    >
                      {" "}
                      <span>Resources</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <span>
                      <b>Banner Image</b>{" "}
                    </span>
                    <div className="d-flex justify-content-center">
                      <span>--Not Found--</span>
                    </div>
                  </div>
                  <div>
                    <span>
                      <b>Details Image</b>{" "}
                    </span>
                    <div className="d-flex justify-content-center">
                      <span>--Not Found--</span>
                    </div>
                  </div>
                  <div>
                    <span>
                      <b>Product image</b>{" "}
                    </span>
                    <div className="d-flex justify-content-center p-1">
                      <div className="row">
                        {!resourceImageUrlArray.length === false ? (
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
                          ))
                        ) : (
                          <span>--Not Found--</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </StickyBox>
        </div>
      </div>
    </DescriptionAndMoreDetailsBack>
  );
}

const DescriptionAndMoreDetailsBack = styled.div`
  .animationTR {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconColor {
    color: red;
    cursor: pointer;
  }
`;
