import Button from "@mui/material/Button";
import React, { useState } from "react";
import styled from "styled-components";

export default function GraphicDesign() {
  // option name
  const [option, setOption] = useState("Picsart");

  // website zoom size
  const [zoom, setZoom] = useState(window.innerHeight);

  return (
    <GraphicDesignStyle>
      <div>
        <div className="p-2">
          <div class="pt-2 d-flex justify-content-between">
            {" "}
            <div>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                Graphic Design
              </span>
            </div>
          </div>

          <div
            className="mt-2 p-2 "
            style={{ border: "3px solid #fec400", borderRadius: "10px" }}
          >
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div
                  onClick={() => setOption("Picsart")}
                  className="m-1 p-2 rounded "
                  style={{
                    backgroundColor: ` ${
                      option === "Picsart" ? "#FEC400" : "white"
                    } `,
                    cursor: "pointer",
                  }}
                >
                  <b>Picsart</b>
                </div>
                <div
                  onClick={() => setOption("Photopea")}
                  className="m-1 p-2 rounded "
                  style={{
                    backgroundColor: ` ${
                      option === "Photopea" ? "#FEC400" : "white"
                    } `,
                    cursor: "pointer",
                  }}
                >
                  <b>Photopea</b>
                </div>
                <div
                  onClick={() => setOption("Ed Photo")}
                  className="m-1 p-2 rounded"
                  style={{
                    backgroundColor: ` ${
                      option === "Ed Photo" ? "#FEC400" : "white"
                    } `,
                    cursor: "pointer",
                  }}
                >
                  <b>Ed Photo</b>
                </div>
                <div
                  onClick={() => setOption("Fotor")}
                  className="m-1 p-2 rounded"
                  style={{
                    backgroundColor: ` ${
                      option === "Fotor" ? "#FEC400" : "white"
                    } `,
                    cursor: "pointer",
                  }}
                >
                  <b>Fotor</b>
                </div>
              </div>
              <Button
                style={{
                  backgroundColor: "#FEC400",
                  borderRadius: "5px",
                  color: "black",
                }}
                className="p-2"
                variant="contained"
              >
                Image's Recommended Size
              </Button>

              <div
                style={{
                  backgroundColor: "#FEC400",
                  borderRadius: "5px",
                }}
                className="p-2"
              >
                <Button
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={() => setZoom(zoom - 1)}
                  variant="contained"
                >
                  -
                </Button>

                <span className="mx-2">{zoom}</span>
                <Button
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={() => setZoom(zoom + 1)}
                  variant="contained"
                >
                  +
                </Button>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                {option === "Picsart" && (
                  <iframe
                    src="https://picsart.com/create"
                    alt="Photopea"
                    style={{ borderRadius: "10px" }}
                    alt="Picsart"
                    width={"100%"}
                    height={zoom}
                  ></iframe>
                )}
              </div>
              <div className="">
                {option === "Photopea" && (
                  <iframe
                    src="https://www.photopea.com/"
                    alt="Photopea"
                    style={{ borderRadius: "10px" }}
                    alt="Ed Photo"
                    width={"100%"}
                    height={zoom}
                  ></iframe>
                )}
              </div>
              <div>
                {option === "Ed Photo" && (
                  <iframe
                    src="https://edit.photo/"
                    style={{ borderRadius: "10px" }}
                    alt="Ed Photo"
                    width={"100%"}
                    height={zoom}
                  ></iframe>
                )}
              </div>
              <div>
                {option === "Fotor" && (
                  <iframe
                    src="https://www.fotor.com/"
                    alt="Fotor"
                    style={{ borderRadius: "10px" }}
                    alt="Ed Photo"
                    width={"100%"}
                    height={zoom}
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GraphicDesignStyle>
  );
}

const GraphicDesignStyle = styled.div``;
