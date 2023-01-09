import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import ResourceSection from "../CarouselSection/ResourceSection";

export default function SwipeableCarouselComponents() {
  // all data from db
  const [allDbData, setAllDbData] = useState([]);

  // edit
  const [edit, setEdit] = useState(false);

  // db id
  const [dbId, setDbId] = useState("");

  // name
  const [name, setName] = useState("");

  // id
  const [id, setId] = useState(Math.floor(1000 + Math.random() * 9000));

  // box design
  const [boxBgClr, setBoxBgCrl] = useState("");
  const [boxBorRa, setBoxBorRa] = useState("");
  const [boxMt, setBoxMt] = useState("");
  const [boxMb, setBoxMb] = useState("");
  const [boxPt, setBoxPt] = useState("");
  const [boxPb, setBoxPb] = useState("");
  const [boxShowMobileDevice, setBoxShowMobileDevice] = useState("");
  const [boxShowDesktopDevice, setBoxShowDesktopDevice] = useState("");

  // box title design
  const [boxTitle, setBoxTitle] = useState("");
  const [boxTitleBtnTxt, setBoxTitleBtnTxt] = useState("");
  const [boxTitleBtnClr, setBoxTitleBtnClr] = useState("");
  const [boxTitleMt, setBoxTitleMt] = useState("");
  const [boxTitleMb, setBoxTitleMb] = useState("");
  const [boxTitlePt, setBoxTitlePt] = useState("");
  const [boxTitlePb, setBoxTitlePb] = useState("");

  // box image design
  const [boxMobileView, setBoxMobileView] = useState("");
  const [boxDesktopView, setBoxDesktopView] = useState("");
  const [boxTitleImageMt, setBoxTitleImageMt] = useState("");
  const [boxTitleImageMb, setBoxTitleImageMb] = useState("");
  const [boxTitleImagePt, setBoxTitleImagePt] = useState("");
  const [boxTitleImagePb, setBoxTitleImagePb] = useState("");

  // title image and btn target
  const [titleImageBtnTarget, setTitleImageBtnTarget] = useState("");

  //upload product image
  const [uploadProduct, setUploadProduct] = useState("");
  const [uploadProductTarget, setUploadProductTarget] = useState("");
  const [allUploadProduct, setAllUploadProduct] = useState([]);

  // mobile poster url
  const [mobilePosterUrl, setMobilePosterUrl] = useState("");

  // desktop poster url
  const [desktopPosterUrl, setDesktopPosterUrl] = useState("");

  // target for image
  const [target, setTarget] = useState("");

  // submit btn
  const submitBtn = () => {
    if (!allUploadProduct.length === false) {
      const componentsSection = {
        type: "SwipeableCarousel",
        id: id,
        Name: name,
        boxBgClr: boxBgClr,
        boxBorRa: boxBorRa,
        boxMt: boxMt,
        boxMb: boxMb,
        boxPt: boxPt,
        boxPb: boxPb,
        boxShowMobileDevice: boxShowMobileDevice,
        boxShowDesktopDevice: boxShowDesktopDevice,
        boxTitle: boxTitle,
        boxTitleBtnTxt: boxTitleBtnTxt,
        boxTitleBtnClr: boxTitleBtnClr,
        boxTitleMt: boxTitleMt,
        boxTitleMb: boxTitleMb,
        boxTitlePt: boxTitlePt,
        boxTitlePb: boxTitlePb,
        boxMobileView: boxMobileView,
        boxDesktopView: boxDesktopView,
        boxTitleImageMt: boxTitleImageMt,
        boxTitleImageMb: boxTitleImageMb,
        boxTitleImagePt: boxTitleImagePt,
        boxTitleImagePb: boxTitleImagePb,
        titleImageBtnTarget: titleImageBtnTarget,
        link: allUploadProduct,
      };

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneSwipeableCarousel",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            componentsSection: componentsSection,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          clear();
          readData();
        })
        .catch((error) => {
          console.error("Error:", error);
          // readData();
        });
    }
  };

  // clear all data
  const clear = () => {
    setId(Math.floor(1000 + Math.random() * 9000));
    setBoxBgCrl("");
    setBoxBorRa("");
    setName("");
    setBoxMt("");
    setBoxMb("");
    setBoxPt("");
    setBoxPb("");
    setBoxShowMobileDevice("");
    setBoxShowDesktopDevice("");
    setBoxTitle("");
    setBoxTitleBtnTxt("");
    setBoxTitleBtnClr("");
    setBoxTitleMt("");
    setBoxTitleMb("");
    setBoxTitlePt("");
    setBoxTitlePb("");
    setBoxMobileView("");
    setBoxDesktopView("");
    setBoxTitleImageMt("");
    setBoxTitleImageMb("");
    setBoxTitleImagePt("");
    setBoxTitleImagePb("");
    setTitleImageBtnTarget("");
    setUploadProduct("");
    setAllUploadProduct([]);
  };

  useEffect(() => {
    readData();
  }, []);

  const readData = () => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadSwipeableCarousel"
    )
      .then((response) => response.json())
      .then((json) => {
        setAllDbData(json);
        console.log("345 ", json);
      });
  };

  useEffect(() => {
    readData();
  }, []);

  // delete from db
  const deleteDb = (props) => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneDeleteSwipeableCarousel",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: props.id }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        readData();
        if (props.edit === true) {
          clear();
          setEdit(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // cancel Btn
  const cancelBtn = () => {
    clear();
    setEdit(false);
  };

  // save edit
  const saveEdit = () => {
    if (!allUploadProduct.length === false) {
      const componentsSection = {
        dbId: dbId,
        type: "SwipeableCarousel",
        id: id,
        Name: name,
        boxBgClr: boxBgClr,
        boxBorRa: boxBorRa,
        boxMt: boxMt,
        boxMb: boxMb,
        boxPt: boxPt,
        boxPb: boxPb,
        boxShowMobileDevice: boxShowMobileDevice,
        boxShowDesktopDevice: boxShowDesktopDevice,
        boxTitle: boxTitle,
        boxTitleBtnTxt: boxTitleBtnTxt,
        boxTitleBtnClr: boxTitleBtnClr,
        boxTitleMt: boxTitleMt,
        boxTitleMb: boxTitleMb,
        boxTitlePt: boxTitlePt,
        boxTitlePb: boxTitlePb,
        boxMobileView: boxMobileView,
        boxDesktopView: boxDesktopView,
        boxTitleImageMt: boxTitleImageMt,
        boxTitleImageMb: boxTitleImageMb,
        boxTitleImagePt: boxTitleImagePt,
        boxTitleImagePb: boxTitleImagePb,
        titleImageBtnTarget: titleImageBtnTarget,
        link: allUploadProduct,
      };

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneReadSwipeableCarouselUpdate",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            componentsSection: componentsSection,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          clear();
          readData();
          setEdit(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          // readData();
        });
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className="p-2">
            <div class="pt-2 d-flex justify-content-between">
              {" "}
              <div>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Swipeable Carousel
                </span>
              </div>
            </div>

            <div
              className="mt-2 p-2"
              style={{ border: "3px solid #fec400", borderRadius: "10px" }}
            >
              <div className="row">
                <div className="col-8">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <div>
                      <div className="">
                        {edit ? (
                          <div className=" mt-3 p-2 d-flex justify-content-between">
                            <Button
                              onClick={() => deleteDb({ id: dbId, edit: true })}
                              style={{ backgroundColor: "red", color: "white" }}
                              variant="contained"
                            >
                              Delete
                            </Button>
                            <Button
                              onClick={() => cancelBtn()}
                              style={{
                                backgroundColor: "#FEC400",
                                color: "black",
                              }}
                              variant="contained"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={() => saveEdit()}
                              style={{
                                backgroundColor: "#FEC400",
                                color: "black",
                              }}
                              variant="contained"
                            >
                              Save Edit
                            </Button>
                          </div>
                        ) : (
                          <div class="d-flex flex-row-reverse">
                            <div class="p-2 mb-3">
                              {" "}
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: "#FEC400",
                                  color: "black",
                                }}
                                onClick={() => {
                                  name !== "" && submitBtn("");
                                }}
                              >
                                Create New Swipeable Component
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className="mt-2 p-2"
                        style={{
                          border: "2px solid #fec400",
                          borderRadius: "10px",
                        }}
                      >
                        <div
                          className="container mt-2 px-0"
                          style={{ borderRadius: "10px" }}
                        >
                          <img
                            class="img-fluid"
                            src="https://i.ibb.co/YTtXS7N/screenshot-localhost-3000-2022-11-25-19-46-28.png"
                            alt=""
                            srcset=""
                          />
                        </div>
                      </div>

                      {/* preview  */}

                      <div></div>

                      <div
                        className="mt-2 p-2"
                        style={{
                          border: "3px solid #fec400",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="mb-2 d-flex justify-content-center">
                          <h5>Banner Upload</h5>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div>
                              <div>
                                <span>Name</span>
                              </div>
                              <div>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div>
                              <div>
                                <span>Id</span>
                              </div>
                              <div>
                                <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    onChange={(e) => setId(e.target.value)}
                                    value={id}
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div
                              className="mt-2 p-2"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="d-flex justify-content-center">
                                <div className="d-flex justify-content-center">
                                  <h5>Box Design</h5>
                                </div>{" "}
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  <div>
                                    <span>Bg Clr</span>
                                  </div>
                                  <div>
                                    <input
                                      type="color"
                                      name=""
                                      id=""
                                      onChange={(e) =>
                                        setBoxBgCrl(e.target.value)
                                      }
                                      value={boxBgClr}
                                      style={{
                                        width: "100%",
                                        borderRadius: "5px",
                                        border: "none",
                                        height: "39px",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>Bor.. Ra..</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      onChange={(e) =>
                                        setBoxBorRa(e.target.value)
                                      }
                                      value={boxBorRa}
                                      max="20"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>Show Mobile Device</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="20"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxShowMobileDevice(e.target.value)
                                      }
                                      value={boxShowMobileDevice}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>Show Desktop Device</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="20"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxShowDesktopDevice(e.target.value)
                                      }
                                      value={boxShowDesktopDevice}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  {" "}
                                  <div>
                                    <span>MT</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) => setBoxMt(e.target.value)}
                                      value={boxMt}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>MB</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) => setBoxMb(e.target.value)}
                                      value={boxMb}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>PT</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) => setBoxPt(e.target.value)}
                                      value={boxPt}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>PB</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) => setBoxPb(e.target.value)}
                                      value={boxPb}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div
                              className="mt-2 p-2"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="d-flex justify-content-center"></div>
                              <div className="row">
                                <div className="d-flex justify-content-center">
                                  <h5>
                                    Title Design{" "}
                                    <span
                                      style={{
                                        color: "gray",
                                        fontSize: "13px",
                                      }}
                                    >
                                      (optional)
                                    </span>{" "}
                                  </h5>
                                </div>{" "}
                                <div className="col-6">
                                  <div>
                                    <span>Title</span>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitle(e.target.value)
                                      }
                                      value={boxTitle}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>Btn txt</span>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      class="form-control"
                                      min="0"
                                      max="20"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitleBtnTxt(e.target.value)
                                      }
                                      value={boxTitleBtnTxt}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>Btn Clr</span>
                                  </div>
                                  <div>
                                    <input
                                      type="color"
                                      name=""
                                      id=""
                                      onChange={(e) =>
                                        setBoxTitleBtnClr(e.target.value)
                                      }
                                      value={boxTitleBtnClr}
                                      style={{
                                        width: "100%",
                                        borderRadius: "5px",
                                        border: "none",
                                        height: "39px",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  {" "}
                                  <div>
                                    <span>MT</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitleMt(e.target.value)
                                      }
                                      value={boxTitleMt}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>MB</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitleMb(e.target.value)
                                      }
                                      value={boxTitleMb}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>PT</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitlePt(e.target.value)
                                      }
                                      value={boxTitlePt}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>PB</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitlePb(e.target.value)
                                      }
                                      value={boxTitlePb}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div
                              className="mt-2 p-2"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="d-flex justify-content-center">
                                <div>
                                  <h5>
                                    Title Image Design{" "}
                                    <span
                                      style={{
                                        color: "gray",
                                        fontSize: "13px",
                                      }}
                                    >
                                      (optional)
                                    </span>{" "}
                                  </h5>
                                </div>{" "}
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <div>
                                    <span>Mobile View</span>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxMobileView(e.target.value)
                                      }
                                      value={boxMobileView}
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div>
                                    <span>Desktop View</span>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxDesktopView(e.target.value)
                                      }
                                      value={boxDesktopView}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-3">
                                  {" "}
                                  <div>
                                    <span>MT</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitleImageMt(e.target.value)
                                      }
                                      value={boxTitleImageMt}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>MB</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitleImageMb(e.target.value)
                                      }
                                      value={boxTitleImageMb}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>PT</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitleImagePt(e.target.value)
                                      }
                                      value={boxTitleImagePt}
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>PB</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setBoxTitleImagePb(e.target.value)
                                      }
                                      value={boxTitleImagePb}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div
                              className="mt-2 p-2"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="d-flex justify-content-center">
                                <h5>Title,title image and button Target</h5>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <div>
                                    <span>Target</span>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                      onChange={(e) =>
                                        setTitleImageBtnTarget(e.target.value)
                                      }
                                      value={titleImageBtnTarget}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="mt-2 p-2"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className="d-flex justify-content-center">
                                  <h5>Upload Product Image</h5>
                                </div>
                                <div className="row">
                                  <div className="col-6">
                                    <div>
                                      <span>Image Url</span>
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        class="form-control"
                                        aria-describedby="emailHelp"
                                        onChange={(e) =>
                                          setUploadProduct(e.target.value)
                                        }
                                        value={uploadProduct}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div>
                                      <span>Target</span>
                                    </div>
                                    <div>
                                      <div class="input-group mb-3">
                                        <input
                                          type="text"
                                          class="form-control"
                                          aria-label="Recipient's username"
                                          aria-describedby="button-addon2"
                                          onChange={(e) =>
                                            setUploadProductTarget(
                                              e.target.value
                                            )
                                          }
                                          value={uploadProductTarget}
                                        />
                                        <button
                                          class="btn btn-outline-secondary"
                                          type="button"
                                          id="button-addon2"
                                          onClick={() => {
                                            uploadProduct !== "" &&
                                              setAllUploadProduct([
                                                ...allUploadProduct,
                                                {
                                                  link: uploadProduct,
                                                  target: uploadProductTarget,
                                                },
                                              ]);
                                            {
                                              setUploadProduct("");
                                              setUploadProductTarget("");
                                            }
                                          }}
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mt-2 p-2"
                          style={{
                            border: "1px solid #fec400",
                            borderRadius: "10px",
                          }}
                        >
                          <div className="row">
                            {allUploadProduct.map((img) => (
                              <div className="col-3">
                                <div>
                                  <span style={{ fontSize: "12px" }}>
                                    Target : {img.target}
                                  </span>
                                </div>

                                <div>
                                  <img
                                    src={img.link}
                                    class="img-fluid"
                                    alt="..."
                                  />
                                </div>

                                <div>
                                  <Button
                                    className="mt-1"
                                    style={{
                                      width: "100%",
                                      backgroundColor: "red",
                                      color: "white",
                                    }}
                                    onClick={() => {
                                      setAllUploadProduct(
                                        allUploadProduct.filter(
                                          (fData) => fData.link !== img.link
                                        )
                                      );
                                    }}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </StickyBox>
                </div>
                <div className="col-4">
                  <h3>Resource</h3>
                  <ResourceSection></ResourceSection>
                </div>
              </div>
            </div>
            <div
              className="mt-2 p-2"
              style={{
                border: "2px solid #fec400",
                borderRadius: "10px",
              }}
            >
              <div>
                <h4>All Static Banner -----------</h4>
                <div className="row">
                  {allDbData.map((dt) => (
                    <div className="col-6 ">
                      {/* dt.componentsSection */}
                      <div
                        className="m-1 p-2"
                        style={{
                          border: "2px solid #fec400",
                          borderRadius: "10px",
                        }}
                      >
                        <div
                          style={{ fontSize: "14px" }}
                          className="d-flex justify-content-between"
                        >
                          <div>
                            <span>Name : {dt.componentsSection.Name}</span>
                          </div>
                          <div>
                            <span>Id : {dt.componentsSection.id}</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span>Box Design -----</span>
                          </div>
                          <div
                            style={{ fontSize: "14px" }}
                            className="d-flex justify-content-between"
                          >
                            <div>
                              {" "}
                              <span>
                                {" "}
                                bg Clr{" "}
                                <div
                                  style={{
                                    height: "20px",
                                    width: "20px",
                                    display: "inline-block",
                                    borderRadius: "5px",
                                    backgroundColor: `${dt.componentsSection.boxBgClr}`,
                                  }}
                                ></div>{" "}
                              </span>
                            </div>
                            <div>
                              <span>
                                Bor Ra : {dt.componentsSection.boxBorRa}
                              </span>
                            </div>
                          </div>
                          <div style={{ fontSize: "14px" }} className="">
                            <div>
                              {" "}
                              <span>
                                {" "}
                                Show Mobile Device :{" "}
                                {dt.componentsSection.boxMobileView}
                              </span>
                            </div>
                            <div>
                              <span>
                                Show Desktop Device{" "}
                                {dt.componentsSection.boxDesktopView}
                              </span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3">
                              Mt : {dt.componentsSection.boxMt}
                            </div>
                            <div className="col-3">
                              Mb : {dt.componentsSection.boxMb}
                            </div>
                            <div className="col-3">
                              Pt : {dt.componentsSection.boxPt}
                            </div>
                            <div className="col-3">
                              Pb : {dt.componentsSection.boxPb}
                            </div>
                          </div>
                        </div>
                        <div>
                          <span>Title Design ------</span>
                          <div style={{ fontSize: "14px" }}>
                            <span>Title : {dt.componentsSection.boxTitle}</span>
                          </div>
                          <div style={{ fontSize: "14px" }}>
                            <div className="d-flex justify-content-between">
                              <span>
                                Btn text : {dt.componentsSection.boxTitleBtnTxt}
                              </span>
                              <span>
                                Btn Clr :{" "}
                                <div
                                  style={{
                                    height: "20px",
                                    width: "20px",
                                    display: "inline-block",
                                    borderRadius: "5px",
                                    backgroundColor: `${dt.componentsSection.boxTitleBtnClr}`,
                                  }}
                                ></div>{" "}
                              </span>
                            </div>
                          </div>
                          <div className="row" style={{ fontSize: "14px" }}>
                            <div className="col-3">
                              Mt : {dt.componentsSection.boxTitleMt}{" "}
                            </div>
                            <div className="col-3">
                              Mb : {dt.componentsSection.boxTitleMb}{" "}
                            </div>
                            <div className="col-3">
                              Pt : {dt.componentsSection.boxTitlePt}{" "}
                            </div>
                            <div className="col-3">
                              Pb : {dt.componentsSection.boxTitlePb}{" "}
                            </div>
                          </div>
                          <div>
                            <div>
                              <span>Title image device ----------- </span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                              <span>
                                Mobile View :{" "}
                                {dt.componentsSection.boxMobileView}
                              </span>
                            </div>
                            <div style={{ fontSize: "14px" }}>
                              <span>
                                Desktop View :{" "}
                                {dt.componentsSection.boxDesktopView}
                              </span>
                            </div>
                          </div>
                          <div style={{ fontSize: "14px" }} className="row">
                            <div className="col-3">
                              <span>
                                Mt : {dt.componentsSection.boxTitleImageMt}
                              </span>
                            </div>
                            <div className="col-3">
                              <span>
                                Mb : {dt.componentsSection.boxTitleImageMb}
                              </span>
                            </div>
                            <div className="col-3">
                              <span>
                                Pt : {dt.componentsSection.boxTitleImagePt}
                              </span>
                            </div>
                            <div className="col-3">
                              <span>
                                Pb : {dt.componentsSection.boxTitleImagePb}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span>
                              Title,title image and button Target
                              ---------------
                            </span>
                          </div>
                          <div style={{ fontSize: "14px" }}>
                            <span>
                              Target :{" "}
                              {dt.componentsSection.titleImageBtnTarget}{" "}
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="row">
                              {dt.componentsSection.link.map((img) => (
                                <div className="col-3 ">
                                  <div>
                                    <img
                                      src={img.link}
                                      class="img-fluid"
                                      alt="..."
                                    />
                                  </div>
                                  <div
                                    style={{ fontSize: "6px" }}
                                    className="mt-2"
                                  >
                                    <span>{img.target}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <button
                            onClick={() =>
                              deleteDb({ id: dt._id, edit: false })
                            }
                            type="button"
                            class="btn btn-danger"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => {
                              setEdit(true);
                              setId(dt.componentsSection.id);
                              setDbId(dt._id);
                              setBoxBgCrl(dt.componentsSection.boxBgClr);
                              setBoxBorRa(dt.componentsSection.boxBorRa);
                              setName(dt.componentsSection.Name);
                              setBoxMt(dt.componentsSection.boxMt);
                              setBoxMb(dt.componentsSection.boxMb);
                              setBoxPt(dt.componentsSection.boxPt);
                              setBoxPb(dt.componentsSection.boxPb);
                              setBoxShowMobileDevice(
                                dt.componentsSection.boxShowMobileDevice
                              );
                              setBoxShowDesktopDevice(
                                dt.componentsSection.boxShowDesktopDevice
                              );
                              setBoxTitle(dt.componentsSection.boxTitle);
                              setBoxTitleBtnTxt(
                                dt.componentsSection.boxTitleBtnTxt
                              );
                              setBoxTitleBtnClr(
                                dt.componentsSection.boxTitleBtnClr
                              );
                              setBoxTitleMt(dt.componentsSection.boxTitleMt);
                              setBoxTitleMb(dt.componentsSection.boxTitleMb);
                              setBoxTitlePt(dt.componentsSection.boxTitlePt);
                              setBoxTitlePb(dt.componentsSection.boxTitlePb);
                              setBoxMobileView(
                                dt.componentsSection.boxMobileView
                              );
                              setBoxDesktopView(
                                dt.componentsSection.boxDesktopView
                              );
                              setBoxTitleImageMt(
                                dt.componentsSection.boxTitleImageMt
                              );
                              setBoxTitleImageMb(
                                dt.componentsSection.boxTitleImageMb
                              );
                              setBoxTitleImagePt(
                                dt.componentsSection.boxTitleImagePt
                              );
                              setBoxTitleImagePb(
                                dt.componentsSection.boxTitleImagePb
                              );
                              setTitleImageBtnTarget(
                                dt.componentsSection.titleImageBtnTarget
                              );
                              setUploadProduct(
                                dt.componentsSection.uploadProduct
                              );
                              setAllUploadProduct(dt.componentsSection.link);
                            }}
                            type="button"
                            class="btn btn-danger"
                            style={{
                              backgroundColor: "#EFBA08",
                              border: "none",
                            }}
                          >
                            Edit
                          </button>
                        </div>
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
  );
}
