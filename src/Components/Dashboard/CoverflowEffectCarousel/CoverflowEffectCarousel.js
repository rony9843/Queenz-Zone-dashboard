import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import ResourceSection from "../CarouselSection/ResourceSection";
var Coverflow = require("react-coverflow");

export default function CoverflowEffectCarousel() {
  var fn = function () {
    /* do you want */
  };

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
                      <div>
                        <div className="row">
                          <div className="col-6">
                            <div
                              className="container mt-2 px-0 mx-0"
                              style={{ borderRadius: "10px" }}
                            >
                              <Coverflow
                                width={1000}
                                height={window.innerWidth < 400 ? 250 : 480}
                                // height={250}
                                displayQuantityOfSide={2}
                                navigation={false}
                                enableHeading={false}
                              >
                                <div
                                  onClick={() => fn()}
                                  onKeyDown={() => fn()}
                                  role="menuitem"
                                  tabIndex="0"
                                >
                                  <img
                                    src="https://i.ibb.co/XXr2WXk/482fb0ea-dbdf-4072-93b9-2d22f9bc19b7.png"
                                    alt="title or description"
                                    style={{ display: "block", width: "100%" }}
                                  />
                                </div>

                                <img
                                  src="https://i.ibb.co/Qn7xfDW/12330c4d-5a94-4362-b9f5-d8bafccb72a1.png"
                                  alt="title or description"
                                />

                                <img
                                  src="https://i.ibb.co/J2HyHZq/b7227d68-11ef-4d67-aa3b-2aca2af77a3d.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                />
                                <img
                                  src="https://i.ibb.co/FhpxfZb/a2888636-6565-4f6a-a511-22c761f961d4.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                />
                                <img
                                  src="https://i.ibb.co/XXszWR1/ff73c6d5-4c3d-4a97-ae21-2f72107f7bbd.png"
                                  alt="title or description"
                                  data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
                                  alt="title or description"
                                  data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
                                  alt="title or description"
                                  data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
                                  alt="title or description"
                                  data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
                                />
                                <img
                                  src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                  alt="title or description"
                                  data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
                                />
                              </Coverflow>
                            </div>
                          </div>
                          <div className="col-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, sequi necessitatibus fugit quibusdam
                            dolore praesentium quidem recusandae illum sed omnis
                            nihil ipsam voluptate officia, minus nostrum modi
                            vitae llam accusamus a nulla dicta ex. us quis et,
                            sint beatae dolores magnam quisquam aliquam tempore
                            earum nam! Dignissimos dolore corrupti, impedit
                            excepturi eveniet nisi quam iure deserunt. Assumenda
                            tenetur provident, molestiae, minus, sed dolores
                            odio in sint pariatur numquam doloremque officia
                            soluta officiis laborum!
                          </div>
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
                          <div className="col-4">
                            <div
                              className="mt-2 p-2"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="d-flex justify-content-center">
                                <h5>Poster #1</h5>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  {" "}
                                  <div className="col-12">
                                    <div>
                                      <span>Image Url</span>
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        class="form-control"
                                        aria-describedby="emailHelp"
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        value={name}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
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
                          <div className="col-4">
                            <div
                              className="mt-2 p-2"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="d-flex justify-content-center">
                                <h5>Poster #2</h5>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  {" "}
                                  <div className="col-12">
                                    <div>
                                      <span>Image Url</span>
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        class="form-control"
                                        aria-describedby="emailHelp"
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        value={name}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
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
                          <div className="col-4">
                            <div
                              className="mt-2 p-2"
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="d-flex justify-content-center">
                                <h5>Poster #3</h5>
                              </div>
                              <div className="row">
                                <div className="">
                                  {" "}
                                  <div className="col-12">
                                    <div>
                                      <span>Image Url</span>
                                    </div>
                                    <div>
                                      <input
                                        type="text"
                                        class="form-control"
                                        aria-describedby="emailHelp"
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        value={name}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
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
