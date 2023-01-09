import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import StickyBox from "react-sticky-box";
import PreviousSection from "./PreviousSection";
import ResourceSection from "./ResourceSection";

export default function CarouselSection() {
  const [carouselName, setCarouselName] = useState("");
  const [carouselId, setCarouselId] = useState(
    Math.floor(1000 + Math.random() * 9000)
  );

  const [carouselDbId, setCarouselDbId] = useState("");
  const [carouselinputLink, setCarouselInputLink] = useState("");
  const [carouselinputLinkDesktop, setCarouselInputLinkDesktop] = useState("");
  const [carouselALLinputLink, setCarouselALLInputLink] = useState([]);
  const [carouselinputInterval, setCarouselInputInterval] = useState("2000");
  const [carouselTarget, setCarouselTarget] = useState("");
  const [carouselMt, setCarouselMt] = useState("");
  const [carouselMb, setCarouselMb] = useState("");

  // for add link
  const addLink = () => {
    if (carouselinputLink !== "" || carouselinputLinkDesktop !== "") {
      setCarouselALLInputLink([
        ...carouselALLinputLink,
        {
          mobileLink: carouselinputLink,
          target: carouselTarget,
          desktopLink: carouselinputLinkDesktop,
        },
      ]);
      setCarouselInputLink("");
      setCarouselTarget("");
      setCarouselInputLinkDesktop("");
    }
  };

  // for add link
  const removeLink = (props) => {
    setCarouselALLInputLink(
      carouselALLinputLink.filter(
        (dt) =>
          (dt.mobileLink === "" ? dt.desktopLink : dt.mobileLink) !== props
      )
    );
  };

  // for post database
  const submitBtn = () => {
    if (
      carouselName !== "" &&
      !carouselALLinputLink.length !== true &&
      carouselinputInterval !== ""
    ) {
      const componentsSection = {
        type: "CarouselSection",
        id: carouselId,
        Name: carouselName,
        Interval: carouselinputInterval,
        link: carouselALLinputLink,

        mt: carouselMt,
        mb: carouselMb,
      };

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneComponentsLayout",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ componentsSection }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          readData();
          setCarouselId(Math.floor(1000 + Math.random() * 9000));
          setCarouselName("");
          setCarouselInputInterval("2000");
          setCarouselALLInputLink([]);
          setCarouselInputLink("");
          setCarouselTarget("");
          setCarouselInputLinkDesktop("");

          setCarouselMt("");
          setCarouselMb("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const [fetchAllData, setFetchAllData] = useState([
    {
      componentsSection: {
        type: "CarouselSection",
        id: "",
        Name: "",
        Interval: "",
        link: [],
      },
    },
  ]);

  const readData = () => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadComponentsSection"
    )
      .then((response) => response.json())
      .then((json) => {
        setFetchAllData(json);
      });
  };

  // delete data from database
  const deleteData = (props) => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneDeleteComponentsSection",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: props }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        readData();
        setCarouselId(Math.floor(1000 + Math.random() * 9000));
        setCarouselName("");
        setCarouselInputInterval("2000");
        setCarouselALLInputLink([]);
        setUpdateState(false);
        setCarouselDbId("");
        setCarouselTarget("");
        setCarouselMt("");
        setCarouselMb("");
        setCarouselInputLinkDesktop("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    readData();
  }, []);

  const [updateState, setUpdateState] = useState(false);

  // update data
  const updateData = (props) => {
    setCarouselDbId(props._id);
    setCarouselId(props.componentsSection.id);
    setCarouselName(props.componentsSection.Name);
    setCarouselInputInterval(props.componentsSection.Interval);

    setCarouselALLInputLink(props.componentsSection.link);
    //  setCarouselInputLinkDesktop(props.componentsSection.desktopLink);

    setCarouselMt(props.componentsSection.mt);
    setCarouselMb(props.componentsSection.mb);
    setUpdateState(true);
  };

  // cancel update
  const cancelBtn = () => {
    setCarouselId(Math.floor(1000 + Math.random() * 9000));
    setCarouselName("");
    setCarouselInputInterval("2000");
    setCarouselALLInputLink([]);
    setUpdateState(false);
    setCarouselDbId("");
    setCarouselTarget("");
    setCarouselInputLinkDesktop("");

    setCarouselMt("");
    setCarouselMb("");
  };

  // update submit btn
  const updateSubmitbtn = () => {
    const componentsSection = {
      type: "CarouselSection",
      id: carouselId,
      Name: carouselName,
      mt: carouselMt,
      mb: carouselMb,
      Interval: carouselinputInterval,
      link: carouselALLinputLink,
    };

    console.log(componentsSection, " 234 :: ", carouselMb, carouselMt);
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneUpdateComponentsSection",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: carouselDbId,
          componentsSection: componentsSection,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        readData();
        setCarouselId(Math.floor(1000 + Math.random() * 9000));
        setCarouselName("");
        setCarouselInputInterval("2000");
        setCarouselALLInputLink([]);
        setUpdateState(false);
        setCarouselDbId("");
        setCarouselTarget("");
        setCarouselInputLinkDesktop("");

        setCarouselMt("");
        setCarouselMb("");
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
                  Carousel
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
                      {updateState === false ? (
                        <div class="d-flex flex-row-reverse">
                          <button
                            style={{
                              backgroundColor: "#FEC400",
                              border: "none",
                              color: "black",
                            }}
                            onClick={() => submitBtn()}
                            type="submit"
                            class="btn btn-primary"
                          >
                            Create new carousel section
                          </button>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-between">
                          <div>
                            <button
                              style={{
                                border: "none",
                                color: "black",
                              }}
                              onClick={() => deleteData(carouselDbId)}
                              type="submit"
                              class="btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                          <div>
                            <button
                              style={{
                                backgroundColor: "#FEC400",
                                border: "none",
                                color: "black",
                              }}
                              onClick={() => cancelBtn()}
                              type="submit"
                              class="btn btn-danger"
                            >
                              Cancel
                            </button>
                          </div>
                          <div>
                            <button
                              style={{
                                backgroundColor: "#FEC400",
                                border: "none",
                                color: "black",
                              }}
                              onClick={() => updateSubmitbtn()}
                              type="submit"
                              class="btn btn-danger"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="row">
                        <div className="col-6">
                          <div class="mb-3">
                            <label for="SectionName" class="form-label">
                              Section Name
                            </label>
                            <input
                              type="text"
                              onChange={(e) => setCarouselName(e.target.value)}
                              class="form-control"
                              id="SectionName"
                              value={carouselName}
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div class="">
                            <label for="inputLink" class="form-label">
                              Interval
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="inputLink"
                              placeholder="2000"
                              onChange={(e) =>
                                setCarouselInputInterval(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div class="mb-3">
                            <label for="disabledTextInput" class="form-label">
                              Carousel Id
                            </label>
                            <input
                              type="text"
                              id="disabledTextInput"
                              class="form-control"
                              placeholder={carouselId}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div class="mb-3">
                            <label for="mt" class="form-label">
                              Margin Top
                            </label>
                            <input
                              type="number"
                              onChange={(e) => setCarouselMt(e.target.value)}
                              class="form-control"
                              id="mt"
                              max="5"
                              min={0}
                              value={carouselMt}
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div class="">
                            <label for="mb" class="form-label">
                              Margin bottom
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="mb"
                              placeholder=""
                              onChange={(e) => setCarouselMb(e.target.value)}
                              value={carouselMb}
                              max={5}
                              min={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <span>Mobile View -----</span>
                        </div>
                        <Carousel
                          showStatus={false}
                          showIndicators={false}
                          showThumbs={false}
                          infiniteLoop={true}
                          autoPlay={true}
                          interval={carouselinputInterval}
                        >
                          {carouselALLinputLink.map((img) => (
                            <div>
                              <img
                                src={
                                  img.mobileLink === ""
                                    ? img.desktopLink
                                    : img.mobileLink
                                }
                                alt="product"
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                      <div>
                        <div>
                          <span>Desktop View ------</span>
                        </div>
                        <Carousel
                          showStatus={false}
                          showIndicators={false}
                          showThumbs={false}
                          infiniteLoop={true}
                          autoPlay={true}
                          interval={carouselinputInterval}
                        >
                          {carouselALLinputLink.map((img) => (
                            <div>
                              <img
                                src={
                                  img.desktopLink === ""
                                    ? img.mobileLink
                                    : img.desktopLink
                                }
                                alt="product"
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div class="mb-3 mt-2">
                            <label for="inputLink" class="form-label">
                              Enter the Image's url (Mobile View)
                            </label>

                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                onChange={(e) =>
                                  setCarouselInputLink(e.target.value)
                                }
                                value={carouselinputLink}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div class="mb-3 mt-2">
                            <label for="inputLink" class="form-label">
                              Enter the Image's url (Desktop View)
                            </label>

                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                onChange={(e) =>
                                  setCarouselInputLinkDesktop(e.target.value)
                                }
                                value={carouselinputLinkDesktop}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div class="mb-3 mt-2">
                            <label for="target" class="form-label">
                              target
                            </label>

                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                onChange={(e) =>
                                  setCarouselTarget(e.target.value)
                                }
                                value={carouselTarget}
                              />
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                                onClick={() => {
                                  // eslint-disable-next-line no-mixed-operators

                                  // eslint-disable-next-line no-mixed-operators

                                  addLink();
                                }}
                              >
                                Enter
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* for result */}
                      <div className="mt-3">
                        <div className="row">
                          {carouselALLinputLink.map((img) => (
                            <div className="col-4 mt-2">
                              <div>
                                <span
                                  style={{
                                    fontSize: "13px",
                                    color: "gray",
                                  }}
                                >
                                  Target : {img.target}
                                </span>
                              </div>
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "gray",
                                }}
                              >
                                Mobile view -----
                              </span>
                              <img
                                src={
                                  img.mobileLink === ""
                                    ? img.desktopLink
                                    : img.mobileLink
                                }
                                class="img-fluid"
                                alt="..."
                              />
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "gray",
                                }}
                              >
                                Desktop view -----
                              </span>
                              <img
                                src={
                                  img.desktopLink === ""
                                    ? img.mobileLink
                                    : img.desktopLink
                                }
                                class="img-fluid"
                                alt="..."
                              />
                              <Button
                                className="mt-1"
                                style={{ width: "100%" }}
                                variant="contained"
                                color="error"
                                onClick={() =>
                                  removeLink(
                                    img.mobileLink === ""
                                      ? img.desktopLink
                                      : img.mobileLink
                                  )
                                }
                              >
                                Cancel
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </StickyBox>
                </div>
                <div className="col-4">
                  <ResourceSection></ResourceSection>
                </div>
              </div>
              <div>
                {/* previous */}
                <div
                  style={{ border: "2px solid #fec400", borderRadius: "10px" }}
                  className="p-2 mt-3"
                >
                  <h4>
                    <b>All Carousel -----------</b>{" "}
                  </h4>
                  <PreviousSection
                    updateData={updateData}
                    deleteData={deleteData}
                    fetchAllData={fetchAllData}
                  ></PreviousSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
