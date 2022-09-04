import React from "react";

export default function AddAnotherColorBtn({
  addProduct,
  addSingleProduct,
  AllProInfo,
}) {
  return (
    <div>
      {" "}
      <div className="m-2">
        {AllProInfo.length === addSingleProduct.length ? (
          <button
            className="btn btn-warning"
            onClick={() => {
              AllProInfo.length === addSingleProduct.length &&
                addProduct(addSingleProduct + 1);
              console.log("this is all info : ", AllProInfo);
            }}
          >
            Add Another Product's Color
          </button>
        ) : (
          <button
            className="btn btn-warning"
            style={{
              border: " 1px solid #999999",

              backgroundColor: "#cccccc",

              color: "#666666",

              cursor: "not-allowed",
            }}
            onClick={() => {
              AllProInfo.length === addSingleProduct.length &&
                addProduct(addSingleProduct + 1);
              console.log("this is all info : ", AllProInfo);
            }}
          >
            Please,First you submit the product details
          </button>
        )}
      </div>
    </div>
  );
}
