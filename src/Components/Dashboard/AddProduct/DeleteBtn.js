import { default as React, useContext, useState } from "react";
import { ProductInfoContext } from "./AddProductReDesign";

export default function DeleteBtn({
  pt,
  deleteUrl,
  filterDeleteArray,
  submitPicBtndisabled,
}) {
  // console.log("this is delete btn con : ", filterDeleteArray);

  // if (filterDeleteArray ) {
  //   // const seccF = filterDeleteArray.map((dlt) => dlt[0][0] === pt);

  // }

  const [AllProductInfo, setAllProductInfo] = useContext(ProductInfoContext);

  console.log("this is success Filter : ", filterDeleteArray);

  //   const dltProduct = AllProductInfo.map((dlt) => dlt[0] != pt);

  //   console.log("this is dltProduct dltProduct : ", dltProduct);

  const [dltSucc, setDltSucc] = useState(false);

  const FunDlet = () => {
    setDltSucc(!dltSucc);
  };

  return (
    <div className="">
      {" "}
      {dltSucc === false ? (
        submitPicBtndisabled > 1 ? (
          <button
            style={{
              width: "100%",
              height: "27px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",

              border: `${
                submitPicBtndisabled > 1 ? " 1px solid #999999" : "none"
              }`,
              backgroundColor: `${
                submitPicBtndisabled > 1 ? "#cccccc" : "#fec400"
              }`,
              color: `${submitPicBtndisabled > 1 ? "#666666" : "black"}`,

              cursor: `${submitPicBtndisabled > 1 ? "not-allowed" : "pointer"}`,
            }}
            type="button"
            class="btn btn-danger"
          >
            Delete
          </button>
        ) : (
          <button
            style={{
              width: "100%",
              height: "27px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
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
              deleteUrl(pt);
              FunDlet();
            }}
            type="button"
            class="btn btn-danger"
          >
            Delete
          </button>
        )
      ) : (
        <button
          style={{
            width: "100%",
            height: "27px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",

            border: `${dltSucc === true ? "none" : "1px solid #999999"}`,

            backgroundColor: `${dltSucc === true ? "#cccccc" : "red"}`,

            cursor: `${dltSucc === true ? "not-allowed" : "pointer"}`,
          }}
          type="button"
          class="btn btn-danger"
        >
          {dltSucc === false ? "Delete" : "Delete"}
        </button>
      )}
    </div>
  );
}
