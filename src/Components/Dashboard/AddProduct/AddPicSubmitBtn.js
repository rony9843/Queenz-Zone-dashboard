import React from "react";

export default function AddPicSubmitBtn({
  submitPicBtndisabled,
  demo,
  vusOk,
  setSubmitPicBtndisabled,
  AllProductInfo,
  productColor,
}) {
  return (
    <div>
      {!AllProductInfo.length === true ? (
        <button
          className="btn btn-warning btn-lg"
          style={{
            border: "1px solid #999999",
            backgroundColor: "#cccccc",
            color: "#666666",

            cursor: "not-allowed pointer",
          }}
          onClick={() => {}}
        >
          Submit Product
        </button>
      ) : (
        // main
        <button
          className="btn btn-warning btn-lg"
          style={{
            border: `${
              submitPicBtndisabled > 1 ? " 1px solid #999999" : "none"
            }`,
            backgroundColor: `${
              submitPicBtndisabled > 1 ? "#cccccc" : "#fec400"
            }`,
            color: `${submitPicBtndisabled > 1 ? "#666666" : "black"}`,

            cursor: `${submitPicBtndisabled > 1 ? "not-allowed" : "pointer"}`,
          }}
          onClick={() => {
            demo(productColor);
            vusOk(setSubmitPicBtndisabled(submitPicBtndisabled + 2));
          }}
        >
          Submit Product
        </button>
      )}
    </div>
  );
}
