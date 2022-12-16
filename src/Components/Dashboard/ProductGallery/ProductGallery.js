import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import ResourceSection from "../CarouselSection/ResourceSection";

export default function ProductGallery() {
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
                  Products's Gallery
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
                        <div
                          className="container mt-2 px-0"
                          style={{ borderRadius: "10px" }}
                        >
                          <img
                            class="img-fluid"
                            src="https://i.ibb.co/bXgcLC6/screenshot-localhost-3000-2022-11-25-15-25-25.png"
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
                                <div>
                                  <h5>Box Design</h5>
                                </div>{" "}
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <div>
                                    <span>Bg Clr</span>
                                  </div>
                                  <div>
                                    <input
                                      type="color"
                                      name=""
                                      id=""
                                      style={{
                                        width: "100%",
                                        borderRadius: "5px",
                                        border: "none",
                                        height: "39px",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div>
                                    <span>Bor.. Ra..</span>
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      class="form-control"
                                      min="0"
                                      max="20"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
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
                                <div>Title Design ---------</div>

                                <div className="col-6">
                                  <div>
                                    <span>Title</span>
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
                                    />
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div>
                                    <span>Btn Crl</span>
                                  </div>
                                  <div>
                                    <input
                                      type="color"
                                      name=""
                                      id=""
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
                                  <h5>Title Image Design</h5>
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
                                      onChange={(e) => setName(e.target.value)}
                                      value={name}
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
                                      onChange={(e) => setName(e.target.value)}
                                      value={name}
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
                                    />
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
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
                                />
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
                                  onChange={(e) => setName(e.target.value)}
                                  value={name}
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
                                  />
                                  <button
                                    class="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                  >
                                    Button
                                  </button>
                                </div>
                              </div>
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
                    <div className="col-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit saepe ipsum dolorem cupiditate vitae sint
                      dignissimos aperiam, rem vel necessitatibus tenetur omnis
                      voluptas, voluptatem quasi? Ea eum, aut voluptatibus
                      laboriosam doloribus similique saepe corporis in
                      veritatis, obcaecati amet blanditiis id necessitatibus
                      iste fugit nulla! Modi, corrupti optio? Maxime ratione
                      doloremque possimus eius, facilis explicabo modi alias
                      expedita nihil. Nostrum velit quo odio libero tempora in
                      eum natus consectetur ex. Sint maiores, iusto minima
                      tenetur rerum eos et dolores consectetur maxime
                      exercitationem ducimus corrupti sunt eligendi delectus
                      mollitia deserunt quos, vitae expedita earum neque?
                      Maiores delectus molestiae illum tempora quas asperiores
                      beatae rem vel cupiditate cum id nemo quo animi aspernatur
                      autem voluptatem sequi iste, consequatur vitae pariatur
                      voluptatum et iure omnis eos. Porro dolor repellendus
                      ratione itaque aliquam, neque odit corporis ex temporibus
                      corrupti ipsam voluptatem vitae officia consequatur
                      voluptatibus libero cumque quas, laboriosam eius hic
                      laborum dignissimos incidunt iure! Magnam ad alias dolorem
                      fuga fugit in sequi iure, hic fugiat vel consequuntur ipsa
                      deserunt optio at perspiciatis eius autem facilis
                      necessitatibus? Molestias ipsa iure ratione illum magni
                      repellat, voluptas optio labore temporibus enim quaerat
                      ipsum nostrum ab dolores architecto facilis reprehenderit
                      a! Quisquam vel sunt quas dignissimos, ullam asperiores!
                    </div>
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
