import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import ResourceSection from "../CarouselSection/ResourceSection";
import DbPorductPoster from "./DbPorductPoster";

export default function ProductPoster() {
  // add database data
  const [dbdata, setDbData] = useState([]);

  // for update
  const [update, setUpdate] = useState(false);

  // all poster url
  const [posterAllUrl, setPosterAllUrl] = useState([]);

  // random id
  const [id, setId] = useState(Math.floor(1000 + Math.random() * 9000));

  // db id
  const [dbId, setDbId] = useState("");

  // section name
  const [name, setName] = useState("");

  // input
  const [inputPosterUrl, setInputPosterUrl] = useState("");
  const [inputPosterTarget, setInputPosterTarget] = useState("");
  const [inputBg, setInputBg] = useState("");
  const [inputBorderRadious, setInputBorderRadious] = useState("");

  // box design
  const [boxMt, setBoxMt] = useState("");
  const [boxMb, setBoxMb] = useState("");
  const [boxPt, setBoxPt] = useState("");
  const [boxPb, setBoxPb] = useState("");

  // title design
  const [title, setTitle] = useState("");
  const [titleAlign, setTitleAlign] = useState("left");
  const [titleB, setTitleB] = useState("");
  const [titlePt, setTitlePt] = useState("");
  const [titlePb, setTitlePb] = useState("");
  const [titlePX, setTitlePX] = useState("");
  const [titleClr, setTitleClr] = useState("");

  // title image design
  const [titleImageMobileLink, setTitleImageMobileLink] = useState("");
  const [titleImageDesktopLink, setTitleImageDesktopLink] = useState("");
  const [titleImageM, setTitleImageM] = useState("");
  const [titleImageMb, setTitleImageMb] = useState("");
  const [titleImageMt, setTitleImageMt] = useState("");
  const [titleImageMx, setTitleImageMx] = useState("");

  // title and title image target

  const [TitleTarget, setTitleTarget] = useState("");

  // image show
  const [showImage, setShowImage] = useState("");

  // add url in state
  const addLink = () => {
    setPosterAllUrl([
      ...posterAllUrl,
      { link: inputPosterUrl, target: inputPosterTarget },
    ]);
    setInputPosterUrl("");
    setInputPosterTarget("");
  };

  // post data on db
  const submitData = () => {
    if (name !== "") {
      const componentsSection = {
        type: "ProductsPoster",
        id: id,
        Name: name,
        link: posterAllUrl,

        // box design
        boxBg: inputBg,
        boxBorderRadios: inputBorderRadious,
        boxMt: boxMt,
        boxMb: boxPb,
        boxPt: boxPt,
        boxPb: boxPb,

        // title design
        title: title,
        titleClr: titleClr,
        titleP: titleB,
        titlePt: titlePt,
        titlePb: titlePb,
        titlePx: titlePX,
        titleAlign: titleAlign,
        titleAndImageTarget: TitleTarget,

        // title image design
        titleImageMobileLink: titleImageMobileLink,
        titleImageDesktopLink: titleImageDesktopLink,
        titleImageM: titleImageM,
        titleImageMt: titleImageMt,
        titleImageMb: titleImageMb,
        titleImageMx: titleImageMx,
      };

      fetch("http://localhost:5000/queenZoneProductsPoster", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ componentsSection }),
      })
        .then((response) => response.json())
        .then((data) => {
          setPosterAllUrl([]);
          setId(Math.floor(1000 + Math.random() * 9000));
          setName("");
          setInputPosterUrl("");
          setInputPosterTarget("");
          setInputBg("");
          setInputBorderRadious("");
          setBoxMt("");
          setBoxMb("");
          setBoxPt("");
          setBoxPb("");
          setTitle("");
          setTitleAlign("left");
          setTitleB("");
          setTitlePt("");
          setTitlePb("");
          setTitlePX("");
          setTitleClr("");
          setTitleImageMobileLink("");
          setTitleImageDesktopLink("");
          setTitleImageM("");
          setTitleImageMb("");
          setTitleImageMt("");
          setTitleImageMx("");
          setTitleTarget("");
          setShowImage("");

          // call read data
          readData();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    readData();
  }, []);

  // data read from db
  const readData = () => {
    fetch("http://localhost:5000/queenZoneReadProductPoster")
      .then((response) => response.json())
      .then((json) => setDbData(json));
  };

  // delete from db
  const deleteDb = (props) => {
    fetch("http://localhost:5000/queenZoneDeleteProductsPoster", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props }),
    })
      .then((response) => response.json())
      .then((data) => {
        readData();

        if (update === true) {
          setPosterAllUrl([]);
          setId(Math.floor(1000 + Math.random() * 9000));
          setName("");
          setInputPosterUrl("");
          setInputPosterTarget("");
          setInputBg("");
          setInputBorderRadious("");
          setBoxMt("");
          setBoxMb("");
          setBoxPt("");
          setBoxPb("");
          setTitle("");
          setTitleAlign("left");
          setTitleB("");
          setTitlePt("");
          setTitlePb("");
          setTitlePX("");
          setTitleClr("");
          setTitleImageMobileLink("");
          setTitleImageDesktopLink("");
          setTitleImageM("");
          setTitleImageMb("");
          setTitleImageMt("");
          setTitleImageMx("");
          setTitleTarget("");
          setShowImage("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // update product's poster
  const updatePoster = (id, dt) => {
    setPosterAllUrl(dt.link);
    setId(dt.id);
    setName(dt.Name);

    setInputBg(dt.boxBg);
    setInputBorderRadious(dt.boxBorderRadios);
    setBoxMt(dt.boxMt);
    setBoxMb(dt.boxMb);
    setBoxPt(dt.boxPt);
    setBoxPb(dt.boxPb);
    setTitle(dt.title);
    setTitleAlign(dt.titleAlign);
    setTitleB(dt.titleP);
    setTitlePt(dt.titlePt);
    setTitlePb(dt.titlePb);
    setTitlePX(dt.titlePx);
    setTitleClr(dt.titleClr);
    setTitleImageMobileLink(dt.titleImageMobileLink);
    setTitleImageDesktopLink(dt.titleImageDesktopLink);
    setTitleImageM(dt.titleImageM);
    setTitleImageMb(dt.titleImageMb);
    setTitleImageMt(dt.titleImageMt);
    setTitleImageMx(dt.titleImageMx);
    setTitleTarget(dt.titleAndImageTarget);
    setShowImage(
      dt.titleImageDesktopLink === ""
        ? dt.titleImageMobileLink
        : dt.titleImageDesktopLink
    );
    setDbId(id);

    setUpdate(true);
  };

  //update submit
  const updateSubmit = () => {
    const componentsSection = {
      type: "ProductsPoster",
      id: id,
      Name: name,
      link: posterAllUrl,

      // box design
      boxBg: inputBg,
      boxBorderRadios: inputBorderRadious,
      boxMt: boxMt,
      boxMb: boxPb,
      boxPt: boxPt,
      boxPb: boxPb,

      // title design
      title: title,
      titleClr: titleClr,
      titleP: titleB,
      titlePt: titlePt,
      titlePb: titlePb,
      titlePx: titlePX,
      titleAlign: titleAlign,
      titleAndImageTarget: TitleTarget,

      // title image design
      titleImageMobileLink: titleImageMobileLink,
      titleImageDesktopLink: titleImageDesktopLink,
      titleImageM: titleImageM,
      titleImageMt: titleImageMt,
      titleImageMb: titleImageMb,
      titleImageMx: titleImageMx,
    };

    fetch("http://localhost:5000/queenZoneUpdateProductPoster", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: dbId,
        componentsSection: componentsSection,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosterAllUrl([]);
        setId(Math.floor(1000 + Math.random() * 9000));
        setName("");
        setInputPosterUrl("");
        setInputPosterTarget("");
        setInputBg("");
        setInputBorderRadious("");
        setBoxMt("");
        setBoxMb("");
        setBoxPt("");
        setBoxPb("");
        setTitle("");
        setTitleAlign("left");
        setTitleB("");
        setTitlePt("");
        setTitlePb("");
        setTitlePX("");
        setTitleClr("");
        setTitleImageMobileLink("");
        setTitleImageDesktopLink("");
        setTitleImageM("");
        setTitleImageMb("");
        setTitleImageMt("");
        setTitleImageMx("");
        setTitleTarget("");
        setShowImage("");
        readData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                  Product's Poster
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
                      {update === true ? (
                        <div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                }}
                                onClick={() => deleteDb(dbId)}
                              >
                                Delete
                              </Button>
                            </div>
                            <div>
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: "#FEC400",
                                  color: "black",
                                }}
                                onClick={() => {
                                  setPosterAllUrl([]);
                                  setId(
                                    Math.floor(1000 + Math.random() * 9000)
                                  );
                                  setName("");
                                  setInputPosterUrl("");
                                  setInputPosterTarget("");
                                  setInputBg("");
                                  setInputBorderRadious("");
                                  setBoxMt("");
                                  setBoxMb("");
                                  setBoxPt("");
                                  setBoxPb("");
                                  setTitle("");
                                  setTitleAlign("left");
                                  setTitleB("");
                                  setTitlePt("");
                                  setTitlePb("");
                                  setTitlePX("");
                                  setTitleClr("");
                                  setTitleImageMobileLink("");
                                  setTitleImageDesktopLink("");
                                  setTitleImageM("");
                                  setTitleImageMb("");
                                  setTitleImageMt("");
                                  setTitleImageMx("");
                                  setTitleTarget("");
                                  setShowImage("");
                                  setUpdate(false);
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                            <div>
                              {" "}
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: "#FEC400",
                                  color: "black",
                                }}
                                onClick={() => updateSubmit()}
                              >
                                Update
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="">
                          <div class="d-flex flex-row-reverse">
                            <div class="p-2 mb-3">
                              {" "}
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: "#FEC400",
                                  color: "black",
                                }}
                                onClick={() =>
                                  !posterAllUrl.length === false && submitData()
                                }
                              >
                                Create New Product's Poster Component
                              </Button>
                            </div>
                          </div>

                          <div className="row"></div>
                        </div>
                      )}

                      <div
                        className="mt-2 p-2"
                        style={{
                          border: "2px solid #fec400",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="mb-2 d-flex justify-content-center">
                          <h5>Box Details</h5>
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <label for="exampleInputEmail1" class="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div className="col-4">
                            <label for="id" class="form-label">
                              Id
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="id"
                              aria-describedby="emailHelp"
                              disabled
                              value={id}
                            />
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
                        <div className="mb-2 d-flex justify-content-center">
                          <h5>Box Design</h5>
                        </div>
                        <div className="row">
                          <div className="col-2">
                            <div>
                              <span>Bg Clr</span>
                            </div>
                            <div>
                              <input
                                type="color"
                                name=""
                                onChange={(e) => setInputBg(e.target.value)}
                                id=""
                                value={inputBg}
                                style={{
                                  width: "100%",
                                  borderRadius: "5px",
                                  border: "none",
                                  height: "39px",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <div>
                              <span>Bor.. Ra..</span>
                            </div>
                            <div>
                              <input
                                type="number"
                                class="form-control"
                                min="0"
                                max="20"
                                onChange={(e) =>
                                  setInputBorderRadious(e.target.value)
                                }
                                value={inputBorderRadious}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            {" "}
                            <div>
                              <span>MT</span>
                            </div>
                            <div>
                              <input
                                type="number"
                                class="form-control"
                                onChange={(e) => setBoxMt(e.target.value)}
                                min="0"
                                value={boxMt}
                                max="5"
                                id=""
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <div>
                              <span>MB</span>
                            </div>
                            <div>
                              <input
                                type="number"
                                class="form-control"
                                min="0"
                                onChange={(e) => setBoxMb(e.target.value)}
                                max="5"
                                value={boxMb}
                                id=""
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <div>
                              <span>PT</span>
                            </div>
                            <div>
                              <input
                                type="number"
                                class="form-control"
                                min="0"
                                onChange={(e) => setBoxPt(e.target.value)}
                                max="5"
                                value={boxPt}
                                id=""
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <div>
                              <span>PB</span>
                            </div>
                            <div>
                              <input
                                type="number"
                                class="form-control"
                                onChange={(e) => setBoxPb(e.target.value)}
                                min="0"
                                value={boxPb}
                                max="5"
                                id=""
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6">
                          <div
                            className="mt-2 p-2"
                            style={{
                              border: "2px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div className="mb-2 d-flex justify-content-center">
                              <h5>Title Design</h5>
                            </div>
                            <div className="row">
                              <div className="col-2">
                                <div className="">
                                  <div>
                                    <span>Clr</span>
                                  </div>
                                  <div>
                                    <input
                                      type="color"
                                      name=""
                                      onChange={(e) =>
                                        setTitleClr(e.target.value)
                                      }
                                      id=""
                                      value={titleClr}
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
                              <div className="col-2">
                                <div>
                                  <span>P</span>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    class="form-control"
                                    min="0"
                                    onChange={(e) => setTitleB(e.target.value)}
                                    max="5"
                                    id=""
                                    value={titleB}
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                              </div>
                              <div className="col-2">
                                <div>
                                  <span>PT</span>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    class="form-control"
                                    min="0"
                                    max="5"
                                    onChange={(e) => setTitlePt(e.target.value)}
                                    id=""
                                    value={titlePt}
                                    aria-describedby="emailHelp"
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
                                    onChange={(e) => setTitlePb(e.target.value)}
                                    id=""
                                    value={titlePb}
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div>
                                  <span>PX</span>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    class="form-control"
                                    min="0"
                                    max="5"
                                    onChange={(e) => setTitlePX(e.target.value)}
                                    id=""
                                    value={titlePX}
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="row">
                                  <span>Text Align</span>
                                  <div className="col-4">
                                    <Button
                                      style={{
                                        backgroundColor: "#FEC400",
                                        color: "black",
                                        boxShadow: "none",
                                        width: "100%",
                                      }}
                                      onClick={() => setTitleAlign("left")}
                                      variant="contained"
                                    >
                                      Left
                                    </Button>
                                  </div>
                                  <div className="col-4">
                                    <Button
                                      style={{
                                        backgroundColor: "#FEC400",
                                        color: "black",
                                        boxShadow: "none",
                                        width: "100%",
                                      }}
                                      onClick={() => setTitleAlign("center")}
                                      variant="contained"
                                    >
                                      Center
                                    </Button>
                                  </div>
                                  <div className="col-4">
                                    <Button
                                      style={{
                                        backgroundColor: "#FEC400",
                                        color: "black",
                                        boxShadow: "none",
                                        width: "100%",
                                      }}
                                      onClick={() => setTitleAlign("right")}
                                      variant="contained"
                                    >
                                      Right
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1">
                              <div>
                                <span>Title</span>
                              </div>
                              <div>
                                <input
                                  type="url"
                                  class="form-control"
                                  min="0"
                                  max="5"
                                  onChange={(e) => setTitle(e.target.value)}
                                  id=""
                                  value={title}
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            className="mt-2 p-2"
                            style={{
                              border: "2px solid #fec400",
                              borderRadius: "10px",
                            }}
                          >
                            <div className="mb-2 d-flex justify-content-center">
                              <h5>Title's img Design</h5>
                            </div>
                            <div className="row">
                              <div className="col-3">
                                <div>
                                  <span>M</span>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    class="form-control"
                                    min="0"
                                    onChange={(e) =>
                                      setTitleImageM(e.target.value)
                                    }
                                    max="5"
                                    value={titleImageM}
                                    id=""
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div>
                                  <span>MT</span>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    class="form-control"
                                    onChange={(e) =>
                                      setTitleImageMt(e.target.value)
                                    }
                                    min="0"
                                    value={titleImageMt}
                                    max="5"
                                    id=""
                                    aria-describedby="emailHelp"
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
                                    onChange={(e) =>
                                      setTitleImageMb(e.target.value)
                                    }
                                    max="5"
                                    value={titleImageMb}
                                    id=""
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div>
                                  <span>MX</span>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    class="form-control"
                                    onChange={(e) =>
                                      setTitleImageMx(e.target.value)
                                    }
                                    min="0"
                                    value={titleImageMx}
                                    max="5"
                                    id=""
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-6">
                                <div>
                                  <div>
                                    <span style={{ fontSize: "12px" }}>
                                      Title's Img Url (Mobile)
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="url"
                                      class="form-control"
                                      onChange={(e) =>
                                        setTitleImageMobileLink(e.target.value)
                                      }
                                      value={titleImageMobileLink}
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div>
                                  <div>
                                    <span style={{ fontSize: "12px" }}>
                                      Title's Img Url (Desktop)
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="url"
                                      class="form-control"
                                      onChange={(e) =>
                                        setTitleImageDesktopLink(e.target.value)
                                      }
                                      value={titleImageDesktopLink}
                                      min="0"
                                      max="5"
                                      id=""
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row px-2 pt-2">
                              <span>Enter</span>
                              <Button
                                style={{
                                  backgroundColor: "#FEC400",
                                  color: "black",
                                  boxShadow: "none",
                                }}
                                onClick={() =>
                                  setShowImage(
                                    titleImageDesktopLink === ""
                                      ? titleImageMobileLink
                                      : titleImageDesktopLink
                                  )
                                }
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-1">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                      </div>
                      <div
                        className="mt-2 p-2"
                        style={{
                          border: "3px solid #fec400",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="mb-2 d-flex justify-content-center">
                          <h5>Title's Target / Title's Image Target</h5>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div>
                              <div>
                                <span>Target</span>
                              </div>
                              <div>
                                <input
                                  type="url"
                                  class="form-control"
                                  min="0"
                                  onChange={(e) =>
                                    setTitleTarget(e.target.value)
                                  }
                                  max="5"
                                  value={TitleTarget}
                                  id=""
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* preview  */}

                      <div>
                        <div
                          className={`container px-0  mt-${boxMt} mb-${boxMb} pt-${boxPt} pb-${boxPb}`}
                          style={{
                            backgroundColor: `${inputBg}`,
                            borderRadius: `${inputBorderRadious}px`,
                          }}
                        >
                          <div
                            className={`p-${titleB} pt-${titlePt} pb-${titlePb} px-${titlePX}`}
                            style={{
                              color: `${titleClr}`,
                              textAlign: `${titleAlign}`,
                            }}
                          >
                            <span style={{ fontSize: "20px" }}>{title}</span>
                          </div>
                          {showImage !== "" && (
                            <img
                              style={{ width: "100%" }}
                              src={showImage}
                              class=" "
                              className={`img-fluid    p-${titleImageM} mt-${titleImageMt} mb-${titleImageMb} mx-${titleImageMx}`}
                              alt="..."
                            ></img>
                          )}
                          <div className="d-flex" style={{ flexWrap: "wrap" }}>
                            {!posterAllUrl.length === false &&
                              posterAllUrl.map((img) => (
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  <div className="mt-1 p-1">
                                    <img
                                      style={{ width: "100%" }}
                                      src={img.link}
                                      class="img-fluid"
                                      alt="..."
                                    ></img>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="mt-2 p-2"
                        style={{
                          border: "3px solid #fec400",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="mb-2 d-flex justify-content-center">
                          <h5>Poster Upload</h5>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div>
                              <div>
                                <span>Product's Poster Url</span>
                              </div>
                              <div>
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={(e) =>
                                    setInputPosterUrl(e.target.value)
                                  }
                                  value={inputPosterUrl}
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div>
                              <div>
                                <span>Target</span>
                              </div>
                              <div>
                                <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    onChange={(e) =>
                                      setInputPosterTarget(e.target.value)
                                    }
                                    value={inputPosterTarget}
                                  />
                                  <button
                                    class="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                    onClick={() => {
                                      inputPosterUrl !== "" && addLink();
                                    }}
                                  >
                                    Button
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mt-2 p-2"
                        style={{
                          border: "3px solid #fec400",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="row">
                          {posterAllUrl.map((img) => (
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
                                    setPosterAllUrl(
                                      posterAllUrl.filter(
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
                  </StickyBox>
                </div>
                <div className="col-4">
                  <h3>Resource</h3>
                  <ResourceSection></ResourceSection>
                </div>
              </div>
              <div
                className="mt-2 p-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                }}
              >
                <h4>All Product's Poster -------</h4>
                <div className="row">
                  {!dbdata.length === false &&
                    dbdata.map((dt) => (
                      <div className="col-6">
                        <DbPorductPoster
                          updatePoster={updatePoster}
                          deleteDb={deleteDb}
                          dt={dt.componentsSection}
                          id={dt._id}
                        ></DbPorductPoster>
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
