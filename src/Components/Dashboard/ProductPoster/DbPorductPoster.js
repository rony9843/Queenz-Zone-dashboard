import React from "react";

import Button from "@mui/material/Button";

export default function DbPorductPoster({ dt, id, deleteDb, updatePoster }) {
  console.log("this is all product poster data : ", dt);

  return (
    <div>
      <div
        className="mt-2 p-2"
        style={{
          border: "1px solid #fec400",
          borderRadius: "10px",
        }}
      >
        <div>
          <div className="d-flex justify-content-between">
            {/* componentsSection
Name
boxBg
boxBorderRadios
boxMb
boxMt
boxPb
boxPt
id
link
title
titleAlign
titleAndImageTarget
titleClr
titleImageDesktopLink
titleImageM
titleImageMb
titleImageMobileLink
titleImageMt
titleImageMx
titleP
titlePb
titlePt
titlePx
type
"ProductsPoster" */}

            <div>
              <span>Name : {dt.Name}</span>
            </div>
            <div>
              <span>Id : {dt.id}</span>
            </div>
          </div>
          <div
            className=" mt-2 "
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          >
            <div>Box details------</div>
            <div className=" d-flex justify-content-between">
              <div>
                <span>
                  Bg :{" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "inline-block",
                      borderRadius: "5px",
                      backgroundColor: `${dt.boxBg}`,
                    }}
                  ></div>{" "}
                </span>
              </div>
              <div>
                <span>Radios : {dt.boxBorderRadios}</span>
              </div>
            </div>
            <div className=" d-flex justify-content-between">
              <div>
                <span>Mb : {dt.boxMb}</span>
              </div>
              <div>
                <span>Mt : {dt.boxMt}</span>
              </div>
              <div>
                <span>Pt : {dt.boxPt}</span>
              </div>
              <div>
                <span>Pb : {dt.boxPb}</span>
              </div>
            </div>
          </div>
          <div
            className=" mt-2 "
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          >
            <div>Title details------</div>
            <div className=" d-flex justify-content-between">
              <div>
                <span>Title : {dt.title}</span>
              </div>
              <div>
                <span>
                  Clr :{" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "inline-block",
                      borderRadius: "5px",
                      backgroundColor: `${dt.titleClr}`,
                    }}
                  ></div>{" "}
                </span>
              </div>
              <div>
                <span>Align : {dt.titleAlign}</span>
              </div>
            </div>
            <div className=" d-flex justify-content-between">
              <div>
                <span>P : {dt.titleP}</span>
              </div>
              <div>
                <span>Pt : {dt.titlePt}</span>
              </div>
              <div>
                <span>Pb : {dt.titlePb}</span>
              </div>
              <div>
                <span>Px : {dt.titlePx}</span>
              </div>
            </div>
          </div>
          <div
            className=" mt-2 "
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          >
            <div>Title Image details------</div>
            <div className="row">
              <div className="col-3">
                <span>Mobile </span>
              </div>
              <div className="col-9">
                <img
                  src={
                    dt.titleImageMobileLink === ""
                      ? dt.titleImageDesktopLink
                      : dt.titleImageMobileLink
                  }
                  class="img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <span>Desktop </span>
              </div>
              <div className="col-9">
                {console.log("this is image link :  ", dt)}
                <img
                  src={
                    dt.titleImageDesktopLink === ""
                      ? dt.titleImageMobileLink
                      : dt.titleImageDesktopLink
                  }
                  class="img-fluid"
                  alt="..."
                />
              </div>
            </div>

            <div className=" d-flex justify-content-between">
              <div>
                <span>M : {dt.titleImageM}</span>
              </div>
              <div>
                <span>Mt : {dt.titleImageMt}</span>
              </div>
              <div>
                <span>Mb : {dt.titleImageMb}</span>
              </div>
              <div>
                <span>Mx : {dt.titleImageMx}</span>
              </div>
            </div>
          </div>
          <div
            className=" mt-2 "
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          >
            <div>Title and Title Image Target------</div>
            <div className="d-flex justify-content-between">
              <div>
                <span>Target: </span>
              </div>
              <div>
                <span>{dt.titleAndImageTarget}</span>
              </div>
            </div>
          </div>
          <div
            className=" mt-2 "
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          >
            <div>Poster------</div>
            <div className="d-flex justify-content-between">
              <div className="row">
                {dt.link.map((img) => (
                  <div className="col-3 mt-1">
                    <div>
                      <img src={img.link} class="img-fluid" alt="..."></img>
                    </div>
                    <div style={{ fontSize: "6px" }}>
                      <span>{img.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-between mt-2">
          <div>
            <Button
              style={{
                backgroundColor: "red",
                color: "black",
                boxShadow: "none",
              }}
              variant="contained"
              onClick={() => deleteDb(id)}
            >
              Delete
            </Button>
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#FEC400",
                color: "black",
                boxShadow: "none",
              }}
              onClick={() => updatePoster(id, dt)}
              variant="contained"
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
