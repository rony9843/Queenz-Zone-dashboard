import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";

export default function HomePageLayout() {
  // home page layout
  const [homePageLayout, setHomePageLayout] = useState([]);

  const [carousel, setCarousel] = useState([]);
  const [productCards, setProductCards] = useState([]);
  const [productPoster, setProductPoster] = useState([]);
  const [staticBanner, setStaticBanner] = useState([]);
  const [SwipeableCarousel, setSwipeableCarousel] = useState([]);
  const [categorys, setCategorys] = useState([]);

  // fetch carousel
  useEffect(() => {
    // read home page layout
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadHomePageLayout"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is home page layout : -> ", json);
        setHomePageLayout(json[0].homePageLayout);
      });

    // carousel
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadComponentsSection"
    )
      .then((response) => response.json())
      .then((json) => {
        setCarousel(json);
      });

    //  product cards

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenzZoneReadProductCards"
    )
      .then((response) => response.json())
      .then((json) => {
        setProductCards(json);
      });

    // product's poster
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadProductPoster"
    )
      .then((response) => response.json())
      .then((json) => {
        setProductPoster(json);
      });

    // static banner
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadStaticPoster"
    )
      .then((response) => response.json())
      .then((json) => {
        setStaticBanner(json);
      });

    // Swipeable Carousel
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadSwipeableCarousel"
    )
      .then((response) => response.json())
      .then((json) => {
        setSwipeableCarousel(json);
        console.log("carousel -> ", json);
      });

    // Swipeable Carousel
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
    )
      .then((response) => response.json())
      .then((json) => {
        setCategorys(json);
        console.log("carousel -> ", json);
      });
  }, []);

  // push layout
  const pushLayout = (props) => {
    console.log("props ", props);
    setHomePageLayout([...homePageLayout, props]);
  };

  // remove item
  const remove = (props) => {
    let removeItem = homePageLayout.filter((dt) => dt.renNumber !== props);
    setHomePageLayout(removeItem);
  };

  // save layout
  const postLayout = () => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneHomePageLayout",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Layout: homePageLayout }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ProductLayoutBack className="px-2 ">
      <div class="pt-2 d-flex justify-content-between">
        {" "}
        <div>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            Home Page Payout
          </span>
        </div>
      </div>
      <div
        className="mt-2 p-2"
        style={{ border: "3px solid #fec400", borderRadius: "10px" }}
      >
        <div className="mb-3">
          <div className="row">
            <div className="col-8">
              <div className="mx-2">
                {" "}
                <b>Components</b>{" "}
              </div>
              <div
                className="m-2 p-2"
                style={{ border: "2px solid #fec400", borderRadius: "10px" }}
              >
                <div className="row">
                  <div className="col-6">
                    <div
                      className="m-1 p-1"
                      style={{
                        border: "1px solid #fec400",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffde4d",
                          borderRadius: "5px",
                        }}
                        className="d-flex justify-content-center"
                      >
                        <b>Carousel</b>
                      </div>
                      <div>
                        {carousel.map((c) => (
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div className=" d-flex justify-content-between">
                              <div>
                                Name:
                                <b>{c.componentsSection.Name}</b>
                              </div>
                              <div>
                                id:
                                <b>{c.componentsSection.id} </b>
                              </div>
                            </div>{" "}
                            <div className=" d-flex justify-content-between">
                              <div>
                                MB:
                                <b>{c.componentsSection.mb}</b>
                              </div>
                              <div>
                                MT:
                                <b>{c.componentsSection.mt} </b>
                              </div>
                            </div>{" "}
                            <div className="d-flex justify-content-end">
                              <Button
                                onClick={() =>
                                  pushLayout({
                                    componentId: c.componentsSection.id,
                                    componentName: c.componentsSection.Name,
                                    dataId: c._id,
                                    mt: c.componentsSection.mt,
                                    mb: c.componentsSection.mb,
                                    type: c.componentsSection.type,
                                    renNumber: Math.floor(
                                      100000000 + Math.random() * 900000000
                                    ),
                                  })
                                }
                                style={{ backgroundColor: "#FEC400" }}
                                size="small"
                                variant="contained"
                              >
                                Add Component
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="m-1 p-1"
                      style={{
                        border: "1px solid #fec400",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffde4d",
                          borderRadius: "5px",
                        }}
                        className="d-flex justify-content-center"
                      >
                        <b>Product Cards</b>
                      </div>
                      <div>
                        {productCards.map((c) => (
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div className=" d-flex justify-content-between">
                              <div>
                                Name:
                                <b>{c.componentsSection.pageName}</b>
                              </div>
                              <div>
                                id:
                                <b>{c.componentsSection.sName} </b>
                              </div>
                            </div>{" "}
                            <div className=" d-flex justify-content-between">
                              <div>
                                MT:
                                <b>{c.componentsSection.mt} </b>
                              </div>
                              <div>
                                MB:
                                <b>{c.componentsSection.mb}</b>
                              </div>
                              <div>
                                PT:
                                <b>{c.componentsSection.pt}</b>
                              </div>
                              <div>
                                PB:
                                <b>{c.componentsSection.pb}</b>
                              </div>
                            </div>{" "}
                            <div className=" d-flex justify-content-between">
                              <div>
                                Btn Text :{" "}
                                <b style={{ fontSize: "12px" }}>
                                  {c.componentsSection.btnText}{" "}
                                </b>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <div>btnBgClr :</div>
                                <div
                                  style={{
                                    borderRadius: "5px",
                                    backgroundColor: `${c.componentsSection.btnBgClr}`,
                                    height: "20px",
                                    width: "20px",
                                  }}
                                ></div>
                              </div>
                              <div className="d-flex">
                                <div>BgClr :</div>
                                <div
                                  style={{
                                    borderRadius: "5px",
                                    backgroundColor: `${c.componentsSection.bgClr}`,
                                    height: "20px",
                                    width: "20px",
                                  }}
                                ></div>
                              </div>
                              <div>broRa : {c.componentsSection.borRa}</div>
                            </div>
                            <div className="d-flex justify-content-end">
                              <Button
                                onClick={() =>
                                  pushLayout({
                                    componentId: c.componentsSection.sName,
                                    componentName: c.componentsSection.pageName,
                                    dataId: c._id,
                                    mt: c.componentsSection.mt,
                                    mb: c.componentsSection.mb,
                                    pt: c.componentsSection.pt,
                                    pb: c.componentsSection.pb,
                                    BgClr: c.componentsSection.bgClr,
                                    type: c.componentsSection.type,
                                    renNumber: Math.floor(
                                      100000000 + Math.random() * 900000000
                                    ),
                                  })
                                }
                                style={{ backgroundColor: "#FEC400" }}
                                size="small"
                                variant="contained"
                              >
                                Add Component
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="m-1 p-1"
                      style={{
                        border: "1px solid #fec400",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffde4d",
                          borderRadius: "5px",
                        }}
                        className="d-flex justify-content-center"
                      >
                        <b>Product's Poster</b>
                      </div>
                      <div>
                        {productPoster.map((c) => (
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div className=" d-flex justify-content-between">
                              <div>
                                Name:
                                <b>{c.componentsSection.Name}</b>
                              </div>
                              <div>
                                id:
                                <b>{c.componentsSection.id} </b>
                              </div>
                            </div>{" "}
                            <div className=" d-flex justify-content-between">
                              <div>
                                boxMt:
                                <b>{c.componentsSection.boxMt} </b>
                              </div>
                              <div>
                                boxMb:
                                <b>{c.componentsSection.boxMb}</b>
                              </div>
                              <div>
                                boxPt:
                                <b>{c.componentsSection.boxPt}</b>
                              </div>
                              <div>
                                boxPb:
                                <b>{c.componentsSection.boxPb}</b>
                              </div>
                            </div>{" "}
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <div>boxBg :</div>
                                <div
                                  style={{
                                    borderRadius: "5px",
                                    backgroundColor: `${c.componentsSection.boxBg}`,
                                    height: "20px",
                                    width: "20px",
                                  }}
                                ></div>
                              </div>
                              <div className="d-flex">
                                <div>
                                  boxBorderRadios :{" "}
                                  <b>{c.componentsSection.boxBorderRadios} </b>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              <Button
                                onClick={() =>
                                  pushLayout({
                                    componentId: c.componentsSection.id,
                                    componentName: c.componentsSection.Name,
                                    dataId: c._id,
                                    mt: c.componentsSection.boxMt,
                                    mb: c.componentsSection.boxMb,
                                    pt: c.componentsSection.boxPt,
                                    pb: c.componentsSection.boxPb,
                                    BgClr: c.componentsSection.boxBg,
                                    BorderRadios:
                                      c.componentsSection.boxBorderRadios,
                                    type: c.componentsSection.type,
                                    renNumber: Math.floor(
                                      100000000 + Math.random() * 900000000
                                    ),
                                  })
                                }
                                style={{ backgroundColor: "#FEC400" }}
                                size="small"
                                variant="contained"
                              >
                                Add Component
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="m-1 p-1"
                      style={{
                        border: "1px solid #fec400",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffde4d",
                          borderRadius: "5px",
                        }}
                        className="d-flex justify-content-center"
                      >
                        <b>Static Banner</b>
                      </div>
                      <div>
                        {staticBanner.map((c) => (
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div className=" d-flex justify-content-between">
                              <div>
                                Name:
                                <b>{c.componentsSection.Name}</b>
                              </div>
                              <div>
                                id:
                                <b>{c.componentsSection.id} </b>
                              </div>
                            </div>{" "}
                            <div className="d-flex justify-content-end">
                              <Button
                                onClick={() =>
                                  pushLayout({
                                    componentId: c.componentsSection.id,
                                    componentName: c.componentsSection.Name,
                                    dataId: c._id,
                                    type: c.componentsSection.type,
                                    renNumber: Math.floor(
                                      100000000 + Math.random() * 900000000
                                    ),
                                  })
                                }
                                style={{ backgroundColor: "#FEC400" }}
                                size="small"
                                variant="contained"
                              >
                                Add Component
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="m-1 p-1"
                      style={{
                        border: "1px solid #fec400",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffde4d",
                          borderRadius: "5px",
                        }}
                        className="d-flex justify-content-center"
                      >
                        <b>Swipeable Carousel</b>
                      </div>
                      <div>
                        {SwipeableCarousel &&
                          SwipeableCarousel.map((c) => (
                            <div
                              className="m-1 p-1"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className=" d-flex justify-content-between">
                                <div>
                                  Name:
                                  <b>{c.componentsSection.Name}</b>
                                </div>
                                <div>
                                  id:
                                  <b>{c.componentsSection.id} </b>
                                </div>
                              </div>{" "}
                              <div className=" d-flex justify-content-between">
                                <div>
                                  boxMt:
                                  <b>{c.componentsSection.boxMt} </b>
                                </div>
                                <div>
                                  boxMb:
                                  <b>{c.componentsSection.boxMb}</b>
                                </div>
                                <div>
                                  boxPt:
                                  <b>{c.componentsSection.boxPt}</b>
                                </div>
                                <div>
                                  boxPb:
                                  <b>{c.componentsSection.boxPb}</b>
                                </div>
                              </div>{" "}
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <div>boxBg :</div>
                                  <div
                                    style={{
                                      borderRadius: "5px",
                                      backgroundColor: `${c.componentsSection.boxBgClr}`,
                                      height: "20px",
                                      width: "20px",
                                    }}
                                  ></div>
                                </div>
                                <div className="d-flex">
                                  <div>
                                    boxBorderRadios :{" "}
                                    <b>{c.componentsSection.boxBorRa} </b>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end">
                                <Button
                                  onClick={() =>
                                    pushLayout({
                                      componentId: c.componentsSection.id,
                                      componentName: c.componentsSection.Name,
                                      dataId: c._id,
                                      mt: c.componentsSection.boxMt,
                                      mb: c.componentsSection.boxMb,
                                      pt: c.componentsSection.boxPt,
                                      pb: c.componentsSection.boxPb,
                                      BgClr: c.componentsSection.boxBgClr,
                                      BorderRadios:
                                        c.componentsSection.boxBorRa,
                                      type: c.componentsSection.type,
                                      renNumber: Math.floor(
                                        100000000 + Math.random() * 900000000
                                      ),
                                    })
                                  }
                                  style={{ backgroundColor: "#FEC400" }}
                                  size="small"
                                  variant="contained"
                                >
                                  Add Component
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="m-1 p-1"
                      style={{
                        border: "1px solid #fec400",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffde4d",
                          borderRadius: "5px",
                        }}
                        className="d-flex justify-content-center"
                      >
                        <b>Category Product </b>
                      </div>
                      <div>
                        {categorys.map((c) => (
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div className=" d-flex justify-content-between">
                              <div>
                                Category:
                                <b>{c.postCa}</b>
                              </div>
                            </div>{" "}
                            <div className="d-flex justify-content-end">
                              <Button
                                onClick={() =>
                                  pushLayout({
                                    Category: c.postCa,
                                    type: "Category",
                                    renNumber: Math.floor(
                                      100000000 + Math.random() * 900000000
                                    ),
                                    dataId: c._id,
                                  })
                                }
                                style={{ backgroundColor: "#FEC400" }}
                                size="small"
                                variant="contained"
                              >
                                Add Component
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
            <div className="col-4">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="mx-2">
                  {" "}
                  <div className="d-flex justify-content-between">
                    <b>Preview</b>{" "}
                    <Button
                      onClick={() => postLayout()}
                      style={{ backgroundColor: "#FEC400" }}
                      size="small"
                      variant="contained"
                    >
                      Save Layout
                    </Button>
                  </div>
                </div>
                <div
                  className="m-2 p-2"
                  style={{ border: "2px solid #fec400", borderRadius: "10px" }}
                >
                  {homePageLayout.map((dt) => (
                    <div>
                      {console.log("this is single data : ", dt)}

                      {dt.type === "CarouselSection" && (
                        <div className="col-12">
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#ffde4d",
                                borderRadius: "5px",
                              }}
                              className="d-flex justify-content-center"
                            >
                              <b>Carousel</b>
                            </div>
                            <div>
                              <div
                                className="m-1 p-1"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    Name:
                                    <b>{dt.componentName}</b>
                                  </div>
                                  <div>
                                    id:
                                    <b>{dt.componentId} </b>
                                  </div>
                                </div>{" "}
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    MB:
                                    <b>{dt.mb}</b>
                                  </div>
                                  <div>
                                    MT:
                                    <b>{dt.mt} </b>
                                  </div>
                                </div>{" "}
                                <div className="d-flex justify-content-end">
                                  <Button
                                    onClick={() => remove(dt.renNumber)}
                                    style={{ backgroundColor: "red" }}
                                    size="small"
                                    variant="contained"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {dt.type === "productCards" && (
                        <div className="col-12">
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#ffde4d",
                                borderRadius: "5px",
                              }}
                              className="d-flex justify-content-center"
                            >
                              <b>Product Cards</b>
                            </div>
                            <div>
                              <div
                                className="m-1 p-1"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    Name:
                                    <b>{dt.componentName}</b>
                                  </div>
                                  <div>
                                    id:
                                    <b>{dt.componentId} </b>
                                  </div>
                                </div>{" "}
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    MT:
                                    <b>{dt.mt} </b>
                                  </div>
                                  <div>
                                    MB:
                                    <b>{dt.mb}</b>
                                  </div>
                                  <div>
                                    PT:
                                    <b>{dt.pt}</b>
                                  </div>
                                  <div>
                                    PB:
                                    <b>{dt.pb}</b>
                                  </div>
                                </div>{" "}
                                <div className="d-flex justify-content-end">
                                  <Button
                                    onClick={() => remove(dt.renNumber)}
                                    style={{ backgroundColor: "red" }}
                                    size="small"
                                    variant="contained"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {dt.type === "ProductsPoster" && (
                        <div className="col-12">
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#ffde4d",
                                borderRadius: "5px",
                              }}
                              className="d-flex justify-content-center"
                            >
                              <b>Product's Poster</b>
                            </div>
                            <div>
                              <div
                                className="m-1 p-1"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    Name:
                                    <b>{dt.componentName}</b>
                                  </div>
                                  <div>
                                    id:
                                    <b>{dt.componentId} </b>
                                  </div>
                                </div>{" "}
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    MB:
                                    <b>{dt.mb}</b>
                                  </div>
                                  <div>
                                    MT:
                                    <b>{dt.mt} </b>
                                  </div>
                                </div>{" "}
                                <div className="d-flex justify-content-end">
                                  <Button
                                    onClick={() => remove(dt.renNumber)}
                                    style={{ backgroundColor: "red" }}
                                    size="small"
                                    variant="contained"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {dt.type === "StaticBanner" && (
                        <div className="col-12">
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#ffde4d",
                                borderRadius: "5px",
                              }}
                              className="d-flex justify-content-center"
                            >
                              <b>Static Banner</b>
                            </div>
                            <div>
                              <div
                                className="m-1 p-1"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    Name:
                                    <b>{dt.componentName}</b>
                                  </div>
                                  <div>
                                    id:
                                    <b>{dt.componentId} </b>
                                  </div>
                                </div>{" "}
                                <div className="d-flex justify-content-end">
                                  <Button
                                    onClick={() => remove(dt.renNumber)}
                                    style={{ backgroundColor: "red" }}
                                    size="small"
                                    variant="contained"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {dt.type === "SwipeableCarousel" && (
                        <div className="col-12">
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#ffde4d",
                                borderRadius: "5px",
                              }}
                              className="d-flex justify-content-center"
                            >
                              <b>Swipeable Carousel</b>
                            </div>
                            <div>
                              <div
                                className="m-1 p-1"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    Name:
                                    <b>{dt.componentName}</b>
                                  </div>
                                  <div>
                                    id:
                                    <b>{dt.componentId} </b>
                                  </div>
                                </div>{" "}
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    MT:
                                    <b>{dt.mt} </b>
                                  </div>
                                  <div>
                                    MB:
                                    <b>{dt.mb}</b>
                                  </div>
                                  <div>
                                    PT:
                                    <b>{dt.pt}</b>
                                  </div>
                                  <div>
                                    PB:
                                    <b>{dt.pb}</b>
                                  </div>
                                </div>{" "}
                                <div className="d-flex justify-content-end">
                                  <Button
                                    onClick={() => remove(dt.renNumber)}
                                    style={{ backgroundColor: "red" }}
                                    size="small"
                                    variant="contained"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {dt.type === "Category" && (
                        <div className="col-12">
                          <div
                            className="m-1 p-1"
                            style={{
                              border: "1px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#ffde4d",
                                borderRadius: "5px",
                              }}
                              className="d-flex justify-content-center"
                            >
                              <b>Category Product</b>
                            </div>
                            <div>
                              <div
                                className="m-1 p-1"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className=" d-flex justify-content-between">
                                  <div>
                                    Category:
                                    <b>{dt.Category}</b>
                                  </div>
                                  <div>
                                    id:
                                    <b>{dt.dataId} </b>
                                  </div>
                                </div>{" "}
                                <div className="d-flex justify-content-end">
                                  <Button
                                    onClick={() => remove(dt.renNumber)}
                                    style={{ backgroundColor: "red" }}
                                    size="small"
                                    variant="contained"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
    </ProductLayoutBack>
  );
}

const ProductLayoutBack = styled.div``;
