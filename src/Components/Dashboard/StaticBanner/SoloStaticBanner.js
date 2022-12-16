import Button from "@mui/material/Button";
import React from "react";

export default function SoloStaticBanner({ id, deleteDb, dt }) {
  console.log(dt);

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
            <div>
              <span>Name : {dt.Name}</span>
            </div>
            <div>
              <span>Id : {dt.id}</span>
            </div>
          </div>
          {dt.mobilePosterLink !== "" && (
            <div>
              <span>Mobile View :</span>
              <div className="mt-1">
                <img src={dt.mobilePosterLink} class="img-fluid" alt="..." />
              </div>
            </div>
          )}

          {dt.desktopPosterLink !== "" && (
            <div>
              <span>Desktop View :</span>
              <div className="mt-1">
                <img src={dt.desktopPosterLink} class="img-fluid" alt="..." />
              </div>
            </div>
          )}
          <div>
            <span>Target : </span>
            <div>
              <span>{dt.target}</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="d-flex justify-content-end">
            <Button
              style={{
                backgroundColor: "red",
                boxShadow: "none",
              }}
              variant="contained"
              onClick={() => deleteDb(id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
