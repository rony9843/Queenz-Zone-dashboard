import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";

export default function Resource() {
  // input box
  const [productImageInput, setProductImageInput] = useState("");
  const [bannerInput, setBannerInput] = useState("");
  const [posterInput, setPosterInput] = useState("");
  const [othersInput, setOtherInput] = useState("");

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

  // submit btn
  const submitBtn = (props) => {
    const resource = {
      type: props,
      link:
        props === "ProductImage"
          ? productImageInput
          : props === "Banner"
          ? bannerInput
          : props === "Poster"
          ? posterInput
          : othersInput,
    };

    // data upload
    fetch("http://localhost:5000/queenZoneUserUploadResource", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resource),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        fetchAllResource();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [fetchAllResourceFromDb, setFetchAllResourceFromDb] = useState([]);

  const fetchAllResource = () => {
    fetch("http://localhost:5000/queenZoneAllResource")
      .then((response) => response.json())
      .then((json) => {
        console.log("this is all fetch data resource : ", json);
        setFetchAllResourceFromDb(json);
      });
  };

  const [filterProductImage, setFilterProductImage] = useState([]);
  const [filterBanner, setFilterBanner] = useState([]);
  const [filterPoster, setFilterPoster] = useState([]);
  const [filterOthers, setFilterOthers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/queenZoneAllResource")
      .then((response) => response.json())
      .then((json) => {
        console.log("this is all fetch data resource : ", json);
        setFetchAllResourceFromDb(json);
      });
  }, []);

  useEffect(() => {
    setFilterProductImage(
      fetchAllResourceFromDb.filter((dt) => dt.resource.type === "ProductImage")
    );
    setFilterBanner(
      fetchAllResourceFromDb.filter((dt) => dt.resource.type === "Banner")
    );
    setFilterPoster(
      fetchAllResourceFromDb.filter((dt) => dt.resource.type === "Poster")
    );
    setFilterOthers(
      fetchAllResourceFromDb.filter((dt) => dt.resource.type === "Other")
    );
  }, [fetchAllResourceFromDb]);

  // for delete image from db
  const deleteResource = (props) => {
    console.log("this is delete image from database : ", props);

    // data upload
    fetch("http://localhost:5000/queenZoneDeleteResource", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        fetchAllResource();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <div className="p-2">
          <div class="pt-2 d-flex justify-content-between">
            {" "}
            <div>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                Resource
              </span>
            </div>
          </div>

          <div
            className="mt-2 p-2"
            style={{ border: "3px solid #fec400", borderRadius: "10px" }}
          >
            <div>
              <h4 className="mb-3">Image Cropping</h4>
              <iframe
                width={"100%"}
                height={700}
                src="https://bulkimagecrop.com/"
                frameborder="0"
                alt="imageCrop"
              ></iframe>
            </div>
            <div
              className="p-3"
              style={{ border: "2px solid #fec400", borderRadius: "10px" }}
            >
              <h4 className="mb-2" style={{ fontWeight: "bold" }}>
                Image Upload
              </h4>
              <div>
                <div className="row">
                  <div className="col-4">
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
                                onClick={() => {
                                  setResourceImageUrlArray(
                                    resourceImageUrlArray.filter(
                                      (allData) => allData !== dt
                                    )
                                  );
                                }}
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

                  <div className="col-3">
                    <StickyBox offsetTop={20} offsetBottom={20}>
                      <div className="mt-3">
                        <div>
                          <div class="mb-3">
                            <label for="productImage" class="form-label">
                              Product's Image
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="productImage"
                              aria-describedby="emailHelp"
                              onChange={(e) =>
                                setProductImageInput(e.target.value)
                              }
                              value={productImageInput}
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>

                          <div class="d-flex flex-row-reverse">
                            <button
                              className=""
                              type="submit"
                              class="btn btn-primary"
                              onClick={() => {
                                productImageInput !== "" &&
                                  submitBtn("ProductImage");
                                setProductImageInput("");
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div>
                          <div class="mb-3">
                            <label for="productImage" class="form-label">
                              Banner
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              onChange={(e) => setBannerInput(e.target.value)}
                              id="productImage"
                              value={bannerInput}
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>

                          <div class="d-flex flex-row-reverse">
                            <button
                              className=""
                              type="submit"
                              class="btn btn-primary"
                              onClick={() => {
                                bannerInput !== "" && submitBtn("Banner");
                                setBannerInput("");
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div>
                          <div class="mb-3">
                            <label for="productImage" class="form-label">
                              Poster
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              onChange={(e) => setPosterInput(e.target.value)}
                              value={posterInput}
                              id="productImage"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>

                          <div class="d-flex flex-row-reverse">
                            <button
                              className=""
                              type="submit"
                              class="btn btn-primary"
                              onClick={() => {
                                posterInput !== "" && submitBtn("Poster");
                                setPosterInput("");
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div>
                          <div class="mb-3">
                            <label for="productImage" class="form-label">
                              Others
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="productImage"
                              onChange={(e) => setOtherInput(e.target.value)}
                              aria-describedby="emailHelp"
                              value={othersInput}
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>

                          <div class="d-flex flex-row-reverse">
                            <button
                              className=""
                              type="submit"
                              class="btn btn-primary"
                              onClick={() => {
                                othersInput !== "" && submitBtn("Other");
                                setOtherInput("");
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </StickyBox>
                  </div>

                  <div className="col-5">
                    <div className="mt-3">
                      <div>
                        <div class="mb-3">
                          <label for="productImage" class="form-label">
                            <b>------ Product's Image ------</b>{" "}
                          </label>

                          <div>
                            <div className="row">
                              {!filterProductImage.length === false &&
                                filterProductImage.map((dt) => (
                                  <div
                                    className="col-3 p-1"
                                    style={{ padding: "0px", margin: "0px" }}
                                  >
                                    <div>
                                      <img
                                        style={{
                                          width: "100%",
                                          borderRadius: "5px",
                                        }}
                                        src={dt.resource.link}
                                        alt="error"
                                      />
                                    </div>
                                    <div className="mt-1 d-flex justify-content-center">
                                      <Button
                                        // onClick={() => {
                                        //   setResourceImageUrlArray(
                                        //     resourceImageUrlArray.filter(
                                        //       (allData) => allData !== dt
                                        //     )
                                        //   );
                                        // }}
                                        onClick={() => deleteResource(dt)}
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
                    <div className="mt-3">
                      <div>
                        <div class="mb-3">
                          <label for="productImage" class="form-label">
                            <b>------ Banner ------</b>
                          </label>

                          <div>
                            <div className="row">
                              {!filterBanner.length === false &&
                                filterBanner.map((dt) => (
                                  <div
                                    className="col-3 p-1"
                                    style={{ padding: "0px", margin: "0px" }}
                                  >
                                    <div>
                                      <img
                                        style={{
                                          width: "100%",
                                          borderRadius: "5px",
                                        }}
                                        src={dt.resource.link}
                                        alt="error"
                                      />
                                    </div>
                                    <div className="mt-1 d-flex justify-content-center">
                                      <Button
                                        // onClick={() => {
                                        //   setResourceImageUrlArray(
                                        //     resourceImageUrlArray.filter(
                                        //       (allData) => allData !== dt
                                        //     )
                                        //   );
                                        // }}
                                        style={{
                                          backgroundColor: "red",
                                          color: "white",
                                        }}
                                        size="small"
                                        variant="outlined"
                                        onClick={() => deleteResource(dt)}
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
                    <div className="mt-3">
                      <div>
                        <div class="mb-3">
                          <label for="productImage" class="form-label">
                            <b>------ Poster ------</b>
                          </label>

                          <div>
                            <div className="row">
                              {!filterPoster.length === false &&
                                filterPoster.map((dt) => (
                                  <div
                                    className="col-3 p-1"
                                    style={{ padding: "0px", margin: "0px" }}
                                  >
                                    <div>
                                      <img
                                        style={{
                                          width: "100%",
                                          borderRadius: "5px",
                                        }}
                                        src={dt.resource.link}
                                        alt="error"
                                      />
                                    </div>
                                    <div className="mt-1 d-flex justify-content-center">
                                      <Button
                                        // onClick={() => {
                                        //   setResourceImageUrlArray(
                                        //     resourceImageUrlArray.filter(
                                        //       (allData) => allData !== dt
                                        //     )
                                        //   );
                                        // }}
                                        onClick={() => deleteResource(dt)}
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

                    <div className="mt-3">
                      <div>
                        <div class="mb-3">
                          <label for="productImage" class="form-label">
                            <b>------ Others ------</b>
                          </label>

                          <div>
                            <div className="row">
                              {!filterOthers.length === false &&
                                filterOthers.map((dt) => (
                                  <div
                                    className="col-3 p-1"
                                    style={{ padding: "0px", margin: "0px" }}
                                  >
                                    <div>
                                      <img
                                        style={{
                                          width: "100%",
                                          borderRadius: "5px",
                                        }}
                                        src={dt.resource.link}
                                        alt="error"
                                      />
                                    </div>
                                    <div className="mt-1 d-flex justify-content-center">
                                      <Button
                                        // onClick={() => {
                                        //   setResourceImageUrlArray(
                                        //     resourceImageUrlArray.filter(
                                        //       (allData) => allData !== dt
                                        //     )
                                        //   );
                                        // }}
                                        onClick={() => deleteResource(dt)}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
