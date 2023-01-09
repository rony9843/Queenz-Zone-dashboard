import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ResourceSection() {
  const fetchAllResource = () => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneAllResource"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is all fetch data resource : ", json);
        setFetchAllResourceFromDb(json);
      });
  };

  // for delete image from db
  const deleteResource = (props) => {
    console.log("this is delete image from database : ", props);

    // data upload
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneDeleteResource",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: props._id }),
      }
    )
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

  const [filterProductImage, setFilterProductImage] = useState([]);
  const [filterBanner, setFilterBanner] = useState([]);
  const [filterPoster, setFilterPoster] = useState([]);
  const [filterOthers, setFilterOthers] = useState([]);

  useEffect(() => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneAllResource"
    )
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

  return (
    <div>
      <div>
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
  );
}
