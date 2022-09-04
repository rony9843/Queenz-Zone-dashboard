import { default as React, useContext, useState } from "react";
import { SketchPicker } from "react-color";
import AddPicSubmitBtn from "./AddPicSubmitBtn";
import { ProductInfoContext } from "./AddProductReDesign";
import DeleteBtn from "./DeleteBtn";

export default function AddLink({
  demo,
  setEnableColor,
  enableColor,
  product,
}) {
  const [colorr, setColorr] = useState();

  const [productColor, setProductColor] = useState({ background: "black" });

  const handleChangeComplete = (color) => {
    setProductColor({ background: color.hex });
    setColorr(color.hex);
  };

  const colorFilter = productColor.background;

  const [AllProductInfo, setAllProductInfo] = useContext(ProductInfoContext);

  const [addSingleLink, setAddSingleLink] = useState([1]);

  const addLink = (props) => {
    setAddSingleLink([...addSingleLink, [props, productColor.background]]);
  };

  const [submitPicBtndisabled, setSubmitPicBtndisabled] = useState(1);

  const vusOk = () => {
    console.log("okk");
  };

  const [error, setError] = useState({
    err: false,
    msg: "This photo is exist*",
  });

  const [addAllLink, setAddAllLink] = useState([]);

  const [photo, setPhoto] = useState([]);

  // submit image input
  const [submitBtn, setSubmitBtn] = useState("");

  const viewLink = () => {
    if (submitBtn != "") {
      const findProduct = AllProductInfo.filter(
        (product) => product[0] === submitBtn
      );

      if (!findProduct.length === true) {
        const demError = {
          err: false,
          msg: "This photo is exist*",
        };
        setError(demError);

        setPhoto([...photo, submitBtn]);

        setAddAllLink([...addAllLink, [submitBtn]]);
        setSubmitBtn("");
      } else {
        const demError = {
          err: true,
          msg: "This photo is exist*",
        };
        setError(demError);
        setSubmitBtn("");
      }
    }
  };

  setAllProductInfo(addAllLink);

  const [filterDeleteArray, setFilterDeleteArray] = useState(false);

  const deleteUrl = (props) => {
    const spDltPro = AllProductInfo.filter((dt) => dt[0] === props);

    const filterData = AllProductInfo.filter((dt) => dt[0] != props);

    setFilterDeleteArray(spDltPro);

    setAddAllLink(filterData);
  };

  setAllProductInfo(addAllLink);

  return (
    <div
      className="p-2"
      style={{ border: "1px solid #fec400", borderRadius: "10px" }}
    >
      <div className="row ">
        <div className="col">
          <div>
            {addSingleLink.map((link) => (
              <div>
                <div className="mt-1 mb-1" style={{ height: "100px" }}>
                  <div class="input-group mb-3">
                    <label for="basic-url" class="form-label">
                      Image URL
                    </label>
                    <div class="input-group ">
                      <input
                        onChange={(e) => setSubmitBtn(e.target.value)}
                        value={submitBtn}
                        type="text"
                        class="form-control"
                        placeholder=" image url..."
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    padding: "0px",
                    margin: "0px",
                    height: "2px",
                    backgroundColor: " #fec400",
                  }}
                />
              </div>
            ))}
            {error.err === true && (
              <span style={{ color: "red", fontSize: "10px" }}>
                {error.msg}
              </span>
            )}
            <div className="d-flex flex-row-reverse">
              {submitPicBtndisabled > 1 ? (
                <button
                  style={{
                    display: "none",
                    border: `${
                      submitPicBtndisabled > 1 ? " 1px solid #999999" : "none"
                    }`,
                    backgroundColor: `${
                      submitPicBtndisabled > 1 ? "#cccccc" : "#fec400"
                    }`,
                    color: `${submitPicBtndisabled > 1 ? "#666666" : "black"}`,

                    cursor: `${
                      submitPicBtndisabled > 1 ? "not-allowed" : "pointer"
                    }`,
                  }}
                  class="mt-2 btn btn-warning"
                >
                  Add Link
                </button>
              ) : (
                <button
                  class="mt-2 btn btn-warning"
                  onClick={() => addLink("1")}
                  style={{ display: "none" }}
                >
                  Add Link
                </button>
              )}
              {submitPicBtndisabled > 1 ? (
                <button
                  style={{
                    border: `${
                      submitPicBtndisabled > 1 ? " 1px solid #999999" : "none"
                    }`,
                    backgroundColor: `${
                      submitPicBtndisabled > 1 ? "#cccccc" : "#fec400"
                    }`,
                    color: `${submitPicBtndisabled > 1 ? "#666666" : "black"}`,

                    cursor: `${
                      submitPicBtndisabled > 1 ? "not-allowed" : "pointer"
                    }`,
                  }}
                  class="mt-2 btn btn-warning"
                >
                  Add Image
                </button>
              ) : (
                <button onClick={() => viewLink()} class="mt-2 btn btn-warning">
                  Add Image
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-4" style={{ width: "350px" }}>
          <div className="row">
            {photo.map((pt) => (
              <div className="col-4">
                <div>
                  <img
                    className="mb-1 mt-1 d-flex justify-content-center"
                    style={{ width: "100px", borderRadius: "5px" }}
                    src={pt}
                    alt=""
                  />
                  {/* <hr
                    style={{
                      padding: "0px",
                      margin: "0px",
                      height: "2px",
                      backgroundColor: " #fec400",
                    }}
                  /> */}
                </div>

                <div className=" " style={{ height: "" }}>
                  <DeleteBtn
                    submitPicBtndisabled={submitPicBtndisabled}
                    filterDeleteArray={filterDeleteArray}
                    pt={pt}
                    deleteUrl={deleteUrl}
                  ></DeleteBtn>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-2" style={{ height: "108px", display: "none" }}>
          <div className="d-flex align-items-end">
            <div>
              {photo.map((pt) => (
                <div
                  className="  d-flex justify-content-center"
                  style={{ height: "108px" }}
                >
                  <DeleteBtn
                    submitPicBtndisabled={submitPicBtndisabled}
                    filterDeleteArray={filterDeleteArray}
                    pt={pt}
                    deleteUrl={deleteUrl}
                  ></DeleteBtn>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col px-4">
          {submitPicBtndisabled > 1 ? (
            <div class=" form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                style={{
                  cursor: "pointer",
                  display: "none",
                }}
              />
              <label
                style={{
                  cursor: "pointer",
                  display: "none",
                }}
                class="form-check-label"
                for="flexSwitchCheckDefault"
              >
                Enable Color
              </label>
            </div>
          ) : (
            <div class=" form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                style={{
                  cursor: "pointer",
                  display: `${product[1] && "none"}`,
                }}
                onClick={() => setEnableColor(!enableColor)}
              />
              <label
                style={{
                  cursor: "pointer",
                  display: `${product[1] && "none"}`,
                }}
                class="form-check-label"
                for="flexSwitchCheckDefault"
              >
                Enable Color Picker
              </label>
            </div>
          )}

          {enableColor === false && (
            <SketchPicker
              color={productColor.background}
              onChangeComplete={handleChangeComplete}
            />
          )}
        </div>
        <div className="col-2">
          <div
            className="mt-2"
            style={{ display: `${enableColor === true ? "none" : "block"}` }}
          >
            <div
              style={{
                height: "100px",
                backgroundColor: `${productColor.background}`,
                width: "100%",
                borderRadius: "5px",
              }}
            >
              <div class="d-flex align-items-center"> </div>
            </div>
            <div className="">
              <span style={{ fontSize: "11px" }}>
                Your Selection Color : {productColor.background}
              </span>
            </div>
          </div>
          <span style={{ fontSize: "11px" }}>
            Your all <span style={{ color: "red" }}>Delete</span> and{" "}
            <span style={{ color: "#00d51c" }}>Non Delete</span> photo here
          </span>
          <div className=" ">
            {photo.map((pt) => (
              <div style={{ display: "inline-block" }}>
                <img
                  className="mb-1 mt-1 "
                  style={{
                    width: "50px",
                    borderRadius: "5px",
                  }}
                  src={pt}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-2">
          <div style={{ fontSize: "12px" }}>
            <div
              className="p-1"
              style={{
                backgroundColor: "rgba(249, 213, 90, 0.13)",
                borderRadius: "5px",
              }}
            >
              <div>
                <span>Image size must be square!!!</span>
              </div>
              <div>
                <span>
                  Shortcut Image square sizing{" "}
                  <a
                    target="_blank"
                    href="https://bulkimagecrop.com/"
                    rel="noreferrer"
                  >
                    <strong>WEBSITE</strong>
                  </a>
                </span>
              </div>
            </div>
            <div
              className="p-1 mt-2"
              style={{
                backgroundColor: "rgba(249, 213, 90, 0.13)",
                borderRadius: "5px",
              }}
            >
              <span>
                Image uploading{" "}
                <a target="_blank" href="https://imgbb.com/" rel="noreferrer">
                  <strong>WEBSITE</strong>
                </a>
              </span>
            </div>
          </div>

          <div
            class="mt-5 pt-5 d-flex justify-content-center"
            style={{ justifyContent: "center" }}
          >
            {" "}
            {submitPicBtndisabled > 1 ? (
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

                  cursor: `${
                    submitPicBtndisabled > 1 ? "not-allowed" : "pointer"
                  }`,
                }}
              >
                Submit Product
              </button>
            ) : (
              <AddPicSubmitBtn
                submitPicBtndisabled={submitPicBtndisabled}
                demo={demo}
                productColor={productColor}
                vusOk={vusOk}
                setSubmitPicBtndisabled={setSubmitPicBtndisabled}
                AllProductInfo={AllProductInfo}
              ></AddPicSubmitBtn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
