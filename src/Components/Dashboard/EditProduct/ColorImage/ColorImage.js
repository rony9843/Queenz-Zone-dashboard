import React from "react";

export default function ColorImage({ dt }) {
  console.log("this is color Image : ", dt);

  return (
    <div>
      <div>
        <div>
          {dt && (
            <div
              style={{
                backgroundColor: `${dt[0].color}`,
                height: "100px",
                width: "100px",
              }}
            >
              {" "}
            </div>
          )}

          <div>
            <input type="text" placeholder="link" />
          </div>

          <div>
            {dt &&
              dt[0].image.map((img) => (
                <span className="border ">{img[0]}</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
