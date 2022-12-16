import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import ResourceSection from "../CarouselSection/ResourceSection";
import SoloStaticBanner from "./SoloStaticBanner";

export default function StaticBanner() {
  // all data from db
  const [allDbData, setAllDbData] = useState([]);

  // db id
  const [dbId, setDbId] = useState("");

  // name
  const [name, setName] = useState("");

  // id
  const [id, setId] = useState(Math.floor(1000 + Math.random() * 9000));

  // mobile poster url
  const [mobilePosterUrl, setMobilePosterUrl] = useState("");

  // desktop poster url
  const [desktopPosterUrl, setDesktopPosterUrl] = useState("");

  // target for image
  const [target, setTarget] = useState("");

  // submit btn
  const submitBtn = () => {
    if (mobilePosterUrl !== "" || desktopPosterUrl !== "") {
      const componentsSection = {
        type: "StaticBanner",
        id: id,
        Name: name,
        mobilePosterLink: mobilePosterUrl,
        desktopPosterLink: desktopPosterUrl,
        target: target,
      };

      fetch("http://localhost:5000/queenZoneStaticPoster", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          componentsSection: componentsSection,
        }),
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => {
          console.error("Error:", error);
          readData();
        });
    }
  };

  const readData = () => {
    fetch("http://localhost:5000/queenZoneReadStaticPoster")
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
    fetch("http://localhost:5000/queenZoneDeleteStaticBanner", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props }),
    })
      .then((response) => response.json())
      .then((data) => {
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
                  Static Banner
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
                              Create New Static Banner Component
                            </Button>
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
                        {mobilePosterUrl !== "" && (
                          <div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <span>Mobile View :</span>
                              </div>
                              <div>
                                <Button
                                  style={{
                                    backgroundColor: "red",
                                    boxShadow: "none",
                                  }}
                                  variant="contained"
                                  onClick={() => setMobilePosterUrl("")}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                            <div className="mt-1">
                              <img
                                src={mobilePosterUrl}
                                class="img-fluid"
                                alt="..."
                              />
                            </div>
                          </div>
                        )}
                        {desktopPosterUrl !== "" && (
                          <div className="mt-2">
                            <div className="d-flex justify-content-between">
                              <div>
                                <span>Desktop View :</span>
                              </div>
                              <div>
                                <Button
                                  style={{
                                    backgroundColor: "red",
                                    boxShadow: "none",
                                  }}
                                  onClick={() => setDesktopPosterUrl("")}
                                  variant="contained"
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                            <div className="mt-1">
                              <img
                                src={desktopPosterUrl}
                                class="img-fluid"
                                alt="..."
                              />
                            </div>
                          </div>
                        )}
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
                                <span>Product's Poster Url (Desktop) </span>
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
                        <div className="row">
                          <div className="col-6">
                            <div>
                              <div>
                                <span>Product's Poster Url (Mobile) </span>
                              </div>
                              <div>
                                <input
                                  type="text"
                                  class="form-control"
                                  aria-describedby="emailHelp"
                                  onChange={(e) =>
                                    setMobilePosterUrl(e.target.value)
                                  }
                                  value={mobilePosterUrl}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div>
                              <div>
                                <span>Product's Poster Url (Desktop) </span>
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
                                      setDesktopPosterUrl(e.target.value)
                                    }
                                    value={desktopPosterUrl}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div>
                              <span>Target :</span>
                            </div>
                            <div>
                              <input
                                type="text"
                                class="form-control"
                                aria-describedby="emailHelp"
                                onChange={(e) => setTarget(e.target.value)}
                                value={target}
                              />
                            </div>
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
                      <div className="col-6">
                        <SoloStaticBanner
                          id={dt._id}
                          deleteDb={deleteDb}
                          dt={dt.componentsSection}
                        ></SoloStaticBanner>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
